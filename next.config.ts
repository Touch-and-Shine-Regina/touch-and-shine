import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

/**
 * Security headers. CSP allows only what this static site needs:
 * self assets, Square booking iframe, Google Maps embed.
 * `unsafe-eval` is enabled in development only — React DevTools/Next HMR need it.
 * Production builds never include it.
 */
const scriptSrc = [
  "'self'",
  "'unsafe-inline'",
  ...(isDev ? ["'unsafe-eval'"] : []),
].join(" ");

const connectSrc = [
  "'self'",
  ...(isDev ? ["ws:", "wss:", "http://localhost:*", "https://localhost:*"] : []),
].join(" ");

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self' https://app.squareup.com https://squareup.com",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  `script-src ${scriptSrc}`,
  `connect-src ${connectSrc}`,
  [
    "frame-src",
    "'self'",
    "https://app.squareup.com",
    "https://squareup.com",
    "https://*.squareup.com",
    "https://book.squareup.com",
    "https://pay.google.com",
    "https://maps.google.com",
    "https://www.google.com",
  ].join(" "),
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const permissionsPolicy = "camera=(), microphone=(), geolocation=()";

const sharedSecurityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  ...(isDev
    ? []
    : [
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
      ]),
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: permissionsPolicy },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

/** Default pages: COOP hardening. Booking defers to iframe allow="payment". */
const defaultSecurityHeaders = [
  ...sharedSecurityHeaders,
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

/** /book: no extra preconnect (Square adds its own); no COOP so Pay iframe can delegate. */
const bookSecurityHeaders = [...sharedSecurityHeaders];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: false,
  },
  async headers() {
    return [
      {
        source: "/book",
        headers: bookSecurityHeaders,
      },
      {
        source: "/:path*",
        headers: defaultSecurityHeaders,
      },
    ];
  },
};

export default nextConfig;

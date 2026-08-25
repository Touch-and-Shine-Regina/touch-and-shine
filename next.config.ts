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
    "https://maps.google.com",
    "https://www.google.com",
  ].join(" "),
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const permissionsPolicyDefault =
  "camera=(), microphone=(), geolocation=()";

const permissionsPolicyBook =
  [
    "camera=()",
    "microphone=()",
    "geolocation=()",
    'payment=(self "https://app.squareup.com" "https://book.squareup.com" "https://squareup.com" "https://pay.google.com")',
  ].join(", ");

const buildHeaders = (permissionsPolicy: string, includeCoop: boolean) => [
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
  ...(includeCoop
    ? [{ key: "Cross-Origin-Opener-Policy", value: "same-origin" as const }]
    : []),
];

const securityHeaders = buildHeaders(permissionsPolicyDefault, true);
const bookSecurityHeaders = buildHeaders(permissionsPolicyBook, false);

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75],
    dangerouslyAllowSVG: false,
  },
  async headers() {
    return [
      {
        source: "/book",
        headers: bookSecurityHeaders,
      },
      {
        source: "/book/:path*",
        headers: bookSecurityHeaders,
      },
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;

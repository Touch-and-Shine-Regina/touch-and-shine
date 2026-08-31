import type { Metadata, Viewport } from "next";
import { Archivo, Outfit } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeLightTip } from "@/components/ThemeLightTip";
import { businessInfo, getFullAddress } from "@/data/business";
import { getOpeningHoursSpecification } from "@/lib/seo";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  display: "swap",
});

const description =
  "Touch & Shine Beauty Hair Salon in Regina, SK. View services and prices, then book your appointment online in minutes.";

const ogImage = {
  url: "/images/store/front.jpeg",
  width: 1600,
  height: 900,
  alt: "Touch & Shine Beauty Hair Salon storefront in Regina",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f0e6" },
    { media: "(prefers-color-scheme: dark)", color: "#141210" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(businessInfo.website),
  title: {
    default: "Touch & Shine Beauty Hair Salon | Regina, SK",
    template: "%s | Touch & Shine",
  },
  description,
  applicationName: businessInfo.shortName,
  keywords: [
    "hair salon Regina",
    "Touch and Shine",
    "Touch & Shine Beauty Hair Salon",
    "barber Regina",
    "beauty salon Regina",
    "keratin Regina",
    "eyebrow threading Regina",
    "hair color Regina",
    "University Park Drive salon",
    "book haircut Regina",
  ],
  authors: [{ name: businessInfo.name }],
  creator: businessInfo.name,
  publisher: businessInfo.name,
  category: "beauty",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Touch & Shine Beauty Hair Salon | Regina, SK",
    description,
    url: "/",
    siteName: businessInfo.name,
    locale: "en_CA",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Touch & Shine Beauty Hair Salon | Regina, SK",
    description,
    images: [ogImage.url],
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "@id": `${businessInfo.website}/#salon`,
  name: businessInfo.name,
  image: [`${businessInfo.website}${ogImage.url}`, `${businessInfo.website}${businessInfo.logoPath}`],
  logo: `${businessInfo.website}${businessInfo.logoPath}`,
  telephone: `+1${businessInfo.phone}`,
  email: businessInfo.email,
  url: businessInfo.website,
  priceRange: "$$",
  currenciesAccepted: "CAD",
  paymentAccepted: "Cash, Credit Card, Debit Card",
  address: {
    "@type": "PostalAddress",
    streetAddress: businessInfo.address.street,
    addressLocality: businessInfo.address.city,
    addressRegion: businessInfo.address.province,
    postalCode: businessInfo.address.postalCode,
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.4018,
    longitude: -104.5512,
  },
  hasMap: businessInfo.googleMapsUrl,
  openingHoursSpecification: getOpeningHoursSpecification(),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: businessInfo.googleRating,
    reviewCount: businessInfo.googleReviewCount,
    bestRating: 5,
    worstRating: 1,
  },
  sameAs: [businessInfo.social.instagram, businessInfo.social.facebook],
  description: `${description} Located at ${getFullAddress()}.`,
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${businessInfo.website}/book`,
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
    result: {
      "@type": "Reservation",
      name: "Hair salon appointment",
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-CA"
      suppressHydrationWarning
      className={`${outfit.variable} ${archivo.variable} dark h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-cream font-sans text-charcoal">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <ThemeProvider>
          {children}
          <ThemeLightTip />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}

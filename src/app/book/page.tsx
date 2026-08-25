import type { Metadata } from "next";
import { businessInfo } from "@/data/business";
import { Header } from "@/components/Header";
import { MobileActionBar } from "@/components/MobileActionBar";

const squareWidgetEmbedUrl =
  "https://app.squareup.com/appointments/buyer/widget/wx2arj5b1qaylc/LADHAW9ZFGC7C";

export const metadata: Metadata = {
  title: "Book Appointment",
  description:
    "Book your appointment online at Touch & Shine Beauty Hair Salon in Regina, SK. Clear prices, easy scheduling through Square Appointments.",
  alternates: { canonical: "/book" },
  openGraph: {
    title: "Book Appointment | Touch & Shine",
    description:
      "Schedule hair, brows, colour, keratin, and more at Touch & Shine in Regina.",
    url: "/book",
    images: [
      {
        url: "/images/store/front.jpeg",
        width: 1600,
        height: 900,
        alt: "Touch & Shine Beauty Hair Salon storefront",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Appointment | Touch & Shine",
    description: "Book online at Touch & Shine Beauty Hair Salon in Regina, SK.",
  },
  robots: { index: true, follow: true },
};

export default function BookPage() {
  return (
    <div id="top" className="relative isolate flex h-svh max-h-svh flex-col overflow-hidden bg-[#161410] text-white">
      <a
        href="#booking-widget"
        className="absolute top-0 left-0 z-[100] -translate-y-[160%] bg-gold px-4 py-2 text-sm font-semibold text-[color:var(--book-btn-text)] shadow-md focus:translate-x-2 focus:translate-y-2 focus:outline-2 focus:outline-offset-2 focus:outline-gold"
      >
        Skip to booking
      </a>
      <Header />
      <main
        id="booking-main"
        className="flex min-h-0 flex-1 flex-col"
        aria-labelledby="book-page-title"
      >
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-[#EAB308]/25 px-4 py-3 sm:px-6 lg:px-8">
          <div className="min-w-0">
            <p className="font-display text-[10px] font-extrabold tracking-[0.2em] text-[#EAB308] uppercase">
              Online Booking
            </p>
            <h1
              id="book-page-title"
              className="mt-0.5 truncate font-display text-[1.15rem] font-extrabold tracking-[-0.02em] text-white uppercase sm:text-xl"
            >
              Book your appointment
            </h1>
          </div>
          <a
            href={businessInfo.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center border border-[#EAB308]/50 px-3 py-2 font-display text-[11px] font-extrabold tracking-wide text-white uppercase transition-colors hover:border-[#EAB308] hover:bg-[#EAB308]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAB308]"
          >
            New tab
          </a>
        </div>

        <div
          id="booking-widget"
          className="min-h-0 flex-1 pb-[calc(4.75rem+env(safe-area-inset-bottom))] lg:pb-0"
        >
          <iframe
            title="Square Appointments booking"
            src={squareWidgetEmbedUrl}
            className="block h-full w-full border-0 bg-[#161410]"
            allow="payment; fullscreen"
            referrerPolicy="no-referrer-when-downgrade"
            loading="eager"
          />
        </div>
      </main>

      <MobileActionBar />
    </div>
  );
}

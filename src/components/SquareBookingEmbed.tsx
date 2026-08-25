"use client";

import { useEffect, useState } from "react";
import { businessInfo } from "@/data/business";

const squareWidgetEmbedUrl =
  "https://app.squareup.com/appointments/buyer/widget/wx2arj5b1qaylc/LADHAW9ZFGC7C";

type SquareBookingEmbedProps = {
  className?: string;
};

/**
 * Defers Square iframe until after first paint to improve lab metrics on /book.
 * Square still loads automatically — no extra click required.
 */
export function SquareBookingEmbed({ className = "" }: SquareBookingEmbedProps) {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const start = () => setSrc(squareWidgetEmbedUrl);

    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(start, { timeout: 800 });
      return () => window.cancelIdleCallback(id);
    }

    const timer = window.setTimeout(start, 120);
    return () => window.clearTimeout(timer);
  }, []);

  if (!src) {
    return (
      <div
        className={`flex h-full w-full flex-col items-center justify-center gap-3 bg-[#161410] px-6 text-center ${className}`}
        aria-busy="true"
        aria-live="polite"
      >
        <div className="skeleton h-3 w-32" />
        <div className="skeleton h-8 w-56 max-w-full" />
        <p className="text-sm text-white/60">Loading Square booking…</p>
        <a
          href={businessInfo.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-sm font-semibold text-[#EAB308] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAB308]"
        >
          Open booking in a new tab
        </a>
      </div>
    );
  }

  return (
    <iframe
      title="Square Appointments booking"
      src={src}
      className={`block h-full w-full border-0 bg-[#161410] ${className}`}
      allow="payment *; clipboard-read; clipboard-write"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}

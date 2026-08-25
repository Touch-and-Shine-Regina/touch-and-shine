"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { businessInfo } from "@/data/business";

const squareWidgetEmbedUrl =
  "https://app.squareup.com/appointments/buyer/widget/wx2arj5b1qaylc/LADHAW9ZFGC7C";

type SquareBookingEmbedProps = {
  className?: string;
};

const WAKE_EVENTS = [
  "pointerdown",
  "pointermove",
  "touchstart",
  "keydown",
  "wheel",
  "scroll",
] as const;

/**
 * Square's booking widget ships ~4MB of third-party JS (reCAPTCHA, Google Pay,
 * consent SDK) that blocks the main thread. We mount it on the visitor's first
 * interaction so the page paints and stays responsive; a visible button covers
 * keyboard and assistive-tech users.
 */
export function SquareBookingEmbed({ className = "" }: SquareBookingEmbedProps) {
  const [mounted, setMounted] = useState(false);
  const mountedRef = useRef(false);

  const mount = useCallback(() => {
    if (mountedRef.current) return;
    mountedRef.current = true;
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mountedRef.current) return;

    const handler = () => mount();
    for (const event of WAKE_EVENTS) {
      window.addEventListener(event, handler, { once: true, passive: true });
    }

    return () => {
      for (const event of WAKE_EVENTS) {
        window.removeEventListener(event, handler);
      }
    };
  }, [mount]);

  if (mounted) {
    return (
      <iframe
        title="Square Appointments booking"
        src={squareWidgetEmbedUrl}
        className={`block h-full w-full border-0 bg-[#161410] ${className}`}
        allow="payment *; clipboard-read; clipboard-write"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-5 bg-[#161410] px-6 text-center ${className}`}
    >
      <div>
        <p className="font-display text-[11px] font-extrabold tracking-[0.22em] text-[#EAB308] uppercase">
          Square Appointments
        </p>
        <p className="mx-auto mt-3 max-w-sm text-[15px] leading-relaxed text-white/75">
          Pick your service and time in the booking calendar. Prices are as listed,
          plus GST.
        </p>
      </div>

      <button
        type="button"
        onClick={mount}
        className="inline-flex min-h-12 items-center justify-center bg-[#EAB308] px-6 font-display text-[14px] font-extrabold tracking-wide text-[color:var(--book-btn-text)] uppercase transition-colors hover:bg-gold-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAB308]"
      >
        Open booking calendar
      </button>

      <div className="flex flex-col items-center gap-2 text-sm">
        <a
          href={`tel:+1${businessInfo.phone}`}
          className="min-h-11 text-white/70 underline-offset-4 hover:text-[#EAB308] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAB308]"
        >
          Or call {businessInfo.phoneDisplay}
        </a>
        <a
          href={businessInfo.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-11 text-white/50 underline-offset-4 hover:text-[#EAB308] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAB308]"
        >
          Open booking in a new tab
        </a>
      </div>
    </div>
  );
}

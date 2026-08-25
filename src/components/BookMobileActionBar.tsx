import Link from "next/link";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { getTelHref, getWhatsAppHref } from "@/data/business";

/** Sticky actions on /book — no redundant “Book” CTA. */
export function BookMobileActionBar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 lg:hidden">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#161410] via-[#161410]/90 to-transparent" />
      <nav
        aria-label="Quick contact"
        className="pointer-events-auto relative mx-3 mb-[max(0.5rem,env(safe-area-inset-bottom))] border border-[#EAB308]/50 bg-[#161410] px-2 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
      >
        <div className="grid grid-cols-3 items-center gap-1.5">
          <a
            href={getTelHref()}
            className="inline-flex min-h-12 items-center justify-center gap-1 px-1 font-display text-[13px] font-extrabold tracking-wide text-white uppercase focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAB308]"
          >
            <PhoneIcon className="h-4 w-4 shrink-0 text-[#EAB308]" />
            Call
          </a>
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center px-1 font-display text-[13px] font-extrabold tracking-wide text-[#EAB308] uppercase focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAB308]"
          >
            Home
          </Link>
          <a
            href={getWhatsAppHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-1 px-1 font-display text-[11px] font-extrabold tracking-wide text-white uppercase focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAB308]"
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0 text-[#EAB308]" />
            WhatsApp
          </a>
        </div>
      </nav>
    </div>
  );
}

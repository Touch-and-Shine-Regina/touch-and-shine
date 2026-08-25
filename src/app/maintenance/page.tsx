import type { Metadata } from "next";
import Image from "next/image";
import { businessInfo, getTelHref, getWhatsAppHref } from "@/data/business";

export const metadata: Metadata = {
  title: "Under maintenance",
  description: "Touch & Shine is temporarily unavailable. Please call or message us to book.",
  robots: { index: false, follow: false },
};

export default function MaintenancePage() {
  const showWhatsApp = Boolean(businessInfo.phoneRaw);

  return (
    <div className="relative flex min-h-svh flex-col bg-[#161410] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(234,179,8,0.14),transparent_60%)]" />
      <main className="relative z-10 mx-auto flex w-full max-w-lg flex-1 flex-col items-center justify-center px-5 py-16 text-center">
        <Image
          src={businessInfo.logoPath}
          alt=""
          width={72}
          height={66}
          className="object-contain mix-blend-screen"
          priority
        />
        <p className="mt-6 font-display text-[12px] font-extrabold tracking-[0.24em] text-[#EAB308] uppercase">
          Under maintenance
        </p>
        <h1 className="mt-3 font-display text-[2.4rem] leading-[0.95] font-extrabold tracking-[-0.03em] uppercase sm:text-5xl">
          We&apos;ll be right back
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">
          The website is getting a quick tune-up. You can still reach us by phone
          {showWhatsApp ? " or WhatsApp" : ""} to book.
        </p>
        <div className="mt-8 flex w-full max-w-sm flex-col gap-3">
          <a
            href={getTelHref()}
            className="inline-flex min-h-11 items-center justify-center bg-[#EAB308] px-5 font-display text-[15px] font-extrabold tracking-wide text-[color:var(--book-btn-text)] uppercase transition-colors hover:bg-gold-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAB308]"
          >
            Call {businessInfo.phoneDisplay}
          </a>
          {showWhatsApp ? (
            <a
              href={getWhatsAppHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center border border-[#EAB308]/50 px-5 font-display text-[15px] font-extrabold tracking-wide text-white uppercase transition-colors hover:border-[#EAB308] hover:bg-[#EAB308]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAB308]"
            >
              WhatsApp
            </a>
          ) : null}
        </div>
      </main>
    </div>
  );
}

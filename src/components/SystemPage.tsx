import Image from "next/image";
import Link from "next/link";
import { businessInfo, getTelHref } from "@/data/business";
import { bookingPagePath } from "@/lib/booking";
import { bookBtnText } from "@/lib/styles";

type SystemPageProps = {
  code?: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  showRetry?: boolean;
  onRetry?: () => void;
};

const primaryClass = `inline-flex min-h-11 items-center justify-center bg-[#EAB308] px-5 font-display text-[15px] font-extrabold tracking-wide uppercase ${bookBtnText} transition-colors hover:bg-gold-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAB308]`;

const secondaryClass =
  "inline-flex min-h-11 items-center justify-center border border-[#EAB308]/50 px-5 font-display text-[15px] font-extrabold tracking-wide text-white uppercase transition-colors hover:border-[#EAB308] hover:bg-[#EAB308]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAB308]";

export function SystemPage({
  code,
  title,
  description,
  primaryHref = bookingPagePath,
  primaryLabel = "Book appointment",
  showRetry = false,
  onRetry,
}: SystemPageProps) {
  return (
    <div className="relative flex min-h-svh flex-col bg-[#161410] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(234,179,8,0.12),transparent_60%)]" />

      <header className="relative z-10 flex items-center justify-between border-b border-[#EAB308]/25 px-4 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EAB308]">
          <Image
            src={businessInfo.logoPath}
            alt=""
            width={40}
            height={36}
            className="object-contain mix-blend-screen"
          />
          <span className="font-display text-[13px] font-extrabold tracking-[0.14em] text-white uppercase">
            Touch <span className="text-[#EAB308]">&</span> Shine
          </span>
        </Link>
        <a href={getTelHref()} className={`${secondaryClass} px-3 text-[12px]`}>
          Call
        </a>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-lg flex-1 flex-col justify-center px-5 py-16 text-center sm:px-8">
        {code ? (
          <p className="font-display text-[12px] font-extrabold tracking-[0.24em] text-[#EAB308] uppercase">
            {code}
          </p>
        ) : null}
        <h1 className="mt-3 font-display text-[2.4rem] leading-[0.95] font-extrabold tracking-[-0.03em] text-white uppercase sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/70">
          {description}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          {showRetry && onRetry ? (
            <button type="button" onClick={onRetry} className={primaryClass}>
              Try again
            </button>
          ) : (
            <Link href={primaryHref} className={primaryClass}>
              {primaryLabel}
            </Link>
          )}
          <Link href="/" className={secondaryClass}>
            Back home
          </Link>
        </div>
        {showRetry ? (
          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href={bookingPagePath} className={secondaryClass}>
              Book appointment
            </Link>
            <a href={getTelHref()} className={secondaryClass}>
              Call {businessInfo.phoneDisplay}
            </a>
          </div>
        ) : (
          <a
            href={getTelHref()}
            className="mt-6 text-sm text-white/55 underline-offset-4 hover:text-[#EAB308] hover:underline"
          >
            Or call {businessInfo.phoneDisplay}
          </a>
        )}
      </main>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { businessInfo, getTelHref } from "@/data/business";
import { container } from "@/lib/styles";

const navItems = [
  { href: "/#services", label: "Services" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#location", label: "Location" },
];

/** Lightweight header for /book only (no client JS). */
export function BookHeader() {
  return (
    <header className="sticky top-0 z-50 shrink-0 border-b border-[#EAB308]/35 bg-[#161410]/95">
      <div className={`${container} flex h-14 items-center justify-between gap-3 lg:h-16`}>
        <Link
          href="/"
          aria-label={`${businessInfo.name} home`}
          className="flex min-w-0 items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAB308]"
        >
          <Image
            src={businessInfo.logoPath}
            alt=""
            width={44}
            height={44}
            className="h-10 w-10 object-contain mix-blend-screen drop-shadow-[0_0_12px_rgba(234,179,8,0.55)] lg:h-11 lg:w-11"
            priority
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-[13px] font-extrabold tracking-[0.12em] text-white uppercase lg:text-sm">
              Touch <span className="text-[#EAB308]">&</span> Shine
            </span>
            <span className="hidden font-display text-[10px] font-semibold tracking-[0.18em] text-white/60 uppercase sm:block">
              Beauty Hair Salon
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-1 font-display text-[14px] font-semibold tracking-wide text-white/75 uppercase transition-colors hover:text-[#EAB308] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EAB308]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={getTelHref()}
            className="hidden min-h-12 items-center justify-center px-3 font-display text-[12px] font-extrabold tracking-wide text-[#EAB308] uppercase sm:inline-flex focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAB308]"
          >
            Call
          </a>
          <Link
            href="/"
            className="hidden min-h-12 items-center justify-center border border-[#EAB308]/50 px-4 font-display text-[12px] font-extrabold tracking-wide text-white uppercase transition-colors hover:border-[#EAB308] hover:bg-[#EAB308]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAB308] sm:inline-flex"
          >
            Home
          </Link>

          <details className="relative lg:hidden">
            <summary className="inline-flex h-12 w-12 min-h-12 min-w-12 cursor-pointer list-none items-center justify-center font-display text-[11px] font-extrabold tracking-wide text-white uppercase marker:content-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAB308] [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <nav
              aria-label="Mobile"
              className="absolute right-0 z-50 mt-1 w-[min(100vw-2rem,16rem)] border border-[#EAB308]/35 bg-[#161410] py-2 shadow-lg"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex min-h-12 items-center px-4 font-display text-sm font-semibold tracking-wide text-white uppercase focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAB308]"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/"
                className="flex min-h-12 items-center border-t border-white/10 px-4 font-display text-sm font-semibold tracking-wide text-[#EAB308] uppercase"
              >
                Home
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

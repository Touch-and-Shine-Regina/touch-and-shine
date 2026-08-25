"use client";

import Image from "next/image";
import { useState } from "react";
import { BookButton } from "@/components/BookButton";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { ThemeToggle } from "@/components/ThemeToggle";
import { businessInfo } from "@/data/business";
import { container } from "@/lib/styles";

const navItems = [
  { href: "/#services", label: "Services" },
  { href: "/#why-us", label: "Why us" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#location", label: "Location" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#EAB308]/35 bg-[#161410]/95">
      <div className={`${container} flex h-14 items-center justify-between gap-3 lg:h-16`}>
        <a
          href="/"
          aria-label={businessInfo.name}
          className="flex min-w-0 items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAB308]"
          onClick={closeMenu}
        >
          <Image
            src={businessInfo.logoPath}
            alt=""
            width={44}
            height={44}
            className="h-10 w-10 object-contain mix-blend-screen drop-shadow-[0_0_12px_rgba(234,179,8,0.55)] lg:h-11 lg:w-11"
            preload
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-[13px] font-extrabold tracking-[0.12em] text-white uppercase lg:text-sm">
              Touch <span className="text-[#EAB308]">&</span> Shine
            </span>
            <span className="hidden font-display text-[10px] font-semibold tracking-[0.18em] text-white/60 uppercase sm:block">
              Beauty Hair Salon
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-1 font-display text-[14px] font-semibold tracking-wide text-white/75 uppercase transition-colors hover:text-[#EAB308] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EAB308]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-1.5">
          <span className="hidden lg:inline-flex">
            <ThemeToggle />
          </span>
          <span className="lg:hidden">
            <BookButton size="sm" className="!rounded-none">
              Book
            </BookButton>
          </span>
          <span className="hidden lg:inline-flex">
            <BookButton className="!rounded-none">Book</BookButton>
          </span>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center text-white lg:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAB308]"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-[#EAB308]/25 bg-[#161410] lg:hidden"
          aria-label="Mobile"
        >
          <div className={`${container} flex flex-col py-2`}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex min-h-11 items-center font-display text-base font-semibold tracking-wide text-white uppercase focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAB308]"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-1 border-t border-white/10 pt-2 pb-1">
              <ThemeToggle variant="menu" />
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

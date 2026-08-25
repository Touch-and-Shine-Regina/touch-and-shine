"use client";

import { BookButton } from "@/components/BookButton";
import {
  ArrowIcon,
  BrowIcon,
  ComboIcon,
  FaceIcon,
  KeratinIcon,
  ScissorsIcon,
} from "@/components/icons";
import { openServiceTab } from "@/lib/serviceTab";
import { container } from "@/lib/styles";
import type { ServiceTabId } from "@/types";
import type { ComponentType } from "react";

type PopularItem = {
  label: string;
  duration: string;
  price: string;
  tab: ServiceTabId;
  Icon: ComponentType<{ className?: string }>;
};

export const popularQuickServices: PopularItem[] = [
  { label: "Haircut", duration: "30 min", price: "$21+", tab: "mens", Icon: ScissorsIcon },
  { label: "Brows", duration: "20 min", price: "$11+", tab: "womens", Icon: BrowIcon },
  { label: "Facial", duration: "45 min", price: "$65+", tab: "womens", Icon: FaceIcon },
  { label: "Keratin", duration: "2.5 hrs", price: "$210+", tab: "keratin", Icon: KeratinIcon },
];

export function PopularServices() {
  return (
    <section aria-labelledby="popular-services-heading" className="bg-[#161410] lg:hidden">
      <div className={`${container} py-5 pb-6`}>
        <div className="border border-[#EAB308]/35 bg-black/20 p-4">
          <div className="flex items-center justify-between gap-3 px-0.5">
            <h2
              id="popular-services-heading"
              className="font-display text-[1.45rem] font-extrabold tracking-tight text-white uppercase"
            >
              Popular Services
            </h2>
            <a
              href="#services"
              className="inline-flex min-h-12 min-w-12 shrink-0 items-center justify-center gap-1 px-2 font-display text-sm font-extrabold text-[#EAB308] uppercase focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAB308]"
            >
              View all
              <ArrowIcon className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2.5">
            {popularQuickServices.map((item) => (
              <div
                key={item.label}
                className="flex min-h-[7.25rem] flex-col border border-[#EAB308]/30 bg-[#161410] transition-colors hover:border-[#EAB308] hover:bg-[#EAB308]/10 focus-within:border-[#EAB308]"
              >
                <button
                  type="button"
                  onClick={() => openServiceTab(item.tab)}
                  className="flex flex-1 flex-col px-3.5 pt-3.5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAB308]"
                >
                  <item.Icon className="h-4 w-4 text-[#EAB308]" />
                  <span className="mt-3 font-display text-base font-extrabold tracking-tight text-white uppercase">
                    {item.label}
                  </span>
                  <span className="mt-0.5 text-[12px] text-white/60">{item.duration}</span>
                </button>
                <div className="flex items-center justify-between gap-2 px-3.5 pb-3.5 pt-2">
                  <span className="font-display text-[15px] font-extrabold text-[#EAB308]">{item.price}</span>
                  <BookButton size="menu" serviceName={item.label}>
                    Book
                  </BookButton>
                </div>
              </div>
            ))}
          </div>
        </div>

        <a
          href="#services"
          onClick={(event) => {
            event.preventDefault();
            openServiceTab("combos");
          }}
          className="mt-3.5 flex items-center gap-3.5 border border-[#EAB308]/35 bg-black/30 px-4 py-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAB308]"
        >
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center bg-[#EAB308]/15 text-[#EAB308]">
            <ComboIcon className="h-4 w-4" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-display text-[11px] font-extrabold tracking-[0.18em] text-[#EAB308] uppercase">
              Combo packages
            </span>
            <span className="mt-1 block text-[15px] leading-snug font-medium text-white">
              Save more when you pair services.
            </span>
          </span>
          <span className="shrink-0 font-display text-sm font-extrabold text-[#EAB308] uppercase">
            Explore
          </span>
        </a>
      </div>
    </section>
  );
}

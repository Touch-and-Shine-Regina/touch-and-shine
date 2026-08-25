"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ServiceCard } from "@/components/ServiceCard";
import { businessInfo, getTelHref } from "@/data/business";
import { getServicesByTab, serviceCategories } from "@/data/services";
import { SERVICE_TAB_EVENT } from "@/lib/serviceTab";
import { container } from "@/lib/styles";
import type { ServiceTabId } from "@/types";

const tabIds: ServiceTabId[] = serviceCategories.map((category) => category.id);
const FADE_MS = 140;

export function ServiceTabs() {
  const [active, setActive] = useState<ServiceTabId>("popular");
  const [fading, setFading] = useState(false);
  const fadeTimer = useRef(0);

  const selectTab = useCallback((id: ServiceTabId, button?: HTMLButtonElement) => {
    if (button) {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      button.scrollIntoView({
        inline: "center",
        block: "nearest",
        behavior: reduceMotion ? "auto" : "smooth",
      });
    }

    if (id === active) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setActive(id);
      return;
    }

    setFading(true);
    window.clearTimeout(fadeTimer.current);
    fadeTimer.current = window.setTimeout(() => {
      setActive(id);
      setFading(false);
    }, FADE_MS);
  }, [active]);

  useEffect(() => {
    function onTabEvent(event: Event) {
      const tab = (event as CustomEvent<ServiceTabId>).detail;
      if (tabIds.includes(tab)) {
        selectTab(tab);
      }
    }

    window.addEventListener(SERVICE_TAB_EVENT, onTabEvent);
    return () => {
      window.removeEventListener(SERVICE_TAB_EVENT, onTabEvent);
      window.clearTimeout(fadeTimer.current);
    };
  }, [selectTab]);

  useEffect(() => {
    const selected = document.querySelector<HTMLElement>(
      '#services [role="tab"][aria-selected="true"]',
    );
    selected?.scrollIntoView({ inline: "center", block: "nearest" });
  }, [active]);

  const visibleServices = useMemo(() => getServicesByTab(active), [active]);
  const highlightFeatured = active !== "popular";
  const activeLabel =
    serviceCategories.find((category) => category.id === active)?.label ?? "Popular";

  return (
    <section id="services" className="relative scroll-mt-20 bg-[#161410] py-10 text-white lg:py-14 xl:py-16">
      <div className={container}>
        <div className="lg:grid lg:grid-cols-[minmax(16rem,26rem)_minmax(0,1fr)] lg:items-end lg:gap-5 xl:gap-6">
          <header className="max-w-xl lg:max-w-none">
            <p className="font-display text-[12px] font-extrabold tracking-[0.22em] text-[#EAB308] uppercase">
              Full menu
            </p>
            <h2 className="mt-2 font-display text-[2.75rem] leading-[0.95] font-extrabold tracking-[-0.03em] text-white uppercase sm:text-5xl lg:text-[3.5rem]">
              Services & Prices
            </h2>
            <p className="mt-2.5 text-base leading-relaxed text-white/70 lg:mt-3">
              Browse by category, check the price, and book what fits your visit.
            </p>
            <div className="mt-3 h-px w-16 bg-[#EAB308]" />
          </header>

          <aside className="mt-6 hidden border border-[#EAB308]/35 bg-black/25 px-5 py-4 lg:mt-0 lg:block">
            <div className="flex items-start gap-4">
              <div className="min-w-0 flex-1">
                <div className="h-px w-10 bg-[#EAB308]" />
                <h3 className="mt-2.5 font-display text-[15px] font-extrabold tracking-tight text-white uppercase">
                  Before you book
                </h3>
                <p className="mt-1.5 text-sm leading-snug text-white/65">
                  Prices are listed before GST. Colour, keratin, and smoothing treatments
                  may vary depending on hair length and condition. Book online or call if
                  you are unsure which service to choose.
                </p>
              </div>
              <a
                href={getTelHref()}
                className="mt-6 inline-flex shrink-0 items-center font-display text-sm font-extrabold whitespace-nowrap text-[#EAB308] uppercase underline decoration-[#EAB308]/50 underline-offset-4 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EAB308]"
              >
                Not sure? Call us
                <span className="sr-only"> at {businessInfo.phoneDisplay}</span>
              </a>
            </div>
          </aside>
        </div>

        <div className="mt-5 lg:mt-6 lg:grid lg:grid-cols-[11.5rem_minmax(0,1fr)] lg:items-start lg:gap-8 xl:grid-cols-[12rem_minmax(0,1fr)] xl:gap-10">
          <div className="sticky top-14 z-30 -mx-4 border-b border-[#EAB308]/25 bg-[#161410] py-2 lg:top-24 lg:mx-0 lg:border-b-0 lg:bg-transparent lg:py-0">
            <div className="relative lg:hidden">
              <div
                className="scrollbar-hide flex gap-1.5 overflow-x-auto overscroll-x-contain px-4"
                role="tablist"
                aria-label="Service categories"
              >
                {serviceCategories.map((category) => {
                  const isActive = category.id === active;
                  return (
                    <button
                      key={category.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls="service-panel"
                      onClick={(event) => selectTab(category.id, event.currentTarget)}
                      className={`min-h-11 shrink-0 rounded-none px-3.5 font-display text-sm font-extrabold tracking-wide whitespace-nowrap uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAB308] ${
                        isActive
                          ? "bg-[#EAB308] text-[color:var(--book-btn-text)]"
                          : "border border-[#EAB308]/40 bg-transparent text-white"
                      }`}
                    >
                      {category.label}
                    </button>
                  );
                })}
              </div>
              <div
                className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#161410] to-transparent"
                aria-hidden="true"
              />
            </div>

            <nav className="hidden lg:block" aria-label="Service categories">
              <p className="font-display text-[11px] font-extrabold tracking-[0.18em] text-[#EAB308] uppercase">
                Category
              </p>
              <div className="mt-3 flex flex-col" role="tablist" aria-orientation="vertical">
                {serviceCategories.map((category) => {
                  const isActive = category.id === active;
                  return (
                    <button
                      key={`rail-${category.id}`}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls="service-panel"
                      onClick={(event) => selectTab(category.id, event.currentTarget)}
                      className={`flex min-h-11 items-center border-l px-4 text-left font-display text-[15px] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAB308] ${
                        isActive
                          ? "border-[#EAB308] font-extrabold text-white"
                          : "border-white/20 font-semibold text-white/55 hover:text-white"
                      }`}
                    >
                      {category.label}
                    </button>
                  );
                })}
              </div>
            </nav>
          </div>

          <div>
            <div className="mb-1 hidden items-end justify-between gap-4 border-b border-[#EAB308]/25 pb-3 lg:flex">
              <h3 className="font-display text-[1.85rem] leading-none font-extrabold tracking-tight text-white uppercase">
                {activeLabel}
              </h3>
              <p className="pb-1 text-sm text-white/55">Prices as listed, plus GST.</p>
            </div>

            <div
              id="service-panel"
              role="tabpanel"
              aria-live="polite"
              className={`overflow-hidden border border-[#EAB308]/30 bg-black/20 px-3 transition-opacity duration-150 ease-out sm:px-4 ${
                fading ? "opacity-0" : "opacity-100"
              }`}
            >
              {visibleServices.map((service) => (
                <ServiceCard
                  key={`${service.category}-${service.name}`}
                  service={service}
                  showFeaturedMark={highlightFeatured}
                />
              ))}
            </div>
            <p className="mt-3 text-sm text-white/55 lg:hidden">Prices as listed, plus GST.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { salonPhotos } from "@/data/salonGallery";
import { container } from "@/lib/styles";

const LOOP = [...salonPhotos, ...salonPhotos];

export function StoreGallery() {
  const labelId = useId();
  const rootRef = useRef<HTMLElement>(null);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "80px 0px", threshold: 0.05 },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  const shouldAnimate = !reduceMotion && inView && !paused;

  return (
    <section
      ref={rootRef}
      id="salon"
      aria-labelledby={labelId}
      className="relative scroll-mt-20 overflow-hidden bg-[#161410] pb-10 text-white lg:pb-14"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#EAB308]/25" />

      <div className={`${container} pt-2 lg:pt-3`}>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div className="max-w-xl">
            <p className="font-display text-[12px] font-extrabold tracking-[0.22em] text-[#EAB308] uppercase">
              Our salon
            </p>
            <h2
              id={labelId}
              className="mt-2 font-display text-[2rem] leading-[0.95] font-extrabold tracking-[-0.03em] text-white uppercase sm:text-4xl"
            >
              Inside Touch & Shine
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-white/65 sm:text-base">
              A clean, modern space in Regina — from the front door to the chair.
            </p>
            <div className="mt-3 h-px w-14 bg-[#EAB308]" />
          </div>
          <p className="pb-1 text-[11px] font-semibold tracking-[0.16em] text-white/65 uppercase">
            {reduceMotion ? "Swipe to browse" : "Hover to pause"}
          </p>
        </div>
      </div>

      <div className="relative mt-6 lg:mt-8">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#161410] to-transparent sm:w-16 lg:w-24"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#161410] to-transparent sm:w-16 lg:w-24"
          aria-hidden="true"
        />

        <div
          className={`salon-marquee ${shouldAnimate ? "is-running" : ""} ${
            reduceMotion ? "is-static" : ""
          }`}
          role="region"
          aria-roledescription="carousel"
          aria-label="Salon photos"
          tabIndex={0}
        >
          <ul className="salon-marquee-track">
            {LOOP.map((photo, index) => {
              const isDuplicate = index >= salonPhotos.length;
              const aspect = photo.width / photo.height;
              const isPortrait = aspect < 0.95;

              return (
                <li
                  key={`${photo.id}-${index}`}
                  className={`relative shrink-0 overflow-hidden border border-[#EAB308]/20 bg-black/30 ${
                    isPortrait
                      ? "h-[15.5rem] w-[11.5rem] sm:h-[18.5rem] sm:w-[13.5rem] lg:h-[21rem] lg:w-[15.5rem]"
                      : "h-[15.5rem] w-[22rem] sm:h-[18.5rem] sm:w-[27rem] lg:h-[21rem] lg:w-[31rem]"
                  }`}
                  aria-hidden={isDuplicate ? true : undefined}
                >
                  <Image
                    src={photo.src}
                    alt={isDuplicate ? "" : photo.alt}
                    fill
                    sizes={
                      isPortrait
                        ? "(max-width: 640px) 184px, (max-width: 1024px) 216px, 248px"
                        : "(max-width: 640px) 352px, (max-width: 1024px) 432px, 496px"
                    }
                    className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#161410]/45 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

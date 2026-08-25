"use client";

import { useCallback, useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "@/components/icons";
import { businessInfo, reviews } from "@/data/business";
import { btnOutline, container } from "@/lib/styles";

function Stars({ rating }: { rating: number }) {
  return (
    <div
      role="img"
      className="flex gap-0.5 text-gold"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <StarIcon
          key={index}
          className={`h-3.5 w-3.5 ${index < rating ? "opacity-100" : "opacity-25"}`}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  const hasQuotes = reviews.length > 0;
  const scrollerId = useId();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const maxScroll = scroller.scrollWidth - scroller.clientWidth;
    setCanPrev(scroller.scrollLeft > 8);
    setCanNext(scroller.scrollLeft < maxScroll - 8);
  }, []);

  useEffect(() => {
    if (!hasQuotes) return;
    const scroller = scrollerRef.current;
    if (!scroller) return;
    updateArrows();
    scroller.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      scroller.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [hasQuotes, updateArrows]);

  const scrollByCard = useCallback((direction: -1 | 1) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const card = scroller.querySelector("article");
    const styles = getComputedStyle(scroller);
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 16;
    const distance = (card instanceof HTMLElement ? card.offsetWidth : 280) + gap;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    scroller.scrollBy({
      left: direction * distance,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, []);

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollByCard(1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollByCard(-1);
    }
  }

  const arrowClass =
    "inline-flex h-11 w-11 items-center justify-center rounded-none border text-charcoal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:pointer-events-none disabled:opacity-30";

  return (
    <section id="reviews" className="section-soft-wash scroll-mt-20 py-10 lg:py-20">
      <div className={container}>
        <div className="flex items-end justify-between gap-4">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-gold-dark uppercase">
              Reviews
            </p>
            <h2 className="mt-2 font-display text-[1.75rem] font-medium tracking-tight text-charcoal sm:text-4xl">
              {businessInfo.googleRating} from {businessInfo.googleReviewCount}+ Google reviews
            </h2>
            <p className="mt-2 max-w-md text-base text-muted">
              {hasQuotes
                ? "What clients in Regina say after they book."
                : "See what clients in Regina share on Google, then book with confidence."}
            </p>
          </div>
          {hasQuotes ? (
            <div className="hidden shrink-0 gap-2 md:flex">
              <button
                type="button"
                aria-controls={scrollerId}
                aria-label="Previous reviews"
                disabled={!canPrev}
                onClick={() => scrollByCard(-1)}
                className={`${arrowClass} border-border bg-ivory hover:border-gold hover:bg-gold-soft`}
              >
                <ChevronLeftIcon />
              </button>
              <button
                type="button"
                aria-controls={scrollerId}
                aria-label="Next reviews"
                disabled={!canNext}
                onClick={() => scrollByCard(1)}
                className={`${arrowClass} border-border bg-ivory hover:border-gold hover:bg-gold-soft`}
              >
                <ChevronRightIcon />
              </button>
            </div>
          ) : null}
        </div>

        {hasQuotes ? (
          <div className="relative mt-7">
            <div
              id={scrollerId}
              ref={scrollerRef}
              role="region"
              aria-roledescription="carousel"
              aria-label="Client reviews"
              tabIndex={0}
              onKeyDown={onKeyDown}
              className="scrollbar-hide flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain pb-1 touch-pan-x focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:gap-4"
            >
              {reviews.map((review, index) => (
              <article
                key={review.id}
                aria-label={`Review ${index + 1} of ${reviews.length}`}
                className="surface-luxe flex w-[min(78vw,19.5rem)] shrink-0 snap-start flex-col rounded-none p-5 sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]"
              >
                  <div className="h-px w-8 bg-gold" />
                  <div className="mt-4">
                    <Stars rating={review.rating} />
                  </div>
                  <p className="mt-4 flex-1 text-[15px] leading-relaxed text-charcoal sm:text-base">
                    “{review.text}”
                  </p>
                  <p className="mt-5 text-[13px] font-medium tracking-[0.04em] text-muted">
                    {review.name}
                  </p>
                </article>
              ))}
            </div>
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-section-soft to-transparent md:hidden"
              aria-hidden="true"
            />
          </div>
        ) : (
          <div className="surface-luxe surface-luxe-gold mt-7 max-w-xl p-6 sm:p-7">
            <Stars rating={Math.round(businessInfo.googleRating)} />
            <p className="mt-4 text-[15px] leading-relaxed text-charcoal sm:text-base">
              Clients rate Touch & Shine on Google for hair, brows, colour, and more.
              Read the latest reviews on Google before you book.
            </p>
          </div>
        )}

        <a
          href={businessInfo.googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${btnOutline} mt-6`}
        >
          Read reviews on Google
        </a>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { businessInfo } from "@/data/business";

type LocationMapProps = {
  className?: string;
};

/** Loads Google Maps embed only when the map enters the viewport (lighter first paint). */
export function LocationMap({ className }: LocationMapProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "120px 0px", threshold: 0.01 },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className={className}>
      {loadMap ? (
        <iframe
          title={`${businessInfo.name} map`}
          src={businessInfo.googleMapsEmbedUrl}
          className="h-56 w-full border-0 lg:h-full lg:min-h-[28rem]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="flex h-56 w-full flex-col items-center justify-center gap-3 border border-border bg-[var(--section-soft)] px-4 text-center lg:h-full lg:min-h-[28rem]">
          <p className="text-sm font-medium text-charcoal">Map loads when you scroll here</p>
          <a
            href={businessInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center text-sm font-semibold text-gold-dark underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            Open in Google Maps
          </a>
        </div>
      )}
    </div>
  );
}

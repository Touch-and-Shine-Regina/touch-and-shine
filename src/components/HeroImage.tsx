"use client";

import Image from "next/image";
import { useState } from "react";

type HeroImageProps = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  objectPosition?: string;
  preload?: boolean;
  quality?: number;
};

export function HeroImage({
  src,
  alt,
  sizes,
  className = "object-cover",
  objectPosition,
  preload = false,
  quality = 72,
}: HeroImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded ? (
        <div className="skeleton absolute inset-0" aria-hidden="true" />
      ) : null}
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        quality={quality}
        preload={preload}
        className={`${className} ${loaded ? "opacity-100" : "opacity-0"}`}
        style={objectPosition ? { objectPosition } : undefined}
        onLoad={() => setLoaded(true)}
      />
    </>
  );
}

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

export function HeroImage({ preload = false, ...props }: HeroImageProps) {
  return preload ? <EagerHeroImage {...props} /> : <FadeInHeroImage {...props} />;
}

/**
 * Above-the-fold hero. Paints as soon as the bytes arrive: gating visibility on
 * an onLoad handler would push LCP out to whenever hydration finishes.
 */
function EagerHeroImage({
  src,
  alt,
  sizes,
  className = "object-cover",
  objectPosition,
  quality = 72,
}: Omit<HeroImageProps, "preload">) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      quality={quality}
      preload
      className={className}
      style={objectPosition ? { objectPosition } : undefined}
    />
  );
}

/** Below-the-fold hero art, faded in over a skeleton once it decodes. */
function FadeInHeroImage({
  src,
  alt,
  sizes,
  className = "object-cover",
  objectPosition,
  quality = 72,
}: Omit<HeroImageProps, "preload">) {
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
        className={`${className} ${loaded ? "opacity-100" : "opacity-0"}`}
        style={objectPosition ? { objectPosition } : undefined}
        onLoad={() => setLoaded(true)}
      />
    </>
  );
}

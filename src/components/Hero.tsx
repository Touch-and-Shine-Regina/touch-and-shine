"use client";

import Image from "next/image";
import { BookButton } from "@/components/BookButton";
import { HeroImage } from "@/components/HeroImage";
import { businessInfo, getFullAddress, getTelHref } from "@/data/business";
import { siteImages } from "@/data/images";
import { getTodayHoursInfo } from "@/lib/hours";

const featuredMenu = [
  { name: "Hair Cut", price: "$21 + GST", duration: "30 min" },
  { name: "Beard + Hair Cut", price: "$37 + GST", duration: "45 min" },
  { name: "Regular Facial", price: "$65 + GST", duration: "60 min" },
  { name: "Keratin, Short Hair", price: "$210 + GST", duration: "2 hr" },
];

type HoursInfo = ReturnType<typeof getTodayHoursInfo>;

const headlineClass =
  "mt-3 font-display text-[clamp(3.5rem,9vw,7rem)] leading-[0.85] font-extrabold tracking-[-0.04em] text-white uppercase";

export function Hero() {
  const today = getTodayHoursInfo();

  return (
    <section className="relative overflow-hidden bg-[#161410] text-white">
      <h1 className="sr-only">
        Touch & Shine Beauty Hair Salon — your barber in Regina, Saskatchewan. Clear
        prices, then book online.
      </h1>
      <MobileHero today={today} />
      <DesktopHero today={today} />
    </section>
  );
}

function BrandMark({ size }: { size: "sm" | "md" }) {
  const px = size === "sm" ? 56 : 72;
  return (
    <div className="flex items-center gap-3">
      <Image
        src={businessInfo.logoPath}
        alt=""
        width={px}
        height={px}
        className="shrink-0 object-contain mix-blend-screen drop-shadow-[0_0_16px_rgba(234,179,8,0.6)]"
      />
      <p className="font-display text-[11px] font-extrabold tracking-[0.22em] text-[#EAB308] uppercase">
        Touch & Shine
      </p>
    </div>
  );
}

function ContactBlock({ today }: { today: HoursInfo }) {
  return (
    <dl className="mt-5 space-y-2 text-[14px] text-white/80">
      <div className="flex flex-wrap gap-x-3">
        <dt className="w-16 shrink-0 font-semibold tracking-[0.14em] text-[#EAB308] uppercase">
          Call
        </dt>
        <dd>
          <a
            href={getTelHref()}
            className="text-white underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EAB308]"
          >
            {businessInfo.phoneDisplay}
          </a>
        </dd>
      </div>
      <div className="flex flex-wrap gap-x-3">
        <dt className="w-16 shrink-0 font-semibold tracking-[0.14em] text-[#EAB308] uppercase">
          Visit
        </dt>
        <dd className="text-white">{getFullAddress()}</dd>
      </div>
      <div className="flex flex-wrap gap-x-3" suppressHydrationWarning>
        <dt className="w-16 shrink-0 font-semibold tracking-[0.14em] text-[#EAB308] uppercase">
          Hours
        </dt>
        <dd className="text-white">
          {today.isOpen ? "Open now" : "Closed now"} · {today.statusDetail}
        </dd>
      </div>
    </dl>
  );
}

function PriceList() {
  return (
    <div className="mt-7 border-t border-[#EAB308]/40 pt-5">
      <p className="font-display text-[11px] font-extrabold tracking-[0.22em] text-[#EAB308] uppercase">
        Services & pricing
      </p>
      <ul className="mt-3">
        {featuredMenu.map((item) => (
          <li
            key={item.name}
            className="flex items-center justify-between gap-3 border-b border-white/15 py-3 last:border-b-0"
          >
            <span className="min-w-0">
              <span className="block font-display text-[15px] font-extrabold tracking-tight text-white uppercase">
                {item.name}
              </span>
              <span className="text-[12px] text-white/70">{item.duration}</span>
            </span>
            <span className="shrink-0 font-display text-[16px] font-extrabold tabular-nums text-[#EAB308]">
              {item.price}
            </span>
          </li>
        ))}
      </ul>
      <a
        href="#services"
        className="mt-3 inline-flex min-h-11 items-center font-display text-sm font-extrabold tracking-wide text-[#EAB308] uppercase underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EAB308]"
      >
        Full menu
      </a>
    </div>
  );
}

function HeroActions({ fullWidth }: { fullWidth?: boolean }) {
  return (
    <div className={`mt-7 flex flex-col gap-2 ${fullWidth ? "" : "sm:flex-row sm:items-center"}`}>
      <BookButton
        className={`!rounded-none font-display font-extrabold uppercase ${fullWidth ? "w-full" : "w-full sm:w-auto"}`}
        ariaLabel="Book an appointment with Touch & Shine"
      >
        Book Appointment
      </BookButton>
      <a
        href="#services"
        className={`inline-flex min-h-11 items-center justify-center border border-[#EAB308] px-5 font-display text-[15px] font-extrabold tracking-wide text-white uppercase transition-colors hover:bg-[#EAB308]/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAB308] ${fullWidth ? "w-full" : ""}`}
      >
        Services & Prices
      </a>
    </div>
  );
}

function MobileHero({ today }: { today: HoursInfo }) {
  return (
    <div className="lg:hidden">
      <div className="relative h-[min(72svh,34rem)] overflow-hidden">
        <HeroImage
          src={siteImages.hero}
          alt="Salon styling at Touch & Shine in Regina"
          sizes="(max-width: 640px) 100vw, 100vw"
          objectPosition="70% 10%"
          preload
          quality={70}
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,#161410_0%,rgba(22,20,16,0.7)_36%,rgba(234,179,8,0.16)_62%,transparent_100%)]"
          aria-hidden
        />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-6">
          <p className="text-[11px] font-extrabold tracking-[0.28em] text-[#EAB308] uppercase">
            Regina, Saskatchewan
          </p>
          <p className={headlineClass} aria-hidden="true">
            Hi,
            <br />
            I&apos;m your
            <br />
            <span className="text-[#EAB308]">barber.</span>
          </p>
        </div>
      </div>

      <div className="bg-[#161410] px-5 pt-5 pb-[5.5rem]">
        <p className="max-w-sm text-[15px] leading-relaxed text-white/85">
          Touch & Shine Beauty Hair Salon. Clear prices, then book online.
        </p>
        <ContactBlock today={today} />
        <HeroActions fullWidth />
        <PriceList />
      </div>
    </div>
  );
}

function DesktopHero({ today }: { today: HoursInfo }) {
  return (
    <div className="relative hidden min-h-[calc(100svh-4rem)] lg:block">
      <div className="absolute inset-y-0 right-0 w-[50%] xl:w-[52%]">
        <HeroImage
          src={siteImages.hero}
          alt=""
          sizes="(min-width: 1024px) 52vw, 100vw"
          objectPosition="88% 8%"
          preload={false}
        />
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-[55%] bg-[linear-gradient(to_right,#161410_0%,rgba(22,20,16,0.88)_32%,rgba(234,179,8,0.2)_62%,transparent_100%)]"
          aria-hidden
        />
      </div>

      <div className="relative z-10 flex min-h-[calc(100svh-4rem)] flex-col justify-center px-10 py-12 xl:px-16">
        <div className="max-w-[42rem] xl:max-w-[48rem]">
          <BrandMark size="md" />
          <p className={`${headlineClass} mb-8`} aria-hidden="true">
            Hi,
            <br />
            I&apos;m your
            <br />
            <span className="text-[#EAB308]">barber.</span>
          </p>
          <p className="max-w-md text-[16px] leading-relaxed text-white/85">
            Touch & Shine Beauty Hair Salon. Clear prices, then book online.
          </p>
          <ContactBlock today={today} />
          <HeroActions />
          <PriceList />
        </div>
      </div>
    </div>
  );
}

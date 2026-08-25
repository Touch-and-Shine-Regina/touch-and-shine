import Image from "next/image";
import { businessInfo } from "@/data/business";
import { container } from "@/lib/styles";

const reasons = [
  {
    title: "Clear prices",
    text: "See the cost before you sit down. No guessing at the chair.",
  },
  {
    title: "Easy booking",
    text: "Pick a time online and confirm in a few taps.",
  },
  {
    title: "Full salon menu",
    text: "Hair, brows, waxing, facials, colour, keratin, and smoothing.",
  },
  {
    title: "Regina location",
    text: "University Park Drive, with parking nearby.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="scroll-mt-20 border-y border-gold/15 section-band-luxe text-[color:var(--band-text)]"
    >
      <div className={`${container} relative z-[1] py-10 lg:py-20`}>
        <div className="lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end lg:gap-16">
          <header className="max-w-lg">
            <Image
              src={businessInfo.logoPath}
              alt=""
              width={88}
              height={88}
              className="object-contain mix-blend-screen drop-shadow-[0_0_18px_rgba(234,179,8,0.5)]"
            />
            <p className="mt-4 text-[11px] font-extrabold tracking-[0.24em] text-gold uppercase">
              Why Touch & Shine
            </p>
            <h2 className="mt-4 font-display text-[2.2rem] leading-[0.95] font-extrabold tracking-[-0.03em] uppercase sm:text-5xl">
              No guessing at the chair.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-[color:var(--band-muted)]">
              Prices are clear before you book, services are easy to browse, and
              appointments are simple to schedule online.
            </p>
            <div className="mt-6 h-px w-12 bg-gold" />
          </header>
        </div>

        <ol className="relative mt-8 grid grid-cols-1 gap-px overflow-hidden border border-gold/30 bg-gold/20 sm:grid-cols-2 lg:mt-12">
          {reasons.map((reason, index) => (
            <li
              key={reason.title}
              className="bg-[var(--band-card)] px-5 py-6 sm:px-7 sm:py-8"
            >
              <p className="font-display text-[2rem] leading-none text-gold sm:text-[2.4rem]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-[17px] font-semibold tracking-tight">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--band-muted)]">
                {reason.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

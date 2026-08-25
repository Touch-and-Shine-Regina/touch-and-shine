import Image from "next/image";
import { BookButton } from "@/components/BookButton";
import { businessInfo } from "@/data/business";
import { container } from "@/lib/styles";

export function FinalCTA() {
  return (
    <section className="pt-8 pb-0 sm:pt-12">
      <div className={container}>
        <div className="relative z-[1] bg-[#161410] px-6 pt-10 pb-8 text-center sm:px-10 sm:pt-12 sm:pb-10">
          <Image
            src={businessInfo.logoPath}
            alt=""
            width={96}
            height={96}
            className="mx-auto object-contain mix-blend-screen drop-shadow-[0_0_20px_rgba(234,179,8,0.55)]"
          />
          <p className="mt-5 font-display text-[11px] font-extrabold tracking-[0.22em] text-[#EAB308] uppercase">
            Touch & Shine
          </p>
          <h2 className="mx-auto mt-3 max-w-[16ch] font-display text-[clamp(1.8rem,4vw,2.75rem)] font-extrabold tracking-[-0.03em] text-white uppercase">
            Ready when you are.
          </h2>
          <p className="mx-auto mt-3 max-w-sm text-base leading-relaxed text-white/70">
            See the price, pick a time, and book online — or call the salon.
          </p>
          <BookButton className="mt-6 w-full !rounded-none sm:w-auto sm:min-w-56">
            Book Appointment
          </BookButton>
        </div>
      </div>
    </section>
  );
}

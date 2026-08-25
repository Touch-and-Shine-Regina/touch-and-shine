import { businessInfo, getFullAddress } from "@/data/business";
import { btnDark, container } from "@/lib/styles";

export function LocationHours() {
  return (
    <section id="location" className="section-soft-wash scroll-mt-20 py-10 lg:py-20">
      <div className={container}>
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] text-gold-dark uppercase">
              Visit
            </p>
            <h2 className="mt-2 font-display text-[1.75rem] font-medium tracking-tight text-charcoal sm:text-4xl">
              Location & hours
            </h2>
          </div>
          <p className="max-w-md text-base text-muted lg:text-right">
            University Park, Regina. Booking ahead is best; walk-ins when we have space.
          </p>
        </div>

        <div className="surface-luxe surface-luxe-gold mt-8 grid overflow-hidden rounded-none lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="px-5 py-6 sm:px-7 sm:py-8">
            <p className="text-base font-medium leading-relaxed text-charcoal">
              {getFullAddress()}
            </p>
            <a
              href={businessInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnDark} mt-5`}
            >
              Get directions
            </a>
            <ul className="mt-6 divide-y divide-border">
              {businessInfo.hours.map((item) => (
                <li
                  key={item.day}
                  className="flex items-center justify-between gap-4 py-2.5 text-base"
                >
                  <span className="font-medium text-charcoal">{item.day}</span>
                  <span className="text-right text-muted">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <iframe
            title={`${businessInfo.name} map`}
            src={businessInfo.googleMapsEmbedUrl}
            className="h-56 w-full border-0 lg:h-full lg:min-h-[28rem]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

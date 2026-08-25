import { BookButton } from "@/components/BookButton";
import type { Service } from "@/types";

type ServiceCardProps = {
  service: Service;
  showFeaturedMark?: boolean;
};

function Price({ value }: { value: string }) {
  const [amount, extra] = value.split(" + ");

  return (
    <p className="w-[5.75rem] shrink-0 text-right tabular-nums sm:w-[6.5rem]">
      <span className="block font-display text-[16px] font-extrabold tracking-tight text-[#EAB308]">
        {amount}
      </span>
      {extra ? <span className="block text-[11px] leading-tight text-white/55">+ {extra}</span> : null}
    </p>
  );
}

export function ServiceCard({ service, showFeaturedMark = false }: ServiceCardProps) {
  const isFeatured = Boolean(showFeaturedMark && service.featured);

  return (
    <article
      className={`grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-x-3 border-b py-3.5 last:border-b-0 ${
        isFeatured ? "border-[#EAB308]/45 bg-[#EAB308]/12" : "border-white/10"
      }`}
    >
      <div className="min-w-0">
        <h3 className="font-display text-[17px] font-extrabold tracking-tight text-white">
          {service.name}
        </h3>
        {isFeatured || service.duration ? (
          <p className="mt-0.5 text-sm text-white/60">
            {isFeatured ? <span className="font-semibold text-[#EAB308]">Popular</span> : null}
            {isFeatured && service.duration ? " · " : null}
            {service.duration}
          </p>
        ) : null}
      </div>
      <Price value={service.price} />
      <BookButton size="menu" service={service}>
        Book
      </BookButton>
    </article>
  );
}

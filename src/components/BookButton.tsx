import type { ReactNode } from "react";
import { getBookAriaLabel, getBookingUrl } from "@/lib/booking";
import { btnBookAppointment, btnBookAppointmentSm, btnMenuBook } from "@/lib/styles";

type BookButtonProps = {
  children?: ReactNode;
  size?: "md" | "sm" | "menu";
  className?: string;
  href?: string;
  serviceName?: string;
  service?: { name: string; bookingUrl?: string };
  ariaLabel?: string;
};

const sizeClass = {
  md: btnBookAppointment,
  sm: btnBookAppointmentSm,
  menu: btnMenuBook,
};

export function BookButton({
  children = "Book Appointment",
  size = "md",
  className = "",
  href,
  serviceName,
  service,
  ariaLabel,
}: BookButtonProps) {
  const name = service?.name ?? serviceName;
  const bookingHref =
    href ?? getBookingUrl(service ? { bookingUrl: service.bookingUrl } : undefined);
  const label = ariaLabel ?? getBookAriaLabel(name);
  const isExternal = /^https?:\/\//.test(bookingHref);

  return (
    <a
      href={bookingHref}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={label}
      className={`${sizeClass[size]} ${className}`.trim()}
    >
      {children}
    </a>
  );
}

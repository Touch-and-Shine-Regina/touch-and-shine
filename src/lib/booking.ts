import { businessInfo } from "@/data/business";

type Bookable = {
  bookingUrl?: string;
  name?: string;
};

export const bookingPagePath = "/book";

export function getBookingUrl(service?: Bookable) {
  return service?.bookingUrl ?? bookingPagePath;
}

export function getBookAriaLabel(serviceName?: string) {
  if (serviceName) {
    return `Book ${serviceName} appointment`;
  }
  return "Book an appointment with Touch & Shine";
}

export type ServiceCategory =
  | "mens"
  | "womens"
  | "waxing"
  | "color"
  | "keratin"
  | "combos";

export type ServiceTabId = "popular" | ServiceCategory;

export type Service = {
  name: string;
  category: ServiceCategory;
  price: string;
  duration?: string;
  description?: string;
  featured?: boolean;
  bookingUrl?: string;
};

export type ServiceCategoryInfo = {
  id: ServiceTabId;
  label: string;
};

export type BusinessHours = {
  day: string;
  time: string;
};

export type Review = {
  id: string;
  name: string;
  rating: number;
  text: string;
  source?: string;
};

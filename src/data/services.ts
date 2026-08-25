import type { Service, ServiceCategory, ServiceCategoryInfo, ServiceTabId } from "@/types";

export type { Service, ServiceCategory };

/**
 * Price list aligned with Square Appointments categories and service names.
 * Prices are listed as shown, plus GST. Names match Square for easy lookup when booking.
 */
export const serviceCategories: ServiceCategoryInfo[] = [
  { id: "popular", label: "Popular" },
  { id: "mens", label: "Men" },
  { id: "womens", label: "Women" },
  { id: "waxing", label: "Waxing" },
  { id: "color", label: "Colour" },
  { id: "keratin", label: "Keratin" },
  { id: "combos", label: "Combos" },
];

export const services: Service[] = [
  // Men's Services
  {
    name: "Hair Cut",
    category: "mens",
    price: "$21 + GST",
    duration: "30 min",
    featured: true,
  },
  { name: "Beard", category: "mens", price: "$18 + GST", duration: "20 min" },
  {
    name: "Beard + Hair Cut",
    category: "mens",
    price: "$37 + GST",
    duration: "45 min",
    featured: true,
  },
  { name: "Beard + Threading", category: "mens", price: "$23 + GST", duration: "30 min" },
  { name: "Beard + Razor Cut", category: "mens", price: "$20 + GST", duration: "25 min" },

  // Combo Packages
  {
    name: "Haircut + Beard + Cleanup",
    category: "combos",
    price: "$75 + GST",
    duration: "75 min",
  },
  {
    name: "Hair + Beard + Facial",
    category: "combos",
    price: "$90 + GST",
    duration: "90 min",
  },

  // Brows, face, facials and women's services are grouped under Women
  {
    name: "Eyebrows",
    category: "womens",
    price: "$11 + GST",
    duration: "15 min",
    featured: true,
  },
  { name: "Brow Tint", category: "womens", price: "$17 + GST", duration: "20 min" },
  { name: "Face Bleach", category: "womens", price: "$20 + GST", duration: "30 min" },
  {
    name: "Regular Facial",
    category: "womens",
    price: "$65 + GST",
    duration: "60 min",
    featured: true,
  },
  { name: "Advance Facial", category: "womens", price: "$85 + GST", duration: "75 min" },
  { name: "Head Massage", category: "womens", price: "$55 + GST", duration: "30 min" },
  { name: "Simple Trimming", category: "womens", price: "$30 + GST", duration: "30 min" },
  {
    name: "Layer Cut, Medium Hair",
    category: "womens",
    price: "$40 + GST",
    duration: "45 min",
  },
  {
    name: "Layer Cut, Long Hair",
    category: "womens",
    price: "$45 + GST",
    duration: "60 min",
  },
  {
    name: "Hair Spa, Medium Length",
    category: "womens",
    price: "$60 + GST",
    duration: "60 min",
  },
  {
    name: "Hair Spa, Long Length",
    category: "womens",
    price: "$80 + GST",
    duration: "75 min",
  },

  // Waxing tab includes face threading/waxing and body waxing
  { name: "Eyebrows Wax", category: "waxing", price: "$13 + GST", duration: "15 min" },
  { name: "Upper Lips", category: "waxing", price: "$7 + GST", duration: "10 min" },
  { name: "Chin", category: "waxing", price: "$6 + GST", duration: "10 min" },
  { name: "Chin with Neck", category: "waxing", price: "$8 + GST", duration: "15 min" },
  {
    name: "Full Face Wax/Thread",
    category: "waxing",
    price: "$38 + GST",
    duration: "30 min",
  },

  // Waxing Services
  { name: "Full Arms Waxing", category: "waxing", price: "$30 + GST", duration: "30 min" },
  { name: "Full Legs Waxing", category: "waxing", price: "$40 + GST", duration: "45 min" },
  { name: "Underarms Waxing", category: "waxing", price: "$15 + GST", duration: "15 min" },
  {
    name: "Legs/Arms/Underarms Combo",
    category: "waxing",
    price: "$60 + GST",
    duration: "75 min",
  },
  { name: "Full Body Wax", category: "waxing", price: "$100 + GST", duration: "90 min" },
  { name: "Brazilian Wax", category: "waxing", price: "$45 + GST", duration: "45 min" },
  {
    name: "Full Body + Brazilian Wax",
    category: "waxing",
    price: "$135 + GST",
    duration: "120 min",
  },

  // Colour services
  {
    name: "Root Touch-Up",
    category: "color",
    price: "$50 + GST",
    duration: "60 min",
    featured: true,
  },
  {
    name: "Global Colour, Medium Volume Length",
    category: "color",
    price: "$80 + GST",
    duration: "90 min",
  },
  {
    name: "Global Colour, Long Length",
    category: "color",
    price: "$100 + GST",
    duration: "120 min",
  },
  {
    name: "Global Colour, Extra Long & Heavy Hair",
    category: "color",
    price: "$120 + GST",
    duration: "150 min",
  },

  // Keratin, smoothing, rebonding and straightening
  {
    name: "Keratin, Short Hair",
    category: "keratin",
    price: "$210 + GST",
    duration: "120 min",
    featured: true,
  },
  {
    name: "Keratin, Medium Hair",
    category: "keratin",
    price: "$270 + GST",
    duration: "150 min",
  },
  {
    name: "Keratin, Long Hair",
    category: "keratin",
    price: "$320 + GST",
    duration: "180 min",
  },
  {
    name: "Keratin, Extra Long & Thick Hair",
    category: "keratin",
    price: "$350 + GST",
    duration: "210 min",
  },

  {
    name: "Smoothing/Rebonding/Straightening, Short Hair",
    category: "keratin",
    price: "$220 + GST",
    duration: "150 min",
  },
  {
    name: "Smoothing/Rebonding/Straightening, Medium Hair",
    category: "keratin",
    price: "$280 + GST",
    duration: "180 min",
  },
  {
    name: "Smoothing/Rebonding/Straightening, Long Hair",
    category: "keratin",
    price: "$360 + GST",
    duration: "210 min",
  },
  {
    name: "Smoothing/Rebonding/Straightening, Extra Long Hair",
    category: "keratin",
    price: "$420 + GST",
    duration: "240 min",
  },
];

export const featuredServices = services.filter((service) => service.featured);

export function getServicesByTab(tab: ServiceTabId) {
  if (tab === "popular") return featuredServices;
  return services.filter((service) => service.category === tab);
}

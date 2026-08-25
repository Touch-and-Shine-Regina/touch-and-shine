export type SalonPhoto = {
  id: string;
  src: string;
  alt: string;
  /** Intrinsic width for layout rhythm (relative). */
  width: number;
  height: number;
};

/** Store photos shown under Services. Files live in /public/images/store. */
export const salonPhotos: SalonPhoto[] = [
  {
    id: "front",
    src: "/images/store/front.jpeg",
    alt: "Touch & Shine Beauty Hair Salon storefront on University Park Drive in Regina",
    width: 1600,
    height: 900,
  },
  {
    id: "reception",
    src: "/images/store/reception.jpeg",
    alt: "Reception desk inside Touch & Shine Beauty Hair Salon",
    width: 900,
    height: 1200,
  },
  {
    id: "barber",
    src: "/images/store/barber.jpeg",
    alt: "Styling stations and barber chairs inside Touch & Shine",
    width: 1600,
    height: 1000,
  },
  {
    id: "waiting",
    src: "/images/store/consultation.jpeg",
    alt: "Waiting area inside Touch & Shine Beauty Hair Salon",
    width: 1600,
    height: 1100,
  },
  {
    id: "entrance",
    src: "/images/store/consultation2.jpeg",
    alt: "Salon entrance and seating looking out toward the parking lot",
    width: 1600,
    height: 1100,
  },
];

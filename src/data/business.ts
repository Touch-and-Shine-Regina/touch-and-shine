import type { BusinessHours, Review } from "@/types";

/**
 * Edit this file to update salon details, booking links, hours, and reviews.
 * Booking is handled externally by Square Appointments.
 */
export const businessInfo = {
  name: "Touch & Shine Beauty Hair Salon",
  shortName: "Touch & Shine",
  tagline: "Beauty Hair Salon",
  logoPath: "/logo.png",
  bookingUrl:
    "https://app.squareup.com/appointments/book/35rmgndz45rl7p/LADHAW9ZFGC7C/start",
  phone: "3065803835",
  phoneRaw: "3065803835",
  phoneDisplay: "(306) 580-3835",
  whatsapp: "13065803835",
  email: "Touchandshineregina@gmail.com",
  website: "https://www.touchandshine.ca",
  address: {
    street: "540 University Park Dr",
    city: "Regina",
    province: "SK",
    postalCode: "S4V 2Z3",
    country: "Canada",
  },
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Touch+%26+Shine+Beauty+Hair+Salon+540+University+Park+Dr+Regina+SK",
  googleMapsEmbedUrl:
    "https://maps.google.com/maps?q=540%20University%20Park%20Dr%2C%20Regina%2C%20SK%20S4V%202Z3&z=16&output=embed",
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Touch+%26+Shine+Beauty+Hair+Salon+Regina",
  googleRating: 4.5,
  googleReviewCount: 392,
  social: {
    instagram: "https://www.instagram.com/touch_and_shine_beauty/",
    facebook: "https://www.facebook.com/TouchandShineBeautyHairSalon",
  },
  hours: [
    { day: "Monday", time: "11:00 AM – 6:00 PM" },
    { day: "Tuesday", time: "12:00 PM – 7:00 PM" },
    { day: "Wednesday", time: "10:00 AM – 7:00 PM" },
    { day: "Thursday", time: "10:00 AM – 7:00 PM" },
    { day: "Friday", time: "10:00 AM – 7:00 PM" },
    { day: "Saturday", time: "10:00 AM – 7:00 PM" },
    { day: "Sunday", time: "11:00 AM – 6:00 PM" },
  ] satisfies BusinessHours[],
};

/**
 * Featured review quotes for the homepage carousel.
 * Sourced from Google reviews (paste updates here as needed).
 * Rating summary uses googleRating / googleReviewCount.
 */
export const reviews: Review[] = [
  {
    id: "r1",
    name: "Sana Khan",
    rating: 5,
    text: "I had an amazing experience with Aman! She did a fantastic job with my keratin treatment and highlights at a very decent price. She took the time to understand what I wanted and provided professional advice that helped me make the best choices.",
    source: "Google",
  },
  {
    id: "r2",
    name: "Ash",
    rating: 5,
    text: "I got my hair colour done by Aman and had a great experience. The whole process took around 6 hours and she was very efficient. She took great care of my hair and made sure everything was done properly, all while managing other clients.",
    source: "Google",
  },
  {
    id: "r3",
    name: "Sunny Acet",
    rating: 5,
    text: "Gurman at Touch & Shine salon in the east end of Regina is an absolute professional. From the moment you sit in his chair, you can tell he takes pride in his work. Top-tier barber.",
    source: "Google",
  },
  {
    id: "r4",
    name: "Haranmoldeep Kaur",
    rating: 5,
    text: "I recently got my eyebrows and hair cut done by Aman. She is so amazing. Always had a great experience. Very happy with the results — got so many compliments about the hair. She is the best.",
    source: "Google",
  },
  {
    id: "r5",
    name: "Raman Brar",
    rating: 5,
    text: "Loved my experience here! The facial was so relaxing and my hair feels absolutely amazing after the treatment. Everyone was kind, attentive, and skilled. Highly recommend Jashan and Aman.",
    source: "Google",
  },
  {
    id: "r6",
    name: "Arman Sraa",
    rating: 5,
    text: "I got my beard curled today by Gurman, and I must say he did an excellent job. He was very friendly, professional, and made sure everything was done perfectly. Really happy with the results and would definitely recommend him.",
    source: "Google",
  },
];

export function getFullAddress() {
  const { street, city, province, postalCode } = businessInfo.address;
  return `${street}, ${city}, ${province} ${postalCode}`;
}

export function getTelHref() {
  return `tel:+1${businessInfo.phone}`;
}

export function getWhatsAppHref() {
  return `https://wa.me/${businessInfo.whatsapp}`;
}

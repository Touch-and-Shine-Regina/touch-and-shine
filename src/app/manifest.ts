import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Touch & Shine Beauty Hair Salon",
    short_name: "Touch & Shine",
    description:
      "Beauty hair salon in Regina, SK. View prices and book appointments online.",
    start_url: "/",
    display: "standalone",
    background_color: "#161410",
    theme_color: "#161410",
    icons: [
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}

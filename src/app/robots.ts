import type { MetadataRoute } from "next";
import { businessInfo } from "@/data/business";

export default function robots(): MetadataRoute.Robots {
  const base = businessInfo.website.replace(/\/$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/maintenance"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}

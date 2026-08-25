import type { MetadataRoute } from "next";
import { businessInfo } from "@/data/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = businessInfo.website.replace(/\/$/, "");
  const now = new Date("2026-08-25");

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/book`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${base}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}

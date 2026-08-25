import { businessInfo } from "@/data/business";

const DAY_TO_SCHEMA: Record<string, string> = {
  Monday: "https://schema.org/Monday",
  Tuesday: "https://schema.org/Tuesday",
  Wednesday: "https://schema.org/Wednesday",
  Thursday: "https://schema.org/Thursday",
  Friday: "https://schema.org/Friday",
  Saturday: "https://schema.org/Saturday",
  Sunday: "https://schema.org/Sunday",
};

function to24h(label: string): string | null {
  const match = label.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return null;
  const hour12 = Number(match[1]);
  const minute = match[2];
  const mer = match[3].toUpperCase();
  let hour = hour12 % 12;
  if (mer === "PM") hour += 12;
  return `${String(hour).padStart(2, "0")}:${minute}`;
}

/** Machine-readable hours for JSON-LD LocalBusiness / HairSalon. */
export function getOpeningHoursSpecification() {
  return businessInfo.hours
    .map((item) => {
      const [openLabel, closeLabel] = item.time.split("–").map((part) => part.trim());
      const opens = to24h(openLabel ?? "");
      const closes = to24h(closeLabel ?? "");
      const dayOfWeek = DAY_TO_SCHEMA[item.day];
      if (!opens || !closes || !dayOfWeek) return null;
      return {
        "@type": "OpeningHoursSpecification" as const,
        dayOfWeek,
        opens,
        closes,
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);
}

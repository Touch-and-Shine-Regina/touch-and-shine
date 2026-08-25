import { businessInfo } from "@/data/business";

const TIME_ZONE = "America/Regina";

function minutesInRegina(date: Date) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: TIME_ZONE,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((part) => part.type === "minute")?.value ?? 0);
  return hour * 60 + minute;
}

function parseHourLabel(label: string) {
  const match = label.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return null;

  const hour12 = Number(match[1]);
  const minute = Number(match[2]);
  const mer = match[3].toUpperCase();
  let hour = hour12 % 12;
  if (mer === "PM") hour += 12;
  return hour * 60 + minute;
}

export function getTodayHoursInfo(date = new Date()) {
  const day = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    timeZone: TIME_ZONE,
  }).format(date);

  const entry = businessInfo.hours.find((item) => item.day === day);

  if (!entry) {
    return {
      day,
      time: "Hours unavailable",
      isOpen: false,
      openLabel: null as string | null,
      closeLabel: null as string | null,
      statusDetail: "Hours unavailable",
    };
  }

  const [openLabel, closeLabel] = entry.time.split("–").map((part) => part.trim());
  const openMinutes = parseHourLabel(openLabel);
  const closeMinutes = parseHourLabel(closeLabel);
  const currentMinutes = minutesInRegina(date);
  const isOpen =
    openMinutes !== null &&
    closeMinutes !== null &&
    currentMinutes >= openMinutes &&
    currentMinutes < closeMinutes;

  return {
    day,
    time: entry.time,
    isOpen,
    openLabel: openLabel ?? null,
    closeLabel: closeLabel ?? null,
    statusDetail: isOpen
      ? `Closes ${closeLabel}`
      : openLabel
        ? `Opens ${openLabel}`
        : entry.time,
  };
}

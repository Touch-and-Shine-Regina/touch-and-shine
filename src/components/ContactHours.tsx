"use client";

import { businessInfo } from "@/data/business";
import { getTodayHoursInfo } from "@/lib/hours";

export function ContactHours() {
  const today = getTodayHoursInfo();

  return (
    <div>
      <p className="text-[11px] font-semibold tracking-[0.2em] text-gold-dark uppercase">
        Hours
      </p>
      <p className="mt-2 text-base" suppressHydrationWarning>
        <span className={`font-semibold ${today.isOpen ? "text-gold-dark" : "text-charcoal"}`}>
          {today.isOpen ? "Open now" : "Closed"}
        </span>
        <span className="text-muted"> · {today.day}</span>
      </p>
      <ul className="mt-3 space-y-1.5">
        {businessInfo.hours.map((item) => {
          const isToday = item.day === today.day;
          return (
            <li
              key={item.day}
              className={`flex justify-between gap-4 text-sm ${
                isToday ? "font-semibold text-charcoal" : "text-muted"
              }`}
              suppressHydrationWarning
            >
              <span>{item.day}</span>
              <span className="text-right">{item.time}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

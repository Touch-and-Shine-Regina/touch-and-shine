"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { CloseIcon } from "@/components/icons";
import { useTheme } from "@/components/ThemeProvider";
import {
  persistTheme,
  persistThemeTipDismissed,
  readThemeTipDismissed,
} from "@/lib/theme";

export function ThemeLightTip() {
  const pathname = usePathname();
  const { theme, ready, setTheme } = useTheme();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ready || pathname === "/book") return;
    setVisible(theme === "dark" && !readThemeTipDismissed());
  }, [ready, theme, pathname]);

  if (pathname === "/book" || !visible) return null;

  function dismiss() {
    persistThemeTipDismissed();
    setVisible(false);
  }

  function switchToLight() {
    setTheme("light");
    persistTheme("light");
    persistThemeTipDismissed();
    setVisible(false);
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-x-0 bottom-[calc(4.75rem+env(safe-area-inset-bottom))] z-[60] px-4 md:bottom-6 md:left-auto md:right-6 md:max-w-sm md:px-0 lg:bottom-8"
    >
      <div className="mx-auto flex items-start gap-3 border border-[#EAB308]/35 bg-[#1a1814]/95 px-4 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-sm md:mx-0">
        <p className="min-w-0 flex-1 text-[13px] leading-snug text-white/85">
          <span className="font-semibold text-[#EAB308]">Dark mode</span> is on by default.
          Prefer a lighter look?{" "}
          <button
            type="button"
            onClick={switchToLight}
            className="font-semibold text-white underline decoration-[#EAB308]/60 underline-offset-2 hover:text-[#EAB308] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAB308]"
          >
            Switch to light mode
          </button>{" "}
          anytime with the sun icon in the menu bar.
        </p>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss appearance tip"
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center text-white/60 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAB308]"
        >
          <CloseIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

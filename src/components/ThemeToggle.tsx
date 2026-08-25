"use client";

import { MoonIcon, SunIcon } from "@/components/icons";
import { useTheme } from "@/components/ThemeProvider";

type ThemeToggleProps = {
  className?: string;
  /** Icon-only control for header; labeled row for mobile menu. */
  variant?: "icon" | "menu";
};

export function ThemeToggle({ className = "", variant = "icon" }: ThemeToggleProps) {
  const { theme, ready, toggleTheme } = useTheme();
  const isDark = !ready || theme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  if (variant === "menu") {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={label}
        aria-pressed={isDark}
        className={`flex min-h-11 w-full items-center justify-between gap-3 rounded-none px-1 text-left transition-colors hover:bg-gold-soft/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${className}`}
      >
        <span className="text-sm font-medium text-white/70">Appearance</span>
        <span className="inline-flex items-center gap-2 rounded-none border border-border/80 bg-cream px-2.5 py-1.5">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-none bg-ivory text-gold-dark shadow-[0_1px_2px_rgba(42,41,38,0.08)]">
            {isDark ? <SunIcon className="h-3.5 w-3.5" /> : <MoonIcon className="h-3.5 w-3.5" />}
          </span>
          <span className="pr-1 text-[13px] font-semibold text-charcoal">
            {isDark ? "Light" : "Dark"}
          </span>
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      aria-pressed={isDark}
      title={label}
      suppressHydrationWarning
      className={`group inline-flex h-11 w-11 items-center justify-center rounded-none transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${className}`}
    >
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-none border border-border/70 bg-ivory/70 text-muted shadow-[0_1px_2px_rgba(42,41,38,0.06)] transition-colors duration-300 ease-out group-hover:border-gold/50 group-hover:bg-gold-soft group-hover:text-gold-dark group-active:bg-gold-soft">
        {isDark ? (
          <SunIcon className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:rotate-45" />
        ) : (
          <MoonIcon className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:-rotate-12" />
        )}
      </span>
    </button>
  );
}

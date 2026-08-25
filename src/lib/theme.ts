export const THEME_STORAGE_KEY = "touch-shine-theme";
export const THEME_TIP_DISMISSED_KEY = "touch-shine-theme-tip-dismissed";

export type Theme = "light" | "dark";

export const DEFAULT_THEME: Theme = "dark";

export function getSystemTheme(): Theme {
  if (typeof window === "undefined") return DEFAULT_THEME;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function readStoredTheme(): Theme | null {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (value === "light" || value === "dark") return value;
  } catch {
    /* ignore */
  }
  return null;
}

/** Saved preference, otherwise dark (site default). */
export function resolveTheme(): Theme {
  return readStoredTheme() ?? DEFAULT_THEME;
}

export function applyThemeClass(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

export function persistTheme(theme: Theme) {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    /* ignore */
  }
}

export function readThemeTipDismissed(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(THEME_TIP_DISMISSED_KEY) === "1";
  } catch {
    return false;
  }
}

export function persistThemeTipDismissed() {
  try {
    window.localStorage.setItem(THEME_TIP_DISMISSED_KEY, "1");
  } catch {
    /* ignore */
  }
}

/** Inline script for layout — prevents theme flash before React hydrates. */
export const themeInitScript = `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)};var s=localStorage.getItem(k);var t=s==="light"||s==="dark"?s:"dark";var r=document.documentElement;if(t==="dark"){r.classList.add("dark")}else{r.classList.remove("dark")}r.style.colorScheme=t;r.classList.add("theme-ready")}catch(e){document.documentElement.classList.add("dark");document.documentElement.style.colorScheme="dark";document.documentElement.classList.add("theme-ready")}})();`;

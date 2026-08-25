import type { ServiceTabId } from "@/types";

export const SERVICE_TAB_EVENT = "touchshine:tab";

export function openServiceTab(tab: ServiceTabId) {
  window.dispatchEvent(new CustomEvent(SERVICE_TAB_EVENT, { detail: tab }));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.getElementById("services")?.scrollIntoView({
    behavior: reduceMotion ? "auto" : "smooth",
    block: "start",
  });
}

import type { Metadata } from "next";
import { SystemPage } from "@/components/SystemPage";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That page does not exist. Book an appointment or return home.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <SystemPage
      code="404"
      title="Page not found"
      description="That link does not exist. Book online, call us, or head back to the homepage."
      primaryHref="/book"
      primaryLabel="Book appointment"
    />
  );
}

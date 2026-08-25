"use client";

import { useEffect } from "react";
import { SystemPage } from "@/components/SystemPage";
import "./globals.css";

export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.error(error);
    }
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-full bg-[#161410] antialiased">
        <SystemPage
          code="Error"
          title="Something went wrong"
          description="We hit a temporary problem. Try again, book online, or call the salon."
          showRetry
          onRetry={retry}
        />
      </body>
    </html>
  );
}

"use client";

import { useEffect } from "react";
import { SystemPage } from "@/components/SystemPage";

export default function Error({
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
    <SystemPage
      code="Error"
      title="Something went wrong"
      description="We hit a temporary problem loading this page. Try again, or book and call us directly."
      showRetry
      onRetry={retry}
    />
  );
}

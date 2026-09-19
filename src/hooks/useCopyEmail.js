import { useEffect, useState } from "react";
import { capture, captureException } from "../lib/posthog";

export const EMAIL = "neemadania@gmail.com";

// Copies EMAIL to the clipboard; `copied` stays true for 2s so buttons can show feedback.
// Falls back to opening a mailto link if the clipboard is unavailable.
export default function useCopyEmail() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      capture("contact_email_copied");
    } catch (error) {
      captureException(error, { flow: "contact_email_copy" });
      capture("contact_email_fallback_opened");
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return { copied, copyEmail };
}

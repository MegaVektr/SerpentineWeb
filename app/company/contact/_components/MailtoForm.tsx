"use client";

import { useState } from "react";

export function MailtoForm({
  to,
  subject,
  children,
  className,
  onSentText = "Opening your email client…",
}: {
  to: string;
  subject: string;
  children: React.ReactNode;
  className?: string;
  onSentText?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Drop honeypot (named "website"); if filled, silently no-op (likely a bot).
    const honeypot = String(data.get("website") ?? "");
    if (honeypot.trim().length > 0) {
      setStatus("sent");
      return;
    }

    // Build a readable email body from the form fields.
    const lines: string[] = [];
    for (const [k, v] of data.entries()) {
      if (k === "website") continue;
      const value = typeof v === "string" ? v.trim() : "";
      if (!value) continue;
      // Pretty-print field name: "work_email" -> "Work email"
      const label =
        k.charAt(0).toUpperCase() +
        k.slice(1).replace(/_/g, " ").replace(/-/g, " ");
      lines.push(`${label}: ${value}`);
    }

    const body = lines.length
      ? lines.join("\n\n")
      : "(empty form — please describe your inquiry)";

    const url =
      `mailto:${to}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    setStatus("sending");
    // Use location.href so the user's mail client takes over.
    window.location.href = url;
    // Fall back to "sent" state after a moment for visual feedback.
    setTimeout(() => setStatus("sent"), 600);
  }

  return (
    <form
      onSubmit={handleSubmit}
      method="post"
      action={`mailto:${to}`}
      noValidate={false}
      className={className}
    >
      {children}
      {status === "sent" && (
        <p
          role="status"
          aria-live="polite"
          className="mt-3 t-small text-[var(--bronze-deep-on-light)]"
        >
          {onSentText} If nothing opened, email{" "}
          <a href={`mailto:${to}`} className="underline">
            {to}
          </a>{" "}
          directly.
        </p>
      )}
    </form>
  );
}

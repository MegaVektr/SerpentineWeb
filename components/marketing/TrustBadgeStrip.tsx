import { cn } from "@/lib/cn";

const ITEMS = [
  "Sovereign EU infrastructure",
  "ISO 27001 · SOC 2 II · HDS",
  "GDPR-native",
  "Built in the EU",
];

export function TrustBadgeStrip({
  onDark = false,
  className,
}: {
  onDark?: boolean;
  className?: string;
}) {
  const color = onDark
    ? "text-[var(--ink-on-dark-muted)]"
    : "text-[var(--ink-muted)]";
  const sep = onDark
    ? "text-[var(--ink-on-dark-muted)]"
    : "text-[var(--stone-line-strong)]";
  return (
    <ul
      className={cn(
        "flex flex-wrap items-center justify-center gap-x-6 gap-y-2 t-caption uppercase",
        color,
        className,
      )}
    >
      {ITEMS.map((item, i) => (
        <li key={item} className="flex items-center gap-3">
          {i > 0 && (
            <span aria-hidden className={sep}>
              ·
            </span>
          )}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

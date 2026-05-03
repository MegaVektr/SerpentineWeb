import { cn } from "@/lib/cn";

// Geometric serpent-coil mark — abstracted from the SERPENTINE name.
// Two interlocking arcs forming an S-curve, single-stroke geometric.
export function LogoMark({
  className,
  onDark = false,
  size = 28,
  // View Transitions API: only ONE element on a page may carry a given
  // view-transition-name. Header is the canonical persistence target;
  // Footer (and any other LogoMark instance) must opt out.
  viewTransitionTarget = false,
}: {
  className?: string;
  onDark?: boolean;
  size?: number;
  viewTransitionTarget?: boolean;
}) {
  const stroke = onDark ? "#f3eeda" : "var(--ink)";
  const accent = "var(--bronze)";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      role="img"
      aria-hidden="true"
      className={cn(viewTransitionTarget && "logo-mark", "inline-block flex-shrink-0", className)}
    >
      <path
        d="M 6 10 C 6 5, 14 5, 16 10 C 18 15, 26 15, 26 10"
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 26 22 C 26 27, 18 27, 16 22 C 14 17, 6 17, 6 22"
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="9" cy="22" r="1.5" fill={accent} />
    </svg>
  );
}

export function Logo({
  onDark,
  className,
  viewTransitionTarget = false,
}: {
  onDark?: boolean;
  className?: string;
  viewTransitionTarget?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark onDark={onDark} viewTransitionTarget={viewTransitionTarget} />
      <span
        className={cn(
          "font-semibold tracking-[0.04em] text-[15px]",
          onDark ? "text-[var(--ink-on-dark)]" : "text-[var(--ink)]",
        )}
      >
        SERPENTINE
      </span>
    </span>
  );
}

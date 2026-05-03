import { cn } from "@/lib/cn";

type Variant = "default" | "available" | "beta" | "soon" | "open";
type LegacyVariant = "lavender";

const legacyMap: Record<LegacyVariant, Variant> = {
  lavender: "beta",
};

const variants: Record<Variant, string> = {
  default:
    "bg-[var(--stone-line)] text-[var(--ink-soft)] border-[var(--stone-line-strong)]",
  available:
    "bg-[#d8e6dc] text-[#1d5031] border-[#bfd6c5]",
  beta:
    "bg-[#ead9ff] text-[#432a73] border-[#d3bff5]",
  soon:
    "bg-[#f1e7ce] text-[#6b5530] border-[#dccfb0]",
  open:
    "bg-[#fff6e0] text-[#6e5b22] border-[#e8d999]",
};

export function Pill({
  variant = "default",
  className,
  children,
}: {
  variant?: Variant | LegacyVariant;
  className?: string;
  children: React.ReactNode;
}) {
  const v = (legacyMap[variant as LegacyVariant] ?? variant) as Variant;
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[var(--r-sm)] border px-2.5 py-1 t-label",
        variants[v],
        className,
      )}
    >
      {children}
    </span>
  );
}

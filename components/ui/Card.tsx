import { cn } from "@/lib/cn";

type Tone = "light" | "dark" | "featured" | "ghost-on-dark";
type LegacyTone = "base" | "subtle" | "cream" | "inverse";

const legacyToneMap: Record<LegacyTone, Tone> = {
  base: "light",
  subtle: "light",
  cream: "light",
  inverse: "dark",
};

export function Card({
  className,
  children,
  tone = "light",
  hover = true,
  ...rest
}: {
  className?: string;
  children: React.ReactNode;
  tone?: Tone | LegacyTone;
  /** Enables subtle lift on hover. Disable for non-interactive cards (e.g. pure prose blocks). */
  hover?: boolean;
} & React.HTMLAttributes<HTMLDivElement>) {
  const effective = (legacyToneMap[tone as LegacyTone] ?? tone) as Tone;
  const toneClass = {
    light:
      "bg-[var(--stone-raised)] border border-[var(--stone-line)] text-[var(--ink)]",
    dark:
      "bg-[var(--obsidian-raised)] border border-[var(--obsidian-line)] text-[var(--ink-on-dark)]",
    featured:
      "bg-[var(--stone-raised)] border border-[var(--bronze)] text-[var(--ink)] shadow-[0_0_0_3px_rgba(201,166,106,0.15)]",
    "ghost-on-dark":
      "bg-white/[0.025] border border-[var(--obsidian-line)] text-[var(--ink-on-dark)]",
  }[effective];

  return (
    <div
      className={cn(
        "rounded-[var(--r-lg)] p-6 sm:p-7",
        toneClass,
        hover && "serp-card-hover",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

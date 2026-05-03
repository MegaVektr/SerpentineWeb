import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";

type Tone = "light" | "dark" | "light-raised" | "dark-raised";
type LegacyTone = "base" | "subtle" | "cream" | "inverse" | "hero";
type ContainerSize = "default" | "narrow" | "wide";

const legacyMap: Record<LegacyTone, Tone> = {
  base: "light",
  subtle: "light-raised",
  cream: "light-raised",
  inverse: "dark",
  hero: "dark",
};

export function Section({
  className,
  children,
  tone = "light",
  divider = false,
  tight = false,
  id,
  as: As = "section",
  bare = false,
  containerSize = "default",
  containerClassName,
}: {
  className?: string;
  children: React.ReactNode;
  tone?: Tone | LegacyTone;
  divider?: boolean;
  tight?: boolean;
  id?: string;
  as?: "section" | "div" | "header" | "footer";
  /** Skip the auto-Container wrap. Use for full-bleed sections (photo break, hero shells). */
  bare?: boolean;
  containerSize?: ContainerSize;
  containerClassName?: string;
}) {
  const effectiveTone = (legacyMap[tone as LegacyTone] ?? tone) as Tone;
  const toneClass = {
    light: "surface-light",
    dark: "surface-dark",
    "light-raised": "surface-light-raised",
    "dark-raised": "surface-dark-raised",
  }[effectiveTone];

  const dividerClass = divider
    ? effectiveTone.startsWith("dark")
      ? "border-t border-[var(--obsidian-line)]"
      : "border-t border-[var(--stone-line)]"
    : "";

  // Auto-wrap children in Container so pages can never accidentally render
  // flush-left content. Pages can opt out with `bare` for full-bleed needs.
  const body = bare ? (
    children
  ) : (
    <Container size={containerSize} className={containerClassName}>
      {children}
    </Container>
  );

  return (
    <As
      id={id}
      className={cn(
        toneClass,
        tight ? "section-pad-tight" : "section-pad",
        dividerClass,
        "relative",
        className,
      )}
    >
      {body}
    </As>
  );
}

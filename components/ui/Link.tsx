import NextLink from "next/link";
import { cn } from "@/lib/cn";

type Tone = "ink" | "bronze" | "on-dark";
type LegacyTone = "amethyst";

const legacyMap: Record<LegacyTone, Tone> = {
  amethyst: "bronze",
};

const tones: Record<Tone, string> = {
  ink:
    "text-[var(--ink)] underline underline-offset-[3px] decoration-1 hover:decoration-2",
  bronze:
    "text-[var(--bronze-deep-on-light)] underline underline-offset-[3px] decoration-1 hover:decoration-2",
  "on-dark":
    "text-[var(--ink-on-dark)] underline underline-offset-[3px] decoration-[var(--ink-on-dark-muted)] decoration-1 hover:decoration-[var(--bronze)]",
};

export function Link({
  href,
  children,
  className,
  tone = "bronze",
  external,
  ...rest
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  tone?: Tone | LegacyTone;
  external?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const t = (legacyMap[tone as LegacyTone] ?? tone) as Tone;
  const cls = cn(tones[t], className);
  if (external || href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <NextLink href={href} className={cls} {...rest}>
      {children}
    </NextLink>
  );
}

export function ArrowLink({
  href,
  children,
  tone = "bronze",
  external,
  className,
}: {
  href: string;
  children: React.ReactNode;
  tone?: Tone | LegacyTone;
  external?: boolean;
  className?: string;
}) {
  const t = (legacyMap[tone as LegacyTone] ?? tone) as Tone;
  const colorTone: Record<Tone, string> = {
    ink: "text-[var(--ink)] hover:text-[var(--bronze-deep-on-light)]",
    bronze: "text-[var(--bronze-deep-on-light)] hover:text-[var(--ink)]",
    "on-dark": "text-[var(--bronze)] hover:text-[var(--ink-on-dark)]",
  };
  const cls = cn(
    "no-underline inline-flex items-center gap-1.5 font-semibold group transition-colors",
    colorTone[t],
    className,
  );
  const Inner = (
    <>
      <span>{children}</span>
      <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
    </>
  );
  if (external || href.startsWith("http")) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{Inner}</a>;
  }
  return <NextLink href={href} className={cls}>{Inner}</NextLink>;
}

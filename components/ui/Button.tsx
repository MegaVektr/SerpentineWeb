import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant =
  | "bronze"
  | "ink"
  | "ghost-on-dark"
  | "ghost-on-light"
  | "text";

// Legacy variants from the previous design system; mapped to new variants.
type LegacyVariant =
  | "cream"
  | "lavender"
  | "ghost"
  | "outline-ink"
  | "outline-on-dark";

type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[var(--r-md)] font-semibold whitespace-nowrap transition-all duration-150 focus-visible:outline-none";

const sizes: Record<Size, string> = {
  md: "h-[38px] px-5 text-[14px]",
  lg: "h-[44px] px-6 text-[15px]",
};

const variants: Record<Variant, string> = {
  bronze:
    "bg-[var(--bronze)] text-[var(--obsidian-base)] hover:bg-[#d4b378] hover:-translate-y-px hover:shadow-[0_8px_20px_rgba(201,166,106,0.35)]",
  ink:
    "bg-[var(--ink)] text-[var(--ink-on-dark)] hover:bg-[#1a1a1f] hover:-translate-y-px",
  "ghost-on-dark":
    "bg-transparent text-[var(--ink-on-dark)] border border-[var(--obsidian-line-strong)] hover:bg-white/[0.06]",
  "ghost-on-light":
    "bg-transparent text-[var(--ink)] border border-[var(--stone-line-strong)] hover:bg-black/[0.04]",
  text:
    "bg-transparent text-[var(--bronze-deep-on-light)] underline underline-offset-4 decoration-1 hover:decoration-2 px-0",
};

const legacyVariantMap: Record<LegacyVariant, Variant> = {
  cream: "bronze",
  lavender: "bronze",
  ghost: "ghost-on-light",
  "outline-ink": "ghost-on-light",
  "outline-on-dark": "ghost-on-dark",
};

type CommonProps = {
  variant?: Variant | LegacyVariant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type AsLinkProps = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

type AsButtonProps = CommonProps & {
  href?: undefined;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: AsLinkProps | AsButtonProps) {
  const {
    variant = "bronze",
    size = "md",
    className,
    children,
    ...rest
  } = props as CommonProps & Record<string, unknown>;
  const v = (legacyVariantMap[variant as LegacyVariant] ?? variant) as Variant;
  const cls = cn(base, sizes[size], variants[v], className);

  if ("href" in props && props.href) {
    const { href, external, ...anchorRest } = rest as {
      href: string;
      external?: boolean;
    } & Record<string, unknown>;
    if (external || href.startsWith("http")) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cls}
          {...(anchorRest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...(anchorRest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}

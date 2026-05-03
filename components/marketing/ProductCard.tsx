import NextLink from "next/link";
import { Card } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";

type Status = "available" | "beta" | "soon" | "open";

export function ProductCard({
  index,
  name,
  tagline,
  description,
  status,
  statusLabel,
  href,
  cta,
  tone = "light",
}: {
  index?: string;
  name: string;
  tagline: string;
  description: string;
  status: Status;
  statusLabel: string;
  href: string;
  cta: string;
  tone?: "light" | "dark";
}) {
  const subColor =
    tone === "dark"
      ? "text-[var(--ink-on-dark-soft)]"
      : "text-[var(--ink-soft)]";
  const indexColor =
    tone === "dark"
      ? "text-[var(--bronze)]"
      : "text-[var(--bronze-deep-on-light)]";
  const ctaColor =
    tone === "dark"
      ? "text-[var(--bronze)]"
      : "text-[var(--bronze-deep-on-light)]";
  return (
    <Card tone={tone} className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-between">
        {index && <span className={`t-label ${indexColor}`}>{index}</span>}
        <Pill variant={status}>{statusLabel}</Pill>
      </div>
      <div>
        <h3 className="t-feature">
          {name} <span className={subColor}>— {tagline}</span>
        </h3>
        <p className={`mt-3 t-small ${subColor}`}>{description}</p>
      </div>
      <div className="mt-auto">
        <NextLink
          href={href}
          className={`inline-flex items-center gap-1 text-[14px] font-semibold ${ctaColor} hover:underline`}
        >
          {cta} <span aria-hidden>→</span>
        </NextLink>
      </div>
    </Card>
  );
}

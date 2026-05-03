import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";

type CTA = { label: string; href: string };

export function SplitHero({
  eyebrow,
  h1,
  sub,
  ctaPrimary,
  ctaSecondary,
  right,
}: {
  eyebrow: string;
  h1: React.ReactNode;
  sub: React.ReactNode;
  ctaPrimary?: CTA;
  ctaSecondary?: CTA;
  right: React.ReactNode;
}) {
  return (
    <section className="relative surface-dark overflow-hidden">
      <div
        className="absolute inset-0 bg-dot-grid pointer-events-none"
        style={{
          maskImage: "linear-gradient(180deg, #000 0%, transparent 80%)",
          WebkitMaskImage: "linear-gradient(180deg, #000 0%, transparent 80%)",
        }}
      />
      <Container className="relative z-10 pt-28 pb-24 md:pt-32 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center">
          <div>
            <div className="serp-rise serp-rise-1">
              <Eyebrow>{eyebrow}</Eyebrow>
            </div>
            <h1 className="t-hero balance mt-6 text-[var(--ink-on-dark)] serp-rise serp-rise-2">
              {h1}
            </h1>
            <p className="t-lead pretty mt-6 max-w-xl text-[var(--ink-on-dark-soft)] serp-rise serp-rise-3">
              {sub}
            </p>
            {(ctaPrimary || ctaSecondary) && (
              <div className="mt-9 flex flex-wrap gap-3 serp-rise serp-rise-4">
                {ctaPrimary && (
                  <Button href={ctaPrimary.href} variant="bronze" size="lg">
                    {ctaPrimary.label}
                  </Button>
                )}
                {ctaSecondary && (
                  <Button href={ctaSecondary.href} variant="ghost-on-dark" size="lg">
                    {ctaSecondary.label}
                  </Button>
                )}
              </div>
            )}
          </div>
          <div className="lg:pl-4 serp-rise serp-rise-3">{right}</div>
        </div>
      </Container>
    </section>
  );
}

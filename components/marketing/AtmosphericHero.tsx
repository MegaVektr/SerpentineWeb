import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";

type CTA = { label: string; href: string };

export function AtmosphericHero({
  image,
  imageAlt,
  eyebrow,
  h1,
  sub,
  ctaPrimary,
  ctaSecondary,
  trustStrip,
  imagePosition = "center",
}: {
  image: string;
  imageAlt: string;
  eyebrow: string;
  h1: React.ReactNode;
  sub: React.ReactNode;
  ctaPrimary?: CTA;
  ctaSecondary?: CTA;
  trustStrip?: React.ReactNode;
  imagePosition?: string;
}) {
  return (
    <section className="relative min-h-[600px] overflow-hidden surface-dark">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover serp-ambient-zoom"
          style={{ objectPosition: imagePosition }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(7,7,10,0.30) 0%, rgba(7,7,10,0.55) 50%, rgba(7,7,10,0.85) 100%)",
          }}
        />
      </div>

      <Container className="relative z-10 pt-28 pb-24 md:pt-36 md:pb-32">
        <div className="max-w-3xl">
          <div className="serp-rise serp-rise-1">
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
          <h1 className="t-hero balance mt-6 text-[var(--ink-on-dark)] serp-rise serp-rise-2">
            {h1}
          </h1>
          <p className="t-lead pretty mt-6 max-w-2xl text-[var(--ink-on-dark-soft)] serp-rise serp-rise-3">
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
      </Container>

      {trustStrip && (
        <div className="absolute bottom-6 left-0 right-0 z-10 serp-rise serp-rise-5">
          <Container>
            <div className="border-t border-[var(--obsidian-line)] pt-4">{trustStrip}</div>
          </Container>
        </div>
      )}
    </section>
  );
}

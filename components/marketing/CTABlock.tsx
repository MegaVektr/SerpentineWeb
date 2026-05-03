import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function CTABlock({
  eyebrow,
  title,
  body,
  primary,
  secondary,
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  tone?: "light" | "dark" | "hero" | "base" | "subtle" | "cream"; // hero = legacy alias for dark
}) {
  const effectiveTone =
    tone === "hero" || tone === "dark"
      ? "dark"
      : "light";
  const onDark = effectiveTone === "dark";
  const headingColor = onDark ? "text-[var(--ink-on-dark)]" : "text-[var(--ink)]";
  const bodyColor = onDark ? "text-[var(--ink-on-dark-soft)]" : "text-[var(--ink-soft)]";
  return (
    <Section tone={effectiveTone}>
      <Container className="text-center">
        {eyebrow && (
          <Eyebrow onLight={!onDark} className="mb-6">
            {eyebrow}
          </Eyebrow>
        )}
        <h2 className={`t-section balance mx-auto max-w-3xl ${headingColor}`}>
          {title}
        </h2>
        {body && (
          <p className={`t-lead mt-5 mx-auto max-w-2xl ${bodyColor}`}>{body}</p>
        )}
        {(primary || secondary) && (
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            {primary && (
              <Button href={primary.href} variant="bronze" size="lg">
                {primary.label}
              </Button>
            )}
            {secondary && (
              <Button
                href={secondary.href}
                variant={onDark ? "ghost-on-dark" : "ghost-on-light"}
                size="lg"
              >
                {secondary.label}
              </Button>
            )}
          </div>
        )}
      </Container>
    </Section>
  );
}

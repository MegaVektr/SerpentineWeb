import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";

export function UtilitarianHero({
  eyebrow,
  h1,
  sub,
  tone = "light",
  align = "left",
}: {
  eyebrow?: string;
  h1: React.ReactNode;
  sub?: React.ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
}) {
  const surface = tone === "dark" ? "surface-dark" : "surface-light";
  const headingColor =
    tone === "dark" ? "text-[var(--ink-on-dark)]" : "text-[var(--ink)]";
  const subColor =
    tone === "dark" ? "text-[var(--ink-on-dark-soft)]" : "text-[var(--ink-soft)]";
  const eyebrowOnLight = tone === "light";
  const alignClass = align === "center" ? "mx-auto text-center" : "";

  return (
    <section className={`${surface} pt-32 pb-16 md:pt-36 md:pb-20`}>
      <Container>
        <div className={`max-w-3xl ${alignClass}`}>
          {eyebrow && (
            <div className="serp-rise serp-rise-1">
              <Eyebrow onLight={eyebrowOnLight}>{eyebrow}</Eyebrow>
            </div>
          )}
          <h1 className={`t-section balance mt-5 ${headingColor} serp-rise serp-rise-2`}>{h1}</h1>
          {sub && (
            <p className={`t-lead pretty mt-5 max-w-2xl ${subColor} serp-rise serp-rise-3`}>
              {sub}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}

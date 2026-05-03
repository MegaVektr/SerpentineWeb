import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { UtilitarianHero } from "@/components/marketing/UtilitarianHero";
import { CTABlock } from "@/components/marketing/CTABlock";
import { getChangelogEntries, type ChangelogEntry } from "@/lib/content";

export const metadata: Metadata = pageMetadata({
  title: "Changelog — Serpentine Platform",
  description:
    "What changed across Postava, Odbrana, Napad, and Regulativa. Cross-product changes appear under Platform.",
  path: "/changelog",
});

const FILTERS: { label: string; href: string }[] = [
  { label: "All", href: "#all" },
  { label: "Postava", href: "#postava" },
  { label: "Odbrana", href: "#odbrana" },
  { label: "Napad", href: "#napad" },
  { label: "Regulativa", href: "#regulativa" },
  { label: "Platform", href: "#platform" },
];

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  const yyyy = d.getUTCFullYear();
  const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(d.getUTCDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function renderBody(body: string) {
  const paragraphs = body
    .trim()
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
  if (paragraphs.length === 0) {
    return (
      <p className="t-small text-[var(--ink-on-dark-soft)] mt-2">
        {body.trim()}
      </p>
    );
  }
  return paragraphs.map((p, i) => (
    <p
      key={i}
      className={`t-small text-[var(--ink-on-dark-soft)] ${i === 0 ? "mt-2" : "mt-3"}`}
    >
      {p}
    </p>
  ));
}

export default function ChangelogPage() {
  const entries: ChangelogEntry[] = getChangelogEntries();
  const seenAnchors = new Set<string>();

  return (
    <>
      <UtilitarianHero
        tone="dark"
        eyebrow="CHANGELOG"
        h1="Built in the open."
        sub="What changed across the Serpentine platform — Postava, Odbrana, Napad, Regulativa. Reverse-chronological."
      />

      <Section tone="dark">
        <Container>
          <nav
            id="all"
            aria-label="Filter changelog by product"
            className="flex flex-wrap items-center gap-2"
          >
            {FILTERS.map((f) => (
              <a
                key={f.href}
                href={f.href}
                className="t-label inline-flex items-center rounded-[var(--r-md)] border border-[var(--obsidian-line-strong)] px-3 py-1.5 text-[var(--ink-on-dark-muted)] transition-colors hover:border-[var(--bronze)] hover:text-[var(--bronze)]"
              >
                {f.label}
              </a>
            ))}
          </nav>

          <ol className="mt-10">
            {entries.map((entry) => {
              const productKey = entry.product.toLowerCase();
              const anchorId = !seenAnchors.has(productKey)
                ? productKey
                : undefined;
              if (anchorId) seenAnchors.add(productKey);

              return (
                <li
                  key={entry.slug}
                  id={anchorId}
                  className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-5 py-6 border-b border-[var(--obsidian-line)]"
                >
                  <div className="flex flex-col items-start gap-3">
                    <time
                      dateTime={entry.date}
                      className="t-data text-[var(--ink-on-dark-muted)]"
                    >
                      {formatDate(entry.date)}
                    </time>
                    <Pill variant="default">{entry.product}</Pill>
                  </div>

                  <div>
                    <h2 className="t-feature text-[var(--ink-on-dark)]">
                      {entry.title}
                    </h2>
                    {renderBody(entry.body)}
                  </div>
                </li>
              );
            })}
          </ol>
        </Container>
      </Section>

      <CTABlock
        tone="dark"
        title="Subscribe to the changelog."
        body="Receive a monthly digest of platform changes via RSS or email — engineering updates only, no marketing."
        primary={{ label: "Book a Demo", href: "/company/contact#demo" }}
        secondary={{ label: "Read the Methodology →", href: "/methodology" }}
      />
    </>
  );
}

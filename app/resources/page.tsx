import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ArrowLink } from "@/components/ui/Link";
import { UtilitarianHero } from "@/components/marketing/UtilitarianHero";
import { CTABlock } from "@/components/marketing/CTABlock";

export const metadata: Metadata = pageMetadata({
  title: "Resources — Serpentine Security Platform",
  description:
    "Guides, methodology deep dives, sample reports, and technical content for security operators and leaders.",
  path: "/resources",
});

type FeaturedPillar = {
  caption: string;
  title: string;
  body: string;
  cta: string;
  href: string;
};

const featured: FeaturedPillar[] = [
  {
    caption: "DEEP DIVE",
    title: "Methodology — How Serpentine audits",
    body: "Principles, scanner techniques, AI boundaries, validation, and reporting standards.",
    cta: "Read the methodology →",
    href: "/methodology",
  },
  {
    caption: "SAMPLE",
    title: "Sample Odbrana Report",
    body: "A full audit report — executive summary, findings, remediation guidance, compliance mappings.",
    cta: "Download PDF →",
    href: "/downloads/sample-odbrana-report.pdf",
  },
  {
    caption: "BLOG",
    title: "Latest from the blog",
    body: "Architecture deep dives, AI boundaries, framework-agnostic GRC, and industry guides.",
    cta: "Read the blog →",
    href: "/blog",
  },
  {
    caption: "PRODUCT",
    title: "Changelog",
    body: "What changed across Postava, Odbrana, Napad, Regulativa, and the platform — built in the open.",
    cta: "View changelog →",
    href: "/changelog",
  },
];

const categories: { label: string; href: string }[] = [
  { label: "Guides", href: "/blog?category=guides" },
  { label: "Methodology", href: "/methodology" },
  { label: "Sample Reports", href: "/downloads/sample-odbrana-report.pdf" },
  { label: "Changelog", href: "/changelog" },
  { label: "Blog", href: "/blog" },
];

type ResourceCard = {
  caption: string;
  title: string;
  description: string;
  cta: string;
  href: string;
};

const resources: ResourceCard[] = [
  {
    caption: "BLOG",
    title: "Integration theater: the unified platform problem",
    description:
      "Why most “unified” security platforms are SSO over disconnected backends — and what a real canonical data model changes.",
    cta: "Read post →",
    href: "/blog/integration-theater-the-unified-platform-problem",
  },
  {
    caption: "BLOG",
    title: "Nine scanners, one data model — the Odbrana architecture",
    description:
      "Inside Odbrana: how nine independent scanners feed a single canonical model used by every downstream product.",
    cta: "Read post →",
    href: "/blog/nine-scanners-one-data-model-odbrana-architecture",
  },
  {
    caption: "BLOG",
    title: "AI-assisted security testing: boundaries and failure modes",
    description:
      "Where LLMs help in audit work, where they fail predictably, and the guardrails that keep findings honest.",
    cta: "Read post →",
    href: "/blog/ai-assisted-security-testing-boundaries-and-failure-modes",
  },
  {
    caption: "BLOG",
    title: "Serpentine vs Wiz, Snyk, Vanta, Pentera — unit economics",
    description:
      "A side-by-side look at what each tool actually does and how the unit economics compare for mid-market teams.",
    cta: "Read post →",
    href: "/blog/serpentine-vs-wiz-snyk-vanta-pentera-unit-economics",
  },
  {
    caption: "BLOG",
    title: "Framework-agnostic GRC: why ISO-first architectures fail",
    description:
      "Why building GRC around a single framework breaks under multi-framework reality — and the canonical-control alternative.",
    cta: "Read post →",
    href: "/blog/framework-agnostic-grc-why-iso-first-architectures-fail",
  },
  {
    caption: "BLOG",
    title: "NIS2 for SaaS: what is actually required",
    description:
      "A practitioner-grade walkthrough of the obligations NIS2 places on SaaS providers operating in or selling into the EU.",
    cta: "Read post →",
    href: "/blog/nis2-for-saas-what-is-actually-required",
  },
  {
    caption: "METHODOLOGY",
    title: "Methodology — How Serpentine audits",
    description:
      "Principles, scanner techniques, AI boundaries, validation, and reporting standards — publicly documented.",
    cta: "Read methodology →",
    href: "/methodology",
  },
  {
    caption: "SAMPLE",
    title: "Sample Odbrana Report (PDF)",
    description:
      "Executive summary, findings, remediation guidance, and compliance mappings from a full Odbrana audit.",
    cta: "Download PDF →",
    href: "/downloads/sample-odbrana-report.pdf",
  },
  {
    caption: "TRUST",
    title: "Trust & Infrastructure",
    description:
      "Hosting, sovereignty, certifications inherited from OVHcloud (multi-region EU), and Serpentine's own ISO 27001 progress.",
    cta: "View trust →",
    href: "/trust",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <UtilitarianHero
        tone="light"
        eyebrow="RESOURCES"
        h1="Guides, methodology, and sample outputs."
        sub="Technical content for security operators and leaders. Methodology deep dives, sample reports, comparison writing, and industry-specific guides."
      />

      {/* Featured pillars */}
      <Section tone="light">
        <Container>
          <h2 className="t-section">Featured.</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((pillar) => (
              <Card key={pillar.href} tone="light" className="flex flex-col">
                <span className="t-label text-[var(--bronze-deep-on-light)]">
                  {pillar.caption}
                </span>
                <h3 className="t-feature mt-4">{pillar.title}</h3>
                <p className="t-body mt-3 text-[var(--ink-soft)]">
                  {pillar.body}
                </p>
                <div className="mt-6">
                  <ArrowLink href={pillar.href} tone="bronze">
                    {pillar.cta}
                  </ArrowLink>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Categories */}
      <Section tone="light-raised" tight>
        <Container>
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((cat) => (
              <a
                key={cat.href}
                href={cat.href}
                className="t-label rounded-[var(--r-md)] border border-[var(--stone-line-strong)] px-4 py-2 hover:border-[var(--bronze)] transition-colors"
              >
                {cat.label}
              </a>
            ))}
          </div>
        </Container>
      </Section>

      {/* Browse all */}
      <Section tone="light">
        <Container>
          <h2 className="t-section">Browse all.</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {resources.map((r) => (
              <Card key={r.href} tone="light" className="flex flex-col">
                <span className="t-label text-[var(--bronze-deep-on-light)]">
                  {r.caption}
                </span>
                <h3 className="t-feature mt-3">{r.title}</h3>
                <p className="t-small mt-3 text-[var(--ink-soft)]">
                  {r.description}
                </p>
                <div className="mt-6">
                  <ArrowLink href={r.href} tone="bronze">
                    {r.cta}
                  </ArrowLink>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CTABlock
        tone="dark"
        title="Want more?"
        body="Subscribe for new methodology pieces, sample reports, and engineering writing — monthly digest, no marketing."
        primary={{ label: "Book a Demo", href: "/company/contact#demo" }}
        secondary={{ label: "Talk to Sales", href: "/company/contact#sales" }}
      />
    </>
  );
}

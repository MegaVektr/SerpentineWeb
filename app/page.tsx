import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, ORG_SCHEMA, WEBSITE_SCHEMA } from "@/lib/schema";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ArrowLink } from "@/components/ui/Link";
import { AtmosphericHero } from "@/components/marketing/AtmosphericHero";
import { TrustBadgeStrip } from "@/components/marketing/TrustBadgeStrip";
import { FourProductGrid } from "@/components/marketing/FourProductGrid";
import { CTABlock } from "@/components/marketing/CTABlock";
import { SecurityLifecycle } from "@/components/diagrams/SecurityLifecycle";

export const metadata: Metadata = pageMetadata({
  title: "SERPENTINE — The Unified Security Platform",
  description:
    "Serpentine unifies security audit, offensive testing, infrastructure hardening, and compliance governance. EU-hosted. Built for modern security teams.",
  path: "/",
});

const WHY_REASONS: Array<{ title: string; body: string }> = [
  {
    title: "Unified architecture, not integration theater",
    body:
      "One canonical data model across all four products. Evidence from Postava hardens Odbrana's confidence scores. Napad's results feed Regulativa's control validation. This is the platform most vendors claim and few deliver.",
  },
  {
    title: "Sovereign EU infrastructure",
    body:
      "Customer data lives in OVHcloud&apos;s EU regions, certified to ISO 27001, ISO 27017, ISO 27018, SOC 2 Type II, and HDS. No US hyperscaler dependency. No CLOUD Act exposure. GDPR-native by design.",
  },
  {
    title: "Real outputs, not raw data",
    body:
      "Every scan produces a structured report with prioritized findings, remediation guidance, and compliance mappings. No CSV dumps. No forty-thousand-alert inboxes. Actionable findings only.",
  },
  {
    title: "Agentic AI with guardrails",
    body:
      "Every AI-generated finding is traceable to its source. Interpretations are labeled as interpretations. Source text is preserved. No hallucinated compliance status, ever.",
  },
  {
    title: "Practitioner-first design",
    body:
      "Interfaces designed for the people who use them daily. Precision over decoration. Depth over dashboard noise.",
  },
  {
    title: "Built by security operators",
    body:
      "Serpentine reflects fifteen years of full-stack, DevOps, and offensive and defensive security work. The product is what security engineers build when they get to design the tools they would use.",
  },
];

const LIFECYCLE_NOTES: Array<{ stage: string; product: string; body: string }> = [
  {
    stage: "Deploy & Harden",
    product: "Postava",
    body:
      "Servers come up production-ready. Firewall, SSH, kernel parameters, Fail2ban, and signature verification applied in one operation.",
  },
  {
    stage: "Discover",
    product: "Odbrana",
    body:
      "Nine scanners sweep web, code, cloud, containers, APIs, mobile, blockchain, AI/ML, and network surfaces for vulnerabilities.",
  },
  {
    stage: "Validate",
    product: "Napad",
    body:
      "Agentic offensive workflows confirm exploitability, remove false positives, and produce reproducible attack chains.",
  },
  {
    stage: "Govern & Prove",
    product: "Regulativa",
    body:
      "Findings, evidence, and controls map to ISO 27001, SOC 2, NIST CSF, GDPR, and more. Evidence reuses across frameworks.",
  },
];

const INDUSTRIES: Array<{ slug: string; name: string; blurb: string }> = [
  {
    slug: "saas",
    name: "SaaS & Cloud Platforms",
    blurb: "Continuous posture, CI-integrated scanning, SOC 2 ready",
  },
  {
    slug: "fintech",
    name: "Financial Services",
    blurb: "DORA-aligned, audit trails, regulated-sector controls",
  },
  {
    slug: "critical-infrastructure",
    name: "Critical Infrastructure",
    blurb: "NIS2 compliance, offensive validation, high-assurance hardening",
  },
  {
    slug: "mssp",
    name: "MSSPs & Pentest Consultancies",
    blurb: "White-label scanning, multi-tenant dashboards, engagement management",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[ORG_SCHEMA, WEBSITE_SCHEMA]} />

      {/* 1. Hero */}
      <AtmosphericHero
        image="/images/hero-home.jpg"
        imageAlt="Server room interior with rows of mounted equipment, low warm lighting"
        eyebrow="THE UNIFIED SECURITY PLATFORM"
        h1="Security operations, unified by architecture — not by marketing."
        sub="Serpentine is one platform spanning four security disciplines: audit, offense, hardening, and governance. Built as a single system, hosted on sovereign EU infrastructure, operated by engineers who got tired of integration theater."
        ctaPrimary={{ label: "Book a Demo", href: "/company/contact#demo" }}
        ctaSecondary={{ label: "Explore the Platform →", href: "/platform" }}
        trustStrip={<TrustBadgeStrip onDark />}
      />

      {/* 2. Four Disciplines */}
      <Section tone="light">
        <Container>
          <div className="max-w-3xl">
            <h2 className="t-section balance">One platform. Four disciplines.</h2>
            <p className="t-lead mt-5 text-[var(--ink-soft)]">
              Most security stacks are assembled — a vulnerability scanner here, a compliance tool there, a pentesting service bolted on top. Serpentine is built. Four products share a canonical data model, a unified evidence layer, and a single operational philosophy. Findings flow. Evidence reuses. Context compounds.
            </p>
          </div>
          <div className="mt-12">
            <FourProductGrid tone="light" />
          </div>
        </Container>
      </Section>

      {/* 3. Why Serpentine */}
      <Section tone="light-raised">
        <Container>
          <div className="max-w-3xl">
            <h2 className="t-section balance">
              Built for operators. Architected for scale.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {WHY_REASONS.map((r) => (
              <Card key={r.title} tone="light">
                <h3 className="t-body-h">{r.title}</h3>
                <p className="t-small mt-3 text-[var(--ink-soft)]">{r.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Integration Story */}
      <Section tone="dark">
        <Container>
          <div className="max-w-3xl">
            <h2 className="t-section balance text-[var(--ink-on-dark)]">
              The four disciplines, one loop.
            </h2>
            <p className="t-lead mt-5 text-[var(--ink-on-dark-soft)]">
              Audit discovers. Offense validates. Hardening remediates. Governance proves. When these disciplines live in one platform, security stops being a collection of quarterly projects and starts being a continuous operating state.
            </p>
          </div>

          <div className="mt-12">
            <SecurityLifecycle />
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {LIFECYCLE_NOTES.map((n, i) => (
              <div
                key={n.stage}
                className="border-t border-[var(--obsidian-line)] pt-4"
              >
                <div className="t-caption text-[var(--ink-on-dark-muted)]">
                  {`0${i + 1}`} · {n.product.toUpperCase()}
                </div>
                <div className="t-body-h mt-2 text-[var(--ink-on-dark)]">{n.stage}</div>
                <p className="t-small mt-2 text-[var(--ink-on-dark-soft)]">{n.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <ArrowLink href="/platform" tone="on-dark">
              See the full architecture
            </ArrowLink>
          </div>
        </Container>
      </Section>

      {/* 5. Industries */}
      <Section tone="light">
        <Container>
          <div className="max-w-3xl">
            <h2 className="t-section balance">
              Built for environments that cannot fail silently.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {INDUSTRIES.map((ind) => (
              <Card key={ind.slug} tone="light" className="flex flex-col justify-between">
                <div>
                  <h3 className="t-feature">{ind.name}</h3>
                  <p className="t-small mt-3 text-[var(--ink-soft)]">{ind.blurb}</p>
                </div>
                <div className="mt-6">
                  <ArrowLink href={`/industries/${ind.slug}`} tone="bronze">
                    Explore sector
                  </ArrowLink>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. Trust */}
      <Section tone="light-raised">
        <Container>
          <div className="max-w-3xl">
            <h2 className="t-section balance">Trust, verifiable.</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card tone="light">
              <h3 className="t-body-h">Your data lives in the EU</h3>
              <p className="t-small mt-3 text-[var(--ink-soft)]">
                Customer data is hosted on OVHcloud across multiple EU regions. Data residency is contractual. No transfer outside the EU at any point.
              </p>
              <div className="mt-5">
                <ArrowLink href="/trust" tone="bronze">Read our infrastructure posture</ArrowLink>
              </div>
            </Card>
            <Card tone="light">
              <h3 className="t-body-h">Your AI processing is controlled</h3>
              <p className="t-small mt-3 text-[var(--ink-soft)]">
                Serpentine uses Anthropic Claude under an enterprise DPA. Zero Data Retention available for Enterprise contracts.
              </p>
              <div className="mt-5">
                <ArrowLink href="/trust#ai" tone="bronze">Review AI data handling</ArrowLink>
              </div>
            </Card>
            <Card tone="light">
              <h3 className="t-body-h">Your compliance posture is real</h3>
              <p className="t-small mt-3 text-[var(--ink-soft)]">
                We publish our subprocessor list, responsible disclosure policy, own security posture, and DPA — downloadable, not hidden.
              </p>
              <div className="mt-5">
                <ArrowLink href="/trust" tone="bronze">View all trust documentation</ArrowLink>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 7. Final CTA */}
      <CTABlock
        tone="dark"
        title="See Serpentine in action."
        body="Book a thirty-minute demo with our team. We will walk you through the platform, run a live scan against an asset you control, and answer every technical and procurement question you have."
        primary={{ label: "Book a Demo", href: "/company/contact#demo" }}
        secondary={{ label: "Read the Methodology →", href: "/methodology" }}
      />
    </>
  );
}

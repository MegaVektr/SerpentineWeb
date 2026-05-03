import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SplitHero } from "@/components/marketing/SplitHero";
import { CTABlock } from "@/components/marketing/CTABlock";
import { DashFrameworkReadiness } from "@/components/marketing/DashFrameworkReadiness";
import { RegulativaFrameworkPacks } from "@/components/diagrams/RegulativaFrameworkPacks";
import { JsonLd, softwareApplication } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Regulativa — Framework-Agnostic Governance OS",
  description:
    "The compliance operating system for digital companies. Map obligations to controls and evidence across ISO 27001, SOC 2, NIST, GDPR. Evidence reuses across frameworks.",
  path: "/products/regulativa",
});

const HERO_SUB =
  "Regulativa is a framework-agnostic governance operating system. It helps digital companies understand which obligations apply, interpret what they actually mean, map them to controls and evidence, identify gaps, reuse work across frameworks, and generate decision-ready outputs for operators and leadership.";

const CORE_LAYERS = [
  {
    index: "01",
    title: "Framework & Regulation Intelligence",
    body:
      "A structured knowledge system for standards, laws, and assurance frameworks. Not a PDF repository — a machine-usable requirements model.",
  },
  {
    index: "02",
    title: "Applicability Engine",
    body:
      "Determines which frameworks, obligations, and governance domains apply to your specific organization based on geography, industry, data types, business model, and customer base.",
  },
  {
    index: "03",
    title: "AI Interpretation Layer",
    body:
      "Transforms dense regulatory text into operator summaries, executive summaries, implementation implications, and evidence expectations — always with source traceability and uncertainty labeling.",
  },
  {
    index: "04",
    title: "Control & Evidence Mapping",
    body:
      "Maps obligations to controls, policies, procedures, assets, systems, vendors, and evidence. Detects contradictions between written state and actual state.",
  },
  {
    index: "05",
    title: "Gap & Action Engine",
    body:
      "Converts missing controls, missing evidence, stale evidence, and conflicting states into tracked work items with owners, deadlines, and closure criteria.",
  },
  {
    index: "06",
    title: "Readiness & Reporting",
    body:
      "Executive dashboards, framework-specific readiness views, audit preparation packs, due-diligence outputs, and management review summaries.",
  },
];

const TIERS = [
  {
    title: "Tier 1 — Core frameworks (launch)",
    items: [
      "ISO/IEC 27001 — Information security management",
      "ISO/IEC 27701 — Privacy information management",
      "NIST CSF 2.0 — Cybersecurity Framework",
      "SOC 2 / Trust Services Criteria",
      "ISO 22301 — Business continuity management",
      "ISO/IEC 42001 — AI management systems",
    ],
  },
  {
    title: "Tier 2 — Sector and overlay frameworks",
    items: [
      "NIS2 Directive (EU)",
      "DORA (Digital Operational Resilience Act)",
      "ISO/IEC 27017 — Cloud security",
      "ISO/IEC 27018 — Cloud privacy",
      "GDPR and CCPA privacy overlays",
      "HIPAA and HITRUST (healthcare)",
    ],
  },
  {
    title: "Tier 3 — Jurisdiction-specific and enterprise",
    items: [
      "Custom framework support",
      "Enterprise policy mappings",
      "Customer questionnaire libraries",
    ],
  },
];

const GUARDRAILS = [
  "Never fabricate compliance status",
  "Never mark an item complete without evidence or explicit human confirmation",
  "Never blur source text and AI interpretation",
  "Always preserve traceability to framework source material",
  "Always expose uncertainty when recommendations depend on assumptions",
  "Never imply certification where none exists",
  "Never present templates as implementation",
  "Never let marketing language outrun product truth",
];

const SUITE_INTEGRATIONS = [
  {
    title: "Odbrana → Regulativa",
    body:
      "Vulnerability findings become tracked risks with remediation evidence",
  },
  {
    title: "Postava → Regulativa",
    body:
      "Server hardening configurations become control implementation evidence",
  },
  {
    title: "Napad → Regulativa",
    body:
      "Penetration test findings become control effectiveness validation",
  },
];

export default function RegulativaPage() {
  return (
    <>
      <JsonLd
        data={softwareApplication({
          name: "Regulativa",
          description:
            "Framework-agnostic governance OS — maps obligations to controls and evidence.",
          url: "https://spnt.io/products/regulativa",
          category: "BusinessApplication",
        })}
      />

      <SplitHero
        eyebrow="04 · REGULATIVA — GOVERNANCE — COMING 2026"
        h1="The governance OS for companies that take compliance seriously."
        sub={HERO_SUB}
        ctaPrimary={{ label: "Join Waitlist", href: "/company/contact#waitlist" }}
        ctaSecondary={{ label: "Read the Architecture Paper →", href: "/methodology" }}
        right={<DashFrameworkReadiness />}
      />

      {/* The Problem */}
      <Section tone="dark">
        <Container>
          <div className="max-w-3xl">
            <h2 className="t-section balance text-[var(--ink-on-dark)]">
              Compliance is not a document problem. It is an operating system problem.
            </h2>
            <div className="mt-8 space-y-5 text-[var(--ink-on-dark-soft)]">
              <p className="t-body">
                Most digital companies fail at governance for predictable
                reasons. They do not know which standards apply. They treat ISO,
                SOC 2, NIST, GDPR, and AI governance as separate universes. They
                duplicate controls and evidence across frameworks. They confuse
                written policies with implemented controls. They cannot prove
                what is in place. They store evidence in scattered systems. They
                react too late to regulatory change. They cannot explain their
                status clearly to leadership or customers.
              </p>
              <p className="t-body">
                Regulativa is designed to fix all of that with one architectural
                decision: governance should run as an operating system, not as a
                pile of disconnected frameworks.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Architecture */}
      <Section tone="dark-raised">
        <Container>
          <div className="max-w-3xl">
            <h2 className="t-section balance text-[var(--ink-on-dark)]">
              One core system. Many framework views.
            </h2>
            <div className="mt-8 space-y-5 text-[var(--ink-on-dark-soft)]">
              <p className="t-body">
                Regulativa does not create a separate internal universe for
                each framework. It maintains one shared system of record — a
                canonical data model covering organizations, assets, systems,
                vendors, data types, controls, evidence, risks, actions,
                policies, and reviews. Frameworks plug into this system as
                views, overlays, and rule packs.
              </p>
              <p className="t-body">
                This is the architectural foundation that enables everything
                Regulativa does — evidence reuse, cross-framework mapping,
                automated crosswalks, and defensible automation.
              </p>
            </div>
          </div>
          <div className="mt-12 max-w-4xl mx-auto">
            <RegulativaFrameworkPacks />
          </div>
        </Container>
      </Section>

      {/* Six Core Layers */}
      <Section tone="dark">
        <Container>
          <div className="max-w-3xl">
            <h2 className="t-section balance text-[var(--ink-on-dark)]">
              What Regulativa does.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {CORE_LAYERS.map((layer) => (
              <Card key={layer.index} tone="dark">
                <div className="t-label font-mono text-[var(--ink-on-dark-muted)]">
                  {layer.index}
                </div>
                <h3 className="t-feature mt-3 balance text-[var(--ink-on-dark)]">
                  {layer.title}
                </h3>
                <p className="t-small mt-4 text-[var(--ink-on-dark-soft)]">
                  {layer.body}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Evidence Reuse */}
      <Section tone="dark-raised">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="t-section balance text-[var(--ink-on-dark)]">
              One evidence layer. Every framework view.
            </h2>
            <div className="mt-8 space-y-5 text-[var(--ink-on-dark-soft)]">
              <p className="t-body">
                A single piece of evidence — MFA enforcement, access reviews,
                vendor reviews, incident response records, backup restore tests,
                secure change records — supports multiple frameworks. Regulativa
                treats evidence as reusable infrastructure, not
                one-framework-only attachments.
              </p>
              <p className="t-body">
                Evidence can link to multiple controls. Controls can link to
                multiple frameworks. Stale evidence degrades readiness across
                all linked views. Confidence is explicit. Assumptions are never
                auto-promoted to evidence.
              </p>
              <p className="t-body">
                This is where customers see the efficiency. Instead of repeating
                work for each audit or framework, you build one evidence base
                and reuse it intelligently.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Framework Coverage */}
      <Section tone="dark">
        <Container>
          <div className="max-w-3xl">
            <h2 className="t-section balance text-[var(--ink-on-dark)]">
              Frameworks supported.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {TIERS.map((tier) => (
              <Card key={tier.title} tone="dark">
                <h3 className="t-feature balance text-[var(--ink-on-dark)]">
                  {tier.title}
                </h3>
                <ul className="mt-5 space-y-2 text-[var(--ink-on-dark-soft)]">
                  {tier.items.map((item) => (
                    <li key={item} className="t-small flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-[0.6em] inline-block h-1 w-1 shrink-0 rounded-full bg-[var(--bronze)]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Product Guardrails */}
      <Section tone="dark-raised">
        <Container>
          <div className="max-w-3xl">
            <p className="t-lead text-[var(--ink-on-dark-soft)]">
              These are product rules, not marketing claims. They are enforced
              in the codebase.
            </p>
          </div>
          <ul className="mt-10 max-w-3xl divide-y divide-[var(--obsidian-line)] border-y border-[var(--obsidian-line)]">
            {GUARDRAILS.map((rule) => (
              <li key={rule} className="flex gap-4 py-4">
                <span
                  aria-hidden="true"
                  className="mt-[0.55em] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--bronze)]"
                />
                <span className="t-body text-[var(--ink-on-dark)]">
                  {rule}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Suite Integration */}
      <Section tone="dark">
        <Container>
          <div className="max-w-3xl">
            <h2 className="t-section balance text-[var(--ink-on-dark)]">
              Regulativa converts technical state into governance meaning.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {SUITE_INTEGRATIONS.map((item) => (
              <Card key={item.title} tone="dark">
                <h3 className="t-feature balance text-[var(--ink-on-dark)]">
                  {item.title}
                </h3>
                <p className="t-small mt-4 text-[var(--ink-on-dark-soft)]">
                  {item.body}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Waitlist CTA */}
      <CTABlock
        tone="dark"
        title="Join the early access waitlist."
        body="Regulativa enters early access in 2026. We are prioritizing onboarding for mid-market companies pursuing ISO 27001 or SOC 2 certification, and organizations subject to NIS2 or DORA."
        primary={{ label: "Join Waitlist", href: "/company/contact#waitlist" }}
      />
    </>
  );
}

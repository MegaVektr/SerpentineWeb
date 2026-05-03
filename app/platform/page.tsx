import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { SplitHero } from "@/components/marketing/SplitHero";
import { CTABlock } from "@/components/marketing/CTABlock";
import { FourProductGrid } from "@/components/marketing/FourProductGrid";
import { DashCanonicalModel } from "@/components/marketing/DashCanonicalModel";
import { CanonicalDataModel } from "@/components/diagrams/CanonicalDataModel";
import { SecurityLifecycle } from "@/components/diagrams/SecurityLifecycle";
import { JsonLd, softwareApplication, breadcrumb } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "The Serpentine Platform — Unified Security Architecture",
  description:
    "One data model. Four disciplines. See how Serpentine unifies audit, offense, hardening, and governance into a coherent security operating system.",
  path: "/platform",
});

const HERO_SUB =
  "Serpentine is not four products sold together. It is one platform built as a system — a canonical data model, a unified evidence layer, and four specialized operational interfaces. Odbrana for audit. Napad for offense. Postava for hardening. Regulativa for governance.";

const LIFECYCLE_STAGES = [
  {
    index: "01",
    product: "POSTAVA",
    title: "Deploy & Harden",
    body:
      "Serpentine starts at the infrastructure layer. Postava provisions and hardens Linux servers with a single command — firewall, SSH, kernel, intrusion detection, supply-chain verification. Hardening state becomes evidence.",
  },
  {
    index: "02",
    product: "ODBRANA",
    title: "Audit & Discover",
    body:
      "Odbrana's nine scanner modules continuously audit web applications, code, cloud, containers, APIs, mobile, blockchain, AI/ML, and network infrastructure. Findings are prioritized, explained, and mapped to controls.",
  },
  {
    index: "03",
    product: "NAPAD",
    title: "Validate & Test",
    body:
      "Napad takes Odbrana's findings from theoretical to exploitable. Agentic attack workflows validate whether discovered vulnerabilities are actually reachable, actually exploitable, actually worth engineering time. No more “critical” findings behind three layers of network isolation.",
  },
  {
    index: "04",
    product: "REGULATIVA",
    title: "Govern & Prove",
    body:
      "Regulativa converts all of the above into governance meaning. Every hardening configuration becomes evidence for a control. Every audit finding becomes a tracked risk. Every validation becomes proof of control effectiveness. Frameworks — ISO 27001, SOC 2, NIST CSF, GDPR — are views into the same underlying truth, not parallel universes.",
  },
];

const CAPABILITIES = [
  {
    title: "Evidence reuse across frameworks",
    body:
      "One piece of evidence — MFA enforcement, access review, incident response record, backup test — supports multiple frameworks. Build it once, reference it everywhere.",
  },
  {
    title: "Context-aware findings",
    body:
      "Odbrana's findings are enriched by Postava's hardening state. Napad's exploits are validated against Regulativa's risk register. Every discovery lands in a context that tells you what it means.",
  },
  {
    title: "Compounding operational leverage",
    body:
      "Every scan, every hardening operation, every validation adds to a shared operational state. The longer you use Serpentine, the richer its understanding of your environment becomes.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <JsonLd
        data={softwareApplication({
          name: "Serpentine",
          description:
            "Unified security platform for audit, offense, hardening, and governance.",
          url: "https://spnt.io/platform",
        })}
      />
      <JsonLd
        data={breadcrumb([
          { name: "Home", url: "https://spnt.io" },
          { name: "Platform", url: "https://spnt.io/platform" },
        ])}
      />

      {/* Hero */}
      <SplitHero
        eyebrow="THE PLATFORM"
        h1="Four disciplines. One architecture."
        sub={HERO_SUB}
        ctaPrimary={{ label: "Book a Demo", href: "/company/contact#demo" }}
        ctaSecondary={{
          label: "Read the Methodology →",
          href: "/methodology",
        }}
        right={<DashCanonicalModel />}
      />

      {/* Section: The Integration Theater Problem */}
      <Section tone="dark">
        <h2 className="t-section balance text-[var(--ink-on-dark)]">
          Why most &ldquo;platforms&rdquo; are not platforms.
        </h2>
        <div className="mt-8 space-y-5 max-w-3xl">
          <p className="t-body text-[var(--ink-on-dark-soft)]">
            Security teams today operate between five, ten, sometimes twenty
            distinct security tools. Each claims to integrate with the others.
            Most do not. What they offer is dashboards that aggregate alerts
            from systems that were never designed to work together — a practice
            the industry calls integration theater.
          </p>
          <p className="t-body text-[var(--ink-on-dark-soft)]">
            The symptoms are familiar. Findings from one tool cannot be
            cross-referenced with evidence in another. The same control is
            documented three times for three different frameworks. A
            vulnerability discovered by the audit tool has no easy path to the
            pentest team that could validate it, or to the hardening workflow
            that could remediate it, or to the compliance register that should
            reference it.
          </p>
          <p className="t-body text-[var(--ink-on-dark-soft)]">
            Serpentine was built to end this. Not through better integrations —
            through better architecture.
          </p>
        </div>
      </Section>

      {/* Section: Canonical Data Model */}
      <Section tone="dark-raised">
        <h2 className="t-section balance text-[var(--ink-on-dark)]">
          One data model. Every product speaks it.
        </h2>
        <div className="mt-8 space-y-5 max-w-3xl">
          <p className="t-body text-[var(--ink-on-dark-soft)]">
            At the core of Serpentine is a canonical data model covering
            assets, vulnerabilities, controls, evidence, risks, vendors,
            policies, and actions. Every product writes into this model and
            reads from it.
          </p>
          <p className="t-body text-[var(--ink-on-dark-soft)]">
            When Odbrana discovers a misconfigured S3 bucket, the finding is an
            asset-attached vulnerability with a risk rating and a suggested
            control. When Napad validates that finding through an active
            exploit, the validation attaches directly to the same finding — not
            as a separate record in a separate system. When Postava remediates
            the underlying issue, the hardening evidence closes the finding
            and updates the linked controls. When Regulativa generates a
            readiness report, it pulls from the same underlying data. Because
            there is no other data.
          </p>
        </div>
        <div className="mt-12 max-w-4xl mx-auto">
          <CanonicalDataModel />
        </div>
      </Section>

      {/* Section: The Security Lifecycle */}
      <Section tone="dark">
        <h2 className="t-section balance text-[var(--ink-on-dark)]">
          Security as a continuous loop.
        </h2>
        <div className="mt-12">
          <SecurityLifecycle />
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {LIFECYCLE_STAGES.map((stage) => (
            <Card key={stage.product} tone="dark">
              <div className="t-label text-[var(--ink-on-dark-muted)]">
                {stage.index} · {stage.product}
              </div>
              <h3 className="t-feature mt-3 balance text-[var(--ink-on-dark)]">
                {stage.title}
              </h3>
              <p className="t-small mt-4 text-[var(--ink-on-dark-soft)]">
                {stage.body}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Section: What Unified Architecture Enables */}
      <Section tone="dark-raised">
        <h2 className="t-section balance text-[var(--ink-on-dark)]">
          What one architecture actually unlocks.
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {CAPABILITIES.map((cap) => (
            <Card key={cap.title} tone="dark">
              <h3 className="t-feature balance text-[var(--ink-on-dark)]">
                {cap.title}
              </h3>
              <p className="t-body mt-4 text-[var(--ink-on-dark-soft)]">
                {cap.body}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Section: Products Overview */}
      <Section tone="dark">
        <h2 className="t-section balance text-[var(--ink-on-dark)]">
          The four products.
        </h2>
        <div className="mt-12">
          <FourProductGrid tone="dark" />
        </div>
      </Section>

      {/* Final CTA */}
      <CTABlock
        tone="dark"
        title="See the platform live."
        body="A thirty-minute demo with the engineers who built it. We walk you through the canonical data model, run a live scan, and answer every architecture question."
        primary={{ label: "Book a Demo", href: "/company/contact#demo" }}
        secondary={{ label: "Read the Methodology →", href: "/methodology" }}
      />
    </>
  );
}

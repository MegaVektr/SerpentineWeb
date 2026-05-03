import type { Metadata } from "next";
import {
  Globe,
  Code2,
  Cloud,
  Blocks,
  Smartphone,
  Webhook,
  Brain,
  Network,
  Package,
} from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, softwareApplication } from "@/lib/schema";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ArrowLink } from "@/components/ui/Link";
import { CTABlock } from "@/components/marketing/CTABlock";
import { SplitHero } from "@/components/marketing/SplitHero";
import { DashFindings } from "@/components/marketing/DashFindings";

export const metadata: Metadata = pageMetadata({
  title: "Odbrana — Agentic Security Audit Platform",
  description:
    "Nine scanner modules. One platform. Audit web, code, cloud, containers, APIs, mobile, blockchain, AI/ML, and network infrastructure with prioritized remediation.",
  path: "/products/odbrana",
});

type ScannerCard = {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  name: string;
  description: string;
};

const scanners: ScannerCard[] = [
  {
    icon: Globe,
    name: "Web Scan",
    description:
      "Dynamic application testing, vulnerability scanning, and deep injection testing. OWASP Top 10 coverage with authenticated and unauthenticated flows.",
  },
  {
    icon: Code2,
    name: "Code Scan",
    description:
      "Static application security testing, secrets detection, and dependency vulnerability analysis. Language-agnostic, CI-compatible.",
  },
  {
    icon: Cloud,
    name: "Cloud Scan",
    description:
      "Cloud security posture management across AWS, GCP, Azure, and OVH. Misconfiguration detection, compliance benchmarks, attack-path analysis.",
  },
  {
    icon: Blocks,
    name: "Blockchain Scan",
    description:
      "Smart contract security for Solidity and Rust contracts. Reentrancy, access control, gas optimization, and common DeFi exploit patterns.",
  },
  {
    icon: Smartphone,
    name: "Mobile Scan",
    description:
      "APK and IPA binary analysis. Permissions auditing, hardcoded secrets, insecure storage, and certificate pinning verification.",
  },
  {
    icon: Webhook,
    name: "API Scan",
    description:
      "REST and GraphQL API security. OWASP API Top 10, authentication bypass detection, JWT validation flaws, rate-limit analysis.",
  },
  {
    icon: Brain,
    name: "AI/ML Scan",
    description:
      "LLM safety testing, prompt injection detection, model supply chain verification, and adversarial robustness evaluation.",
  },
  {
    icon: Network,
    name: "Network Scan",
    description:
      "Port scanning, service fingerprinting, vulnerability assessment, and TLS configuration analysis.",
  },
  {
    icon: Package,
    name: "Container Scan",
    description:
      "Docker image scanning, Kubernetes manifest auditing, Helm chart validation, SBOM generation.",
  },
];

const differentiators: { title: string; body: string }[] = [
  {
    title: "Agentic reasoning, not checklist scanning",
    body: "Odbrana uses AI reasoning to contextualize findings, not to replace scanners. A reentrancy vulnerability in an unused function is not the same as one in a deposit handler. Odbrana understands the difference.",
  },
  {
    title: "Full-surface coverage in one platform",
    body: "Instead of Snyk for code, Wiz for cloud, Acunetix for web, Trivy for containers, and MobSF for mobile — one platform, one data model, one pane of glass.",
  },
  {
    title: "Reports engineers act on",
    body: "Every finding includes what it is, why it matters, where it lives, how to fix it, and what the fix looks like. No raw CVE dumps. No forty-thousand-line reports.",
  },
  {
    title: "Unit economics that scale with you",
    body: "Consumption-based pricing reflects actual scan cost. An enterprise with three hundred subdomains does not pay thirty times what a startup with ten subdomains pays.",
  },
];

const personas: { title: string; body: string }[] = [
  {
    title: "AppSec & Security Engineers",
    body: "Continuous audit across production and staging.",
  },
  {
    title: "DevSecOps Teams",
    body: "CI-integrated scans, gated deployments.",
  },
  {
    title: "CISOs",
    body: "Organization-wide posture visibility, executive reporting.",
  },
  {
    title: "MSSPs & Consultancies",
    body: "Multi-tenant dashboards, white-label reports.",
  },
];

const suiteCards: { title: string; body: string }[] = [
  {
    title: "Postava",
    body: "Postava applies Odbrana's infrastructure findings as hardening configurations.",
  },
  {
    title: "Napad",
    body: "Napad validates Odbrana's vulnerability findings through active exploitation.",
  },
  {
    title: "Regulativa",
    body: "Regulativa maps Odbrana's findings to compliance controls and tracks remediation evidence.",
  },
];

function ReportPreview() {
  return (
    <Card tone="ghost-on-dark" className="mx-auto mt-10 w-full max-w-2xl p-8 sm:p-10">
      <div
        aria-label="Stylized preview of an Odbrana PDF report"
        role="img"
      >
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-[var(--obsidian-line)] pb-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-sm bg-[var(--bronze)]" />
            <div className="h-2 w-24 rounded-sm bg-[var(--ink-on-dark)]/80" />
          </div>
          <div className="h-2 w-16 rounded-sm bg-[var(--ink-on-dark-muted)]" />
        </div>

        {/* Title block */}
        <div className="mt-6 space-y-2">
          <div className="h-3 w-2/3 rounded-sm bg-[var(--ink-on-dark)]/85" />
          <div className="h-2 w-1/2 rounded-sm bg-[var(--ink-on-dark-muted)]" />
        </div>

        {/* Executive summary stripe */}
        <div className="mt-6 grid grid-cols-3 gap-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="rounded-[var(--r-md)] border border-[var(--obsidian-line)] p-3"
            >
              <div className="h-2 w-10 rounded-sm bg-[var(--ink-on-dark-muted)]" />
              <div className="mt-2 h-3 w-12 rounded-sm bg-[var(--ink-on-dark)]/85" />
            </div>
          ))}
        </div>

        {/* Findings list */}
        <div className="mt-7 space-y-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-[var(--r-md)] border border-[var(--obsidian-line)] p-3"
            >
              <div className="h-6 w-1 rounded-sm bg-[var(--bronze)]" />
              <div className="flex-1 space-y-1.5">
                <div className="h-2.5 w-3/4 rounded-sm bg-[var(--ink-on-dark)]/75" />
                <div className="h-2 w-1/2 rounded-sm bg-[var(--ink-on-dark-muted)]" />
              </div>
              <div className="h-2 w-10 rounded-sm bg-[var(--ink-on-dark-muted)]" />
            </div>
          ))}
        </div>

        {/* Expanded finding */}
        <div className="mt-5 rounded-[var(--r-md)] border border-[var(--obsidian-line-strong)] p-4">
          <div className="h-2.5 w-1/3 rounded-sm bg-[var(--ink-on-dark)]/80" />
          <div className="mt-3 space-y-2">
            <div className="h-2 w-full rounded-sm bg-[var(--ink-on-dark-soft)]/40" />
            <div className="h-2 w-11/12 rounded-sm bg-[var(--ink-on-dark-soft)]/40" />
            <div className="h-2 w-9/12 rounded-sm bg-[var(--ink-on-dark-soft)]/40" />
          </div>
        </div>

        {/* Compliance mapping footer */}
        <div className="mt-6 flex items-center justify-between border-t border-[var(--obsidian-line)] pt-4">
          <div className="flex gap-2">
            <div className="h-2 w-12 rounded-sm bg-[var(--ink-on-dark-muted)]" />
            <div className="h-2 w-12 rounded-sm bg-[var(--ink-on-dark-muted)]" />
            <div className="h-2 w-12 rounded-sm bg-[var(--ink-on-dark-muted)]" />
          </div>
          <div className="h-2 w-16 rounded-sm bg-[var(--ink-on-dark-muted)]" />
        </div>
      </div>
    </Card>
  );
}

export default function OdbranaPage() {
  return (
    <>
      <JsonLd
        data={softwareApplication({
          name: "Odbrana",
          description:
            "Agentic security audit platform — nine specialized scanner modules in one platform.",
          url: "https://spnt.io/products/odbrana",
        })}
      />

      {/* 1. Hero */}
      <SplitHero
        eyebrow="01 · ODBRANA — DEFENSE — AVAILABLE NOW"
        h1="The audit platform that covers your actual surface."
        sub="Nine specialized scanner modules across one unified platform. Web, code, cloud, containers, APIs, mobile, blockchain, AI/ML, and network infrastructure — audited continuously, prioritized intelligently, reported clearly."
        ctaPrimary={{ label: "Book a Demo", href: "/company/contact#demo" }}
        ctaSecondary={{
          label: "Request a sample report →",
          href: "/company/contact#sales",
        }}
        right={<DashFindings />}
      />

      {/* 2. Nine Scanner Modules */}
      <Section tone="dark">
        <Container>
          <div className="max-w-3xl">
            <h2 className="t-section text-balance text-[var(--ink-on-dark)]">
              Nine scanners. One platform. Full-surface coverage.
            </h2>
            <p className="t-lead mt-5 text-[var(--ink-on-dark-soft)]">
              Most vulnerability scanners specialize. Odbrana covers the complete digital attack surface of a modern company in one platform — so findings are comparable, prioritization is cross-cutting, and evidence reuses across audit cycles.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {scanners.map((s) => {
              const Icon = s.icon;
              return (
                <Card key={s.name} tone="dark">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-[var(--r-md)] bg-[var(--bronze-soft)] text-[var(--bronze)]">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>
                  <h3 className="t-feature text-[var(--ink-on-dark)]">
                    {s.name}
                  </h3>
                  <p className="t-small mt-3 text-[var(--ink-on-dark-soft)]">
                    {s.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 3. Differentiation */}
      <Section tone="dark-raised">
        <Container>
          <h2 className="t-section text-balance max-w-3xl text-[var(--ink-on-dark)]">
            Where Odbrana diverges from the pack.
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {differentiators.map((d) => (
              <Card key={d.title} tone="dark">
                <h3 className="t-feature text-[var(--ink-on-dark)]">
                  {d.title}
                </h3>
                <p className="t-body mt-3 text-[var(--ink-on-dark-soft)]">
                  {d.body}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Sample Output */}
      <Section tone="dark">
        <Container>
          <div className="max-w-3xl">
            <h2 className="t-section text-balance text-[var(--ink-on-dark)]">
              What Odbrana produces.
            </h2>
            <p className="t-lead mt-5 text-[var(--ink-on-dark-soft)]">
              Every Odbrana audit produces a structured, versioned report — available as PDF for executive review, as JSON for programmatic consumption, and as a live dashboard for ongoing monitoring. Reports are watermarked, signed, and verifiable.
            </p>
          </div>

          <ReportPreview />

          <div className="mt-8 text-center">
            <ArrowLink
              href="/company/contact#sales"
              tone="on-dark"
            >
              Request a full sample report
            </ArrowLink>
          </div>
        </Container>
      </Section>

      {/* 5. Who Uses Odbrana */}
      <Section tone="dark-raised">
        <Container>
          <h2 className="t-section text-balance max-w-3xl text-[var(--ink-on-dark)]">
            Who uses Odbrana.
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {personas.map((p) => (
              <Card key={p.title} tone="dark">
                <h3 className="t-feature text-[var(--ink-on-dark)]">
                  {p.title}
                </h3>
                <p className="t-body mt-3 text-[var(--ink-on-dark-soft)]">
                  {p.body}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. Suite Integration */}
      <Section tone="dark">
        <Container>
          <h2 className="t-section text-balance max-w-3xl text-[var(--ink-on-dark)]">
            Odbrana in the Serpentine suite.
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {suiteCards.map((c) => (
              <Card key={c.title} tone="dark">
                <h3 className="t-feature text-[var(--ink-on-dark)]">
                  {c.title}
                </h3>
                <p className="t-body mt-3 text-[var(--ink-on-dark-soft)]">
                  {c.body}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* 7. Final CTA */}
      <CTABlock
        tone="dark"
        title="Run Odbrana on your surface."
        body="Book a demo and we will scan an asset you control during the call. Real findings, real report, no commitment."
        primary={{ label: "Book a Demo", href: "/company/contact#demo" }}
        secondary={{
          label: "Request Sample Report →",
          href: "/company/contact#sales",
        }}
      />
    </>
  );
}

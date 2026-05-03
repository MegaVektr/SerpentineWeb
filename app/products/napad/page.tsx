import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SplitHero } from "@/components/marketing/SplitHero";
import { CTABlock } from "@/components/marketing/CTABlock";
import { DashAttackChain } from "@/components/marketing/DashAttackChain";
import { JsonLd, softwareApplication } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Napad — Agentic Offensive Security Platform",
  description:
    "Agentic penetration testing for AppSec engineers and red teams. Structured attack workflows, continuous validation, automated reporting. Beta access available.",
  path: "/products/napad",
});

const capabilities: Array<{ lead: string; rest: string }> = [
  {
    lead: "Agentic attack chain construction.",
    rest: "Napad reasons about target architecture, enumerates plausible attack paths, and executes them in structured playbooks.",
  },
  {
    lead: "Intercepting proxy with AI-assisted attack suggestion.",
    rest: "The classic Burp workflow, plus an agent that suggests next steps based on current request and response context.",
  },
  {
    lead: "Continuous validation of Odbrana findings.",
    rest: "Every finding from Odbrana can be queued for Napad to validate. Theoretical vulnerabilities become confirmed exploits or dismissed false positives.",
  },
  {
    lead: "Structured engagement management.",
    rest: "Scope definition, rules of engagement, evidence collection, report generation — all in one platform.",
  },
  {
    lead: "Collaborative red team workspace.",
    rest: "Multiple operators share context, artifacts, and findings in real time.",
  },
  {
    lead: "Automated report generation.",
    rest: "Engagement findings compile into formatted reports with executive summaries, technical detail sections, and reproduction steps.",
  },
];

const reasons: Array<{ title: string; body: string }> = [
  {
    title: "Built for operators who know what they are doing",
    body: 'Napad is not "run a button and get a pentest report." It is an operational interface for experienced practitioners, with agentic capabilities that multiply their throughput.',
  },
  {
    title: "Integration with Odbrana closes the validation gap",
    body: 'Every "critical" finding that never gets exploited is wasted engineering attention. Napad validates Odbrana\'s findings so remediation priorities reflect real exploitability.',
  },
  {
    title: "Structured for compliance evidence",
    body: "Napad engagements produce auditor-ready reports with cryptographic timestamping, evidence preservation, and methodology documentation. Feed directly into Regulativa as control validation evidence.",
  },
  {
    title: "Agency-friendly",
    body: "Pentest firms and MSPs can run multiple simultaneous engagements in isolated workspaces, with white-label reporting and per-client access controls.",
  },
];

const personas: Array<{ title: string; body: string }> = [
  {
    title: "Internal AppSec / Security Engineers",
    body: "Continuous offensive validation",
  },
  {
    title: "Red Teams",
    body: "Structured assessments at scale",
  },
  {
    title: "Pentest Agencies",
    body: "Scale engagement capacity per operator",
  },
  {
    title: "Bug Bounty Hunters",
    body: "Organize recon and exploitation workflows",
  },
];

export default function NapadPage() {
  return (
    <>
      <JsonLd
        data={softwareApplication({
          name: "Napad",
          description:
            "Agentic offensive security platform — structured attack workflows, continuous validation.",
          url: "https://spnt.io/products/napad",
        })}
      />

      <SplitHero
        eyebrow="02 · NAPAD — OFFENSE — PRIVATE BETA"
        h1="Offensive security, with agentic reasoning."
        sub="Napad combines the workflow depth of Burp Suite with the reasoning capability of modern AI agents. Structured attack playbooks, continuous validation of defender assumptions, automated report generation — built for AppSec engineers and red teams who have outgrown point tools."
        ctaPrimary={{ label: "Request Beta Access", href: "/company/contact#waitlist" }}
        ctaSecondary={{ label: "View the Methodology →", href: "/methodology" }}
        right={<DashAttackChain />}
      />

      {/* The Problem */}
      <Section tone="dark">
        <Container size="narrow">
          <h2 className="t-section balance text-[var(--ink-on-dark)]">
            Pentesting is broken in two directions.
          </h2>
          <div className="mt-8 space-y-5 t-lead text-[var(--ink-on-dark-soft)]">
            <p>
              On one side: legacy tools that require senior operators and
              thousands of hours of manual work to produce meaningful coverage.
              On the other: &ldquo;automated pentesting&rdquo; vendors that run
              templated playbooks and call the output a red team engagement.
            </p>
            <p>
              Neither actually solves the problem, which is that security teams
              need continuous, high-quality offensive validation at a scale
              their headcount cannot deliver. Napad is our answer.
            </p>
          </div>
        </Container>
      </Section>

      {/* Capabilities */}
      <Section tone="dark-raised">
        <Container>
          <h2 className="t-section balance max-w-3xl text-[var(--ink-on-dark)]">
            What Napad does.
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {capabilities.map((c) => (
              <Card key={c.lead} tone="dark">
                <h3 className="t-body-h text-[var(--ink-on-dark)]">{c.lead}</h3>
                <p className="t-small mt-3 text-[var(--ink-on-dark-soft)]">
                  {c.rest}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Napad */}
      <Section tone="dark">
        <Container>
          <h2 className="t-section balance max-w-3xl text-[var(--ink-on-dark)]">
            Why Napad.
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
            {reasons.map((r) => (
              <div key={r.title}>
                <h3 className="t-body-h text-[var(--ink-on-dark)]">{r.title}</h3>
                <p className="t-body mt-3 text-[var(--ink-on-dark-soft)]">
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Who It Is For */}
      <Section tone="dark-raised">
        <Container>
          <h2 className="t-section balance max-w-3xl text-[var(--ink-on-dark)]">
            Who Napad is for.
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {personas.map((p) => (
              <Card key={p.title} tone="dark">
                <h3 className="t-body-h text-[var(--ink-on-dark)]">{p.title}</h3>
                <p className="t-small mt-3 text-[var(--ink-on-dark-soft)]">
                  {p.body}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Suite Integration */}
      <Section tone="dark">
        <Container size="narrow">
          <h2 className="t-section balance text-[var(--ink-on-dark)]">
            Napad in the Serpentine suite.
          </h2>
          <p className="t-lead mt-8 text-[var(--ink-on-dark-soft)]">
            Napad does not operate in isolation. It validates Odbrana findings
            so remediation work targets real exploitability rather than
            theoretical risk. It tests Postava-hardened systems to confirm that
            controls hold under adversarial pressure. And it feeds engagement
            artifacts — methodology, evidence, timestamps — into Regulativa as
            control validation evidence auditors can rely on.
          </p>
        </Container>
      </Section>

      {/* Beta Access CTA */}
      <CTABlock
        tone="dark"
        title="Request beta access."
        body="Napad is currently in invite-only beta. Tell us about your use case and we will evaluate access."
        primary={{
          label: "Request Beta Access",
          href: "/company/contact#waitlist",
        }}
      />
    </>
  );
}

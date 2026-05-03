import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { AtmosphericHero } from "@/components/marketing/AtmosphericHero";
import { CTABlock } from "@/components/marketing/CTABlock";
import { JsonLd, breadcrumb } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Serpentine for Financial Services — DORA-aligned",
  description:
    "DORA-aligned security platform for financial services. ICT risk management, threat-led testing, third-party risk, on sovereign EU infrastructure.",
  path: "/industries/fintech",
});

const FRAMEWORKS = [
  {
    name: "DORA (Regulation (EU) 2022/2554)",
    note: "ICT risk management, incident reporting, operational resilience testing, and third-party risk for EU financial entities.",
  },
  {
    name: "PSD2",
    note: "Strong Customer Authentication and Regulatory Technical Standards on secure communication for payment services.",
  },
  {
    name: "PCI-DSS 4.0",
    note: "Cardholder data environment scoping, segmentation, and continuous control validation against the new requirements.",
  },
  {
    name: "ISO 27001:2022",
    note: "Information security management baseline expected by supervisors and counterparty due-diligence questionnaires.",
  },
  {
    name: "NIST Cybersecurity Framework",
    note: "A common operating language for risk-based controls when working with US-domiciled counterparties and auditors.",
  },
  {
    name: "SWIFT Customer Security Programme",
    note: "Mandatory and advisory controls for institutions connected to the SWIFT network.",
  },
];

const PRODUCTS = [
  {
    name: "Postava",
    role:
      "Hardens the Linux estate that hosts payment, core-banking, and trading workloads. Configuration baselines feed directly into DORA Article 9 protection-and-prevention evidence and PCI-DSS Requirement 2 system-hardening artifacts.",
  },
  {
    name: "Odbrana",
    role:
      "Provides continuous audit of applications, APIs, cloud accounts, and source code. Findings feed the ICT risk register required under DORA Articles 6-8 and the vulnerability management evidence expected under PCI-DSS Requirement 6 and Requirement 11.",
  },
  {
    name: "Napad",
    role:
      "Supports threat-led penetration testing aligned with the DORA TLPT regime (Articles 26-27) and TIBER-EU. Engagements are scoped to critical or important functions, executed against production-like environments, and reported with the rigor supervisors expect.",
  },
  {
    name: "Regulativa",
    role:
      "Holds the ICT third-party register required by DORA Article 28, the incident reporting workflow for the 24-hour, 72-hour, and one-month timelines under Article 19, and the policy and control set across DORA, PCI-DSS, and ISO 27001.",
  },
];

const PATTERNS = [
  "Banks and e-money institutions preparing first-cycle DORA evidence and the ICT third-party register required from January 2025.",
  "Payment providers running PCI-DSS 4.0 transition with continuous validation rather than annual snapshot audits.",
  "Trading platforms and brokers scoping TLPT under DORA Article 26 with a single pane for offensive findings, validation, and remediation.",
  "Fintech subsidiaries of regulated groups inheriting parent-level controls and needing a sovereign EU platform their group risk function will accept.",
];

export default function FintechIndustryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumb([
          { name: "Home", url: "https://spnt.io" },
          { name: "Industries", url: "https://spnt.io/industries" },
          {
            name: "Financial Services",
            url: "https://spnt.io/industries/fintech",
          },
        ])}
      />

      <AtmosphericHero
        image="/images/hero-fintech.jpg"
        imageAlt="Financial trading floor with multiple displays"
        eyebrow="INDUSTRIES · FINANCIAL SERVICES"
        h1="Serpentine for Financial Services"
        sub="ICT risk management, threat-led testing, and third-party oversight on sovereign EU infrastructure. Built for entities supervised under DORA, PSD2, PCI-DSS, and the frameworks that surround them."
      />

      {/* Pressures */}
      <Section tone="light">
        <Container size="narrow">
          <h2 className="t-section balance text-[var(--ink)]">
            The pressures this industry faces.
          </h2>
          <div className="mt-8 space-y-5 text-[var(--ink-soft)]">
            <p className="t-body">
              The Digital Operational Resilience Act has been applicable since
              January 2025. Articles 5 to 15 set the ICT risk management
              framework that every in-scope financial entity must operate.
              Articles 17 to 23 govern major ICT-related incident
              classification and reporting, including the 24-hour early
              warning, the 72-hour notification, and the one-month final
              report. Articles 24 to 27 introduce digital operational
              resilience testing, with threat-led penetration testing required
              for the largest and most critical entities. Articles 28 to 44
              regulate ICT third-party risk, including the register of
              information that supervisors can request at any time.
            </p>
            <p className="t-body">
              On top of DORA the existing payments stack still applies. PSD2
              and the EBA Regulatory Technical Standards on Strong Customer
              Authentication continue to govern payment initiation and account
              access. PCI-DSS 4.0 has tightened authenticated scanning,
              targeted risk analysis, and continuous control validation. SWIFT
              CSP attestation cycles run in parallel for connected
              institutions.
            </p>
            <p className="t-body">
              National supervisors layer their own expectations on top.
              Singapore&rsquo;s MAS Technology Risk Management Guidelines, the
              UK&rsquo;s FCA and PRA Operational Resilience policy statements,
              and equivalents elsewhere translate the same themes into local
              language: identify important business services, set impact
              tolerances, evidence the ability to remain within them under
              severe but plausible scenarios.
            </p>
            <p className="t-body">
              For US-listed entities Sarbanes-Oxley adds an ICT general
              controls dimension. For groups operating cross-border the result
              is a multi-framework problem solved today with multiple parallel
              tools and multiple parallel evidence libraries.
            </p>
          </div>
        </Container>
      </Section>

      {/* What changes when unified */}
      <Section tone="light-raised">
        <Container size="narrow">
          <h2 className="t-section balance text-[var(--ink)]">
            What changes when security is unified.
          </h2>
          <div className="mt-8 space-y-5 text-[var(--ink-soft)]">
            <p className="t-body">
              Serpentine collapses the parallel evidence libraries. The DORA
              Article 28 third-party register, the PCI-DSS scope diagram, the
              ISO 27001 statement of applicability, and the SWIFT CSP
              attestation all read from the same canonical asset, control, and
              evidence model. A change in one is reflected in the others
              without duplicate data entry.
            </p>
            <p className="t-body">
              Threat-led testing under DORA Articles 26 and 27 becomes a
              repeatable workflow rather than an annual one-off. Napad runs
              agentic offensive scenarios against critical or important
              functions, in scope and out of scope according to the testing
              brief, and the resulting findings flow into the same risk
              register that supervisors will look at.
            </p>
            <p className="t-body">
              Incident reporting workflows live next to detection. When an
              incident is classified as major under the Article 18 criteria,
              the 24-hour, 72-hour, and one-month timelines run from a single
              dashboard with the templates, classifications, and severity
              fields the supervisor expects, rather than reconstructed by hand
              under pressure.
            </p>
            <p className="t-body">
              Hardening of the underlying infrastructure is part of the same
              loop. Postava records the hardened state of every Linux host in
              the cardholder data environment and the ICT estate generally,
              and that record is what the auditor and the supervisor see.
            </p>
          </div>
        </Container>
      </Section>

      {/* Frameworks */}
      <Section tone="light">
        <Container>
          <div className="max-w-3xl">
            <h2 className="t-section balance text-[var(--ink)]">
              Frameworks we cover for financial services.
            </h2>
          </div>
          <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2">
            {FRAMEWORKS.map((f) => (
              <li
                key={f.name}
                className="pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--bronze-deep-on-light)]"
              >
                <div className="t-feature text-[var(--ink)]">{f.name}</div>
                <div className="t-body mt-1 text-[var(--ink-soft)]">
                  {f.note}
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Products map */}
      <Section tone="dark">
        <Container>
          <div className="max-w-3xl">
            <h2 className="t-section balance text-[var(--ink-on-dark)]">
              How the four products map.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {PRODUCTS.map((p) => (
              <Card key={p.name} tone="dark">
                <h3 className="t-feature balance text-[var(--ink-on-dark)]">
                  {p.name}
                </h3>
                <p className="t-body mt-4 text-[var(--ink-on-dark-soft)]">
                  {p.role}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Patterns */}
      <Section tone="light-raised">
        <Container size="narrow">
          <h2 className="t-section balance text-[var(--ink)]">
            Common patterns we see.
          </h2>
          <ul className="mt-8 space-y-4">
            {PATTERNS.map((p) => (
              <li
                key={p}
                className="t-body text-[var(--ink-soft)] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--bronze-deep-on-light)]"
              >
                {p}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Final CTA */}
      <CTABlock
        tone="dark"
        title="Book a demo for financial services."
        body="A walkthrough of DORA ICT risk management, threat-led testing, and third-party register workflows on the Serpentine platform."
        primary={{ label: "Book a Demo", href: "/company/contact#demo" }}
        secondary={{ label: "Talk to Sales", href: "/company/contact#sales" }}
      />
    </>
  );
}

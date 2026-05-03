import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { AtmosphericHero } from "@/components/marketing/AtmosphericHero";
import { CTABlock } from "@/components/marketing/CTABlock";
import { JsonLd, breadcrumb } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Serpentine for Critical Infrastructure — NIS2",
  description:
    "NIS2-aligned security platform for critical infrastructure. Air-gapped deployment, offensive validation, and high-assurance hardening on EU sovereign infrastructure.",
  path: "/industries/critical-infrastructure",
});

const FRAMEWORKS = [
  {
    name: "NIS2 Directive (EU 2022/2555)",
    note: "Article 21 cybersecurity risk-management measures and Article 23 incident reporting for essential and important entities.",
  },
  {
    name: "NIS2 Annex I and Annex II",
    note: "Sectoral scope: energy, transport, banking, health, water, digital infrastructure, ICT service management, public administration, and more.",
  },
  {
    name: "CER Directive (EU 2022/2557)",
    note: "Resilience of critical entities — physical and operational complement to NIS2 cyber requirements.",
  },
  {
    name: "IEC 62443",
    note: "Industrial automation and control systems security — zones, conduits, security levels, and lifecycle requirements for OT.",
  },
  {
    name: "ISO 27019",
    note: "Information security controls for the energy utility industry, building on ISO 27002.",
  },
  {
    name: "NERC CIP",
    note: "North American Electric Reliability Corporation Critical Infrastructure Protection standards where applicable.",
  },
];

const PRODUCTS = [
  {
    name: "Postava",
    role:
      "Hardens the Linux estate that supports SCADA gateways, jump hosts, historian servers, and engineering workstations. Available open source for air-gapped operation, with hardening state recorded as evidence for NIS2 Article 21 controls.",
  },
  {
    name: "Odbrana",
    role:
      "Audits IT and the IT-facing edges of OT — applications, APIs, cloud, identity, and network configuration — with scanning behaviors that respect the constraints of operational environments rather than treating them as cattle.",
  },
  {
    name: "Napad",
    role:
      "Provides high-assurance offensive validation under strict scoping. Engagements are designed for environments where downtime is not acceptable and where every test path is approved in advance against the IEC 62443 zone and conduit model.",
  },
  {
    name: "Regulativa",
    role:
      "Holds NIS2 evidence including the Article 23 incident reporting workflow with the 24-hour early warning, 72-hour notification, and one-month final report templates already wired to the appropriate national CSIRT contacts.",
  },
];

const PATTERNS = [
  "Energy and water utilities scoping NIS2 evidence under tight national transposition deadlines.",
  "Transport and logistics operators reconciling IT, OT, and corporate security under one Article 21 risk-management framework.",
  "Operators of essential services running first-cycle Article 23 incident reporting drills with realistic 24-hour and 72-hour timelines.",
  "Sector entities deploying Postava on air-gapped hardware where cloud-only platforms are not an option.",
];

export default function CriticalInfrastructureIndustryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumb([
          { name: "Home", url: "https://spnt.io" },
          { name: "Industries", url: "https://spnt.io/industries" },
          {
            name: "Critical Infrastructure",
            url: "https://spnt.io/industries/critical-infrastructure",
          },
        ])}
      />

      <AtmosphericHero
        image="/images/hero-critical-infra.jpg"
        imageAlt="Electrical power transformer at substation, evening"
        eyebrow="INDUSTRIES · CRITICAL INFRASTRUCTURE"
        h1="Serpentine for Critical Infrastructure"
        sub="NIS2-aligned security for essential and important entities. Air-gapped deployment, OT-aware audit, high-assurance offensive validation, and incident reporting on sovereign EU infrastructure."
      />

      {/* Pressures */}
      <Section tone="light">
        <Container size="narrow">
          <h2 className="t-section balance">
            The pressures this industry faces.
          </h2>
          <div className="mt-8 space-y-5">
            <p className="t-body" style={{ color: "var(--ink-soft)" }}>
              The NIS2 Directive (EU 2022/2555) sets the new baseline. Article
              21 lists the minimum cybersecurity risk-management measures —
              policies on risk analysis, incident handling, business
              continuity, supply chain security, vulnerability handling,
              cryptography, access control, asset management, and basic cyber
              hygiene — that essential and important entities must implement
              and document. Article 23 imposes the reporting timeline: a
              24-hour early warning, a 72-hour incident notification, and a
              one-month final report to the relevant national CSIRT or
              competent authority.
            </p>
            <p className="t-body" style={{ color: "var(--ink-soft)" }}>
              Annex I lists the sectors of essential entities — energy,
              transport, banking, financial market infrastructures, health,
              drinking water, waste water, digital infrastructure, ICT
              service management, public administration, and space. Annex II
              covers important entities including postal services, waste
              management, chemicals, food, manufacturing, digital providers,
              and research. The CER Directive (EU 2022/2557) sits alongside
              NIS2 and addresses the physical and operational resilience side
              of the same entities.
            </p>
            <p className="t-body" style={{ color: "var(--ink-soft)" }}>
              Where operational technology is in scope, IEC 62443 governs.
              Zones and conduits, security levels, secure development for
              control systems, and lifecycle requirements all apply, and the
              consequences of a misstep are not the same as on the IT side.
              For energy utilities ISO 27019 extends ISO 27002 to the sector.
              For nuclear facilities IAEA NSS-17 sets computer security
              expectations. NERC CIP applies to bulk electric system
              operators in North America.
            </p>
            <p className="t-body" style={{ color: "var(--ink-soft)" }}>
              The operational reality is that these environments cannot be
              treated like a SaaS estate. Production windows are narrow.
              Patching cycles are dictated by safety considerations as much
              as by vulnerability severity. Some networks are deliberately
              air-gapped, and the security tooling that runs there must be
              able to run there.
            </p>
          </div>
        </Container>
      </Section>

      {/* What changes when unified */}
      <Section tone="light-raised">
        <Container size="narrow">
          <h2 className="t-section balance">
            What changes when security is unified.
          </h2>
          <div className="mt-8 space-y-5">
            <p className="t-body" style={{ color: "var(--ink-soft)" }}>
              Serpentine treats NIS2 Article 21 not as a checklist but as a
              set of controls backed by live evidence. Postava records the
              hardened state of every Linux host. Odbrana records the audit
              posture of every application, identity, and cloud surface.
              Napad records the validated reachability of high-impact
              findings. Regulativa pulls all of it into the Article 21
              control set and the Article 23 reporting workflow.
            </p>
            <p className="t-body" style={{ color: "var(--ink-soft)" }}>
              Air-gapped operation is supported. Postava is open source and
              runs on hardware that never touches the internet. Findings and
              evidence flow into the central canonical model through the
              same one-way channels operators already use to bridge IT and
              OT, rather than requiring a new outbound dependency from the
              operational environment.
            </p>
            <p className="t-body" style={{ color: "var(--ink-soft)" }}>
              Offensive validation is scoped with care. Napad engagements
              against critical infrastructure run with strict pre-approved
              attack paths, IEC 62443 zone awareness, and operator
              involvement throughout. The point is to confirm exploitability
              of high-priority findings without disturbing the process the
              infrastructure exists to support.
            </p>
            <p className="t-body" style={{ color: "var(--ink-soft)" }}>
              Incident reporting becomes a workflow rather than a scramble.
              The 24-hour early warning, 72-hour notification, and one-month
              final report templates are configured to the relevant national
              CSIRT and competent authority. When a major incident is
              classified, the timeline runs against a structured record
              rather than against a hastily edited document.
            </p>
          </div>
        </Container>
      </Section>

      {/* Frameworks */}
      <Section tone="light">
        <Container>
          <div className="max-w-3xl">
            <h2 className="t-section balance">
              Frameworks we cover for this industry.
            </h2>
          </div>
          <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2">
            {FRAMEWORKS.map((f) => (
              <li key={f.name}>
                <div className="t-feature" style={{ color: "var(--ink)" }}>
                  {f.name}
                </div>
                <div
                  className="t-body mt-1"
                  style={{ color: "var(--ink-soft)" }}
                >
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
            <h2 className="t-section balance" style={{ color: "var(--ink-on-dark)" }}>
              How the four products map.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {PRODUCTS.map((p) => (
              <Card key={p.name} tone="dark">
                <h3 className="t-feature balance" style={{ color: "var(--ink-on-dark)" }}>
                  {p.name}
                </h3>
                <p
                  className="t-body mt-4"
                  style={{ color: "var(--ink-on-dark-soft)" }}
                >
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
          <h2 className="t-section balance">Common patterns we see.</h2>
          <ul className="mt-8 space-y-4">
            {PATTERNS.map((p) => (
              <li
                key={p}
                className="t-body pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full"
                style={{ color: "var(--ink-soft)" }}
              >
                <span
                  className="absolute left-0 top-[0.6em] h-1.5 w-1.5 rounded-full"
                  style={{ background: "var(--bronze-deep-on-light)" }}
                  aria-hidden
                />
                {p}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CTABlock
        tone="dark"
        title="Book a demo for critical infrastructure."
        body="A walkthrough of air-gapped Postava deployment, NIS2 evidence workflow, and offensive validation for essential and important entities."
        primary={{ label: "Book a Demo", href: "/company/contact#demo" }}
        secondary={{ label: "Talk to Sales", href: "/company/contact#sales" }}
      />
    </>
  );
}

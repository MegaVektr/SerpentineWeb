import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { AtmosphericHero } from "@/components/marketing/AtmosphericHero";
import { CTABlock } from "@/components/marketing/CTABlock";
import { JsonLd, breadcrumb } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Serpentine for MSPs & Pentest Consultancies",
  description:
    "Multi-tenant audit, white-label reports, agentic offensive tooling, and engagement management for managed security providers and consultancies.",
  path: "/industries/mssp",
});

const FRAMEWORKS = [
  {
    name: "CREST",
    note: "Methodology and reporting expectations for accredited penetration testing and incident response engagements.",
  },
  {
    name: "OSSTMM",
    note: "Open Source Security Testing Methodology Manual — structured operational security testing baseline.",
  },
  {
    name: "PTES",
    note: "Penetration Testing Execution Standard for engagement scoping, intelligence gathering, exploitation, and reporting.",
  },
  {
    name: "OWASP WSTG / MASVS",
    note: "Web Security Testing Guide and Mobile Application Security Verification Standard for application engagements.",
  },
  {
    name: "ISO 27001:2022",
    note: "Often referenced when serving clients pursuing certification or maintaining a statement of applicability.",
  },
  {
    name: "SOC 2",
    note: "Trust Services Criteria evidence collection on behalf of clients undergoing Type I or Type II audits.",
  },
];

const PRODUCTS = [
  {
    name: "Postava",
    role:
      "Lets the consultancy harden the engagement infrastructure itself — bastion hosts, jump boxes, internal C2 — and offer hardening as a deliverable to clients with the same baseline behind it.",
  },
  {
    name: "Odbrana",
    role:
      "Runs continuous and on-demand audits across a portfolio of client tenants. Findings carry the consultancy’s methodology branding rather than a generic scanner label, and roll up into white-label reporting.",
  },
  {
    name: "Napad",
    role:
      "Brings agentic offensive workflows to the senior practitioner. Repetitive reconnaissance and exploitation steps are automated; the operator focuses on the parts that require judgment, and the engagement scales without diluting quality.",
  },
  {
    name: "Regulativa",
    role:
      "Holds a per-client framework profile. One client is mid-SOC 2 Type II, another is preparing ISO 27001, a third is in NIS2 scope. Each profile is isolated; reports are branded; data segregation is enforced at the model layer.",
  },
];

const PATTERNS = [
  "Pentest consultancies replacing a stack of disjoint scanners and Word-template reports with a single methodology-aware platform.",
  "MSPs adding offensive validation to existing managed audit and SOC services without hiring a separate red team.",
  "Boutique firms competing for enterprise procurement by producing audit-grade deliverables their clients can hand to regulators.",
  "Practices serving multiple frameworks per client and tired of maintaining parallel evidence libraries by hand.",
];

export default function MsspIndustryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumb([
          { name: "Home", url: "https://spnt.io" },
          { name: "Industries", url: "https://spnt.io/industries" },
          { name: "MSSP", url: "https://spnt.io/industries/mssp" },
        ])}
      />

      <AtmosphericHero
        image="/images/hero-mssp.jpg"
        imageAlt="Network operations center monitors, dim ambient light"
        eyebrow="INDUSTRIES · MSSP"
        h1="Serpentine for Managed Security Providers and Consultancies"
        sub="Multi-tenant audit, agentic offensive tooling, and white-label reporting in one platform. Built for the firms that deliver security to everyone else."
      />

      {/* Pressures */}
      <Section tone="light">
        <Container size="narrow">
          <h2 className="t-section text-balance">
            The pressures this industry faces.
          </h2>
          <div className="mt-8 space-y-5 text-[var(--ink-soft)]">
            <p className="t-body">
              Managed security and pentest consultancies sell time. The
              business is bounded by how many senior practitioner hours are
              available and how much of that time is spent on the work clients
              actually pay for, rather than on tool plumbing, report
              templating, or duplicate evidence collection across tenants.
            </p>
            <p className="t-body">
              The methodology side is well-understood. CREST, OSSTMM, PTES,
              the OWASP WSTG and MASVS, and the established offensive playbook
              all set expectations on what a serious engagement looks like.
              Clients increasingly want to see that methodology in the
              deliverable, not just hear about it in the kickoff call.
              Auditors and regulators on the receiving end want the same
              traceability.
            </p>
            <p className="t-body">
              The platform side is where the pain lives. Most consultancies
              run a different scanner per asset class, a different reporting
              tool per service line, and a different shared drive per client.
              Multi-tenant data segregation is enforced by folder names and
              good intentions. White-label reporting is a final-week
              copy-paste exercise. Procurement teams on the buyer side are
              starting to notice.
            </p>
            <p className="t-body">
              Supplier accreditation pipelines now demand that the
              consultancy itself meets the standards it audits clients
              against. SOC 2 and ISO 27001 are increasingly entry tickets to
              enterprise framework agreements, and the consultancy&rsquo;s
              own evidence has to be as defensible as the evidence it
              produces for clients.
            </p>
          </div>
        </Container>
      </Section>

      {/* What changes when unified */}
      <Section tone="light-raised">
        <Container size="narrow">
          <h2 className="t-section text-balance">
            What changes when security is unified.
          </h2>
          <div className="mt-8 space-y-5 text-[var(--ink-soft)]">
            <p className="t-body">
              Serpentine treats every client engagement as a tenant inside one
              canonical model. Audit findings, validated exploits, hardening
              records, and framework evidence sit together for that client and
              are isolated from every other tenant by design rather than by
              folder convention.
            </p>
            <p className="t-body">
              Senior practitioner time goes further. Napad automates the
              repetitive parts of an offensive engagement — reconnaissance,
              vulnerability triage, common exploitation chains — and surfaces
              the points where human judgment matters. The same operator who
              used to run two engagements a quarter can run more, with the
              quality of each one documented in the same evidence trail the
              client will hand to their auditor.
            </p>
            <p className="t-body">
              White-label reporting stops being a final-week task. The
              methodology is encoded in the platform, the branding template
              is configured once per consultancy, and the deliverable is a
              consequence of the work rather than a parallel exercise.
              Regulators reading the report can trace every finding to a
              specific scan, a specific validation, and a specific
              methodology step.
            </p>
            <p className="t-body">
              The consultancy&rsquo;s own internal posture sits in the same
              system. SOC 2 and ISO 27001 evidence for the firm itself comes
              from the same Postava, Odbrana, and Regulativa records that
              support client engagements.
            </p>
          </div>
        </Container>
      </Section>

      {/* Frameworks */}
      <Section tone="light">
        <Container>
          <div className="max-w-3xl">
            <h2 className="t-section text-balance">
              Frameworks we cover for this industry.
            </h2>
          </div>
          <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2">
            {FRAMEWORKS.map((f) => (
              <li key={f.name}>
                <div className="t-feature text-[var(--ink)]">{f.name}</div>
                <div className="t-body mt-1 text-[var(--ink-soft)]">
                  {f.note}
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Four products map */}
      <Section tone="dark">
        <Container>
          <div className="max-w-3xl">
            <h2 className="t-section text-balance text-[var(--ink-on-dark)]">
              How the four products map.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {PRODUCTS.map((p) => (
              <Card key={p.name} tone="dark">
                <h3 className="t-feature text-balance text-[var(--ink-on-dark)]">
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

      {/* Common patterns */}
      <Section tone="light-raised">
        <Container size="narrow">
          <h2 className="t-section text-balance">Common patterns we see.</h2>
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
        title="Partner with Serpentine."
        body="A walkthrough of multi-tenant operations, white-label reporting, and the partner program for managed security and consultancy firms."
        primary={{
          label: "Partner with Serpentine",
          href: "/company/contact#partnerships",
        }}
        secondary={{ label: "Book a Demo", href: "/company/contact#demo" }}
      />
    </>
  );
}

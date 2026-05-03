import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { AtmosphericHero } from "@/components/marketing/AtmosphericHero";
import { CTABlock } from "@/components/marketing/CTABlock";
import { JsonLd, breadcrumb } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Serpentine for SaaS — Continuous Security & SOC 2",
  description:
    "Continuous security audit, hardened deployments, and SOC 2 readiness for fast-moving SaaS teams. EU-hosted, CI-integrated, evidence-aware.",
  path: "/industries/saas",
});

const FRAMEWORKS = [
  {
    name: "SOC 2 (Trust Services Criteria)",
    note: "Security, Availability, and Confidentiality criteria with reusable evidence across Type I and Type II.",
  },
  {
    name: "ISO 27001:2022",
    note: "Annex A controls mapped to the same evidence set used for SOC 2 — built once, referenced everywhere.",
  },
  {
    name: "GDPR (Article 32)",
    note: "Security of processing: pseudonymization, confidentiality, integrity, availability, and resilience.",
  },
  {
    name: "CCPA / CPRA",
    note: "Reasonable security obligations and breach exposure for SaaS serving California consumers.",
  },
  {
    name: "ISO 27017",
    note: "Cloud-specific control extensions for shared-responsibility scopes between SaaS and cloud provider.",
  },
  {
    name: "ISO 27018",
    note: "Protection of personally identifiable information processed in public cloud environments.",
  },
];

const PRODUCTS = [
  {
    name: "Postava",
    role:
      "Hardens the Linux servers and base images that production SaaS workloads run on. SSH, firewall, kernel, and intrusion detection are configured to a known baseline; the resulting state is recorded as evidence for SOC 2 CC6 and ISO 27001 A.8 controls.",
  },
  {
    name: "Odbrana",
    role:
      "Runs continuously against web applications, APIs, container images, cloud accounts, and source code. CI integration means every pull request and every nightly build can produce a finding that is already mapped to a Trust Services criterion.",
  },
  {
    name: "Napad",
    role:
      "Validates whether discovered findings are actually reachable from the internet, from a tenant, or from a compromised employee laptop. Used pre-launch, before pricing tier changes that expand attack surface, and during procurement-driven security reviews.",
  },
  {
    name: "Regulativa",
    role:
      "Holds the SOC 2 and ISO 27001 evidence library, the risk register, and the policy set. Auditor questions resolve to an artifact that already exists rather than triggering a fire drill across engineering Slack channels.",
  },
];

const PATTERNS = [
  "Series A and B teams chasing their first SOC 2 Type II report under procurement pressure from enterprise buyers.",
  "Established SaaS adding ISO 27001 to unlock European and UK customers without doubling compliance headcount.",
  "Platform teams that have outgrown a CSPM-only posture and need code, container, cloud, and runtime audit in one place.",
  "Security engineers tired of reconciling findings across four scanners that disagree about severity and ownership.",
];

export default function SaasIndustryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumb([
          { name: "Home", url: "https://spnt.io" },
          { name: "Industries", url: "https://spnt.io/industries" },
          { name: "SaaS", url: "https://spnt.io/industries/saas" },
        ])}
      />

      <AtmosphericHero
        image="/images/hero-saas.jpg"
        imageAlt="Code displayed on monitor, monospace text"
        eyebrow="INDUSTRIES · SAAS"
        h1="Serpentine for SaaS"
        sub="Continuous security and compliance for fast-moving SaaS teams. CI-integrated audit, hardened deployments, and SOC 2 and ISO 27001 evidence that keeps pace with the codebase."
      />

      {/* Pressures */}
      <Section tone="light">
        <h2 className="t-section balance">
          The pressures this industry faces.
        </h2>
        <div className="mt-8 space-y-5 max-w-3xl">
          <p className="t-body text-[var(--ink-soft)]">
            SaaS companies sell into procurement, and procurement asks for
            SOC 2. The Trust Services Criteria — Security, Availability, and
            Confidentiality at minimum — set the baseline that closes deals.
            For European customers the same conversation happens, but in the
            language of ISO 27001:2022 and the GDPR Article 32 obligation to
            implement appropriate technical and organizational measures.
          </p>
          <p className="t-body text-[var(--ink-soft)]">
            Underneath the questionnaire is the actual estate. Cloud accounts
            proliferate. CSPM coverage drifts. Secrets land in repositories
            and configuration files. The npm and PyPI supply chains keep
            producing reasons to audit transitive dependencies. CI/CD
            pipelines themselves become an attack surface — privileged
            runners, long-lived deployment tokens, OIDC trust policies that
            were configured once and never reviewed.
          </p>
          <p className="t-body text-[var(--ink-soft)]">
            Multi-tenancy is a separate axis of risk. Every new feature is a
            potential cross-tenant query. Every shared cache is a potential
            data leak. Buyers performing security reviews now expect to see
            isolation tested, not just documented, and their auditors expect
            the same. CCPA and CPRA add a US-side dimension where reasonable
            security is a regulatory obligation rather than a checklist.
          </p>
          <p className="t-body text-[var(--ink-soft)]">
            The hard part is doing all of this without slowing the codebase.
            SaaS teams ship multiple times a day. A security model that
            relies on monthly audits and quarterly pentests cannot keep up.
          </p>
        </div>
      </Section>

      {/* What changes when unified */}
      <Section tone="light-raised">
        <h2 className="t-section balance">
          What changes when security is unified.
        </h2>
        <div className="mt-8 space-y-5 max-w-3xl">
          <p className="t-body text-[var(--ink-soft)]">
            Serpentine treats audit, hardening, validation, and governance
            as one system with one data model. A finding from Odbrana is the
            same record the auditor reviews in Regulativa, the same record
            Napad validates as exploitable, and the same record Postava
            closes when the underlying baseline is reapplied.
          </p>
          <p className="t-body text-[var(--ink-soft)]">
            For a SaaS team the practical effect is fewer parallel systems.
            CI runs an Odbrana scan on every pull request; the findings land
            in the same canonical model that the SOC 2 control library reads
            from. When a buyer asks for evidence of SDLC security controls,
            the answer is an exported view of an existing record, not a new
            spreadsheet.
          </p>
          <p className="t-body text-[var(--ink-soft)]">
            Hardening becomes part of the same loop. A Postava run that
            changes the SSH configuration on a production host produces an
            artifact that satisfies the corresponding ISO 27001 Annex A
            control and the matching SOC 2 CC criterion. Evidence is reused
            across both frameworks rather than rebuilt for each one.
          </p>
          <p className="t-body text-[var(--ink-soft)]">
            Validation also moves earlier. Pre-launch, Napad runs against a
            new feature in a staging environment to confirm whether a
            Critical-rated CSPM finding is actually exploitable from outside
            the VPC. Engineering time then goes to issues that matter rather
            than to chasing every alert.
          </p>
        </div>
      </Section>

      {/* Frameworks */}
      <Section tone="light">
        <h2 className="t-section balance max-w-3xl">
          Frameworks we cover for SaaS.
        </h2>
        <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2">
          {FRAMEWORKS.map((f) => (
            <li
              key={f.name}
              className="pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--bronze-deep-on-light)]"
            >
              <div className="t-feature text-[var(--ink)]">{f.name}</div>
              <div className="t-body mt-1 text-[var(--ink-soft)]">
                {f.note}
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* Four products map */}
      <Section tone="dark">
        <h2 className="t-section balance text-[var(--ink-on-dark)] max-w-3xl">
          How the four products map.
        </h2>
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
      </Section>

      {/* Common patterns */}
      <Section tone="light-raised">
        <h2 className="t-section balance">Common patterns we see.</h2>
        <ul className="mt-8 space-y-4 max-w-3xl">
          {PATTERNS.map((p) => (
            <li
              key={p}
              className="t-body text-[var(--ink-soft)] pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--bronze-deep-on-light)]"
            >
              {p}
            </li>
          ))}
        </ul>
      </Section>

      <CTABlock
        tone="dark"
        title="Book a demo for SaaS teams."
        body="A walkthrough of CI-integrated scanning, SOC 2 evidence collection, and how Serpentine fits into a fast-moving SaaS engineering org."
        primary={{ label: "Book a Demo", href: "/company/contact#demo" }}
        secondary={{ label: "Talk to Sales", href: "/company/contact#sales" }}
      />
    </>
  );
}

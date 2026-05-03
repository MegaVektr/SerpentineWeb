import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { ArrowLink } from "@/components/ui/Link";
import { AtmosphericHero } from "@/components/marketing/AtmosphericHero";
import { PhotoBreak } from "@/components/marketing/PhotoBreak";
import { CTABlock } from "@/components/marketing/CTABlock";
import { JsonLd, breadcrumb } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Trust & Infrastructure",
  description:
    "EU-hosted on OVHcloud, multi-region. ISO 27001, SOC 2 Type II, HDS certified datacenters. Downloadable DPA. Full subprocessor list. GDPR-native.",
  path: "/trust",
});

const infraFacts: Array<[string, string]> = [
  ["Hosting", "OVHcloud — multi-region, EU only"],
  ["Region selection", "Contractual; specific regions disclosed under MSA"],
  ["Data residency", "EU only by default — never transferred outside the EU"],
  ["Data encryption at rest", "AES-256"],
  ["Data encryption in transit", "TLS 1.3"],
  ["Backup frequency", "Daily, 30-day retention"],
  ["Disaster recovery", "Cross-region failover within EU"],
];

const subprocessors: Array<{
  name: string;
  purpose: string;
  location: string;
  data: string;
}> = [
  {
    name: "OVHcloud",
    purpose: "Infrastructure hosting",
    location: "EU (multi-region)",
    data: "All customer data",
  },
  {
    name: "Anthropic PBC",
    purpose: "AI reasoning (Claude API)",
    location: "US (ZDR available)",
    data: "Scan context, findings",
  },
  {
    name: "Paddle.com Market Ltd",
    purpose: "Payments, Merchant of Record",
    location: "UK",
    data: "Billing information",
  },
  {
    name: "Cloudflare Inc.",
    purpose: "CDN, DDoS protection",
    location: "Global edge",
    data: "Public-facing traffic",
  },
];

const aiHandling: string[] = [
  "No training on customer data",
  "30-day data retention for abuse monitoring (shorter retention available on Enterprise contracts)",
  "Zero Data Retention (ZDR) available for Enterprise and regulated-sector customers",
  "SOC 2 Type II certified operations at Anthropic",
];

const rights: string[] = [
  "Right of access (self-service in account settings)",
  "Right to rectification",
  "Right to erasure",
  "Right to data portability (JSON export)",
  "Right to object to processing",
  "Right to restrict processing",
];

const cellCls =
  "border border-[var(--obsidian-line)] px-4 py-3 align-top text-[var(--ink-on-dark-soft)]";
const headCls =
  "border border-[var(--obsidian-line)] px-4 py-3 text-left bg-[var(--obsidian-raised)] font-semibold text-[var(--ink-on-dark)]";

export default function TrustPage() {
  return (
    <>
      <JsonLd
        data={breadcrumb([
          { name: "Home", url: "https://spnt.io" },
          { name: "Trust", url: "https://spnt.io/trust" },
        ])}
      />

      <AtmosphericHero
        image="/images/hero-trust.jpg"
        imageAlt="Earth from space, European continent visible at night"
        eyebrow="TRUST & INFRASTRUCTURE"
        h1="Where your data lives, and who touches it."
        sub="Full transparency on infrastructure, compliance, data handling, subprocessors, and data protection agreements. Nothing hidden behind a sales call."
      />

      {/* Infrastructure */}
      <Section tone="dark">
        <h2 className="t-section balance text-[var(--ink-on-dark)]">
          Sovereign EU infrastructure.
        </h2>
        <div className="mt-8 max-w-3xl space-y-5 t-body text-[var(--ink-on-dark-soft)]">
          <p>
            Customer data is hosted on OVHcloud, one of the largest European
            cloud providers, across multiple sovereign EU regions. OVHcloud&apos;s
            EU-region datacenters are certified to ISO 27001, ISO 27017,
            ISO 27018, SOC 2 Type II, PCI-DSS, and HDS (the European health data
            hosting standard).
          </p>
          <p>
            No customer data is stored on US hyperscalers, and no data is
            transferred outside the EU at any point. Specific region selection
            is contractual and disclosed to the customer in the MSA — we do not
            publish individual datacenter locations as a matter of operational
            security.
          </p>
        </div>
        <div className="mt-6">
          <ArrowLink
            href="https://www.ovhcloud.com/en/security-and-compliance/"
            tone="on-dark"
            external
          >
            Verify OVHcloud&apos;s certifications
          </ArrowLink>
        </div>

        <div className="mt-10 max-w-3xl overflow-x-auto">
          <table className="border-collapse w-full text-[14px]">
            <thead>
              <tr>
                <th className={headCls} scope="col">
                  Fact
                </th>
                <th className={headCls} scope="col">
                  Detail
                </th>
              </tr>
            </thead>
            <tbody>
              {infraFacts.map(([k, v]) => (
                <tr key={k}>
                  <td className={cellCls}>
                    <span className="font-semibold text-[var(--ink-on-dark)]">
                      {k}
                    </span>
                  </td>
                  <td className={cellCls}>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* GDPR */}
      <Section tone="dark-raised">
        <h2 className="t-section balance text-[var(--ink-on-dark)]">
          GDPR-native by design.
        </h2>
        <p className="mt-6 max-w-3xl t-body text-[var(--ink-on-dark-soft)]">
          SPNT is a data controller for SPNT account data (user accounts,
          billing) and a data processor for customer scan data (what Serpentine
          analyzes on your behalf). Our Data Processing Agreement (DPA) is
          publicly available and pre-signable.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
          <ArrowLink href="/legal/dpa" tone="on-dark">
            Download Data Processing Agreement (DPA)
          </ArrowLink>
          <ArrowLink href="/downloads/sccs.pdf" tone="on-dark">
            Download Standard Contractual Clauses (SCCs)
          </ArrowLink>
          <ArrowLink href="/legal/privacy" tone="on-dark">
            View privacy policy
          </ArrowLink>
        </div>
      </Section>

      {/* Subprocessors */}
      <Section tone="dark">
        <h2 className="t-section balance text-[var(--ink-on-dark)]">
          Subprocessors.
        </h2>
        <div className="mt-8 overflow-x-auto">
          <table className="border-collapse w-full text-[14px]">
            <thead>
              <tr>
                <th className={headCls} scope="col">
                  Subprocessor
                </th>
                <th className={headCls} scope="col">
                  Purpose
                </th>
                <th className={headCls} scope="col">
                  Location
                </th>
                <th className={headCls} scope="col">
                  Data Type
                </th>
              </tr>
            </thead>
            <tbody>
              {subprocessors.map((s) => (
                <tr key={s.name}>
                  <td className={cellCls}>
                    <span className="font-semibold text-[var(--ink-on-dark)]">
                      {s.name}
                    </span>
                  </td>
                  <td className={cellCls}>{s.purpose}</td>
                  <td className={cellCls}>{s.location}</td>
                  <td className={cellCls}>{s.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 italic t-small text-[var(--ink-on-dark-muted)]">
          (Additional subprocessors to be added as applicable.)
        </p>
        <div className="mt-5">
          <ArrowLink href="/legal/subprocessors" tone="on-dark">
            Download subprocessor list (PDF)
          </ArrowLink>
        </div>
        <p className="mt-6 max-w-3xl t-body text-[var(--ink-on-dark-soft)]">
          <strong className="text-[var(--ink-on-dark)]">Update policy:</strong>{" "}
          We notify all customers of subprocessor changes 30 days in advance via
          email.
        </p>
      </Section>

      <PhotoBreak
        image="/images/break-eu-fiber.jpg"
        imageAlt="Fiber-optic strands close-up, illuminated"
        quote="Customer data lives in OVHcloud&apos;s EU regions. No US hyperscaler dependency. No CLOUD Act exposure."
      />

      {/* AI Data Handling */}
      <Section tone="dark-raised" id="ai">
        <h2 className="t-section balance text-[var(--ink-on-dark)]">
          How AI processes your data.
        </h2>
        <p className="mt-6 max-w-3xl t-body text-[var(--ink-on-dark-soft)]">
          Serpentine uses Anthropic Claude models (Claude Haiku and Claude
          Sonnet via the Anthropic API) for AI reasoning tasks. Our agreement
          with Anthropic includes:
        </p>
        <ul className="mt-6 max-w-3xl space-y-3 t-body text-[var(--ink-on-dark-soft)]">
          {aiHandling.map((a) => (
            <li key={a} className="flex gap-3">
              <span
                aria-hidden
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--bronze)]"
              />
              <span>{a}</span>
            </li>
          ))}
        </ul>
        <p className="mt-7 max-w-3xl t-body text-[var(--ink-on-dark-soft)]">
          Customers processing regulated data (PHI, financial records, EU
          citizen PII beyond scan targets) can request specific data handling
          terms in their contract.
        </p>
      </Section>

      {/* Customer Rights */}
      <Section tone="dark">
        <h2 className="t-section balance text-[var(--ink-on-dark)]">
          Your data, your rights.
        </h2>
        <p className="mt-6 max-w-3xl t-body text-[var(--ink-on-dark-soft)]">
          GDPR rights are fully supported:
        </p>
        <ul className="mt-5 max-w-3xl space-y-3 t-body text-[var(--ink-on-dark-soft)]">
          {rights.map((r) => (
            <li key={r} className="flex gap-3">
              <span
                aria-hidden
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--bronze)]"
              />
              <span>{r}</span>
            </li>
          ))}
        </ul>
        <p className="mt-7 max-w-3xl t-body text-[var(--ink-on-dark-soft)]">
          Data subject requests:{" "}
          <a
            href="mailto:privacy@spnt.io"
            className="text-[var(--bronze)] underline underline-offset-[3px]"
          >
            privacy@spnt.io
          </a>{" "}
          · Response within 30 days per GDPR.
        </p>
      </Section>

      <CTABlock
        tone="dark"
        title="Talk to our trust team."
        body="Procurement and security review questions answered directly by the engineers responsible for the platform. No middle layer."
        primary={{ label: "Book a Demo", href: "/company/contact#demo" }}
        secondary={{
          label: "Read the Methodology →",
          href: "/methodology",
        }}
      />
    </>
  );
}

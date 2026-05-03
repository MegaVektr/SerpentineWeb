import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { UtilitarianHero } from "@/components/marketing/UtilitarianHero";
import { CTABlock } from "@/components/marketing/CTABlock";
import { JsonLd, ORG_SCHEMA, breadcrumb } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "About SPNT",
  description:
    "SPNT builds Serpentine. We are a security engineering team focused on doing one thing well: a unified security platform for operators and leaders.",
  path: "/company/about",
});

type LegalRow = { label: string; value: string; placeholder?: boolean };

const LEGAL_ROWS: LegalRow[] = [
  { label: "Name", value: "[Registered legal name]", placeholder: true },
  { label: "Jurisdiction", value: "Republic of North Macedonia" },
  { label: "Registered office", value: "[Address, Skopje]", placeholder: true },
  {
    label: "Company registration",
    value: "[MBS number]",
    placeholder: true,
  },
  { label: "Tax ID", value: "[EDB number]", placeholder: true },
  { label: "VAT", value: "[if applicable]", placeholder: true },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          ORG_SCHEMA,
          breadcrumb([
            { name: "Home", url: "https://spnt.io" },
            { name: "Company", url: "https://spnt.io/company/about" },
            { name: "About", url: "https://spnt.io/company/about" },
          ]),
        ]}
      />

      <UtilitarianHero
        tone="light"
        eyebrow="ABOUT SPNT"
        h1="Serious software for serious teams."
        sub="SPNT is a security platform company. We build Serpentine, the unified platform for security audit, offensive validation, infrastructure hardening, and compliance governance."
      />

      {/* Who we are */}
      <Section tone="light">
        <Container size="narrow">
          <h2 className="t-section balance">Who we are.</h2>
          <p className="t-lead mt-8 text-[var(--ink-soft)]">
            SPNT is a small, deeply technical team focused on doing security
            software well, rather than doing ten things poorly. We build for
            security operators and leaders — the engineers who need findings
            they can act on, the red teams who need operational depth, the
            CISOs who need regulatory clarity.
          </p>
        </Container>
      </Section>

      {/* Where we are */}
      <Section tone="light-raised">
        <Container size="narrow">
          <h2 className="t-section balance">Where we are.</h2>
          <p className="t-lead mt-8 text-[var(--ink-soft)]">
            SPNT is registered in North Macedonia, an EU-candidate country
            actively aligned with EU digital regulations. Our engineering team
            operates across the EU. Customer-facing infrastructure runs on
            OVHcloud across multiple sovereign EU regions.
          </p>
        </Container>
      </Section>

      {/* How we work */}
      <Section tone="light">
        <Container size="narrow">
          <h2 className="t-section balance">How we work.</h2>
          <p className="t-lead mt-8 text-[var(--ink-soft)]">
            We are not a VC-funded growth-at-all-costs operation. We are a
            technical team building a serious product, with revenue, for
            customers who need the product. Our decisions reflect that. We do
            not promise what we cannot deliver. We do not charge for features
            that do not exist. We do not claim certifications we do not hold.
          </p>
        </Container>
      </Section>

      {/* Our founder */}
      <Section tone="light-raised">
        <Container size="narrow">
          <h2 className="t-section balance">Our founder.</h2>
          <Card
            tone="light"
            className="mt-8 border-l-2 border-[var(--bronze)]"
          >
            <p className="t-body italic text-[var(--ink-muted)]">
              Founder bio placeholder. Reference: 15+ years across full-stack
              development, system architecture, DevOps, Linux administration,
              cybersecurity (offensive and defensive), and AI-assisted
              development.
            </p>
          </Card>
        </Container>
      </Section>

      {/* Legal entity */}
      <Section tone="light">
        <Container size="narrow">
          <h2 className="t-section balance">Legal entity.</h2>
          <div className="mt-10 overflow-x-auto">
            <table className="border-collapse w-full text-[15px]">
              <caption className="sr-only">
                SPNT legal entity registration details
              </caption>
              <tbody>
                {LEGAL_ROWS.map((row) => (
                  <tr key={row.label}>
                    <th
                      scope="row"
                      className="border border-[var(--stone-line)] px-4 py-3 align-top text-left font-semibold text-[var(--ink)] w-[42%] sm:w-[34%]"
                    >
                      {row.label}
                    </th>
                    <td
                      className={
                        row.placeholder
                          ? "border border-[var(--stone-line)] px-4 py-3 align-top text-[var(--ink-muted)] italic"
                          : "border border-[var(--stone-line)] px-4 py-3 align-top text-[var(--ink)]"
                      }
                    >
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <CTABlock
        tone="dark"
        title="Build with people who care."
        body="If our work resonates, talk to us — about the platform, about partnership, or about joining the team."
        primary={{ label: "Book a Demo", href: "/company/contact#demo" }}
        secondary={{
          label: "Read the Methodology →",
          href: "/methodology",
        }}
      />
    </>
  );
}

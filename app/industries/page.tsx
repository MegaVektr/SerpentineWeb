import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ArrowLink } from "@/components/ui/Link";
import { AtmosphericHero } from "@/components/marketing/AtmosphericHero";
import { CTABlock } from "@/components/marketing/CTABlock";
import { JsonLd, breadcrumb } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Industries — Serpentine Unified Security Platform",
  description:
    "Serpentine for SaaS, financial services, MSSPs, and critical infrastructure. Industry-specific unified security for regulated and high-assurance environments.",
  path: "/industries",
});

const INDUSTRIES = [
  {
    title: "SaaS & Cloud Platforms",
    href: "/industries/saas",
    cta: "Read SaaS playbook →",
    blurb:
      "Continuous posture, CI-integrated scanning, SOC 2 / ISO 27001 readiness, and supply-chain coverage for fast-moving SaaS teams.",
  },
  {
    title: "Financial Services",
    href: "/industries/fintech",
    cta: "Read Financial Services playbook →",
    blurb:
      "DORA-aligned ICT risk management, threat-led testing, audit trails, and regulated-sector controls for banks, fintechs, and insurers.",
  },
  {
    title: "MSSPs & Consultancies",
    href: "/industries/mssp",
    cta: "Read MSSP playbook →",
    blurb:
      "Multi-tenant audit, white-label reports, agentic offensive tooling, and engagement management for managed providers and pentest firms.",
  },
  {
    title: "Critical Infrastructure",
    href: "/industries/critical-infrastructure",
    cta: "Read Critical Infrastructure playbook →",
    blurb:
      "NIS2-aligned security, air-gapped Postava deployment, IEC 62443 hardening, and offensive validation for essential and important entities.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumb([
          { name: "Home", url: "https://spnt.io" },
          { name: "Industries", url: "https://spnt.io/industries" },
        ])}
      />

      <AtmosphericHero
        image="/images/hero-industries.jpg"
        imageAlt="Abstract flowing data fabric in warm tones"
        eyebrow="INDUSTRIES"
        h1="Built for environments that cannot fail silently."
        sub="Industry-specific unified security for regulated and high-assurance environments. Sovereign EU hosting, framework-aligned controls, real outputs."
      />

      <Section tone="light">
        <Container>
          <div className="max-w-3xl">
            <h2 className="t-section">Where Serpentine ships.</h2>
            <p className="t-lead mt-6 text-[var(--ink-soft)]">
              Serpentine is one platform with four products. The shape of an
              engagement, the frameworks that matter, and the operational
              posture differ by sector. These pages describe how Serpentine
              maps to four of the industries we work with most often.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {INDUSTRIES.map((industry) => (
              <Card key={industry.href} tone="light">
                <h3 className="t-feature">{industry.title}</h3>
                <p className="t-body mt-4 text-[var(--ink-soft)]">
                  {industry.blurb}
                </p>
                <div className="mt-6">
                  <ArrowLink href={industry.href} tone="bronze">
                    {industry.cta}
                  </ArrowLink>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CTABlock
        tone="dark"
        title="Talk to a security engineer."
        body="Book a demo with someone who knows your sector. We have engineers familiar with DORA, NIS2, SOC 2, ISO 27001, and IEC 62443."
        primary={{ label: "Book a Demo", href: "/company/contact#demo" }}
        secondary={{ label: "Talk to Sales", href: "/company/contact#sales" }}
      />
    </>
  );
}

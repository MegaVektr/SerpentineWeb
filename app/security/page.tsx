import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ArrowLink } from "@/components/ui/Link";
import { AtmosphericHero } from "@/components/marketing/AtmosphericHero";
import { CTABlock } from "@/components/marketing/CTABlock";

export const metadata: Metadata = pageMetadata({
  title: "Security at SPNT | Our Own Posture",
  description:
    "SPNT's own security practices, responsible disclosure policy, certifications in progress, and how we secure the Serpentine platform itself.",
  path: "/security",
});

const practices: string[] = [
  "MFA required on all employee and contractor access",
  "Hardware security keys (YubiKey) required for production access",
  "Principle of least privilege on all internal systems",
  "Encrypted at rest (AES-256) and in transit (TLS 1.3)",
  "Production access logged and reviewed monthly",
  "No customer data in development or staging environments",
  "Dependency scanning and patching via Odbrana applied to our own codebases",
  "Infrastructure hardened via Postava applied to our own servers",
  "Regular penetration testing via Napad applied to our own systems",
  "Compliance posture tracked via Regulativa (we use our own product)",
];

const ovhCerts: string[] = [
  "ISO/IEC 27001",
  "ISO/IEC 27017 (cloud security)",
  "ISO/IEC 27018 (cloud privacy)",
  "SOC 2 Type II",
  "HDS (French health data hosting)",
  "PCI-DSS (payment card industry)",
];

function BronzeBullet() {
  return (
    <span
      aria-hidden
      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--bronze)]"
    />
  );
}

export default function SecurityPage() {
  return (
    <>
      <AtmosphericHero
        image="/images/hero-security.jpg"
        imageAlt="Vault door interior, hardened steel mechanism"
        eyebrow="SECURITY AT SPNT"
        h1="We take our own security as seriously as we take yours."
        sub="SPNT is a security company. It would be remarkable — and disqualifying — if we did not apply to ourselves the same rigor we sell. This page documents our own security posture, certifications, and disclosure practices."
      />

      {/* Our Practices */}
      <Section tone="dark">
        <Container>
          <h2 className="t-section balance text-[var(--ink-on-dark)]">
            How we operate internally.
          </h2>
          <ul className="mt-8 max-w-3xl space-y-3 t-body text-[var(--ink-on-dark-soft)]">
            {practices.map((p) => (
              <li key={p} className="flex gap-3">
                <BronzeBullet />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Certifications */}
      <Section tone="dark-raised">
        <Container>
          <h2 className="t-section balance text-[var(--ink-on-dark)]">
            Certifications and compliance.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card tone="dark">
              <h3 className="t-feature text-[var(--ink-on-dark)]">
                Infrastructure (inherited from OVHcloud, multi-region EU)
              </h3>
              <ul className="mt-5 space-y-3 t-body text-[var(--ink-on-dark-soft)]">
                {ovhCerts.map((c) => (
                  <li key={c} className="flex gap-3">
                    <BronzeBullet />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 t-small text-[var(--ink-on-dark-muted)]">
                All OVHcloud certifications are publicly verifiable at the
                OVHcloud trust portal.
              </p>
            </Card>

            <Card tone="dark">
              <h3 className="t-feature text-[var(--ink-on-dark)]">
                SPNT&apos;s own certifications
              </h3>
              <ul className="mt-5 space-y-3 t-body text-[var(--ink-on-dark-soft)]">
                <li className="flex gap-3">
                  <BronzeBullet />
                  <span>
                    ISO/IEC 27001 —{" "}
                    <strong className="text-[var(--ink-on-dark)]">
                      In progress · Target: Q4 2026
                    </strong>
                  </span>
                </li>
                <li className="flex gap-3">
                  <BronzeBullet />
                  <span>
                    SOC 2 Type II —{" "}
                    <strong className="text-[var(--ink-on-dark)]">
                      Planned · 2027
                    </strong>
                  </span>
                </li>
              </ul>
            </Card>
          </div>

          <Card
            tone="ghost-on-dark"
            className="mt-8 max-w-3xl border-l-2 border-[var(--bronze)]"
          >
            <p className="t-small text-[var(--ink-on-dark-soft)]">
              We will not claim these certifications until they are granted.
            </p>
          </Card>
        </Container>
      </Section>

      {/* Responsible Disclosure */}
      <Section tone="dark" id="disclosure">
        <Container>
          <h2 className="t-section balance text-[var(--ink-on-dark)]">
            How to report a vulnerability.
          </h2>
          <ul className="mt-8 max-w-3xl space-y-3 t-body text-[var(--ink-on-dark-soft)]">
            <li className="flex gap-3">
              <BronzeBullet />
              <span>Email: security@spnt.io</span>
            </li>
            <li className="flex gap-3">
              <BronzeBullet />
              <span>PGP key: [link to public key]</span>
            </li>
            <li className="flex gap-3">
              <BronzeBullet />
              <span>Initial response: within 24 hours</span>
            </li>
            <li className="flex gap-3">
              <BronzeBullet />
              <span>Coordinated disclosure timeline per severity</span>
            </li>
            <li className="flex gap-3">
              <BronzeBullet />
              <span>
                Security advisory log:{" "}
                <a
                  href="#advisories"
                  className="text-[var(--bronze)] underline underline-offset-[3px]"
                >
                  /security#advisories
                </a>
              </span>
            </li>
          </ul>
          <div className="mt-8">
            <ArrowLink href="/legal/security-disclosure" tone="on-dark">
              Full responsible disclosure policy
            </ArrowLink>
          </div>
        </Container>
      </Section>

      {/* Bug Bounty */}
      <Section tone="dark-raised">
        <Container>
          <h2 className="t-section balance text-[var(--ink-on-dark)]">
            Bug bounty.
          </h2>
          <p className="mt-6 max-w-3xl t-body text-[var(--ink-on-dark-soft)]">
            Currently invitation-only. Scope and rewards available on request to{" "}
            <a
              href="mailto:security@spnt.io"
              className="text-[var(--bronze)] underline underline-offset-[3px]"
            >
              security@spnt.io
            </a>
            .
          </p>
        </Container>
      </Section>

      {/* Final CTA */}
      <CTABlock
        tone="dark"
        title="See Serpentine's posture in action."
        body="Book a demo. We are happy to walk through our own internal security posture, our subprocessor list, and our compliance roadmap."
        primary={{ label: "Book a Demo", href: "/company/contact#demo" }}
      />
    </>
  );
}

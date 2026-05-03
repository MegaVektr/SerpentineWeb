import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = pageMetadata({
  title: "Responsible Disclosure Policy",
  description:
    "How to report a vulnerability to SPNT — scope, process, safe harbor.",
  path: "/legal/security-disclosure",
});

export default function SecurityDisclosurePage() {
  return (
    <>
      <Section tone="light" tight>
        <Container size="narrow">
          <Eyebrow onLight>LEGAL</Eyebrow>
          <h1 className="t-section balance mt-4">Responsible Disclosure Policy</h1>
          <p className="t-caption text-[var(--ink-muted)] mt-3">
            Last updated: 2026-05-02 · Version 1.0
          </p>
        </Container>
      </Section>

      <Section tone="light">
        <Container size="narrow">
          <div className="mdx">
            <p className="t-body-h">
              Inspired by ISO/IEC 29147 and 30111, with safe-harbor language modeled on
              disclose.io.
            </p>

            <h2>Scope</h2>
            <p>
              This policy covers spnt.io, app.spnt.io, the Serpentine platform, and SPNT-published
              software (Postava, Odbrana CLI binaries, etc.). Out of scope: third-party services,
              non-current versions, and social-engineering-only attacks.
            </p>

            <h2>How to report</h2>
            <p>
              Email{" "}
              <a href="mailto:security@spnt.io" className="underline">
                security@spnt.io
              </a>
              , optionally PGP-encrypted (key at{" "}
              <a href="/pgp-key.txt" className="underline">
                /pgp-key.txt
              </a>
              ). Include reproduction steps, affected URL or version, and an impact assessment.
            </p>

            <h2>Our commitments</h2>
            <ul>
              <li>Acknowledgment within 24 hours.</li>
              <li>Severity assessment within 72 hours.</li>
              <li>Coordinated disclosure timeline based on severity.</li>
              <li>Public credit on request.</li>
              <li>We do not pursue legal action against good-faith researchers.</li>
            </ul>

            <h2>Researcher commitments</h2>
            <ul>
              <li>No automated scanning that degrades service.</li>
              <li>No data exfiltration beyond proof of concept.</li>
              <li>No public disclosure before the coordinated timeline.</li>
            </ul>

            <h2>Bounty</h2>
            <p>
              Currently invitation-only. Scope and rewards are available on request to{" "}
              <a href="mailto:security@spnt.io" className="underline">
                security@spnt.io
              </a>
              .
            </p>

            <h2>Safe harbor</h2>
            <p>
              Reports made in good faith following this policy are exempt from CFAA-equivalent and
              GDPR-equivalent enforcement actions by SPNT.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}

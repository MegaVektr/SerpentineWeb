import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = pageMetadata({
  title: "Data Processing Agreement",
  description: "GDPR-compliant Data Processing Agreement for Serpentine customers.",
  path: "/legal/dpa",
});

export default function DPAPage() {
  return (
    <>
      <Section tone="light" tight>
        <Container size="narrow">
          <Eyebrow onLight>LEGAL</Eyebrow>
          <h1 className="t-section balance mt-4">Data Processing Agreement</h1>
          <p className="t-caption text-[var(--ink-muted)] mt-3">
            Last updated: 2026-05-02 · Version 1.0
          </p>
        </Container>
      </Section>

      <Section tone="light">
        <Container size="narrow">
          <div className="mdx">
            <div className="not-prose rounded-[var(--r-lg)] border border-[var(--bronze)] bg-[var(--bronze-soft)] p-5 mb-8">
              <p className="t-body-h !mb-2">
                This document is being finalized with legal counsel.
              </p>
              <p className="t-small">
                For the current draft, contact{" "}
                <a href="mailto:legal@spnt.io" className="underline">
                  legal@spnt.io
                </a>
                .
              </p>
            </div>

            <h2>Overview</h2>
            <p>
              SPNT is preparing a finalized Data Processing Agreement that will be published here.
              The most recent draft is available on request to legal@spnt.io.
            </p>
            <p>Pre-signed DPA available as a PDF — request via legal@spnt.io.</p>

            <h2>Scope</h2>
            <p>
              This document applies to all customers, prospects, and visitors of SPNT services and
              the Serpentine platform.
            </p>

            <h2>Updates</h2>
            <p>
              Changes to this document will be announced via the standard subprocessor / policy
              update notice (30-day advance notice for material changes).
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}

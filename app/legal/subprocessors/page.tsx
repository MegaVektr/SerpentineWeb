import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = pageMetadata({
  title: "Subprocessors",
  description:
    "Authorized subprocessors of SPNT customer data, with location and purpose.",
  path: "/legal/subprocessors",
});

const SUBPROCESSORS: ReadonlyArray<{
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

export default function SubprocessorsPage() {
  return (
    <>
      <Section tone="light" tight>
        <Container size="narrow">
          <Eyebrow onLight>LEGAL</Eyebrow>
          <h1 className="t-section balance mt-4">Subprocessors</h1>
          <p className="t-caption text-[var(--ink-muted)] mt-3">
            Last updated: 2026-05-02 · Version 1.0
          </p>
        </Container>
      </Section>

      <Section tone="light">
        <Container size="narrow">
          <div className="mdx">
            <p>
              SPNT engages a limited set of subprocessors to deliver the Serpentine platform. The
              table below lists each subprocessor along with the purpose of processing, the
              location of processing, and the categories of data they may handle on behalf of
              customers.
            </p>

            <div className="not-prose mt-8 overflow-x-auto rounded-[var(--r-lg)] border border-[var(--stone-line)]">
              <table className="w-full border-collapse text-left">
                <thead className="bg-[var(--stone-base)]">
                  <tr>
                    <th className="t-label px-4 py-3 text-[var(--ink)]">
                      Subprocessor
                    </th>
                    <th className="t-label px-4 py-3 text-[var(--ink)]">
                      Purpose
                    </th>
                    <th className="t-label px-4 py-3 text-[var(--ink)]">
                      Location
                    </th>
                    <th className="t-label px-4 py-3 text-[var(--ink)]">
                      Data Type
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {SUBPROCESSORS.map((row) => (
                    <tr
                      key={row.name}
                      className="border-t border-[var(--stone-line)] align-top"
                    >
                      <td className="t-body px-4 py-3 font-medium">{row.name}</td>
                      <td className="t-body px-4 py-3 text-[var(--ink-soft)]">
                        {row.purpose}
                      </td>
                      <td className="t-body px-4 py-3 text-[var(--ink-soft)]">
                        {row.location}
                      </td>
                      <td className="t-body px-4 py-3 text-[var(--ink-soft)]">
                        {row.data}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Update policy</h2>
            <p>
              We notify all customers of subprocessor changes 30 days in advance via email.
              Customers may subscribe to subprocessor change notifications by contacting{" "}
              <a href="mailto:legal@spnt.io" className="underline">
                legal@spnt.io
              </a>
              .
            </p>

            <h2>Contact</h2>
            <p>
              For questions about this list or to request a Data Processing Agreement, contact{" "}
              <a href="mailto:legal@spnt.io" className="underline">
                legal@spnt.io
              </a>
              .
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}

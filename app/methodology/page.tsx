import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/lib/schema";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ArrowLink } from "@/components/ui/Link";
import { AtmosphericHero } from "@/components/marketing/AtmosphericHero";
import { PhotoBreak } from "@/components/marketing/PhotoBreak";
import { CTABlock } from "@/components/marketing/CTABlock";
import { ScannerCard, type ScannerDetail } from "./_components/ScannerCard";

export const metadata: Metadata = pageMetadata({
  title: "Methodology — How Serpentine Audits",
  description:
    "How Serpentine's scanners work, how AI reasoning is bounded, how findings are validated, how reports are structured. Full methodology, publicly documented.",
  path: "/methodology",
});

const heroSub =
  "Every security vendor claims rigor. Few publish their methodology. This is ours — the principles, the techniques, the AI boundaries, the validation approach, and the reporting standards that govern every scan Serpentine produces.";

const principles: { title: string; body: string }[] = [
  {
    title: "Source traceability over summarization.",
    body: "Every finding cites its source — the scanner module, the detection rule, the test input, the observed output. AI-generated interpretation is always labeled as interpretation.",
  },
  {
    title: "Confidence over certainty.",
    body: "Every finding carries an explicit confidence level. Low-confidence findings are flagged for human review, never auto-elevated.",
  },
  {
    title: "Reproducibility by design.",
    body: "Every scan produces a reproducibility signature — inputs, configuration, scanner versions — so results can be reproduced weeks or months later.",
  },
  {
    title: "Evidence over assumption.",
    body: 'If we cannot show evidence for a finding, we do not report the finding. Controls are not "implemented" until Regulativa has evidence they are.',
  },
  {
    title: "Responsible disclosure in our own work.",
    body: "When Serpentine discovers a vulnerability in a third-party system during testing, we follow industry-standard responsible disclosure.",
  },
  {
    title: "Guardrails over capability.",
    body: "We limit Serpentine's offensive capabilities to what can be safely executed within defined scope. The product will not help an operator violate terms of engagement or applicable law.",
  },
];

const scanners: ScannerDetail[] = [
  {
    name: "Web Scan",
    technique:
      "Dynamic Application Security Testing (DAST) with authenticated and unauthenticated crawling.",
    coverage:
      "OWASP Top 10, OWASP ASVS Level 2, common CVEs, misconfiguration patterns.",
    aiRole:
      "Context-aware payload generation, response interpretation, false-positive triage.",
    limitations:
      "DAST cannot detect vulnerabilities in unreachable code paths. Paired with Code Scan (SAST) for full coverage.",
  },
  {
    name: "Code Scan",
    technique:
      "Static Application Security Testing (SAST) with secrets detection and dependency vulnerability analysis.",
    coverage:
      "OWASP Top 10, CWE Top 25, language-agnostic across major ecosystems, CI-compatible.",
    aiRole: "Finding triage and severity ranking by call-site context.",
    limitations:
      "SAST cannot reason about runtime behavior — paired with Web Scan (DAST) for full coverage.",
  },
  {
    name: "Cloud Scan",
    technique:
      "Cloud Security Posture Management (CSPM) via read-only API inventory and configuration analysis.",
    coverage:
      "AWS, GCP, Azure, and OVH against CIS and NIST benchmarks; misconfiguration and identity exposure.",
    aiRole: "Attack-path analysis across identity, network, and data assets.",
    limitations:
      "Read-only by design — Cloud Scan never modifies cloud resources.",
  },
  {
    name: "Blockchain Scan",
    technique:
      "Symbolic execution and pattern matching against Solidity and Rust smart contracts.",
    coverage:
      "Reentrancy, access-control flaws, gas optimization, and common DeFi exploit patterns.",
    aiRole:
      "Vulnerability contextualization — distinguishing exploitable findings from theoretical ones.",
    limitations:
      "Cannot verify off-chain state or oracle behavior outside the contract under test.",
  },
  {
    name: "Mobile Scan",
    technique: "Static APK and IPA binary analysis.",
    coverage:
      "Permissions, hardcoded secrets, insecure storage, and certificate pinning verification.",
    aiRole: "Payload pattern detection across decompiled application code.",
    limitations:
      "Requires unobfuscated builds for full coverage; obfuscated binaries reduce signal.",
  },
  {
    name: "API Scan",
    technique: "Authenticated REST and GraphQL fuzzing.",
    coverage:
      "OWASP API Top 10, JWT validation flaws, authentication bypass, rate-limit analysis.",
    aiRole: "Schema-aware payload generation from OpenAPI and GraphQL specs.",
    limitations:
      "Requires an API spec or active discovery to reach full endpoint coverage.",
  },
  {
    name: "AI/ML Scan",
    technique: "Adversarial robustness testing and prompt-injection probing.",
    coverage:
      "LLM safety, model supply chain verification, and prompt-injection patterns.",
    aiRole: "Red-team prompt synthesis tailored to the model under test.",
    limitations:
      "Probabilistic — can confirm the presence of a weakness, not its absence.",
  },
  {
    name: "Network Scan",
    technique: "TCP and UDP discovery with service fingerprinting.",
    coverage:
      "Open ports, service versions, TLS configuration, and weak cipher detection.",
    aiRole: "False-positive triage of fingerprint and banner ambiguities.",
    limitations:
      "Stateless inspection only — does not observe live session behavior.",
  },
  {
    name: "Container Scan",
    technique: "Image and manifest scanning across Docker, Kubernetes, and Helm.",
    coverage:
      "SBOM generation, CVE matching, and Docker, Kubernetes, and Helm misconfigurations.",
    aiRole: "Prioritization by exploitability in the deployed configuration.",
    limitations:
      "Snapshot-time analysis — pair with runtime monitoring for live workloads.",
  },
];

const aiDoes: string[] = [
  "Interprets scanner output in operational language",
  "Generates context-aware test payloads for web and API scanning",
  "Prioritizes findings by contextual risk",
  "Drafts remediation guidance",
  "Produces executive summaries from technical findings",
  "Maps findings to relevant compliance controls",
];

const aiDoesNot: string[] = [
  "Generate vulnerabilities that were not detected by deterministic scanners",
  "Make compliance status decisions without human confirmation",
  "Invent evidence or promote assumptions to evidence",
  "Modify, delete, or edit customer data outside explicit user action",
  "Execute offensive actions outside defined engagement scope",
];

const reportStructure: string[] = [
  "Executive summary (one page)",
  "Scope and methodology (two to three pages)",
  "Findings summary table (prioritized by risk)",
  "Detailed findings (description, impact, evidence, remediation, references per finding)",
  "Compliance mappings (per applicable framework)",
  "Methodology appendix (scanner versions, configuration, timestamps)",
  "Cryptographic signature and verification URL",
];

export default function MethodologyPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: "How Serpentine actually works",
          author: { "@type": "Organization", name: "SPNT" },
          publisher: { "@type": "Organization", name: "SPNT" },
          description:
            "Methodology, AI boundaries, validation, and reporting standards for Serpentine.",
          url: "https://spnt.io/methodology",
        }}
      />

      {/* Hero */}
      <AtmosphericHero
        image="/images/hero-methodology.jpg"
        imageAlt="Architectural blueprint linework, abstract overhead view"
        eyebrow="METHODOLOGY"
        h1="How Serpentine actually works."
        sub={heroSub}
        ctaPrimary={{ label: "Book a Demo", href: "/company/contact#demo" }}
        ctaSecondary={{
          label: "Request a sample report →",
          href: "/company/contact#sales",
        }}
      />

      {/* Section 1 — Principles */}
      <Section tone="dark">
        <Container>
          <h2 className="t-section balance max-w-3xl text-[var(--ink-on-dark)]">
            Principles.
          </h2>
          <ol className="mt-12 max-w-4xl">
            {principles.map((p, i) => (
              <li
                key={p.title}
                className={
                  "grid grid-cols-[auto_1fr] gap-x-6 sm:gap-x-8 py-8 " +
                  (i !== 0
                    ? "border-t border-[var(--obsidian-line)]"
                    : "")
                }
              >
                <span className="t-label text-[var(--ink-on-dark-muted)] pt-1 font-mono">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="t-feature text-[var(--ink-on-dark)]">
                    {p.title}
                  </h3>
                  <p className="t-body mt-2 text-[var(--ink-on-dark-soft)] max-w-2xl">
                    {p.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Section 2 — The Nine Scanner Modules */}
      <Section tone="dark-raised">
        <Container>
          <h2 className="t-section balance max-w-3xl text-[var(--ink-on-dark)]">
            How each scanner works.
          </h2>
          <p className="t-lead mt-5 max-w-2xl text-[var(--ink-on-dark-soft)]">
            Nine scanner modules cover the modern attack surface. Each is
            deterministic at its core, with AI bounded to a specific role.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {scanners.map((s) => (
              <ScannerCard key={s.name} scanner={s} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Photo Break */}
      <PhotoBreak
        image="/images/break-eu-fiber.jpg"
        imageAlt="Fiber-optic strands close-up, illuminated"
        quote="Findings without sources are not findings. Interpretations without confidence are not interpretations."
      />

      {/* Section 3 — AI Reasoning Boundaries */}
      <Section tone="dark">
        <Container>
          <h2 className="t-section balance max-w-3xl text-[var(--ink-on-dark)]">
            How AI is used, and how it is not.
          </h2>
          <p className="t-lead mt-5 max-w-3xl text-[var(--ink-on-dark-soft)]">
            Serpentine uses Anthropic Claude models (primarily Haiku for
            routine analysis, Sonnet for complex reasoning) under a Data
            Processing Agreement with enterprise-grade controls. AI plays a
            specific role in our stack, bounded by explicit rules.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="t-feature text-[var(--ink-on-dark)]">
                What AI does in Serpentine
              </h3>
              <ul className="mt-6 space-y-3">
                {aiDoes.map((item) => (
                  <li
                    key={item}
                    className="t-body text-[var(--ink-on-dark-soft)] pl-5 relative"
                  >
                    <span
                      aria-hidden
                      className="absolute left-0 top-[0.6em] h-1 w-1 rounded-full bg-[var(--bronze)]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="t-feature text-[var(--ink-on-dark)]">
                What AI does NOT do in Serpentine
              </h3>
              <ul className="mt-6 space-y-3">
                {aiDoesNot.map((item) => (
                  <li
                    key={item}
                    className="t-body text-[var(--ink-on-dark-soft)] pl-5 relative"
                  >
                    <span
                      aria-hidden
                      className="absolute left-0 top-[0.55em] h-[2px] w-3 bg-[var(--ink-on-dark-muted)]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <blockquote className="mt-14 max-w-3xl border-l-2 border-[var(--bronze)] pl-6 py-2">
            <p className="t-feature text-[var(--ink-on-dark)] not-italic">
              Every AI-generated interpretation is labeled as such. Every
              finding includes its underlying deterministic detection.
              Hallucinated findings are not findings.
            </p>
          </blockquote>
        </Container>
      </Section>

      {/* Section 4 — Reporting */}
      <Section tone="dark-raised">
        <Container>
          <h2 className="t-section balance max-w-3xl text-[var(--ink-on-dark)]">
            How reports are structured.
          </h2>
          <p className="t-lead mt-5 max-w-2xl text-[var(--ink-on-dark-soft)]">
            Structure of a standard Serpentine report:
          </p>
          <ul className="mt-8 space-y-3 max-w-3xl">
            {reportStructure.map((item) => (
              <li
                key={item}
                className="t-body text-[var(--ink-on-dark-soft)] pl-5 relative"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-[0.6em] h-1 w-1 rounded-full bg-[var(--bronze)]"
                />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <ArrowLink
              href="/company/contact#sales"
              tone="on-dark"
            >
              Request a sample report
            </ArrowLink>
          </div>
        </Container>
      </Section>

      {/* Section 5 — Responsible Disclosure */}
      <Section tone="dark">
        <Container>
          <h2 className="t-section balance max-w-3xl text-[var(--ink-on-dark)]">
            If you find a vulnerability in Serpentine.
          </h2>
          <div className="mt-6 max-w-3xl space-y-5">
            <p className="t-body text-[var(--ink-on-dark-soft)]">
              We maintain a Responsible Disclosure Policy. Report
              vulnerabilities to{" "}
              <a
                href="mailto:security@spnt.io"
                className="text-[var(--ink-on-dark)] underline underline-offset-[3px] decoration-[var(--ink-on-dark-muted)] decoration-1 hover:decoration-[var(--bronze)]"
              >
                security@spnt.io
              </a>{" "}
              (PGP key available on request) or via our{" "}
              <code className="text-[var(--ink-on-dark)]">
                /.well-known/security.txt
              </code>
              . Initial acknowledgment within 24 hours. Severity assessment
              within 72 hours. Coordinated disclosure timeline based on
              severity.
            </p>
            <p className="t-body text-[var(--ink-on-dark-soft)]">
              We publish a public security advisory log at{" "}
              <code className="text-[var(--ink-on-dark)]">
                /security#advisories
              </code>{" "}
              for any confirmed vulnerabilities in our own systems.
            </p>
          </div>
          <div className="mt-10">
            <ArrowLink href="/legal/security-disclosure" tone="on-dark">
              View responsible disclosure policy
            </ArrowLink>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <CTABlock
        tone="dark"
        title="See the methodology in practice."
        body="Book a demo and watch a real scan run end-to-end. Inputs, scanner output, AI interpretation, finding, evidence chain — every step traceable."
        primary={{ label: "Book a Demo", href: "/company/contact#demo" }}
        secondary={{ label: "Talk to Sales", href: "/company/contact#sales" }}
      />
    </>
  );
}

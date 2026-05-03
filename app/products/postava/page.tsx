import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";
import { ArrowLink } from "@/components/ui/Link";
import { CTABlock } from "@/components/marketing/CTABlock";
import { SplitHero } from "@/components/marketing/SplitHero";
import { DashTerminal } from "@/components/marketing/DashTerminal";
import { JsonLd, softwareApplication } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Postava — Deploy and Harden Linux Servers in One Command",
  description:
    "A single-binary CLI that deploys your app and applies production-grade Linux hardening in one operation. Firewall, SSH, kernel, Fail2ban — automated.",
  path: "/products/postava",
});

const PUSH_OPERATIONS: string[] = [
  "Connects to your server over SSH",
  "Verifies cryptographic signature of your Docker image (Cosign)",
  "Deploys the container onto an isolated internal network",
  "Configures Caddy or Nginx as a TLS-terminating reverse proxy",
  "Applies firewall rules via UFW or nftables (ports 22, 80, 443 by default)",
  "Hardens the SSH daemon configuration",
  "Tunes kernel network parameters against IP spoofing, SYN floods, and ICMP attacks",
  "Installs and configures Fail2ban for SSH brute-force protection",
  "Installs CrowdSec for community threat intelligence (Pro)",
  "Runs a full security audit and produces a scored report (Pro)",
  "Injects encrypted secrets from an XChaCha20-Poly1305 encrypted file — never stored in plaintext",
];

type MatrixRow = { feature: string; free: boolean; pro: boolean };

const MATRIX_ROWS: MatrixRow[] = [
  { feature: "Container deployment", free: true, pro: true },
  { feature: "Firewall hardening (UFW / nftables)", free: true, pro: true },
  { feature: "SSH hardening", free: true, pro: true },
  { feature: "Kernel tuning", free: true, pro: true },
  { feature: "Fail2ban configuration", free: true, pro: true },
  { feature: "Automatic OS updates", free: true, pro: true },
  { feature: "TLS reverse proxy (Caddy / Nginx)", free: true, pro: true },
  { feature: "Multi-server, multi-environment", free: true, pro: true },
  { feature: "Encrypted secrets management", free: true, pro: true },
  { feature: "Health monitoring", free: true, pro: true },
  { feature: "Webhook notifications", free: true, pro: true },
  { feature: "CI/CD workflow generation", free: true, pro: true },
  { feature: "Shell completion + self-update", free: true, pro: true },
  { feature: "CrowdSec threat intelligence", free: false, pro: true },
  { feature: "Security audit scanner + scoring", free: false, pro: true },
  { feature: "Cosign image signature verification", free: false, pro: true },
  { feature: "24/7 agent listeners (roadmap)", free: false, pro: true },
  { feature: "Priority support", free: false, pro: true },
];

const VALUE_CARDS: { title: string; body: string }[] = [
  {
    title: "Time compression",
    body: "Full deploy plus harden cycle in under three minutes. A senior engineer's two-to-three-hour security hardening pass, encoded into the tool.",
  },
  {
    title: "Knowledge in the tool, not the engineer",
    body: "A junior engineer can run a production-grade, hardened deployment with zero Linux security expertise. Institutional knowledge is in the binary.",
  },
  {
    title: "Auditability",
    body: "Postava records what was applied, when, to which server. `postava drift` detects any deviation from the desired state.",
  },
  {
    title: "Supply chain security",
    body: "Cosign signature verification blocks unsigned images. Encrypted secrets never touch disk in plaintext.",
  },
];

function ValueCardBody({ text }: { text: string }) {
  const parts = text.split(/(`[^`]+`)/g);
  return (
    <p className="t-small mt-3 text-[var(--ink-on-dark-soft)]">
      {parts.map((part, i) =>
        part.startsWith("`") && part.endsWith("`") ? (
          <code key={i}>{part.slice(1, -1)}</code>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </p>
  );
}

function FeatureMatrix() {
  return (
    <div className="mx-auto mt-12 max-w-4xl overflow-x-auto">
      <table className="border-collapse w-full text-[14px]">
        <thead>
          <tr>
            <th
              scope="col"
              className="border border-[var(--obsidian-line)] bg-[var(--obsidian-raised)] px-3 py-2.5 text-left font-semibold text-[var(--ink-on-dark)]"
            >
              Feature
            </th>
            <th
              scope="col"
              className="w-24 border border-[var(--obsidian-line)] bg-[var(--obsidian-raised)] px-3 py-2.5 text-center font-semibold text-[var(--ink-on-dark)]"
            >
              Free
            </th>
            <th
              scope="col"
              className="w-24 border border-[var(--obsidian-line)] bg-[var(--obsidian-raised)] px-3 py-2.5 text-center font-semibold text-[var(--ink-on-dark)]"
            >
              Pro
            </th>
          </tr>
        </thead>
        <tbody>
          {MATRIX_ROWS.map((row) => (
            <tr key={row.feature}>
              <td className="border border-[var(--obsidian-line)] px-3 py-2.5 text-[var(--ink-on-dark)]">
                {row.feature}
              </td>
              <td className="border border-[var(--obsidian-line)] px-3 py-2.5 text-center">
                {row.free ? (
                  <span className="text-[var(--bronze)]" aria-label="Included">
                    ✓
                  </span>
                ) : (
                  <span className="text-[var(--ink-on-dark-muted)]" aria-label="Not included">
                    —
                  </span>
                )}
              </td>
              <td className="border border-[var(--obsidian-line)] px-3 py-2.5 text-center">
                {row.pro ? (
                  <span className="text-[var(--bronze)]" aria-label="Included">
                    ✓
                  </span>
                ) : (
                  <span className="text-[var(--ink-on-dark-muted)]" aria-label="Not included">
                    —
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PostavaPage() {
  return (
    <>
      <JsonLd
        data={softwareApplication({
          name: "Postava",
          description:
            "Single-binary CLI that deploys and hardens Linux servers in one operation.",
          url: "https://spnt.io/products/postava",
          category: "DeveloperApplication",
          offerPrice: "0",
          offerCurrency: "EUR",
        })}
      />

      {/* Hero */}
      <SplitHero
        eyebrow="03 · POSTAVA — SETUP — AVAILABLE NOW"
        h1="Deploy your app and harden the server in one command."
        sub="Postava is a single-binary CLI tool that ships your application to a Linux server and automatically applies production-grade security hardening in the same operation. Firewall, SSH, kernel tuning, intrusion detection, image verification — all in under three minutes."
        ctaPrimary={{ label: "Install Postava", href: "#install" }}
        ctaSecondary={{ label: "View on GitHub →", href: "https://github.com/spnt-io/postava" }}
        right={<DashTerminal />}
      />

      {/* The Problem */}
      <Section tone="dark">
        <Container size="narrow">
          <h2 className="t-section balance text-[var(--ink-on-dark)]">
            Deployment and security hardening should not be separate projects.
          </h2>
          <div className="mt-8 space-y-5 text-[var(--ink-on-dark-soft)]">
            <p className="t-lead">
              Deploying an application to a VPS requires two skill sets that
              rarely live in the same team: deployment engineering (getting a
              container running behind a TLS-terminating reverse proxy) and
              Linux security hardening (iptables, SSH, kernel network
              parameters, fail2ban, intrusion detection, audit trails).
            </p>
            <p className="t-lead">
              Most teams do the first. Most teams skip the second. The result
              is applications running on servers that are technically reachable
              but defensively naked. This is how breaches happen — an exposed
              SSH port, a default kernel configuration that allows IP spoofing,
              a missing rate limiter on port 22.
            </p>
            <p className="t-lead">
              Postava collapses both concerns into one command.
            </p>
          </div>
        </Container>
      </Section>

      {/* What postava push Does */}
      <Section tone="dark-raised">
        <Container>
          <div className="max-w-3xl">
            <h2 className="t-section balance text-[var(--ink-on-dark)]">
              One command. Eleven operations.
            </h2>
            <p className="t-lead mt-5 text-[var(--ink-on-dark-soft)]">
              Each <code>postava push</code> performs the following, in order,
              against the target server.
            </p>
          </div>

          <ol className="mt-12 grid grid-cols-1 gap-x-10 gap-y-5 md:grid-cols-2">
            {PUSH_OPERATIONS.map((op, i) => (
              <li
                key={op}
                className="flex gap-4 border-t border-[var(--obsidian-line)] pt-5"
              >
                <span
                  className="font-[var(--font-mono)] text-[14px] font-semibold tabular-nums text-[var(--bronze)]"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <span className="t-small text-[var(--ink-on-dark)]">{op}</span>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Feature Matrix */}
      <Section tone="dark">
        <Container>
          <div className="text-center">
            <h2 className="t-section balance text-[var(--ink-on-dark)]">
              Free and Pro capabilities.
            </h2>
            <p className="t-lead mx-auto mt-5 max-w-2xl text-[var(--ink-on-dark-soft)]">
              Every hardening primitive ships in the open-source Free tier.
              Pro adds threat intelligence, signature verification, and the
              audit scanner.
            </p>
          </div>
          <FeatureMatrix />
        </Container>
      </Section>

      {/* Business Value */}
      <Section tone="dark-raised">
        <Container>
          <div className="max-w-3xl">
            <h2 className="t-section balance text-[var(--ink-on-dark)]">
              Why teams ship with Postava.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {VALUE_CARDS.map((card) => (
              <Card key={card.title} tone="dark">
                <h3 className="t-feature text-[var(--ink-on-dark)]">{card.title}</h3>
                <ValueCardBody text={card.body} />
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Roadmap */}
      <Section tone="dark">
        <Container size="narrow">
          <Pill variant="soon">ROADMAP</Pill>
          <h2 className="t-section balance mt-6 text-[var(--ink-on-dark)]">
            Coming: 24/7 attack defense.
          </h2>
          <div className="mt-8 space-y-5 text-[var(--ink-on-dark-soft)]">
            <p className="t-lead">
              The next generation of Postava adds persistent agent listeners to
              every deployed server. Listeners monitor attack patterns in real
              time, coordinate with Odbrana for continuous vulnerability
              assessment, and take defensive action against detected
              intrusions — entirely within the Postava-hardened perimeter.
            </p>
            <p className="t-lead">
              This moves Postava from hardened deployment tool to living
              defense layer. Part of the Serpentine Pro and Enterprise tiers.
            </p>
          </div>
        </Container>
      </Section>

      {/* Install */}
      <Section tone="dark" id="install">
        <Container size="narrow">
          <h2 className="t-section balance text-[var(--ink-on-dark)]">Install Postava.</h2>
          <p className="t-lead mt-5 text-[var(--ink-on-dark-soft)]">
            Single static binary. No agent, no daemon, no runtime to babysit.
          </p>

          <div className="mt-10 space-y-6">
            <div>
              <p className="t-caption mb-2 font-semibold text-[var(--ink-on-dark)]">
                macOS / Linux (Homebrew)
              </p>
              <Card tone="ghost-on-dark">
                <pre>
                  <code>brew install spnt-io/tap/postava</code>
                </pre>
              </Card>
            </div>
            <div>
              <p className="t-caption mb-2 font-semibold text-[var(--ink-on-dark)]">
                Direct install
              </p>
              <Card tone="ghost-on-dark">
                <pre>
                  <code>curl -sSL https://get.spnt.io/postava | bash</code>
                </pre>
              </Card>
            </div>
            <div>
              <p className="t-caption mb-2 font-semibold text-[var(--ink-on-dark)]">
                From source
              </p>
              <Card tone="ghost-on-dark">
                <pre>
                  <code>go install github.com/spnt-io/postava/cmd/postava@latest</code>
                </pre>
              </Card>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            <ArrowLink href="https://docs.spnt.io" external tone="on-dark">
              Full documentation →
            </ArrowLink>
            <ArrowLink href="https://github.com/spnt-io/postava" external tone="on-dark">
              GitHub repository →
            </ArrowLink>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <CTABlock
        tone="dark"
        title="Deploy hardened in three minutes."
        body="Install Postava and ship a production-grade hardened deployment from a single command. Free for unlimited servers."
        primary={{ label: "Install Postava", href: "#install" }}
        secondary={{ label: "Book a Demo →", href: "/company/contact#demo" }}
      />
    </>
  );
}

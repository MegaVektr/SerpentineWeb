import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";
import { UtilitarianHero } from "@/components/marketing/UtilitarianHero";
import { CTABlock } from "@/components/marketing/CTABlock";
import { JsonLd, faqPage } from "@/lib/schema";
import { cn } from "@/lib/cn";

export const metadata: Metadata = pageMetadata({
  title: "Pricing — Serpentine Security Platform",
  description:
    "Postava: free open source, Pro per-server. Odbrana, Napad, Regulativa: contact sales for platform pricing. Bundle discounts available for enterprise.",
  path: "/pricing",
});

type Tier = {
  label: string;
  name: string;
  price: string;
  priceSub?: string;
  features: string[];
  cta: { label: string; href: string; external?: boolean };
  tone: "light" | "featured";
  badge?: string;
};

const POSTAVA_TIERS: Tier[] = [
  {
    label: "FREE",
    name: "Postava",
    price: "€0",
    priceSub: "forever",
    features: [
      "Full core deploy + hardening capabilities",
      "Unlimited servers and environments",
      "Encrypted secrets management",
      "Community support via GitHub Issues",
    ],
    cta: {
      label: "Install from GitHub →",
      href: "https://github.com/spnt-io/postava",
      external: true,
    },
    tone: "light",
  },
  {
    label: "PRO",
    name: "Postava",
    price: "€19",
    priceSub: "per server / month · or €190 per server / year",
    features: [
      "Everything in Free",
      "CrowdSec threat intelligence",
      "Security audit scanner and scoring",
      "Cosign image signature verification",
      "Priority email support",
    ],
    cta: { label: "Start Pro", href: "/company/contact#sales" },
    tone: "featured",
    badge: "MOST POPULAR",
  },
  {
    label: "TEAM",
    name: "Postava",
    price: "from €99",
    priceSub:
      "per month (flat, up to 10 servers) · Scale to 50 servers for €299 / month",
    features: [
      "Everything in Pro, for teams",
      "Team management and seat controls",
      "Shared configuration and audit history",
      "Multi-environment support",
    ],
    cta: { label: "Start Team", href: "/company/contact#sales" },
    tone: "light",
  },
  {
    label: "FORTRESS",
    name: "Postava",
    price: "€49",
    priceSub: "per server / month · available Q3 2026",
    features: [
      "Everything in Pro",
      "24/7 agent listeners for continuous attack defense",
      "Integration with Odbrana for continuous attack-surface monitoring",
      "Automated defensive response",
    ],
    cta: { label: "Join Fortress Waitlist", href: "/company/contact#waitlist" },
    tone: "light",
  },
];

function PricingTier({ tier }: { tier: Tier }) {
  const isFeatured = tier.tone === "featured";
  return (
    <Card
      tone={tier.tone}
      className={cn("relative flex h-full flex-col")}
    >
      {tier.badge && (
        <span className="absolute right-4 top-4 rounded-[var(--r-sm)] bg-[var(--bronze)] px-2.5 py-1 t-label text-[var(--obsidian-base)]">
          {tier.badge}
        </span>
      )}
      <div className="t-label text-[var(--bronze-deep-on-light)]">
        {tier.label}
      </div>
      <h3 className="t-feature mt-2 text-[var(--ink)]">{tier.name}</h3>
      <div className="mt-5">
        <div
          className="t-section text-[var(--ink)] leading-none"
          style={{ fontWeight: 500 }}
        >
          {tier.price}
        </div>
        {tier.priceSub && (
          <p className="t-small mt-3 text-[var(--ink-soft)]">
            {tier.priceSub}
          </p>
        )}
      </div>
      <ul className="mt-6 space-y-3">
        {tier.features.map((f) => (
          <li
            key={f}
            className="t-body flex gap-3 text-[var(--ink-soft)]"
          >
            <span
              aria-hidden
              className="mt-[8px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--bronze-deep-on-light)]"
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-8">
        <Button
          href={tier.cta.href}
          external={tier.cta.external}
          variant={isFeatured ? "bronze" : "ghost-on-light"}
          size="md"
          className="w-full"
        >
          {tier.cta.label}
        </Button>
      </div>
    </Card>
  );
}

type QuotedProduct = {
  name: string;
  recap: string;
  availability: { label: string; variant: "available" | "beta" | "soon" };
  scope: string;
  cta: { label: string; href: string };
};

const QUOTED_PRODUCTS: QuotedProduct[] = [
  {
    name: "Odbrana",
    recap:
      "Continuous security audit scanner — automated infrastructure assessment with severity-scored findings and remediation guidance.",
    availability: { label: "Available now", variant: "available" },
    scope: "Typical engagements: SMB, mid-market, enterprise.",
    cta: { label: "Request Pricing", href: "/company/contact#sales" },
  },
  {
    name: "Napad",
    recap:
      "Offensive testing platform — continuous adversarial simulation against your production attack surface, scoped per engagement.",
    availability: { label: "Private beta", variant: "beta" },
    scope: "Typical engagements: SMB, mid-market, enterprise.",
    cta: { label: "Request Beta Access", href: "/company/contact#waitlist" },
  },
  {
    name: "Regulativa",
    recap:
      "Compliance governance platform — framework packs, evidence automation, and continuous control monitoring for regulated industries.",
    availability: { label: "Coming 2026", variant: "soon" },
    scope: "Typical engagements: SMB, mid-market, enterprise.",
    cta: { label: "Join Waitlist", href: "/company/contact#waitlist" },
  },
];

const PLATFORM_BUNDLES: { name: string; body: string }[] = [
  {
    name: "Starter Platform",
    body: "Growing companies adopting two or three Serpentine products. Bundled pricing with shared credit pool.",
  },
  {
    name: "Professional Platform",
    body: "Mid-market companies deploying the full suite. Includes dedicated support, quarterly business reviews, priority roadmap access.",
  },
  {
    name: "Enterprise Platform",
    body: "Large-scale deployments, regulated industries, air-gapped or sovereign hosting requirements. Multi-year contracts with custom SLAs and integration work.",
  },
];

const ENGAGEMENT_INCLUDES: string[] = [
  "Sovereign EU infrastructure on OVHcloud (multi-region within the EU; never outside)",
  "GDPR-compliant Data Processing Agreement",
  "SOC 2 Type II and ISO 27001 certified datacenters",
  "Responsible disclosure policy and security incident SLA",
  "Zero customer data used for AI training",
  "Transparent subprocessor list",
];

const BILLING_FACTS: { label: string; body: string }[] = [
  {
    label: "Payment processor",
    body: "Paddle (EU-based Merchant of Record, handles global VAT/GST/sales tax)",
  },
  {
    label: "Accepted methods",
    body: "Credit card, SEPA direct debit, wire transfer, Net-30/60/90 terms (Enterprise)",
  },
  {
    label: "Annual commitments",
    body: "15–25% discount depending on tier and commitment length",
  },
  {
    label: "Multi-year contracts",
    body: "Additional discount available for 2+ year commitments",
  },
  {
    label: "Cancellation",
    body: "Self-service for Postava self-serve tiers; contractual for platform engagements",
  },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "Do you offer a free trial?",
    a: "Postava has a free tier. Odbrana offers a scoped pilot engagement. Napad beta is invitation-only. Regulativa early access opens 2026.",
  },
  {
    q: "Do you support SSO / SAML?",
    a: "Yes, on all platform tiers above Postava Team.",
  },
  {
    q: "Where is customer data hosted?",
    a: "OVHcloud, multiple EU regions. Specific region selection is contractual and disclosed in the MSA — we do not publish individual datacenter locations as a matter of operational security. US hosting is not offered.",
  },
  {
    q: "Can we self-host Serpentine?",
    a: "Postava Enterprise supports self-hosted control plane. Full platform self-hosting is available for Enterprise contracts.",
  },
  {
    q: "What's included in a Platform engagement?",
    a: "Depends on scope. All include dedicated onboarding, integration support, and named contact.",
  },
  {
    q: "Do you offer volume discounts?",
    a: "Yes, on annual commitments and multi-year contracts.",
  },
  {
    q: "What's your SLA?",
    a: "99.9% uptime standard, 99.95% on Enterprise. Details in MSA.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border-b border-[var(--stone-line)] [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-4 font-medium text-[var(--ink)]">
        <span className="t-body">{q}</span>
        <span
          aria-hidden
          className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center text-[var(--ink-soft)] transition-transform duration-150 group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <p className="t-body pb-5 max-w-3xl text-[var(--ink-soft)]">{a}</p>
    </details>
  );
}

const PRODUCT_OFFERS = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Postava Free",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    url: "https://spnt.io/pricing",
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Postava Pro",
    offers: { "@type": "Offer", price: "19", priceCurrency: "EUR" },
    url: "https://spnt.io/pricing",
  },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd data={faqPage(FAQS)} />
      <JsonLd data={PRODUCT_OFFERS} />

      {/* Hero */}
      <UtilitarianHero
        tone="light"
        eyebrow="PRICING"
        h1="Pricing that reflects how security teams actually buy."
        sub="Postava — the developer tool — is priced per-server with a generous free tier. Odbrana, Napad, Regulativa, and full platform engagements are priced per deployment, based on scope, scale, and integration requirements. Every enterprise engagement is quoted directly."
      />

      {/* Postava — published pricing */}
      <Section tone="light">
        <Container>
          <div className="max-w-3xl">
            <h2 className="t-section balance text-[var(--ink)]">
              Postava — the developer tool we price transparently.
            </h2>
            <p className="t-lead mt-5 text-[var(--ink-soft)]">
              Postava is a developer tool. Engineers want to try it before they
              buy it, and we want you to. Full pricing, no sales call required.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {POSTAVA_TIERS.map((tier) => (
              <PricingTier key={tier.label} tier={tier} />
            ))}
          </div>

          {/* Postava Enterprise full-width row */}
          <Card
            tone="light"
            className="mt-5 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"
          >
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="t-label text-[var(--bronze-deep-on-light)]">
                  ENTERPRISE
                </div>
                <Pill variant="default">Contact Sales</Pill>
              </div>
              <h3 className="t-feature mt-2 text-[var(--ink)]">
                Postava Enterprise
              </h3>
              <p className="t-body mt-3 text-[var(--ink-soft)]">
                Air-gapped deployment, SSO, SLA, white-glove onboarding,
                self-hosted control plane, unlimited scale.
              </p>
            </div>
            <div className="shrink-0">
              <Button href="/company/contact#sales" variant="ink" size="lg">
                Contact Sales
              </Button>
            </div>
          </Card>
        </Container>
      </Section>

      {/* Odbrana / Napad / Regulativa — quoted */}
      <Section tone="light-raised">
        <Container>
          <div className="max-w-3xl">
            <h2 className="t-section balance text-[var(--ink)]">
              Odbrana, Napad, Regulativa — priced per engagement.
            </h2>
            <div className="mt-5 space-y-5 text-[var(--ink-soft)]">
              <p className="t-lead">
                Security audit, offensive testing, and compliance governance
                platforms are quoted directly because pricing depends on scope,
                integration requirements, data residency, and support
                expectations. We do not publish one-size-fits-all tiers for
                enterprise security — no serious vendor in this category does.
              </p>
              <p className="t-lead">
                Every engagement is scoped in a thirty-minute discovery call,
                priced transparently, and quoted in writing.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {QUOTED_PRODUCTS.map((p) => (
              <Card key={p.name} tone="light" className="flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <h3 className="t-feature text-[var(--ink)]">{p.name}</h3>
                  <Pill variant={p.availability.variant}>
                    {p.availability.label}
                  </Pill>
                </div>
                <p className="t-body mt-4 text-[var(--ink-soft)]">{p.recap}</p>
                <p className="t-small mt-5 text-[var(--ink-muted)]">
                  {p.scope}
                </p>
                <div className="mt-auto pt-8">
                  <Button
                    href={p.cta.href}
                    variant="ghost-on-light"
                    size="md"
                    className="w-full"
                  >
                    {p.cta.label}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Serpentine Platform Bundles */}
      <Section tone="light">
        <Container>
          <div className="max-w-3xl">
            <h2 className="t-section balance text-[var(--ink)]">
              Serpentine Platform — bundled pricing.
            </h2>
            <div className="mt-5 space-y-5 text-[var(--ink-soft)]">
              <p className="t-lead">
                Organizations adopting two or more Serpentine products qualify
                for platform bundle pricing. Enterprise engagements covering all
                four products are scoped as a unified deployment with shared
                support, unified onboarding, and consolidated procurement.
              </p>
              <p className="t-lead">
                Contact sales to scope a Serpentine Platform engagement.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {PLATFORM_BUNDLES.map((b) => (
              <Card key={b.name} tone="light" className="h-full">
                <h3 className="t-feature text-[var(--ink)]">{b.name}</h3>
                <p className="t-body mt-4 text-[var(--ink-soft)]">{b.body}</p>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button href="/company/contact#sales" variant="ink" size="lg">
              Contact Sales
            </Button>
          </div>
        </Container>
      </Section>

      {/* What Every Engagement Includes */}
      <Section tone="light-raised">
        <Container>
          <div className="max-w-3xl">
            <h2 className="t-section balance text-[var(--ink)]">
              Standard across every engagement.
            </h2>
          </div>
          <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-5 md:grid-cols-2">
            {ENGAGEMENT_INCLUDES.map((item) => (
              <li
                key={item}
                className="flex gap-3 border-t border-[var(--stone-line)] pt-5"
              >
                <span
                  aria-hidden
                  className="mt-[10px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--bronze)]"
                />
                <span className="t-body text-[var(--ink)]">{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Billing */}
      <Section tone="light">
        <Container>
          <div className="max-w-3xl">
            <h2 className="t-section balance text-[var(--ink)]">
              Billing, at a glance.
            </h2>
          </div>
          <ul className="mt-10 max-w-4xl space-y-5">
            {BILLING_FACTS.map((f) => (
              <li
                key={f.label}
                className="flex flex-col gap-1 border-t border-[var(--stone-line)] pt-5 sm:flex-row sm:gap-6"
              >
                <span className="t-label shrink-0 text-[var(--ink)] sm:w-56">
                  {f.label}
                </span>
                <span className="t-body text-[var(--ink-soft)]">{f.body}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* FAQ */}
      <Section tone="light-raised">
        <Container>
          <div className="max-w-3xl">
            <h2 className="t-section balance text-[var(--ink)]">
              Frequently asked questions.
            </h2>
          </div>
          <div className="mt-10 max-w-4xl">
            {FAQS.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <CTABlock
        tone="dark"
        title="Talk to a security engineer."
        body="Book a discovery call. We scope the engagement, walk through pricing in writing, and answer every procurement question."
        primary={{ label: "Book a Demo", href: "/company/contact#demo" }}
        secondary={{ label: "Talk to Sales", href: "/company/contact#sales" }}
      />
    </>
  );
}

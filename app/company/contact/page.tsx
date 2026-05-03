import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Link, ArrowLink } from "@/components/ui/Link";
import { CTABlock } from "@/components/marketing/CTABlock";
import { UtilitarianHero } from "@/components/marketing/UtilitarianHero";
import { JsonLd } from "@/lib/schema";
import { MailtoForm } from "./_components/MailtoForm";

export const metadata: Metadata = pageMetadata({
  title: "Contact & Book a Demo | Serpentine",
  description:
    "Book a demo, request sales info, join a waitlist, report a security issue. Multi-path contact — no generic forms.",
  path: "/company/contact",
});

const ANCHORS: { id: string; label: string }[] = [
  { id: "demo", label: "DEMO" },
  { id: "sales", label: "SALES" },
  { id: "waitlist", label: "WAITLIST" },
  { id: "support", label: "SUPPORT" },
  { id: "security", label: "SECURITY" },
  { id: "press", label: "PRESS" },
  { id: "partnerships", label: "PARTNERSHIPS" },
];

const INPUT_CLASS =
  "w-full rounded-[var(--r-md)] border border-[var(--stone-line-strong)] bg-[var(--stone-raised)] px-3 py-2.5 text-[15px] text-[var(--ink)] focus:border-[var(--bronze)] focus:outline-none focus:shadow-[0_0_0_3px_rgba(201,166,106,0.25)]";

const LABEL_CLASS =
  "block text-[14px] font-semibold text-[var(--ink)] mb-1.5";

const REQUIRED_MARK = (
  <span className="text-[var(--bronze-deep-on-light)]" aria-hidden>
    {" *"}
  </span>
);

function FormField({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className={LABEL_CLASS}>
        {label}
        {required ? REQUIRED_MARK : null}
      </label>
      {children}
    </div>
  );
}

function Honeypot() {
  return (
    <input
      type="text"
      name="website"
      tabIndex={-1}
      aria-hidden="true"
      autoComplete="off"
      className="hidden"
    />
  );
}

function AnchorNav() {
  return (
    <nav aria-label="Contact sections" className="-mx-6 px-6 sm:mx-0 sm:px-0">
      <ul className="flex flex-nowrap items-center gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible sm:pb-0">
        {ANCHORS.map((a) => (
          <li key={a.id} className="shrink-0">
            <a
              href={`#${a.id}`}
              className="t-label inline-flex items-center rounded-[var(--r-md)] border border-[var(--stone-line-strong)] bg-[var(--stone-base)] px-4 py-2 text-[var(--ink)] transition-colors hover:border-[var(--bronze)] hover:text-[var(--bronze-deep-on-light)]"
            >
              {a.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ---------- Forms ---------- */

function DemoForm() {
  return (
    <MailtoForm
      to="demo@spnt.io"
      subject="Demo request"
      className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2"
    >
      <Honeypot />

      <FormField id="demo-name" label="Name" required>
        <input
          id="demo-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={INPUT_CLASS}
        />
      </FormField>

      <FormField id="demo-email" label="Work email" required>
        <input
          id="demo-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={INPUT_CLASS}
        />
      </FormField>

      <FormField id="demo-company" label="Company" required>
        <input
          id="demo-company"
          name="company"
          type="text"
          required
          autoComplete="organization"
          className={INPUT_CLASS}
        />
      </FormField>

      <FormField id="demo-size" label="Company size" required>
        <select
          id="demo-size"
          name="company_size"
          required
          defaultValue=""
          className={INPUT_CLASS}
        >
          <option value="" disabled>
            Select size
          </option>
          <option value="1-10">1–10</option>
          <option value="11-50">11–50</option>
          <option value="51-200">51–200</option>
          <option value="201-1000">201–1000</option>
          <option value="1000+">1000+</option>
        </select>
      </FormField>

      <FormField id="demo-interest" label="Primary interest" required>
        <select
          id="demo-interest"
          name="primary_interest"
          required
          defaultValue=""
          className={INPUT_CLASS}
        >
          <option value="" disabled>
            Select interest
          </option>
          <option value="odbrana">Odbrana</option>
          <option value="napad">Napad</option>
          <option value="postava">Postava</option>
          <option value="regulativa">Regulativa</option>
          <option value="full-platform">Full platform</option>
          <option value="not-sure">Not sure</option>
        </select>
      </FormField>

      <FormField id="demo-timeline" label="Timeline" required>
        <select
          id="demo-timeline"
          name="timeline"
          required
          defaultValue=""
          className={INPUT_CLASS}
        >
          <option value="" disabled>
            Select timeline
          </option>
          <option value="evaluating-now">Evaluating now</option>
          <option value="within-3-months">Within 3 months</option>
          <option value="within-6-months">Within 6 months</option>
          <option value="just-exploring">Just exploring</option>
        </select>
      </FormField>

      <div className="md:col-span-2">
        <FormField id="demo-stack" label="Current security stack (optional)">
          <textarea
            id="demo-stack"
            name="security_stack"
            rows={3}
            className={INPUT_CLASS}
          />
        </FormField>
      </div>

      <div className="md:col-span-2">
        <FormField id="demo-message" label="Message (optional)">
          <textarea
            id="demo-message"
            name="message"
            rows={4}
            className={INPUT_CLASS}
          />
        </FormField>
      </div>

      <div className="md:col-span-2">
        <Button variant="bronze" size="lg" type="submit">
          Submit
        </Button>
      </div>
    </MailtoForm>
  );
}

function SalesForm() {
  return (
    <MailtoForm
      to="sales@spnt.io"
      subject="Sales inquiry"
      className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2"
    >
      <Honeypot />

      <FormField id="sales-name" label="Name" required>
        <input
          id="sales-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={INPUT_CLASS}
        />
      </FormField>

      <FormField id="sales-email" label="Work email" required>
        <input
          id="sales-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={INPUT_CLASS}
        />
      </FormField>

      <FormField id="sales-company" label="Company" required>
        <input
          id="sales-company"
          name="company"
          type="text"
          required
          autoComplete="organization"
          className={INPUT_CLASS}
        />
      </FormField>

      <FormField id="sales-size" label="Company size" required>
        <select
          id="sales-size"
          name="company_size"
          required
          defaultValue=""
          className={INPUT_CLASS}
        >
          <option value="" disabled>
            Select size
          </option>
          <option value="1-10">1–10</option>
          <option value="11-50">11–50</option>
          <option value="51-200">51–200</option>
          <option value="201-1000">201–1000</option>
          <option value="1000+">1000+</option>
        </select>
      </FormField>

      <div className="md:col-span-2">
        <FormField id="sales-timeline" label="Procurement timeline" required>
          <select
            id="sales-timeline"
            name="procurement_timeline"
            required
            defaultValue=""
            className={INPUT_CLASS}
          >
            <option value="" disabled>
              Select timeline
            </option>
            <option value="this-quarter">This quarter</option>
            <option value="next-quarter">Next quarter</option>
            <option value="this-year">This year</option>
            <option value="next-year">Next year or later</option>
          </select>
        </FormField>
      </div>

      <div className="md:col-span-2">
        <FormField id="sales-message" label="Message" required>
          <textarea
            id="sales-message"
            name="message"
            rows={4}
            required
            className={INPUT_CLASS}
          />
        </FormField>
      </div>

      <div className="md:col-span-2">
        <Button variant="bronze" size="lg" type="submit">
          Submit
        </Button>
      </div>
    </MailtoForm>
  );
}

function WaitlistForm() {
  return (
    <MailtoForm
      to="waitlist@spnt.io"
      subject="Beta / early-access waitlist"
      className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2"
    >
      <Honeypot />

      <FormField id="wl-name" label="Name" required>
        <input
          id="wl-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={INPUT_CLASS}
        />
      </FormField>

      <FormField id="wl-email" label="Work email" required>
        <input
          id="wl-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={INPUT_CLASS}
        />
      </FormField>

      <FormField id="wl-company" label="Company" required>
        <input
          id="wl-company"
          name="company"
          type="text"
          required
          autoComplete="organization"
          className={INPUT_CLASS}
        />
      </FormField>

      <FormField id="wl-interest" label="Interest" required>
        <select
          id="wl-interest"
          name="interest"
          required
          defaultValue=""
          className={INPUT_CLASS}
        >
          <option value="" disabled>
            Select interest
          </option>
          <option value="napad">Napad</option>
          <option value="regulativa">Regulativa</option>
          <option value="both">Both</option>
        </select>
      </FormField>

      <div className="md:col-span-2">
        <FormField id="wl-message" label="Message">
          <textarea
            id="wl-message"
            name="message"
            rows={4}
            className={INPUT_CLASS}
          />
        </FormField>
      </div>

      <div className="md:col-span-2">
        <Button variant="bronze" size="lg" type="submit">
          Submit
        </Button>
      </div>
    </MailtoForm>
  );
}

function PartnershipsForm() {
  return (
    <MailtoForm
      to="partnerships@spnt.io"
      subject="Partnership inquiry"
      className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2"
    >
      <Honeypot />

      <FormField id="pt-name" label="Name" required>
        <input
          id="pt-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={INPUT_CLASS}
        />
      </FormField>

      <FormField id="pt-email" label="Email" required>
        <input
          id="pt-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={INPUT_CLASS}
        />
      </FormField>

      <FormField id="pt-company" label="Company" required>
        <input
          id="pt-company"
          name="company"
          type="text"
          required
          autoComplete="organization"
          className={INPUT_CLASS}
        />
      </FormField>

      <FormField id="pt-type" label="Partnership type" required>
        <select
          id="pt-type"
          name="partnership_type"
          required
          defaultValue=""
          className={INPUT_CLASS}
        >
          <option value="" disabled>
            Select partnership type
          </option>
          <option value="msp">MSP</option>
          <option value="consulting">Consulting</option>
          <option value="reseller">Reseller</option>
          <option value="other">Other</option>
        </select>
      </FormField>

      <div className="md:col-span-2">
        <FormField id="pt-message" label="Message" required>
          <textarea
            id="pt-message"
            name="message"
            rows={4}
            required
            className={INPUT_CLASS}
          />
        </FormField>
      </div>

      <div className="md:col-span-2">
        <Button variant="bronze" size="lg" type="submit">
          Submit
        </Button>
      </div>
    </MailtoForm>
  );
}

/* ---------- Page ---------- */

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: "https://spnt.io/company/contact",
          name: "Contact SPNT",
          description:
            "Multiple paths to reach SPNT — demo, sales, support, security disclosure, press, partnerships.",
        }}
      />

      {/* Hero */}
      <UtilitarianHero
        tone="light"
        eyebrow="CONTACT"
        h1="Talk to a security engineer."
        sub="Multiple paths in. We route to the right person — sales, support, security, partnerships, or media — without funneling everything through one form."
      />

      {/* Anchor nav */}
      <Section tone="light-raised" tight>
        <Container>
          <AnchorNav />
        </Container>
      </Section>

      {/* #demo */}
      <Section tone="light" id="demo">
        <Container size="narrow">
          <h2 className="t-section balance text-[var(--ink)]">Book a Demo.</h2>
          <p className="t-lead mt-5 text-[var(--ink-soft)]">
            A thirty-minute walkthrough with a security engineer. We focus on
            the products you care about and the workflows that matter to your
            team. No slide-driven sales pitch.
          </p>

          <DemoForm />

          <p className="t-small mt-6 text-[var(--ink-muted)]">
            Or schedule directly via Cal.com (link to be configured).
          </p>
        </Container>
      </Section>

      {/* #sales */}
      <Section tone="light-raised" id="sales">
        <Container size="narrow">
          <h2 className="t-section balance text-[var(--ink)]">
            Enterprise sales.
          </h2>
          <p className="t-lead mt-5 text-[var(--ink-soft)]">
            For procurement-led evaluations: volume pricing, multi-year
            agreements, security questionnaires, DPA review, and anything else
            your purchasing process requires.
          </p>

          <SalesForm />
        </Container>
      </Section>

      {/* #waitlist */}
      <Section tone="light" id="waitlist">
        <Container size="narrow">
          <h2 className="t-section balance text-[var(--ink)]">
            Beta &amp; early access.
          </h2>
          <p className="t-lead mt-5 text-[var(--ink-soft)]">
            Napad is in private beta. Regulativa is coming in 2026. Join the
            waitlist to be notified, and to be considered for design-partner
            cohorts.
          </p>

          <WaitlistForm />
        </Container>
      </Section>

      {/* #support */}
      <Section tone="light-raised" id="support">
        <Container size="narrow">
          <h2 className="t-section balance text-[var(--ink)]">
            Customer support.
          </h2>
          <p className="t-body mt-6 text-[var(--ink-soft)]">
            For technical support, billing questions, and account issues, email{" "}
            <Link href="mailto:support@spnt.io">support@spnt.io</Link>. Pro and
            Enterprise customers, please include your account email so we can
            prioritize correctly.
          </p>
          <div className="mt-8">
            <ArrowLink href="https://docs.spnt.io" external tone="bronze">
              Browse the documentation
            </ArrowLink>
          </div>
        </Container>
      </Section>

      {/* #security */}
      <Section tone="light" id="security">
        <Container size="narrow">
          <h2 className="t-section balance text-[var(--ink)]">
            Report a vulnerability.
          </h2>
          <p className="t-body mt-6 text-[var(--ink-soft)]">
            Vulnerability reports go to{" "}
            <Link href="mailto:security@spnt.io">security@spnt.io</Link> with
            our PGP key.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            <ArrowLink href="/legal/security-disclosure" tone="bronze">
              Read the full disclosure policy
            </ArrowLink>
            <ArrowLink href="/security#disclosure" tone="bronze">
              Security overview &amp; PGP key
            </ArrowLink>
          </div>
        </Container>
      </Section>

      {/* #press */}
      <Section tone="light-raised" id="press">
        <Container size="narrow">
          <h2 className="t-section balance text-[var(--ink)]">Press.</h2>
          <p className="t-body mt-6 text-[var(--ink-soft)]">
            For interviews, briefings, and media requests, email{" "}
            <Link href="mailto:press@spnt.io">press@spnt.io</Link>. Please
            include your outlet, deadline, and the angle you are working on.
          </p>
        </Container>
      </Section>

      {/* #partnerships */}
      <Section tone="light" id="partnerships">
        <Container size="narrow">
          <h2 className="t-section balance text-[var(--ink)]">Partnerships.</h2>
          <p className="t-lead mt-5 text-[var(--ink-soft)]">
            We work with managed service providers, security consultancies,
            and integration partners who deliver Serpentine to their own
            customers. Tell us about your practice and how you would like to
            engage.
          </p>

          <PartnershipsForm />
        </Container>
      </Section>

      {/* Final CTA */}
      <CTABlock
        tone="dark"
        title="Prefer a real conversation?"
        body="Book a thirty-minute discovery call. We'll route to the right team and answer technical and procurement questions."
        primary={{ label: "Book a Demo", href: "#demo" }}
      />
    </>
  );
}

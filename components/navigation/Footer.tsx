import NextLink from "next/link";
import { Logo } from "@/components/ui/Logo";

const PLATFORM = [
  { name: "Overview", href: "/platform" },
  { name: "Pricing", href: "/pricing" },
  { name: "Methodology", href: "/methodology" },
  { name: "Changelog", href: "/changelog" },
];
const PRODUCTS = [
  { name: "Odbrana — Defense", href: "/products/odbrana" },
  { name: "Napad — Offense", href: "/products/napad" },
  { name: "Postava — Setup", href: "/products/postava" },
  { name: "Regulativa — Governance", href: "/products/regulativa" },
];
const COMPANY = [
  { name: "About", href: "/company/about" },
  { name: "Contact", href: "/company/contact" },
  { name: "Blog", href: "/blog" },
  { name: "Resources", href: "/resources" },
];
const TRUST_LEGAL = [
  { name: "Security", href: "/security" },
  { name: "Trust & Infrastructure", href: "/trust" },
  { name: "Privacy Policy", href: "/legal/privacy" },
  { name: "Terms of Service", href: "/legal/terms" },
  { name: "Data Processing Agreement", href: "/legal/dpa" },
  { name: "Subprocessors", href: "/legal/subprocessors" },
  { name: "Responsible Disclosure", href: "/legal/security-disclosure" },
];

export function Footer() {
  return (
    <footer className="surface-dark border-t border-[var(--obsidian-line)]">
      <div className="mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-12 pt-16 pb-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <Col title="Platform" links={PLATFORM} />
          <Col title="Products" links={PRODUCTS} />
          <Col title="Company" links={COMPANY} />
          <Col title="Trust & Legal" links={TRUST_LEGAL} />
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-[var(--obsidian-line)] pt-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <Logo onDark />
            <span className="t-caption text-[var(--ink-on-dark-muted)]">
              © {new Date().getFullYear()} SPNT. Registered in North Macedonia.
            </span>
          </div>
          <div className="flex items-center gap-5 text-[13px] text-[var(--ink-on-dark-soft)]">
            <a href="https://github.com/spnt-io" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-[var(--bronze)] transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/company/spnt" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[var(--bronze)] transition-colors">LinkedIn</a>
            <a href="https://x.com/spnt_io" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:text-[var(--bronze)] transition-colors">X</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Col({ title, links }: { title: string; links: { name: string; href: string }[] }) {
  return (
    <div>
      <h3 className="t-label text-[var(--ink-on-dark-muted)] mb-4">{title}</h3>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <NextLink href={l.href} className="text-[13.5px] text-[var(--ink-on-dark)] hover:text-[var(--bronze)] transition-colors">
              {l.name}
            </NextLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

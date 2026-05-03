"use client";

import NextLink from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/navigation/MobileNav";
import { cn } from "@/lib/cn";

const PRODUCTS = [
  { name: "Odbrana — Defense", href: "/products/odbrana", desc: "Nine-scanner audit platform.", status: "Available now" },
  { name: "Napad — Offense", href: "/products/napad", desc: "Agentic offensive security.", status: "Private beta" },
  { name: "Postava — Setup", href: "/products/postava", desc: "Deploy + harden Linux servers.", status: "Available now" },
  { name: "Regulativa — Governance", href: "/products/regulativa", desc: "Framework-agnostic compliance.", status: "Coming 2026" },
];

const RESOURCES = [
  { name: "Blog", href: "/blog" },
  { name: "Methodology", href: "/methodology" },
  { name: "Documentation", href: "https://docs.spnt.io", external: true },
  { name: "Changelog", href: "/changelog" },
  { name: "Sample Reports", href: "/resources" },
];

const COMPANY = [
  { name: "About", href: "/company/about" },
  { name: "Security", href: "/security" },
  { name: "Trust", href: "/trust" },
  { name: "Contact", href: "/company/contact" },
];

const INDUSTRIES = [
  { name: "SaaS", href: "/industries/saas" },
  { name: "Financial Services", href: "/industries/fintech" },
  { name: "MSSPs & Consultancies", href: "/industries/mssp" },
  { name: "Critical Infrastructure", href: "/industries/critical-infrastructure" },
];

const DARK_HERO_ROUTES = new Set<string>([
  "/",
  "/platform",
  "/methodology",
  "/security",
  "/trust",
  "/industries",
  "/industries/saas",
  "/industries/fintech",
  "/industries/mssp",
  "/industries/critical-infrastructure",
  "/products/odbrana",
  "/products/napad",
  "/products/postava",
  "/products/regulativa",
  "/changelog",
]);

const LIGHT_BODY_ROUTES = new Set<string>([
  "/",
  "/pricing",
  "/company/about",
  "/company/contact",
  "/blog",
  "/resources",
  "/legal/privacy",
  "/legal/terms",
  "/legal/dpa",
  "/legal/aup",
  "/legal/subprocessors",
  "/legal/cookies",
  "/legal/security-disclosure",
  "/industries",
  "/industries/saas",
  "/industries/fintech",
  "/industries/mssp",
  "/industries/critical-infrastructure",
]);

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname() ?? "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Dynamic-route catches: blog post bodies are dark per spec hero mapping.
  const isBlogPost = pathname.startsWith("/blog/") && pathname !== "/blog";
  const startsDark = DARK_HERO_ROUTES.has(pathname) || isBlogPost;
  const bodyLight = LIGHT_BODY_ROUTES.has(pathname);

  const onDark = !scrolled ? startsDark : !bodyLight;

  // Tailwind v4 doesn't reliably apply opacity (`/80`) to arbitrary `var()`
  // values, so we use real CSS classes from globals.css instead of utilities
  // for the header surface.
  const headerBg = !scrolled
    ? "header-bg-transparent"
    : bodyLight
    ? "header-bg-light"
    : "header-bg-dark";

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-40 w-full transition-colors duration-300", headerBg)}>
      <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between px-6 sm:px-8 lg:px-12">
        <NextLink href="/" className="flex items-center" aria-label="Serpentine home">
          <Logo onDark={onDark} viewTransitionTarget />
        </NextLink>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
          <NavLink href="/platform" onDark={onDark}>Platform</NavLink>
          <NavMega label="Products" items={PRODUCTS} kind="products" footer={{ name: "View the platform", href: "/platform" }} onDark={onDark} />
          <NavLink href="/pricing" onDark={onDark}>Pricing</NavLink>
          <NavMega label="Industries" items={INDUSTRIES} onDark={onDark} />
          <NavMega label="Resources" items={RESOURCES} onDark={onDark} />
          <NavMega label="Company" items={COMPANY} onDark={onDark} />
        </nav>

        <div className="flex items-center gap-2">
          <Button href="/company/contact#demo" variant="bronze" size="md" className="hidden sm:inline-flex">
            Book a Demo
          </Button>
          <MobileNav
            products={PRODUCTS}
            industries={INDUSTRIES}
            resources={RESOURCES}
            company={COMPANY}
            onDark={onDark}
          />
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, children, onDark }: { href: string; children: React.ReactNode; onDark: boolean }) {
  return (
    <NextLink
      href={href}
      className={cn(
        "rounded-md px-3 py-2 text-[14px] font-medium transition-colors",
        onDark
          ? "text-[var(--ink-on-dark)] hover:text-[var(--bronze)]"
          : "text-[var(--ink)] hover:text-[var(--bronze-deep-on-light)]",
      )}
    >
      {children}
    </NextLink>
  );
}

function NavMega({
  label, items, footer, kind = "list", onDark,
}: {
  label: string;
  items: { name: string; href: string; desc?: string; status?: string; external?: boolean }[];
  footer?: { name: string; href: string };
  kind?: "products" | "list";
  onDark: boolean;
}) {
  const [open, setOpen] = useState(false);
  const triggerColor = onDark
    ? "text-[var(--ink-on-dark)] hover:text-[var(--bronze)]"
    : "text-[var(--ink)] hover:text-[var(--bronze-deep-on-light)]";
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        className={cn("flex items-center gap-1 rounded-md px-3 py-2 text-[14px] font-medium transition-colors", triggerColor)}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <span aria-hidden className="text-[10px] opacity-60">▾</span>
      </button>
      {open && (
        <div className={cn("absolute left-0 top-full pt-3", kind === "products" ? "w-[640px]" : "w-[280px]")}>
          <div className="rounded-[var(--r-lg)] border border-[var(--stone-line)] bg-[var(--stone-raised)] shadow-[0_24px_48px_rgba(20,20,40,0.10)] p-3">
            {kind === "products" ? (
              <div className="grid grid-cols-2 gap-1">
                {items.map((it) => (
                  <NextLink key={it.href} href={it.href} className="block rounded-md p-3 hover:bg-[var(--stone-base)]">
                    <span className="text-[14px] font-semibold text-[var(--ink)]">{it.name}</span>
                    {it.desc && <p className="mt-1 text-[12.5px] text-[var(--ink-soft)]">{it.desc}</p>}
                    {it.status && <span className="mt-2 inline-block t-label text-[var(--bronze-deep-on-light)]">{it.status}</span>}
                  </NextLink>
                ))}
              </div>
            ) : (
              <ul className="py-1">
                {items.map((it) => (
                  <li key={it.href}>
                    {it.external ? (
                      <a href={it.href} target="_blank" rel="noopener noreferrer" className="block rounded-md px-3 py-2 text-[13.5px] font-medium text-[var(--ink)] hover:bg-[var(--stone-base)]">{it.name}</a>
                    ) : (
                      <NextLink href={it.href} className="block rounded-md px-3 py-2 text-[13.5px] font-medium text-[var(--ink)] hover:bg-[var(--stone-base)]">{it.name}</NextLink>
                    )}
                  </li>
                ))}
              </ul>
            )}
            {footer && (
              <div className="mt-2 border-t border-[var(--stone-line)] px-3 py-3">
                <NextLink href={footer.href} className="text-[13.5px] font-semibold text-[var(--bronze-deep-on-light)] hover:underline">{footer.name} →</NextLink>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

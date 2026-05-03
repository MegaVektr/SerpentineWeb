"use client";

import NextLink from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type Item = { name: string; href: string; external?: boolean; desc?: string; status?: string };

export function MobileNav({
  products, industries, resources, company, onDark = false,
}: {
  products: Item[];
  industries: Item[];
  resources: Item[];
  company: Item[];
  onDark?: boolean;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  const triggerBorder = onDark
    ? "border-[var(--obsidian-line-strong)] text-[var(--ink-on-dark)]"
    : "border-[var(--stone-line-strong)] text-[var(--ink)]";

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className={cn(
          "lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-[var(--r-md)] border",
          triggerBorder,
        )}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="17" x2="20" y2="17" />
        </svg>
      </button>

      {open && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[var(--stone-base)] overflow-y-auto" role="dialog" aria-modal="true">
          <div className="flex h-16 items-center justify-between border-b border-[var(--stone-line)] px-6">
            <NextLink href="/" onClick={() => setOpen(false)}>
              <Logo />
            </NextLink>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--r-md)] border border-[var(--stone-line-strong)] text-[var(--ink)]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </button>
          </div>

          <div className="px-6 py-6">
            <SectionLink onClose={() => setOpen(false)} href="/platform">Platform</SectionLink>
            <Group title="Products">
              {products.map((p) => (
                <SectionLink key={p.href} href={p.href} onClose={() => setOpen(false)}>{p.name}</SectionLink>
              ))}
            </Group>
            <SectionLink onClose={() => setOpen(false)} href="/pricing">Pricing</SectionLink>
            <Group title="Industries">
              {industries.map((p) => (
                <SectionLink key={p.href} href={p.href} onClose={() => setOpen(false)}>{p.name}</SectionLink>
              ))}
            </Group>
            <Group title="Resources">
              {resources.map((p) => (
                <SectionLink key={p.href} href={p.href} external={p.external} onClose={() => setOpen(false)}>{p.name}</SectionLink>
              ))}
            </Group>
            <Group title="Company">
              {company.map((p) => (
                <SectionLink key={p.href} href={p.href} onClose={() => setOpen(false)}>{p.name}</SectionLink>
              ))}
            </Group>

            <div className="mt-6">
              <Button href="/company/contact#demo" size="lg" className="w-full">Book a Demo</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <p className="t-label text-[var(--ink-muted)] mb-2">{title}</p>
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  );
}

function SectionLink({
  href, children, external, onClose,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  onClose: () => void;
}) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClose}
        className="block py-2 text-[17px] font-semibold text-[var(--ink)]"
      >
        {children}
      </a>
    );
  }
  return (
    <NextLink
      href={href}
      onClick={onClose}
      className="block py-2 text-[17px] font-semibold text-[var(--ink)]"
    >
      {children}
    </NextLink>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

const STAGES = [
  {
    num: "01",
    product: "POSTAVA",
    verb: "Deploy & Harden",
    body: "Servers come up production-ready. Firewall, SSH, kernel, Fail2ban, and signature verification applied in one operation.",
  },
  {
    num: "02",
    product: "ODBRANA",
    verb: "Discover",
    body: "Nine scanners sweep web, code, cloud, containers, APIs, mobile, blockchain, AI/ML, and network surfaces for vulnerabilities.",
  },
  {
    num: "03",
    product: "NAPAD",
    verb: "Validate",
    body: "Agentic offensive workflows confirm exploitability, remove false positives, and produce reproducible attack chains.",
  },
  {
    num: "04",
    product: "REGULATIVA",
    verb: "Govern & Prove",
    body: "Findings, evidence, and controls map to ISO 27001, SOC 2, NIST CSF, GDPR, and more. Evidence reuses across frameworks.",
  },
];

export function SecurityLifecycle({
  className,
  onDark = true,
}: {
  className?: string;
  /** Kept for API compatibility; component auto-adapts via CSS variables */
  onDark?: boolean;
}) {
  void onDark;
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShown(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            obs.disconnect();
          }
        }
      },
      { threshold: 0.18 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "relative grid gap-px overflow-hidden",
        "grid-cols-1 lg:grid-cols-4",
        "rounded-[var(--r-lg)] border border-[var(--obsidian-line)]",
        "bg-[var(--obsidian-line)]", // gap color
        className,
      )}
      role="img"
      aria-label="Security lifecycle: Postava deploys and hardens, Odbrana discovers, Napad validates, Regulativa governs — continuous loop"
    >
      {STAGES.map((s, i) => (
        <div
          key={s.num}
          className="relative bg-[var(--obsidian-base)] p-7 sm:p-8 transition-colors hover:bg-[var(--obsidian-raised)]"
          style={{
            opacity: shown ? 1 : 0,
            transform: shown ? "translateY(0)" : "translateY(8px)",
            transition: `opacity 600ms cubic-bezier(.2,.7,.2,1) ${i * 100}ms, transform 600ms cubic-bezier(.2,.7,.2,1) ${i * 100}ms, background-color 200ms ease`,
          }}
        >
          {/* Top row: numeral + product */}
          <div className="flex items-baseline justify-between gap-4">
            <span
              className="font-mono text-[44px] leading-none font-medium text-[var(--bronze)] tabular-nums"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              {s.num}
            </span>
            <span className="t-label text-[var(--ink-on-dark-muted)]">{s.product}</span>
          </div>

          {/* Verb */}
          <h3 className="t-feature text-[var(--ink-on-dark)] mt-6">{s.verb}</h3>

          {/* Body */}
          <p className="t-small text-[var(--ink-on-dark-soft)] mt-3 leading-[1.55]">{s.body}</p>

          {/* Mobile direction marker */}
          {i < STAGES.length - 1 && (
            <div
              aria-hidden
              className="lg:hidden absolute -bottom-[7px] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border-b border-r border-[var(--obsidian-line-strong)] bg-[var(--obsidian-base)] z-10"
            />
          )}

          {/* Desktop direction marker — chevron pointing right */}
          {i < STAGES.length - 1 && (
            <div
              aria-hidden
              className="hidden lg:block absolute top-1/2 -right-[7px] -translate-y-1/2 w-3 h-3 rotate-45 border-t border-r border-[var(--obsidian-line-strong)] bg-[var(--obsidian-base)] z-10"
            />
          )}
        </div>
      ))}

      {/* Loop indicator — sits at the bottom of the grid */}
      <div className="lg:col-span-4 bg-[var(--obsidian-base)] border-t border-[var(--obsidian-line)] px-7 py-4 flex items-center justify-between gap-4">
        <span className="t-label text-[var(--bronze)]">CONTINUOUS LOOP</span>
        <span className="t-data text-[var(--ink-on-dark-muted)]">
          Each cycle compounds — evidence accrues, posture sharpens.
        </span>
      </div>

      {/* Subtle bronze sweep along the bottom — animates left → right when shown */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 h-[2px] bg-[var(--bronze)] origin-left transition-transform"
        style={{
          width: "100%",
          transform: shown ? "scaleX(1)" : "scaleX(0)",
          transitionDuration: "1400ms",
          transitionTimingFunction: "cubic-bezier(.2,.7,.2,1)",
          transitionDelay: "500ms",
          opacity: 0.85,
        }}
      />
    </div>
  );
}

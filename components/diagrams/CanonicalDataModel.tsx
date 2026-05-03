"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

const ENTITIES = [
  { name: "Asset",         fields: 12 },
  { name: "Vulnerability", fields: 18 },
  { name: "Control",       fields: 9 },
  { name: "Evidence",      fields: 11 },
  { name: "Risk",          fields: 8 },
  { name: "Vendor",        fields: 14 },
  { name: "Policy",        fields: 7 },
  { name: "Action",        fields: 10 },
];

const PRODUCTS = [
  { name: "Odbrana",    role: "DEFENSE",     verb: "writes findings · reads controls" },
  { name: "Napad",      role: "OFFENSE",     verb: "writes validations · reads vulns" },
  { name: "Postava",    role: "SETUP",       verb: "writes evidence · reads assets" },
  { name: "Regulativa", role: "GOVERNANCE",  verb: "reads everything · writes risks" },
];

export function CanonicalDataModel({
  className,
  onDark = true,
}: {
  className?: string;
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
        "grid gap-5",
        "grid-cols-1 lg:grid-cols-[1fr_auto_1fr]",
        "items-stretch",
        className,
      )}
      role="img"
      aria-label="Canonical data model: eight entities at the center, four products read and write through it"
    >
      {/* LEFT — Odbrana + Postava */}
      <div className="flex flex-col gap-3">
        {[PRODUCTS[0], PRODUCTS[2]].map((p, i) => (
          <ProductChip key={p.name} product={p} side="left" delay={200 + i * 100} shown={shown} />
        ))}
      </div>

      {/* CENTER — canonical model */}
      <div
        className="rounded-[var(--r-lg)] border border-[var(--bronze)] bg-[var(--obsidian-raised)] p-4 sm:p-6 w-full max-w-[420px] mx-auto lg:mx-0"
        style={{
          opacity: shown ? 1 : 0,
          transform: shown ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 600ms cubic-bezier(.2,.7,.2,1) 80ms, transform 600ms cubic-bezier(.2,.7,.2,1) 80ms",
          boxShadow: "0 0 0 4px rgba(201,166,106,0.10), 0 24px 48px rgba(0,0,0,0.4)",
        }}
      >
        <div className="flex items-center justify-between pb-3 border-b border-[var(--obsidian-line)]">
          <span className="t-label text-[var(--bronze)]">CANONICAL DATA MODEL</span>
          <span className="t-data text-[var(--ink-on-dark-muted)]">v2.4.1</span>
        </div>

        <ul className="mt-4 grid grid-cols-2 gap-1.5">
          {ENTITIES.map((e, i) => (
            <li
              key={e.name}
              className="flex items-baseline justify-between gap-2 px-2.5 py-1.5 rounded-[var(--r-sm)] bg-white/[0.03] border border-[var(--obsidian-line)]"
              style={{
                opacity: shown ? 1 : 0,
                transform: shown ? "translateY(0)" : "translateY(4px)",
                transition: `opacity 400ms ease-out ${280 + i * 40}ms, transform 400ms ease-out ${280 + i * 40}ms`,
              }}
            >
              <span className="t-small text-[var(--ink-on-dark)] font-medium">{e.name}</span>
              <span
                className="t-data text-[var(--bronze)] tabular-nums"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                {e.fields}f
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-4 pt-3 border-t border-[var(--obsidian-line)] flex items-center justify-between t-data text-[var(--ink-on-dark-muted)]">
          <span>
            <strong className="text-[var(--bronze)] font-semibold">8</strong> entities ·{" "}
            <strong className="text-[var(--bronze)] font-semibold">34</strong> edges
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--sev-low)] shadow-[0_0_0_3px_rgba(74,210,149,0.25)] animate-pulse" />
            synced
          </span>
        </div>
      </div>

      {/* RIGHT — Napad + Regulativa */}
      <div className="flex flex-col gap-3">
        {[PRODUCTS[1], PRODUCTS[3]].map((p, i) => (
          <ProductChip key={p.name} product={p} side="right" delay={400 + i * 100} shown={shown} />
        ))}
      </div>
    </div>
  );
}

function ProductChip({
  product,
  side,
  delay,
  shown,
}: {
  product: { name: string; role: string; verb: string };
  side: "left" | "right";
  delay: number;
  shown: boolean;
}) {
  return (
    <div
      className={cn(
        "relative flex-1 rounded-[var(--r-lg)] border border-[var(--obsidian-line)] bg-[var(--obsidian-raised)] p-4 sm:p-5",
        "transition-colors hover:border-[var(--obsidian-line-strong)]",
      )}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateX(0)" : `translateX(${side === "left" ? "-8px" : "8px"})`,
        transition: `opacity 500ms cubic-bezier(.2,.7,.2,1) ${delay}ms, transform 500ms cubic-bezier(.2,.7,.2,1) ${delay}ms`,
      }}
    >
      <div className="flex items-baseline justify-between gap-3">
        <span className="t-feature text-[var(--ink-on-dark)] !text-[20px]">{product.name}</span>
        <span className="t-label text-[var(--bronze)]">{product.role}</span>
      </div>
      <p className="t-data text-[var(--ink-on-dark-soft)] mt-2">{product.verb}</p>

      {/* Pseudo-arrow toward / from center on desktop */}
      <span
        aria-hidden
        className={cn(
          "hidden lg:block absolute top-1/2 -translate-y-1/2 w-6 h-px bg-[var(--bronze)]",
          side === "left" ? "-right-[24px]" : "-left-[24px]",
        )}
        style={{ opacity: shown ? 0.6 : 0, transition: `opacity 600ms ease-out ${delay + 200}ms` }}
      />
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

const PRODUCTS = [
  { x: 110, y: 90, label: "Odbrana", sub: "DEFENSE" },
  { x: 410, y: 90, label: "Napad", sub: "OFFENSE" },
  { x: 110, y: 350, label: "Postava", sub: "SETUP" },
  { x: 410, y: 350, label: "Regulativa", sub: "GOVERNANCE" },
];

export function FourProductArchitecture({
  className,
  onDark = true,
}: {
  className?: string;
  onDark?: boolean;
}) {
  const ref = useRef<SVGSVGElement>(null);
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
      { threshold: 0.20 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  const stroke = onDark ? "rgba(243,238,218,0.85)" : "var(--ink)";
  const accent = "var(--bronze)";
  const accentSoft = "var(--bronze-soft)";
  const text = onDark ? "rgba(243,238,218,0.92)" : "var(--ink)";
  const subText = onDark ? "rgba(243,238,218,0.55)" : "var(--ink-muted)";
  const card = onDark ? "rgba(255,255,255,0.03)" : "white";
  const cx = 360;
  const cy = 240;

  return (
    <svg
      ref={ref}
      viewBox="0 0 720 480"
      role="img"
      aria-label="Four products as interfaces over a central canonical data model"
      className={cn("w-full h-auto", className)}
    >
      <defs>
        <marker
          id="fpa-arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="5"
          markerHeight="5"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L10,5 L0,10 z" fill={accent} />
        </marker>
      </defs>

      <g opacity={onDark ? 0.04 : 0.06}>
        {Array.from({ length: 24 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 30} y1={0} x2={i * 30} y2={480} stroke={accent} strokeWidth="1" />
        ))}
        {Array.from({ length: 16 }).map((_, i) => (
          <line key={`h${i}`} x1={0} y1={i * 30} x2={720} y2={i * 30} stroke={accent} strokeWidth="1" />
        ))}
      </g>

      {PRODUCTS.map((p, i) => {
        const sx = p.x + 100;
        const sy = p.y + 40;
        return (
          <g
            key={`c${i}`}
            style={{
              opacity: shown ? 1 : 0,
              transition: `opacity 500ms ease-out ${300 + i * 80}ms`,
            }}
          >
            <line
              x1={sx}
              y1={sy}
              x2={cx + (sx > cx ? -50 : 50)}
              y2={cy + (sy > cy ? -38 : 38)}
              stroke={accent}
              strokeWidth="1.4"
              strokeDasharray="3 4"
              markerEnd="url(#fpa-arrow)"
              markerStart="url(#fpa-arrow)"
              opacity="0.7"
            />
          </g>
        );
      })}

      <g
        style={{
          opacity: shown ? 1 : 0,
          transition: "opacity 500ms ease-out 100ms",
        }}
      >
        <circle cx={cx} cy={cy} r="76" fill={accentSoft} />
        <rect x={cx - 60} y={cy - 38} width="120" height="76" rx="10" ry="10" fill={card} stroke={stroke} strokeWidth="1.6" />
        <text x={cx} y={cy - 12} textAnchor="middle" fontFamily="var(--font-geist-mono)" fontSize="10" fontWeight="500" letterSpacing="0.12em" fill={subText}>
          CANONICAL
        </text>
        <text x={cx} y={cy + 5} textAnchor="middle" fontFamily="var(--font-geist-mono)" fontSize="10" fontWeight="500" letterSpacing="0.12em" fill={subText}>
          DATA MODEL
        </text>
        <text x={cx} y={cy + 22} textAnchor="middle" fontFamily="var(--font-geist)" fontSize="10" fontWeight="500" fill={accent}>
          assets · controls · evidence
        </text>
      </g>

      {PRODUCTS.map((p, i) => (
        <g
          key={i}
          style={{
            opacity: shown ? 1 : 0,
            transform: shown ? "translateY(0)" : "translateY(6px)",
            transition: `all 500ms cubic-bezier(.2,.7,.2,1) ${500 + i * 80}ms`,
          }}
        >
          <rect x={p.x} y={p.y} width="200" height="80" rx="10" ry="10" fill={card} stroke={stroke} strokeWidth="1.4" />
          <circle cx={p.x + 22} cy={p.y + 28} r="5" fill={accent} />
          <text x={p.x + 38} y={p.y + 32} fontFamily="var(--font-geist)" fontSize="17" fontWeight="600" fill={text}>
            {p.label}
          </text>
          <text x={p.x + 38} y={p.y + 56} fontFamily="var(--font-geist-mono)" fontSize="10" fontWeight="500" letterSpacing="0.12em" fill={subText}>
            {p.sub}
          </text>
        </g>
      ))}
    </svg>
  );
}

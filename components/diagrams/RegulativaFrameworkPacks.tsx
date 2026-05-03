"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

const FRAMEWORKS = [
  "ISO 27001",
  "SOC 2",
  "NIST CSF",
  "GDPR",
  "DORA",
  "NIS2",
  "ISO 42001",
];

export function RegulativaFrameworkPacks({
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
      { threshold: 0.2 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  const stroke = onDark ? "rgba(243,238,218,0.85)" : "var(--ink)";
  const accent = "var(--bronze)";
  const text = onDark ? "rgba(243,238,218,0.92)" : "var(--ink)";
  const subText = onDark ? "rgba(243,238,218,0.55)" : "var(--ink-muted)";
  const card = onDark ? "rgba(255,255,255,0.04)" : "white";
  const tagBg = onDark ? "rgba(201,166,106,0.10)" : "var(--stone-base)";

  return (
    <svg
      ref={ref}
      viewBox="0 0 720 480"
      role="img"
      aria-label="Regulativa: framework packs read from a single canonical model"
      className={cn("w-full h-auto", className)}
    >
      {/* Core */}
      <g
        style={{
          opacity: shown ? 1 : 0,
          transition: "opacity 500ms ease-out 100ms",
        }}
      >
        <rect x={250} y={190} width={220} height={100} rx="14" ry="14" fill={card} stroke={stroke} strokeWidth="1.6" />
        <text x={360} y={216} textAnchor="middle" fontFamily="var(--font-geist-mono)" fontSize="11" fontWeight="500" letterSpacing="0.12em" fill={subText}>
          CANONICAL MODEL
        </text>
        <text x={360} y={244} textAnchor="middle" fontFamily="var(--font-geist)" fontSize="13" fontWeight="600" fill={text}>
          Controls · Evidence · Assets
        </text>
        <text x={360} y={266} textAnchor="middle" fontFamily="var(--font-geist)" fontSize="13" fontWeight="600" fill={text}>
          Policies · Risks · Reviews
        </text>
      </g>

      {FRAMEWORKS.map((f, i) => {
        const angle = (i / FRAMEWORKS.length) * Math.PI * 2 - Math.PI / 2;
        const r = 180;
        const cx = 360 + Math.cos(angle) * r;
        const cy = 240 + Math.sin(angle) * r * 0.95;
        return (
          <g
            key={f}
            style={{
              opacity: shown ? 1 : 0,
              transition: `opacity 500ms ease-out ${300 + i * 70}ms`,
            }}
          >
            <line x1={360} y1={240} x2={cx} y2={cy} stroke={accent} strokeWidth="1" strokeDasharray="3 4" opacity="0.6" />
            <rect
              x={cx - 55}
              y={cy - 16}
              width={110}
              height={32}
              rx="6"
              ry="6"
              fill={tagBg}
              stroke={accent}
              strokeWidth="1"
              opacity="0.95"
            />
            <text x={cx} y={cy + 5} textAnchor="middle" fontFamily="var(--font-geist)" fontSize="12" fontWeight="600" fill={text}>
              {f}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

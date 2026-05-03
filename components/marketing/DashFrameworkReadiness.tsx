import { cn } from "@/lib/cn";

const FRAMEWORKS = [
  { name: "ISO 27001",      pct: 87, controls: "108/124", reviewed: "2 days ago" },
  { name: "SOC 2 Type II",  pct: 92, controls: "61/66",   reviewed: "yesterday" },
  { name: "NIST CSF 2.0",   pct: 71, controls: "76/107",  reviewed: "5 days ago" },
  { name: "GDPR",           pct: 96, controls: "47/49",   reviewed: "today" },
  { name: "DORA",           pct: 58, controls: "82/142",  reviewed: "1 week ago" },
  { name: "NIS2",           pct: 64, controls: "31/48",   reviewed: "3 days ago" },
];

function barColor(pct: number) {
  if (pct >= 90) return "var(--sev-low)";
  if (pct >= 70) return "var(--bronze)";
  if (pct >= 50) return "var(--sev-med)";
  return "var(--sev-high)";
}

export function DashFrameworkReadiness({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-[var(--r-lg)] bg-white/[0.03] border border-[var(--obsidian-line)] p-4 sm:p-5 backdrop-blur-sm", className)}>
      <div className="flex items-center justify-between pb-3 border-b border-[var(--obsidian-line)]">
        <span className="t-label text-[var(--ink-on-dark-muted)]">regulativa / readiness</span>
        <div className="flex gap-1 text-[10px]">
          <span className="px-2 py-1 rounded-[var(--r-sm)] bg-[var(--bronze)] text-[var(--obsidian-base)] font-semibold uppercase tracking-wider">Frameworks</span>
          <span className="px-2 py-1 rounded-[var(--r-sm)] bg-white/5 text-[var(--ink-on-dark-soft)] uppercase tracking-wider">Evidence</span>
          <span className="px-2 py-1 rounded-[var(--r-sm)] bg-white/5 text-[var(--ink-on-dark-soft)] uppercase tracking-wider">Gaps</span>
        </div>
      </div>

      <ul className="mt-3 flex flex-col gap-3">
        {FRAMEWORKS.map((f) => (
          <li key={f.name}>
            <div className="flex items-baseline justify-between mb-1.5">
              <span className="t-small text-[var(--ink-on-dark)] font-semibold">{f.name}</span>
              <div className="flex items-baseline gap-3 t-data text-[var(--ink-on-dark-muted)]">
                <span>{f.controls}</span>
                <span className="text-[var(--bronze)] font-semibold">{f.pct}%</span>
              </div>
            </div>
            <div className="h-1.5 rounded-full bg-white/[0.05] overflow-hidden">
              <div
                className="h-full rounded-full transition-all"
                style={{ width: `${f.pct}%`, background: barColor(f.pct) }}
              />
            </div>
            <div className="mt-1 t-data text-[var(--ink-on-dark-muted)]">last reviewed {f.reviewed}</div>
          </li>
        ))}
      </ul>

      <div className="mt-4 pt-3 flex gap-5 border-t border-[var(--obsidian-line)] t-data text-[var(--ink-on-dark-muted)]">
        <span><strong className="text-[var(--bronze)] font-semibold">405</strong> controls evidenced</span>
        <span><strong className="text-[var(--bronze)] font-semibold">131</strong> gaps</span>
        <span className="ml-auto inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--sev-low)] shadow-[0_0_0_3px_rgba(74,210,149,0.25)] animate-pulse" />
          live
        </span>
      </div>
    </div>
  );
}

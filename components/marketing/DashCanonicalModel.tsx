import { cn } from "@/lib/cn";

const ENTITIES = [
  { name: "Asset",         fields: 12, edges: 6 },
  { name: "Vulnerability", fields: 18, edges: 4 },
  { name: "Control",       fields: 9,  edges: 5 },
  { name: "Evidence",      fields: 11, edges: 7 },
  { name: "Risk",          fields: 8,  edges: 3 },
  { name: "Vendor",        fields: 14, edges: 2 },
  { name: "Policy",        fields: 7,  edges: 3 },
  { name: "Action",        fields: 10, edges: 4 },
];

export function DashCanonicalModel({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-[var(--r-lg)] bg-white/[0.03] border border-[var(--obsidian-line)] p-4 sm:p-5 backdrop-blur-sm", className)}>
      <div className="flex items-center justify-between pb-3 border-b border-[var(--obsidian-line)]">
        <span className="t-label text-[var(--ink-on-dark-muted)]">platform / canonical model</span>
        <div className="flex gap-1 text-[10px]">
          <span className="px-2 py-1 rounded-[var(--r-sm)] bg-[var(--bronze)] text-[var(--obsidian-base)] font-semibold uppercase tracking-wider">Schema</span>
          <span className="px-2 py-1 rounded-[var(--r-sm)] bg-white/5 text-[var(--ink-on-dark-soft)] uppercase tracking-wider">Edges</span>
          <span className="px-2 py-1 rounded-[var(--r-sm)] bg-white/5 text-[var(--ink-on-dark-soft)] uppercase tracking-wider">Versions</span>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        {ENTITIES.map((e) => (
          <div
            key={e.name}
            className="rounded-[var(--r-sm)] bg-white/[0.025] border border-[var(--obsidian-line)] p-3"
          >
            <div className="flex items-baseline justify-between">
              <span className="t-small text-[var(--ink-on-dark)] font-semibold">{e.name}</span>
              <span className="t-data text-[var(--bronze)]">{e.fields}f</span>
            </div>
            <div className="mt-1 t-data text-[var(--ink-on-dark-muted)]">{e.edges} edges</div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 flex gap-5 border-t border-[var(--obsidian-line)] t-data text-[var(--ink-on-dark-muted)]">
        <span><strong className="text-[var(--bronze)] font-semibold">8</strong> entities</span>
        <span><strong className="text-[var(--bronze)] font-semibold">34</strong> edges</span>
        <span><strong className="text-[var(--bronze)] font-semibold">v2.4.1</strong></span>
        <span className="ml-auto inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--sev-low)] shadow-[0_0_0_3px_rgba(74,210,149,0.25)] animate-pulse" />
          synced
        </span>
      </div>
    </div>
  );
}

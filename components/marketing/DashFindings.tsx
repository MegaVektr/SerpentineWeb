import { cn } from "@/lib/cn";

const FINDINGS = [
  { sev: "crit", id: "CVE-2024-3094", name: "xz-utils backdoor in build chain", mod: "code",    cvss: "10.0" },
  { sev: "crit", id: "SCN-0114",      name: "Public S3 bucket — billing exports", mod: "cloud",   cvss: "9.4" },
  { sev: "high", id: "OWAS-API4",     name: "JWT alg:none accepted on /v1/admin", mod: "api",     cvss: "8.7" },
  { sev: "high", id: "SCN-0203",      name: "Reentrancy in withdrawAll()",        mod: "chain",   cvss: "8.1" },
  { sev: "med",  id: "SCN-0420",      name: "TLS 1.0 enabled on edge.eu-west-1",  mod: "network", cvss: "5.4" },
  { sev: "low",  id: "SCN-0518",      name: "Cookie missing SameSite",            mod: "web",     cvss: "3.1" },
] as const;

const sevColor: Record<string, string> = {
  crit: "var(--sev-crit)",
  high: "var(--sev-high)",
  med:  "var(--sev-med)",
  low:  "var(--sev-low)",
};

export function DashFindings({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-[var(--r-lg)] bg-white/[0.03] border border-[var(--obsidian-line)] p-4 sm:p-5 backdrop-blur-sm",
        className,
      )}
    >
      <div className="flex items-center justify-between pb-3 border-b border-[var(--obsidian-line)]">
        <span className="t-label text-[var(--ink-on-dark-muted)]">odbrana / scan #2487</span>
        <div className="flex gap-1 text-[10px]">
          <span className="px-2 py-1 rounded-[var(--r-sm)] bg-[var(--bronze)] text-[var(--obsidian-base)] font-semibold uppercase tracking-wider">Findings</span>
          <span className="px-2 py-1 rounded-[var(--r-sm)] bg-white/5 text-[var(--ink-on-dark-soft)] uppercase tracking-wider">Evidence</span>
          <span className="px-2 py-1 rounded-[var(--r-sm)] bg-white/5 text-[var(--ink-on-dark-soft)] uppercase tracking-wider">Mappings</span>
        </div>
      </div>

      <ul className="mt-3 flex flex-col gap-1.5">
        {FINDINGS.map((f) => (
          <li
            key={f.id}
            className="grid grid-cols-[12px_1fr_70px_45px] gap-3 items-center px-3 py-2 rounded-[var(--r-sm)] bg-white/[0.025] hover:bg-white/[0.05] transition-colors"
          >
            <span
              className="w-[9px] h-[9px] rounded-full"
              style={{
                backgroundColor: sevColor[f.sev],
                boxShadow: f.sev === "crit" ? `0 0 0 3px ${sevColor[f.sev]}33` : undefined,
              }}
            />
            <div className="flex items-baseline gap-3 min-w-0">
              <span className="t-data text-[var(--ink-on-dark-muted)] flex-shrink-0">{f.id}</span>
              <span className="t-small text-[var(--ink-on-dark)] truncate">{f.name}</span>
            </div>
            <span className="t-data text-[var(--bronze)] text-right">{f.mod}</span>
            <span className="t-data text-[var(--ink-on-dark-soft)] text-right">{f.cvss}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 pt-3 flex gap-5 border-t border-[var(--obsidian-line)] t-data text-[var(--ink-on-dark-muted)]">
        <span><strong className="text-[var(--bronze)] font-semibold">312</strong> findings</span>
        <span><strong className="text-[var(--bronze)] font-semibold">27</strong> critical</span>
        <span><strong className="text-[var(--bronze)] font-semibold">4m 12s</strong> scan</span>
        <span className="ml-auto inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--sev-low)] shadow-[0_0_0_3px_rgba(74,210,149,0.25)] animate-pulse" />
          live
        </span>
      </div>
    </div>
  );
}

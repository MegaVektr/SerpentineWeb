import { cn } from "@/lib/cn";

const STEPS = [
  { phase: "RECON",      title: "Subdomain enumeration",     status: "done", agent: "agent-01", evidence: 14 },
  { phase: "DISCOVERY",  title: "Asset fingerprinting",       status: "done", agent: "agent-01", evidence: 27 },
  { phase: "EXPLOIT",    title: "JWT alg:none chained to admin", status: "done", agent: "agent-02", evidence: 4 },
  { phase: "POST-EX",    title: "Privilege escalation in container", status: "running", agent: "agent-02", evidence: 0 },
  { phase: "EXFIL",      title: "Token theft via misconfigured proxy", status: "queued", agent: "—", evidence: 0 },
];

const statusStyle: Record<string, { dot: string; text: string }> = {
  done:    { dot: "var(--sev-low)",  text: "text-[var(--sev-low)]" },
  running: { dot: "var(--bronze)",   text: "text-[var(--bronze)]" },
  queued:  { dot: "rgba(243,238,218,0.3)", text: "text-[var(--ink-on-dark-muted)]" },
};

export function DashAttackChain({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-[var(--r-lg)] bg-white/[0.03] border border-[var(--obsidian-line)] p-4 sm:p-5 backdrop-blur-sm", className)}>
      <div className="flex items-center justify-between pb-3 border-b border-[var(--obsidian-line)]">
        <span className="t-label text-[var(--ink-on-dark-muted)]">napad / engagement #408</span>
        <div className="flex gap-1 text-[10px]">
          <span className="px-2 py-1 rounded-[var(--r-sm)] bg-[var(--bronze)] text-[var(--obsidian-base)] font-semibold uppercase tracking-wider">Chain</span>
          <span className="px-2 py-1 rounded-[var(--r-sm)] bg-white/5 text-[var(--ink-on-dark-soft)] uppercase tracking-wider">Replay</span>
          <span className="px-2 py-1 rounded-[var(--r-sm)] bg-white/5 text-[var(--ink-on-dark-soft)] uppercase tracking-wider">Report</span>
        </div>
      </div>

      <ol className="mt-3 flex flex-col">
        {STEPS.map((s, i) => {
          const st = statusStyle[s.status];
          return (
            <li key={i} className="grid grid-cols-[20px_1fr_auto] gap-3 items-start py-2.5 border-b border-[var(--obsidian-line)] last:border-b-0">
              <div className="flex flex-col items-center pt-1">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{
                    backgroundColor: st.dot,
                    boxShadow: s.status === "running" ? `0 0 0 3px rgba(201,166,106,0.25)` : undefined,
                  }}
                />
                {i < STEPS.length - 1 && <span className="w-px flex-1 bg-[var(--obsidian-line)] mt-1" style={{ minHeight: 16 }} />}
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="t-label text-[var(--bronze)]">{s.phase}</span>
                  <span className={`t-label ${st.text}`}>{s.status}</span>
                </div>
                <div className="t-small text-[var(--ink-on-dark)] mt-1">{s.title}</div>
              </div>
              <div className="text-right">
                <div className="t-data text-[var(--ink-on-dark-muted)]">{s.agent}</div>
                {s.evidence > 0 && (
                  <div className="t-data text-[var(--ink-on-dark-soft)] mt-1">{s.evidence} ev</div>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-3 pt-3 flex gap-5 border-t border-[var(--obsidian-line)] t-data text-[var(--ink-on-dark-muted)]">
        <span><strong className="text-[var(--bronze)] font-semibold">3</strong> done</span>
        <span><strong className="text-[var(--bronze)] font-semibold">1</strong> running</span>
        <span><strong className="text-[var(--bronze)] font-semibold">1</strong> queued</span>
        <span className="ml-auto inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--bronze)] shadow-[0_0_0_3px_rgba(201,166,106,0.25)] animate-pulse" />
          active
        </span>
      </div>
    </div>
  );
}

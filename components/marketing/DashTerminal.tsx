import { cn } from "@/lib/cn";

const LINES = [
  { mark: "$", text: "postava push", muted: false },
  { mark: "✓", text: "Connected to server (eu-west-1.example.com)", muted: false },
  { mark: "✓", text: "Verified image signature (cosign)", muted: false },
  { mark: "✓", text: "Applied firewall rules (UFW)", muted: false },
  { mark: "✓", text: "Hardened SSH daemon", muted: false },
  { mark: "✓", text: "Tuned kernel parameters", muted: false },
  { mark: "✓", text: "Configured Fail2ban", muted: false },
  { mark: "✓", text: "Deployed container (healthy in 8s)", muted: false },
  { mark: "✓", text: "Total time: 2m 47s", muted: false },
];

export function DashTerminal({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-[var(--r-lg)] overflow-hidden border border-[var(--obsidian-line)] shadow-[0_24px_48px_rgba(0,0,0,0.35)]",
        className,
      )}
    >
      {/* Window chrome */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#e5dfd0] border-b border-[#cfc8b5]">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#d4a3a3]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#d4c089]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#a3c4a3]" />
        </div>
        <span className="t-label text-[#7a7568]">postava push — eu-west-1</span>
        <span className="w-12" />
      </div>

      {/* Body */}
      <div
        className="bg-[var(--stone-base)] px-5 py-5 font-mono text-[13.5px] leading-[1.7] text-[var(--ink)]"
        style={{ fontFamily: "var(--font-geist-mono)" }}
      >
        {LINES.map((l, i) => (
          <div key={i} className="flex items-baseline gap-3">
            <span
              className={cn(
                "select-none flex-shrink-0 font-semibold",
                l.mark === "$" ? "text-[var(--bronze-deep-on-light)]" : "text-[var(--bronze-deep-on-light)]",
              )}
            >
              {l.mark}
            </span>
            <span className={l.muted ? "text-[var(--ink-soft)]" : ""}>{l.text}</span>
          </div>
        ))}
        <div className="mt-1 inline-flex items-center gap-2 t-data text-[var(--ink-muted)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1d5031] animate-pulse" />
          <span>healthy · checks passing</span>
        </div>
      </div>
    </div>
  );
}

import { Card } from "@/components/ui/Card";

export type ScannerDetail = {
  name: string;
  technique: string;
  coverage: string;
  aiRole: string;
  limitations: string;
};

export function ScannerCard({ scanner }: { scanner: ScannerDetail }) {
  return (
    <Card tone="dark" className="h-full">
      <h3 className="t-feature text-[var(--ink-on-dark)]">{scanner.name}</h3>
      <dl className="mt-5 space-y-4">
        <div>
          <dt className="t-label text-[var(--bronze)]">Technique</dt>
          <dd className="t-small mt-1 text-[var(--ink-on-dark-soft)]">
            {scanner.technique}
          </dd>
        </div>
        <div>
          <dt className="t-label text-[var(--bronze)]">Coverage</dt>
          <dd className="t-small mt-1 text-[var(--ink-on-dark-soft)]">
            {scanner.coverage}
          </dd>
        </div>
        <div>
          <dt className="t-label text-[var(--bronze)]">AI role</dt>
          <dd className="t-small mt-1 text-[var(--ink-on-dark-soft)]">
            {scanner.aiRole}
          </dd>
        </div>
        <div>
          <dt className="t-label text-[var(--bronze)]">Limitations</dt>
          <dd className="t-small mt-1 text-[var(--ink-on-dark-soft)]">
            {scanner.limitations}
          </dd>
        </div>
      </dl>
    </Card>
  );
}

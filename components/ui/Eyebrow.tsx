import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  onLight = false,
  onDark, // legacy — accepted but ignored; default is bronze (works on dark)
  className,
}: {
  children: React.ReactNode;
  onLight?: boolean;
  onDark?: boolean;
  className?: string;
}) {
  void onDark;
  return (
    <span
      className={cn(
        "t-eyebrow",
        onLight && "t-eyebrow-on-light",
        className,
      )}
    >
      {children}
    </span>
  );
}

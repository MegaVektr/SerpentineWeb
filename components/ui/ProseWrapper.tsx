import { cn } from "@/lib/cn";

export function ProseWrapper({
  children,
  className,
  onDark = false,
}: {
  children: React.ReactNode;
  className?: string;
  onDark?: boolean;
}) {
  return (
    <div className={cn("mdx max-w-[72ch]", onDark && "on-dark", className)}>
      {children}
    </div>
  );
}

import { cn } from "@/lib/cn";

export function Container({
  className,
  children,
  size = "default",
  ...rest
}: {
  className?: string;
  children: React.ReactNode;
  size?: "default" | "narrow" | "wide";
} & React.HTMLAttributes<HTMLDivElement>) {
  const max = {
    narrow: "max-w-3xl",
    default: "max-w-[1200px]",
    wide: "max-w-[1320px]",
  }[size];
  return (
    <div className={cn("mx-auto w-full px-6 sm:px-8 lg:px-12", max, className)} {...rest}>
      {children}
    </div>
  );
}

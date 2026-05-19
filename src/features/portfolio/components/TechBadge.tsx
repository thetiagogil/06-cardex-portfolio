import { cn } from "@/shared/lib/cn";

export const TechBadge = ({
  label,
  className,
}: {
  label: string;
  className?: string;
}) => (
  <span
    className={cn(
      "border-border text-muted-foreground hover:border-primary/40 hover:bg-primary/10 hover:text-primary inline-flex items-center rounded-none border px-2.5 py-1 font-mono text-[10px] tracking-[0.18em] uppercase transition-colors duration-300",
      className,
    )}
  >
    {label}
  </span>
);

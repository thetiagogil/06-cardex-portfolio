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
      "inline-flex items-center rounded-none border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary",
      className,
    )}
  >
    {label}
  </span>
);

import { cn } from "@/shared/lib/cn";
import type { PortfolioActionLink } from "@/features/portfolio/lib/portfolio-detail-links";
import { ExternalLink } from "lucide-react";

export const PortfolioDetailActions = ({
  className,
  links,
}: {
  className?: string;
  links: PortfolioActionLink[];
}) => {
  if (!links.length) return null;

  return (
    <section className={className}>
      <div className="flex flex-wrap gap-3">
        {links.map((entry) => (
          <a
            key={`${entry.href}-${entry.label}`}
            href={entry.href}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "inline-flex items-center gap-2 px-5 py-3 font-mono text-xs tracking-[0.18em] uppercase transition-colors duration-300",
              entry.variant === "primary"
                ? "bg-foreground text-background hover:bg-primary"
                : "border-foreground hover:bg-foreground hover:text-background border",
            )}
          >
            <span>{entry.label}</span>
            <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.8} />
          </a>
        ))}
      </div>
    </section>
  );
};

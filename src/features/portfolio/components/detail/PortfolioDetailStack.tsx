import { TechBadge } from "@/features/portfolio/components/TechBadge";

export const PortfolioDetailStack = ({
  className,
  label,
  techs,
}: {
  className?: string;
  label: string;
  techs: string[];
}) => {
  if (!techs.length) return null;

  return (
    <section className={className}>
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground md:text-[11px]">
        {label}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {techs.map((tag) => (
          <TechBadge key={tag} label={tag} />
        ))}
      </div>
    </section>
  );
};

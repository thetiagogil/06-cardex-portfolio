import { PortfolioDetailActions } from "@/features/portfolio/components/detail/PortfolioDetailActions";
import { PortfolioDetailStack } from "@/features/portfolio/components/detail/PortfolioDetailStack";
import type { PortfolioActionLink } from "@/features/portfolio/lib/portfolio-detail-links";
import { cn } from "@/shared/lib/cn";

export const PortfolioDetailInfoActions = ({
  actionLinks,
  className,
  stackLabel,
  techs,
}: {
  actionLinks: PortfolioActionLink[];
  className?: string;
  stackLabel: string;
  techs: string[];
}) => {
  if (!techs.length && !actionLinks.length) {
    return null;
  }

  return (
    <div
      className={cn(
        "grid gap-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-end",
        className,
      )}
    >
      <PortfolioDetailStack
        className="min-w-0"
        label={stackLabel}
        techs={techs}
      />

      <PortfolioDetailActions links={actionLinks} />
    </div>
  );
};

import { PortfolioShowcaseItem } from "@/features/portfolio/components/detail/PortfolioShowcaseItem";
import type { ShowcaseItem } from "@/features/portfolio/types";
import { useI18n } from "@/shared/i18n/useI18n";
import { cn } from "@/shared/lib/cn";

export const PortfolioShowcaseLinks = ({
  className,
  items,
  title,
}: {
  className?: string;
  items: ShowcaseItem[];
  title?: string;
}) => {
  const { tr } = useI18n();

  if (!items.length) return null;

  return (
    <div className={cn("space-y-4", className)}>
      {title ? (
        <h2 className="font-display text-foreground text-lg tracking-tight md:text-2xl">
          {title}
        </h2>
      ) : null}

      <ul className="space-y-4">
        {items.map((item) => (
          <PortfolioShowcaseItem
            key={`${item.itemId ?? item.href ?? item.label}`}
            item={item}
            translate={tr}
          />
        ))}
      </ul>
    </div>
  );
};

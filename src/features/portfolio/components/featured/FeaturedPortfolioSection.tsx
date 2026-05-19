import { CategoryGlyph } from "@/features/portfolio/components/CategoryGlyph";
import {
  allItems,
  getSorted,
} from "@/features/portfolio/lib/portfolio-queries";
import { isVisibleItem } from "@/features/portfolio/lib/portfolio-visibility";
import { useI18n } from "@/shared/i18n/useI18n";
import type { Category } from "@/features/portfolio/types";

import { FeaturedPortfolioItem } from "@/features/portfolio/components/featured/FeaturedPortfolioItem";

export const FeaturedPortfolioSection = ({
  category,
}: {
  category: Category;
}) => {
  const { t } = useI18n();

  const items = getSorted(
    allItems.filter(
      (item) =>
        item.category === category && item.featured && isVisibleItem(item),
    ),
  ).slice(0, category === "projects" ? 4 : undefined);

  if (!items.length) return null;

  return (
    <section>
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="font-display text-lg md:text-2xl">
          {t(`section.${category}`)}
        </h2>
        <div className="text-muted-foreground flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase">
          <CategoryGlyph category={category} className="h-5 w-5" />
          <span>{String(items.length).padStart(2, "0")} / featured</span>
        </div>
      </div>

      <ul className="divide-border/70 border-border/70 divide-y border-y">
        {items.map((item) => (
          <FeaturedPortfolioItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
};

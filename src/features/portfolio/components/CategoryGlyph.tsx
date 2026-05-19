import { categoryMeta } from "@/features/portfolio/lib/portfolio-display";
import { cn } from "@/shared/lib/cn";
import type { Category } from "@/features/portfolio/types";

export const CategoryGlyph = ({
  category,
  className,
}: {
  category: Category;
  className?: string;
}) => {
  const meta = categoryMeta[category];
  const Icon = meta.icon;

  return (
    <span
      className={cn(
        "bg-background relative inline-grid shrink-0 place-items-center overflow-hidden",
        meta.colorClassName,
        className,
      )}
      aria-hidden
    >
      <Icon
        className="absolute inset-0 m-auto size-4 fill-current sm:size-full"
        strokeWidth={1.6}
      />
    </span>
  );
};

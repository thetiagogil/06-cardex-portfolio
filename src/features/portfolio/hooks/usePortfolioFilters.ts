import { useMemo } from "react";

import {
  allItems,
  getSorted,
} from "@/features/portfolio/lib/portfolio-queries";
import { isVisibleItem } from "@/features/portfolio/lib/portfolio-visibility";
import type { TimelineFilter } from "@/features/portfolio/lib/portfolio-filters";

export const usePortfolioFilters = (filter: TimelineFilter) => {
  const visibleItems = useMemo(() => allItems.filter(isVisibleItem), []);

  const sortedItems = useMemo(() => {
    const items =
      filter === "all"
        ? visibleItems
        : visibleItems.filter((item) => item.category === filter);

    return getSorted(items);
  }, [filter, visibleItems]);

  const counts = useMemo(
    () => ({
      all: visibleItems.length,
      experience: visibleItems.filter((item) => item.category === "experience")
        .length,
      projects: visibleItems.filter((item) => item.category === "projects")
        .length,
      education: visibleItems.filter((item) => item.category === "education")
        .length,
      certifications: visibleItems.filter(
        (item) => item.category === "certifications",
      ).length,
    }),
    [visibleItems],
  );

  return { counts, sortedItems };
};

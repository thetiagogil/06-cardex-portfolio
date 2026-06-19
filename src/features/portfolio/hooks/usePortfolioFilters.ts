import { useMemo } from "react";

import {
  allItems,
  getSorted,
} from "@/features/portfolio/lib/portfolio-queries";
import { isVisibleItem } from "@/features/portfolio/lib/portfolio-visibility";
import {
  getTimelineFilterOptions,
  itemMatchesAdvancedTimelineFilters,
  type AdvancedTimelineFilters,
  type TimelineFilter,
} from "@/features/portfolio/lib/portfolio-filters";
import { useI18n } from "@/shared/i18n/useI18n";

export const usePortfolioFilters = (
  filter: TimelineFilter,
  advancedFilters: AdvancedTimelineFilters,
) => {
  const { tr } = useI18n();
  const visibleItems = useMemo(() => allItems.filter(isVisibleItem), []);

  const advancedFilteredItems = useMemo(
    () =>
      visibleItems.filter((item) =>
        itemMatchesAdvancedTimelineFilters(item, advancedFilters, tr),
      ),
    [advancedFilters, tr, visibleItems],
  );

  const sortedItems = useMemo(() => {
    const items =
      filter === "all"
        ? advancedFilteredItems
        : advancedFilteredItems.filter((item) => item.category === filter);

    return getSorted(items);
  }, [advancedFilteredItems, filter]);

  const counts = useMemo(
    () => ({
      all: advancedFilteredItems.length,
      experience: advancedFilteredItems.filter(
        (item) => item.category === "experience",
      ).length,
      projects: advancedFilteredItems.filter(
        (item) => item.category === "projects",
      ).length,
      education: advancedFilteredItems.filter(
        (item) => item.category === "education",
      ).length,
      certifications: advancedFilteredItems.filter(
        (item) => item.category === "certifications",
      ).length,
    }),
    [advancedFilteredItems],
  );

  const filterOptions = useMemo(
    () => getTimelineFilterOptions(visibleItems),
    [visibleItems],
  );

  return { counts, filterOptions, sortedItems };
};

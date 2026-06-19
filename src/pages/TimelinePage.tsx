import { TimelineFilters } from "@/features/portfolio/components/timeline/TimelineFilters";
import { TimelineItem } from "@/features/portfolio/components/timeline/TimelineItem";
import { usePortfolioFilters } from "@/features/portfolio/hooks/usePortfolioFilters";
import {
  hasAdvancedTimelineSearchParams,
  isTimelineFilter,
  parseAdvancedTimelineFilters,
  type AdvancedTimelineFilters,
  type TimelineFilter,
  writeAdvancedTimelineFiltersToSearchParams,
} from "@/features/portfolio/lib/portfolio-filters";
import {
  getStoredAdvancedTimelineFilters,
  setStoredAdvancedTimelineFilters,
} from "@/features/portfolio/lib/timeline-filter-storage";
import { useI18n } from "@/shared/i18n/useI18n";
import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const timelineFilterParam = "filter";

export const TimelinePage = () => {
  const { t } = useI18n();
  const [searchParams, setSearchParams] = useSearchParams();
  const filterParam = searchParams.get(timelineFilterParam);
  const filter = isTimelineFilter(filterParam) ? filterParam : "all";
  const advancedFilters = useMemo(
    () => parseAdvancedTimelineFilters(searchParams),
    [searchParams],
  );
  const hasAdvancedSearchParams = useMemo(
    () => hasAdvancedTimelineSearchParams(searchParams),
    [searchParams],
  );
  const { counts, filterOptions, sortedItems } = usePortfolioFilters(
    filter,
    advancedFilters,
  );

  useEffect(() => {
    if (
      !filterParam ||
      (filterParam !== "all" && isTimelineFilter(filterParam))
    ) {
      return;
    }

    const nextSearchParams = new URLSearchParams(searchParams);
    nextSearchParams.delete(timelineFilterParam);
    setSearchParams(nextSearchParams, { replace: true });
  }, [filterParam, searchParams, setSearchParams]);

  useEffect(() => {
    if (hasAdvancedSearchParams) {
      setStoredAdvancedTimelineFilters(advancedFilters);
      return;
    }

    const storedAdvancedFilters = getStoredAdvancedTimelineFilters();
    if (!storedAdvancedFilters) return;

    const nextSearchParams = new URLSearchParams(searchParams);
    writeAdvancedTimelineFiltersToSearchParams(
      nextSearchParams,
      storedAdvancedFilters,
    );
    setSearchParams(nextSearchParams, { replace: true });
  }, [advancedFilters, hasAdvancedSearchParams, searchParams, setSearchParams]);

  const setFilter = (nextFilter: TimelineFilter) => {
    const nextSearchParams = new URLSearchParams(searchParams);

    if (nextFilter === "all") {
      nextSearchParams.delete(timelineFilterParam);
    } else {
      nextSearchParams.set(timelineFilterParam, nextFilter);
    }

    setSearchParams(nextSearchParams, { replace: true });
  };

  const saveAdvancedFilters = (nextFilters: AdvancedTimelineFilters) => {
    setStoredAdvancedTimelineFilters(nextFilters);

    const nextSearchParams = new URLSearchParams(searchParams);
    writeAdvancedTimelineFiltersToSearchParams(nextSearchParams, nextFilters);
    setSearchParams(nextSearchParams, { replace: true });
  };

  return (
    <div className="mx-auto max-w-275 px-6 py-10 md:px-12 md:py-16">
      <header className="mb-10">
        <h1 className="font-display text-3xl tracking-tight md:text-5xl">
          {t("timeline.title")}
        </h1>
        <p className="text-muted-foreground mt-3 max-w-xl text-sm text-pretty md:text-lg">
          {t("timeline.subtitle")}
        </p>
      </header>

      <div className="border-border/60 bg-background/80 sticky top-0 z-20 -mx-6 mb-8 border-b px-6 py-4 backdrop-blur-md md:-mx-12 md:px-12">
        <TimelineFilters
          advancedFilters={advancedFilters}
          counts={counts}
          filterOptions={filterOptions}
          value={filter}
          onAdvancedSave={saveAdvancedFilters}
          onChange={setFilter}
        />
      </div>

      {sortedItems.length > 0 ? (
        <ol className="relative">
          <div
            className="bg-border absolute top-2 bottom-2 left-20.25 w-px md:left-46.25"
            aria-hidden
          />

          {sortedItems.map((item) => (
            <TimelineItem key={item.id} item={item} />
          ))}
        </ol>
      ) : (
        <div className="border-border/60 text-muted-foreground border py-12 text-center text-sm">
          {t("timeline.noResults")}
        </div>
      )}
    </div>
  );
};

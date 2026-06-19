import { TimelineAdvancedFiltersDialog } from "@/features/portfolio/components/timeline/TimelineAdvancedFiltersDialog";
import {
  timelineFilters,
  type AdvancedTimelineFilters,
  type TimelineFilter,
  type TimelineFilterOptions,
} from "@/features/portfolio/lib/portfolio-filters";
import { useI18n } from "@/shared/i18n/useI18n";

export const TimelineFilters = ({
  advancedFilters,
  value,
  counts,
  filterOptions,
  onChange,
  onAdvancedSave,
}: {
  advancedFilters: AdvancedTimelineFilters;
  value: TimelineFilter;
  counts: Record<TimelineFilter, number>;
  filterOptions: TimelineFilterOptions;
  onChange: (filter: TimelineFilter) => void;
  onAdvancedSave: (filters: AdvancedTimelineFilters) => void;
}) => {
  const { t } = useI18n();

  return (
    <div className="grid grid-cols-1 items-start gap-3 md:grid-cols-[minmax(0,1fr)_auto]">
      <div className="hidden min-w-0 flex-wrap gap-1 md:flex">
        {timelineFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => onChange(filter)}
            aria-pressed={value === filter}
            className={`cursor-pointer px-3 py-1.5 font-mono text-[11px] tracking-[0.15em] uppercase transition-colors duration-300 ${
              value === filter
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {filter === "all" ? t("timeline.all") : t(`section.${filter}`)}
            <span className="ml-2 opacity-60">{counts[filter]}</span>
          </button>
        ))}
      </div>

      <TimelineAdvancedFiltersDialog
        filters={advancedFilters}
        options={filterOptions}
        onSave={onAdvancedSave}
      />
    </div>
  );
};

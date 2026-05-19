import { Badge } from "@/shared/components/ui/Badge";
import {
  timelineFilters,
  type TimelineFilter,
} from "@/features/portfolio/lib/portfolio-filters";
import { useI18n } from "@/shared/i18n/useI18n";
import { SlidersHorizontal } from "lucide-react";

export const TimelineFilters = ({
  value,
  counts,
  onChange,
}: {
  value: TimelineFilter;
  counts: Record<TimelineFilter, number>;
  onChange: (filter: TimelineFilter) => void;
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

      <button
        type="button"
        disabled
        title={t("timeline.advancedFilters")}
        className="border-border text-muted-foreground inline-flex w-full items-center justify-between gap-2 self-start rounded-full border border-dashed px-3 py-1.5 font-mono text-[10px] tracking-[0.15em] uppercase opacity-80 md:w-auto md:justify-start"
      >
        <SlidersHorizontal className="size-3.5" strokeWidth={1.8} />
        <span>{t("timeline.advancedFilters")}</span>
        <Badge
          variant="outline"
          className="border-border bg-background text-muted-foreground rounded-full px-2 py-0 font-mono text-[9px] tracking-[0.15em] uppercase"
        >
          {t("common.soon")}
        </Badge>
      </button>
    </div>
  );
};

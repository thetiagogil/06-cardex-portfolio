import {
  emptyAdvancedTimelineFilters,
  getActiveAdvancedFilterCount,
  hasAdvancedTimelineFilters,
  type AdvancedTimelineFilters,
  type TimelineFilterOptions,
} from "@/features/portfolio/lib/portfolio-filters";
import type { ItemStatus, ProjectType } from "@/features/portfolio/types";
import { Badge } from "@/shared/components/ui/Badge";
import { useI18n } from "@/shared/i18n/useI18n";
import { cn } from "@/shared/lib/cn";
import * as Dialog from "@radix-ui/react-dialog";
import {
  CalendarRange,
  Check,
  Layers,
  RotateCcw,
  Search,
  SlidersHorizontal,
  Tags,
  X,
} from "lucide-react";
import { useState } from "react";

const chipClassName =
  "border-border text-muted-foreground hover:text-foreground hover:border-foreground/50 inline-flex items-center gap-2 border px-3 py-1.5 font-mono text-[10px] tracking-[0.15em] uppercase transition-colors duration-300";

const activeChipClassName = "border-primary bg-primary/15 text-primary";

const toggleValue = <T extends string>(values: T[], value: T) =>
  values.includes(value)
    ? values.filter((current) => current !== value)
    : [...values, value];

const toggleCaseInsensitiveValue = (values: string[], value: string) => {
  const normalizedValue = value.toLocaleLowerCase();

  return values.some(
    (currentValue) => currentValue.toLocaleLowerCase() === normalizedValue,
  )
    ? values.filter(
        (currentValue) => currentValue.toLocaleLowerCase() !== normalizedValue,
      )
    : [...values, value];
};

const includesCaseInsensitiveValue = (values: string[], value: string) => {
  const normalizedValue = value.toLocaleLowerCase();

  return values.some(
    (currentValue) => currentValue.toLocaleLowerCase() === normalizedValue,
  );
};

const normalizeYearInput = (value: string) => {
  const trimmedValue = value.trim();
  if (!trimmedValue) return null;

  const parsedValue = Number(trimmedValue);
  if (!Number.isInteger(parsedValue) || parsedValue < 1 || parsedValue > 9999) {
    return null;
  }

  return parsedValue;
};

export const TimelineAdvancedFiltersDialog = ({
  filters,
  options,
  onSave,
}: {
  filters: AdvancedTimelineFilters;
  options: TimelineFilterOptions;
  onSave: (filters: AdvancedTimelineFilters) => void;
}) => {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [draftFilters, setDraftFilters] =
    useState<AdvancedTimelineFilters>(filters);
  const activeCount = getActiveAdvancedFilterCount(filters);
  const hasActiveFilters = hasAdvancedTimelineFilters(filters);
  const hasDraftFilters = hasAdvancedTimelineFilters(draftFilters);

  const updateDraftFilters = (nextFilters: AdvancedTimelineFilters) => {
    setDraftFilters(nextFilters);
  };

  const handleOpenChange = (nextOpen: boolean) => {
    if (nextOpen) setDraftFilters(filters);
    setOpen(nextOpen);
  };

  const saveFilters = () => {
    onSave(draftFilters);
    setOpen(false);
  };

  const toggleProjectType = (type: ProjectType) => {
    updateDraftFilters({
      ...draftFilters,
      projectTypes: toggleValue(draftFilters.projectTypes, type),
    });
  };

  const toggleStatus = (status: ItemStatus) => {
    updateDraftFilters({
      ...draftFilters,
      statuses: toggleValue(draftFilters.statuses, status),
    });
  };

  const toggleTech = (tech: string) => {
    updateDraftFilters({
      ...draftFilters,
      techs: toggleCaseInsensitiveValue(draftFilters.techs, tech),
    });
  };

  const clearDraftFilters = () => {
    setDraftFilters(emptyAdvancedTimelineFilters);
  };

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange} modal>
      <Dialog.Trigger asChild>
        <button
          type="button"
          title={t("timeline.advancedFilters")}
          className={cn(
            "border-border text-muted-foreground hover:border-foreground/50 hover:text-foreground inline-flex w-full cursor-pointer items-center justify-between gap-2 self-start rounded-full border px-3 py-1.5 font-mono text-[10px] tracking-[0.15em] uppercase transition-colors duration-300 md:w-auto md:justify-start",
            hasActiveFilters && "border-primary text-primary",
          )}
        >
          <SlidersHorizontal className="size-3.5" strokeWidth={1.8} />
          <span>{t("timeline.advancedFilters")}</span>
          {activeCount > 0 && (
            <Badge
              variant="outline"
              className="border-primary bg-primary/15 text-primary rounded-full px-2 py-0 font-mono text-[9px] tracking-[0.15em] uppercase"
            >
              {activeCount}
            </Badge>
          )}
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md" />
        <Dialog.Content className="border-border bg-background fixed top-1/2 left-1/2 z-[60] flex max-h-[calc(100vh-2rem)] w-[min(calc(100vw-2rem),48rem)] -translate-x-1/2 -translate-y-1/2 flex-col border shadow-2xl outline-none">
          <div className="flex items-start justify-between gap-4 p-5 md:p-7">
            <div>
              <Dialog.Title className="font-display text-foreground text-2xl tracking-tight">
                {t("timeline.advancedFilters")}
              </Dialog.Title>
              <Dialog.Description className="text-muted-foreground mt-2 max-w-xl text-sm leading-relaxed">
                {t("timeline.advancedFiltersDescription")}
              </Dialog.Description>
            </div>

            <Dialog.Close asChild>
              <button
                type="button"
                aria-label={t("timeline.dismissAdvancedFilters")}
                className="border-border text-muted-foreground hover:text-foreground hover:border-foreground/50 inline-flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center border transition-colors duration-300"
              >
                <X className="h-4 w-4" strokeWidth={1.8} />
              </button>
            </Dialog.Close>
          </div>

          <div className="min-h-0 overflow-y-auto px-5 pb-5 md:px-7 md:pb-7">
            <div className="space-y-7">
              <label className="block">
                <span className="text-muted-foreground flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase">
                  <Search className="h-3.5 w-3.5" strokeWidth={1.8} />
                  {t("timeline.searchLabel")}
                </span>
                <input
                  value={draftFilters.query}
                  onChange={(event) =>
                    updateDraftFilters({
                      ...draftFilters,
                      query: event.target.value,
                    })
                  }
                  placeholder={t("timeline.searchPlaceholder")}
                  className="border-border text-foreground placeholder:text-muted-foreground/60 focus:border-primary mt-3 w-full border bg-transparent px-3 py-2.5 text-sm transition-colors duration-300 outline-none"
                />
              </label>

              <section className="space-y-3">
                <h3 className="text-muted-foreground flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase">
                  <CalendarRange className="h-3.5 w-3.5" strokeWidth={1.8} />
                  {t("timeline.dateRange")}
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-muted-foreground font-mono text-[10px] tracking-[0.18em] uppercase">
                      {t("timeline.yearFrom")}
                    </span>
                    <input
                      inputMode="numeric"
                      value={draftFilters.yearFrom ?? ""}
                      onChange={(event) =>
                        updateDraftFilters({
                          ...draftFilters,
                          yearFrom: normalizeYearInput(event.target.value),
                        })
                      }
                      placeholder={String(options.minYear ?? "")}
                      className="border-border text-foreground placeholder:text-muted-foreground/60 focus:border-primary mt-2 w-full border bg-transparent px-3 py-2 text-sm transition-colors duration-300 outline-none"
                    />
                  </label>
                  <label className="block">
                    <span className="text-muted-foreground font-mono text-[10px] tracking-[0.18em] uppercase">
                      {t("timeline.yearTo")}
                    </span>
                    <input
                      inputMode="numeric"
                      value={draftFilters.yearTo ?? ""}
                      onChange={(event) =>
                        updateDraftFilters({
                          ...draftFilters,
                          yearTo: normalizeYearInput(event.target.value),
                        })
                      }
                      placeholder={String(options.maxYear ?? "")}
                      className="border-border text-foreground placeholder:text-muted-foreground/60 focus:border-primary mt-2 w-full border bg-transparent px-3 py-2 text-sm transition-colors duration-300 outline-none"
                    />
                  </label>
                </div>
              </section>

              {options.projectTypes.length > 0 && (
                <section className="space-y-3">
                  <h3 className="text-muted-foreground flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase">
                    <Layers className="h-3.5 w-3.5" strokeWidth={1.8} />
                    {t("timeline.projectTypes")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {options.projectTypes.map((type) => {
                      const active = draftFilters.projectTypes.includes(type);

                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => toggleProjectType(type)}
                          aria-pressed={active}
                          className={cn(
                            chipClassName,
                            active && activeChipClassName,
                          )}
                        >
                          {active && (
                            <Check className="h-3 w-3" strokeWidth={2} />
                          )}
                          {t(`project.type.${type}`)}
                        </button>
                      );
                    })}
                  </div>
                </section>
              )}

              {options.statuses.length > 0 && (
                <section className="space-y-3">
                  <h3 className="text-muted-foreground font-mono text-[10px] tracking-[0.2em] uppercase">
                    {t("timeline.statuses")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {options.statuses.map((status) => {
                      const active = draftFilters.statuses.includes(status);

                      return (
                        <button
                          key={status}
                          type="button"
                          onClick={() => toggleStatus(status)}
                          aria-pressed={active}
                          className={cn(
                            chipClassName,
                            active && activeChipClassName,
                          )}
                        >
                          {active && (
                            <Check className="h-3 w-3" strokeWidth={2} />
                          )}
                          {t(`status.${status}`)}
                        </button>
                      );
                    })}
                  </div>
                </section>
              )}

              {options.techs.length > 0 && (
                <section className="space-y-3">
                  <h3 className="text-muted-foreground flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase">
                    <Tags className="h-3.5 w-3.5" strokeWidth={1.8} />
                    {t("timeline.techStack")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {options.techs.map((tech) => {
                      const active = includesCaseInsensitiveValue(
                        draftFilters.techs,
                        tech,
                      );

                      return (
                        <button
                          key={tech}
                          type="button"
                          onClick={() => toggleTech(tech)}
                          aria-pressed={active}
                          className={cn(
                            chipClassName,
                            active && activeChipClassName,
                          )}
                        >
                          {active && (
                            <Check className="h-3 w-3" strokeWidth={2} />
                          )}
                          {tech}
                        </button>
                      );
                    })}
                  </div>
                </section>
              )}
            </div>

            <div className="border-border mt-7 flex flex-wrap items-center justify-between gap-3 border-t pt-5">
              <button
                type="button"
                onClick={clearDraftFilters}
                disabled={!hasDraftFilters}
                className="text-muted-foreground hover:text-foreground disabled:text-muted-foreground/40 inline-flex cursor-pointer items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase transition-colors duration-300 disabled:cursor-not-allowed"
              >
                <RotateCcw className="h-3.5 w-3.5" strokeWidth={1.8} />
                {t("timeline.clearAdvancedFilters")}
              </button>

              <button
                type="button"
                onClick={saveFilters}
                className="bg-foreground text-background hover:bg-primary inline-flex cursor-pointer items-center justify-center px-5 py-2.5 font-mono text-[10px] tracking-[0.18em] uppercase transition-colors duration-300"
              >
                {t("timeline.saveAdvancedFilters")}
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

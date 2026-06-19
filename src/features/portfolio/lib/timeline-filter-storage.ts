import {
  hasAdvancedTimelineFilters,
  parseAdvancedTimelineFilters,
  type AdvancedTimelineFilters,
} from "@/features/portfolio/lib/portfolio-filters";

const timelineAdvancedFiltersStorageKey = "cardex.timeline.advancedFilters.v1";

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const appendStrings = (
  searchParams: URLSearchParams,
  key: string,
  value: unknown,
) => {
  if (!Array.isArray(value)) return;

  value.forEach((item) => {
    if (typeof item === "string") searchParams.append(key, item);
  });
};

const setOptionalYear = (
  searchParams: URLSearchParams,
  key: string,
  value: unknown,
) => {
  if (typeof value === "number" || typeof value === "string") {
    searchParams.set(key, String(value));
  }
};

const parseStoredFilters = (value: unknown): AdvancedTimelineFilters | null => {
  if (!isRecord(value)) return null;

  const searchParams = new URLSearchParams();

  if (typeof value.query === "string") {
    searchParams.set("q", value.query);
  }

  appendStrings(searchParams, "type", value.projectTypes);
  appendStrings(searchParams, "status", value.statuses);
  appendStrings(searchParams, "tech", value.techs);
  setOptionalYear(searchParams, "from", value.yearFrom);
  setOptionalYear(searchParams, "to", value.yearTo);

  return parseAdvancedTimelineFilters(searchParams);
};

export const getStoredAdvancedTimelineFilters =
  (): AdvancedTimelineFilters | null => {
    if (typeof window === "undefined") return null;

    try {
      const storedValue = window.localStorage.getItem(
        timelineAdvancedFiltersStorageKey,
      );
      if (!storedValue) return null;

      const filters = parseStoredFilters(JSON.parse(storedValue));
      if (!filters || !hasAdvancedTimelineFilters(filters)) {
        window.localStorage.removeItem(timelineAdvancedFiltersStorageKey);
        return null;
      }

      return filters;
    } catch {
      return null;
    }
  };

export const setStoredAdvancedTimelineFilters = (
  filters: AdvancedTimelineFilters,
) => {
  if (typeof window === "undefined") return;

  try {
    if (!hasAdvancedTimelineFilters(filters)) {
      window.localStorage.removeItem(timelineAdvancedFiltersStorageKey);
      return;
    }

    window.localStorage.setItem(
      timelineAdvancedFiltersStorageKey,
      JSON.stringify(filters),
    );
  } catch {
    // Ignore unavailable or blocked localStorage.
  }
};

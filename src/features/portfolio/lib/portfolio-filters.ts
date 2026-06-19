import {
  getItemOrg,
  getItemTitle,
} from "@/features/portfolio/lib/portfolio-display";
import { isProjectItem } from "@/features/portfolio/lib/portfolio-routing";
import type {
  Category,
  DataItem,
  ItemStatus,
  ProjectType,
} from "@/features/portfolio/types";

export type TimelineFilter = "all" | Category;

export interface AdvancedTimelineFilters {
  query: string;
  projectTypes: ProjectType[];
  statuses: ItemStatus[];
  techs: string[];
  yearFrom: number | null;
  yearTo: number | null;
}

export interface TimelineFilterOptions {
  projectTypes: ProjectType[];
  statuses: ItemStatus[];
  techs: string[];
  minYear: number | null;
  maxYear: number | null;
}

export const timelineFilters: readonly TimelineFilter[] = [
  "all",
  "experience",
  "projects",
  "education",
  "certifications",
];

export const projectTypeFilters: readonly ProjectType[] = [
  "core",
  "product",
  "early-work",
  "experiment",
  "design",
];

export const statusFilters: readonly ItemStatus[] = [
  "planned",
  "in progress",
  "completed",
  "archived",
  "offline",
];

export const emptyAdvancedTimelineFilters: AdvancedTimelineFilters = {
  query: "",
  projectTypes: [],
  statuses: [],
  techs: [],
  yearFrom: null,
  yearTo: null,
};

const advancedTimelineSearchParamNames = [
  "q",
  "type",
  "status",
  "tech",
  "from",
  "to",
] as const;

const searchStopWords = new Set([
  "a",
  "an",
  "and",
  "as",
  "built",
  "com",
  "created",
  "criou",
  "da",
  "das",
  "de",
  "do",
  "does",
  "dos",
  "e",
  "em",
  "fez",
  "for",
  "he",
  "i",
  "in",
  "know",
  "made",
  "o",
  "of",
  "os",
  "para",
  "por",
  "project",
  "projects",
  "projeto",
  "projetos",
  "que",
  "quero",
  "show",
  "the",
  "to",
  "usou",
  "using",
  "want",
  "what",
  "which",
  "with",
]);

const dedupeValues = <T extends string>(values: T[]) => [...new Set(values)];

const dedupeCaseInsensitiveValues = (values: string[]) => {
  const seenValues = new Set<string>();

  return values.filter((value) => {
    const normalizedValue = value.toLocaleLowerCase();
    if (seenValues.has(normalizedValue)) return false;

    seenValues.add(normalizedValue);
    return true;
  });
};

export const isTimelineFilter = (
  value: string | null,
): value is TimelineFilter =>
  value !== null && timelineFilters.includes(value as TimelineFilter);

export const isProjectTypeFilter = (value: string): value is ProjectType =>
  projectTypeFilters.includes(value as ProjectType);

export const isStatusFilter = (value: string): value is ItemStatus =>
  statusFilters.includes(value as ItemStatus);

export const hasAdvancedTimelineFilters = (filters: AdvancedTimelineFilters) =>
  Boolean(
    filters.query.trim() ||
    filters.projectTypes.length ||
    filters.statuses.length ||
    filters.techs.length ||
    filters.yearFrom ||
    filters.yearTo,
  );

export const getActiveAdvancedFilterCount = (
  filters: AdvancedTimelineFilters,
) =>
  (filters.query.trim() ? 1 : 0) +
  filters.projectTypes.length +
  filters.statuses.length +
  filters.techs.length +
  (filters.yearFrom || filters.yearTo ? 1 : 0);

export const parseOptionalYear = (value: string | null) => {
  if (!value) return null;

  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed < 1 || parsed > 9999) return null;

  return parsed;
};

export const parseAdvancedTimelineFilters = (
  searchParams: URLSearchParams,
): AdvancedTimelineFilters => ({
  query: searchParams.get("q")?.trim() ?? "",
  projectTypes: dedupeValues(
    searchParams.getAll("type").filter(isProjectTypeFilter),
  ),
  statuses: dedupeValues(searchParams.getAll("status").filter(isStatusFilter)),
  techs: dedupeCaseInsensitiveValues(
    searchParams
      .getAll("tech")
      .map((tech) => tech.trim())
      .filter(Boolean),
  ),
  yearFrom: parseOptionalYear(searchParams.get("from")),
  yearTo: parseOptionalYear(searchParams.get("to")),
});

export const hasAdvancedTimelineSearchParams = (
  searchParams: URLSearchParams,
) =>
  advancedTimelineSearchParamNames.some((paramName) =>
    searchParams.has(paramName),
  );

export const writeAdvancedTimelineFiltersToSearchParams = (
  searchParams: URLSearchParams,
  filters: AdvancedTimelineFilters,
) => {
  advancedTimelineSearchParamNames.forEach((paramName) =>
    searchParams.delete(paramName),
  );

  const query = filters.query.trim();
  if (query) searchParams.set("q", query);

  filters.projectTypes.forEach((type) => searchParams.append("type", type));
  filters.statuses.forEach((status) => searchParams.append("status", status));
  filters.techs.forEach((tech) => searchParams.append("tech", tech));

  if (filters.yearFrom) searchParams.set("from", String(filters.yearFrom));
  if (filters.yearTo) searchParams.set("to", String(filters.yearTo));
};

const normalizeSearchValue = (value: string | undefined) =>
  (value ?? "").toLocaleLowerCase();

const getSearchTokens = (query: string) =>
  query
    .trim()
    .toLocaleLowerCase()
    .split(/\s+/)
    .filter((token) => token && !searchStopWords.has(token));

const getItemEndYearForFiltering = (item: DataItem) => {
  if (item.dateEnd === null) return new Date().getFullYear();
  return item.dateEnd?.getFullYear() ?? item.dateStart.getFullYear();
};

const itemOverlapsYearRange = (
  item: DataItem,
  yearFrom: number | null,
  yearTo: number | null,
) => {
  if (!yearFrom && !yearTo) return true;

  const from = yearFrom ?? Number.NEGATIVE_INFINITY;
  const to = yearTo ?? Number.POSITIVE_INFINITY;
  const rangeStart = Math.min(from, to);
  const rangeEnd = Math.max(from, to);
  const itemStart = item.dateStart.getFullYear();
  const itemEnd = getItemEndYearForFiltering(item);

  return itemStart <= rangeEnd && itemEnd >= rangeStart;
};

const itemMatchesQuery = (
  item: DataItem,
  query: string,
  tr: (key: string | undefined) => string,
) => {
  const queryTokens = getSearchTokens(query);
  if (queryTokens.length === 0) return true;

  const itemStartYear = item.dateStart.getFullYear();
  const itemEndYear = getItemEndYearForFiltering(item);
  const projectType = isProjectItem(item) ? item.type : "";
  const status = item.status ?? "";

  const searchableText = [
    getItemTitle(item, tr),
    getItemOrg(item, tr),
    item.summaryKey ? tr(item.summaryKey) : "",
    item.category,
    tr(`section.${item.category}`),
    status,
    status ? tr(`status.${status}`) : "",
    String(itemStartYear),
    String(itemEndYear),
    ...item.techs,
    projectType,
    projectType ? tr(`project.type.${projectType}`) : "",
    isProjectItem(item) ? item.scope : "",
    isProjectItem(item) ? tr(`project.scope.${item.scope}`) : "",
  ]
    .filter(Boolean)
    .map(normalizeSearchValue)
    .join(" ");

  return queryTokens.every((token) => searchableText.includes(token));
};

export const itemMatchesAdvancedTimelineFilters = (
  item: DataItem,
  filters: AdvancedTimelineFilters,
  tr: (key: string | undefined) => string,
) => {
  if (!itemMatchesQuery(item, filters.query, tr)) return false;

  if (
    filters.projectTypes.length > 0 &&
    (!isProjectItem(item) || !filters.projectTypes.includes(item.type))
  ) {
    return false;
  }

  if (
    filters.statuses.length > 0 &&
    (!item.status || !filters.statuses.includes(item.status))
  ) {
    return false;
  }

  if (
    filters.techs.length > 0 &&
    !filters.techs.every((selectedTech) =>
      item.techs.some(
        (tech) => tech.toLocaleLowerCase() === selectedTech.toLocaleLowerCase(),
      ),
    )
  ) {
    return false;
  }

  return itemOverlapsYearRange(item, filters.yearFrom, filters.yearTo);
};

export const getTimelineFilterOptions = (
  items: DataItem[],
): TimelineFilterOptions => {
  const projectTypes = new Set<ProjectType>();
  const statuses = new Set<ItemStatus>();
  const techs = new Set<string>();
  const years = new Set<number>();

  items.forEach((item) => {
    if (isProjectItem(item)) projectTypes.add(item.type);
    if (item.status) statuses.add(item.status);
    item.techs.forEach((tech) => techs.add(tech));
    years.add(item.dateStart.getFullYear());
    years.add(getItemEndYearForFiltering(item));
  });

  const sortedYears = [...years].sort((a, b) => a - b);

  return {
    projectTypes: projectTypeFilters.filter((type) => projectTypes.has(type)),
    statuses: statusFilters.filter((status) => statuses.has(status)),
    techs: [...techs].sort((a, b) => a.localeCompare(b)),
    minYear: sortedYears[0] ?? null,
    maxYear: sortedYears[sortedYears.length - 1] ?? null,
  };
};

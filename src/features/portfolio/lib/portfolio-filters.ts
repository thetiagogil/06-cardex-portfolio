import type { Category } from "@/features/portfolio/types";

export type TimelineFilter = "all" | Category;

export const timelineFilters: readonly TimelineFilter[] = [
  "all",
  "experience",
  "projects",
  "education",
  "certifications",
];

export const isTimelineFilter = (
  value: string | null,
): value is TimelineFilter =>
  value !== null && timelineFilters.includes(value as TimelineFilter);

import type { ProjectItem } from "@/features/portfolio/types";

const projectImagePathCollator = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: "base",
});

export const sortProjectImages = (images: string[]) =>
  [...images].sort(projectImagePathCollator.compare);

export const getProjectImages = (project: ProjectItem) => project.images ?? [];

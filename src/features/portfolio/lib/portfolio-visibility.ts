import type { DataItem, ProjectItem } from "@/features/portfolio/types";

export const isVisibleProject = (project: ProjectItem) =>
  project.visible !== false;

export const isVisibleItem = (item: DataItem) =>
  item.category !== "projects" || isVisibleProject(item);

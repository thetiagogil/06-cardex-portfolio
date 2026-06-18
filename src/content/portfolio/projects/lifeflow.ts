import type { ProjectItem } from "@/content/portfolio/types";

export const lifeflow: ProjectItem = {
  id: "proj-lifeflow",
  category: "projects",
  title: "Lifeflow",
  subjectKey: "project.lifeflow.subject",
  summaryKey: "project.lifeflow.summary",
  detailKey: "project.lifeflow.detail",
  techs: ["Next.js", "TypeScript", "Material UI", "Supabase", "PostgreSQL"],
  dateStart: new Date("2026-05-01"),
  status: "planned",
  type: "product",
  scope: "life-system",
  dataSource: "dedicated-database",
  featured: false,
  hasDetailsPage: true,
  images: [],
};

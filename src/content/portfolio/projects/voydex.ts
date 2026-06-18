import type { ProjectItem } from "@/content/portfolio/types";

export const voydex: ProjectItem = {
  id: "proj-voydex",
  category: "projects",
  title: "Voydex",
  subjectKey: "project.voydex.subject",
  summaryKey: "project.voydex.summary",
  detailKey: "project.voydex.detail",
  techs: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn UI",
    "Supabase",
    "PostgreSQL",
  ],
  dateStart: new Date("2025-10-01"),
  status: "in progress",
  type: "core",
  scope: "game-companion",
  dataSource: "dedicated-database",
  featured: true,
  hasDetailsPage: true,
  images: [
    "projects/voydex/voydex-1.png",
    "projects/voydex/voydex-2.png",
    "projects/voydex/voydex-3.png",
    "projects/voydex/voydex-4.png",
  ],
};

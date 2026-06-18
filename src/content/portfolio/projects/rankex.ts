import type { ProjectItem } from "@/content/portfolio/types";

export const rankex: ProjectItem = {
  id: "proj-rankex",
  category: "projects",
  title: "Rankex",
  subjectKey: "project.rankex.subject",
  summaryKey: "project.rankex.summary",
  detailKey: "project.rankex.detail",
  link: "https://rankex.vercel.app/",
  repo: "https://github.com/thetiagogil/11-rankex",
  techs: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn UI",
    "Supabase",
    "PostgreSQL",
  ],
  dateStart: new Date("2024-08-10"),
  status: "completed",
  type: "experiment",
  scope: "ranking-tracker",
  dataSource: "shared-database",
  featured: false,
  hasDetailsPage: true,
  images: [
    "projects/rankex/rankex-1.png",
    "projects/rankex/rankex-2.png",
    "projects/rankex/rankex-3.png",
    "projects/rankex/rankex-4.png",
  ],
};

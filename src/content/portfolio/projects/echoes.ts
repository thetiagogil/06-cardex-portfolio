import type { ProjectItem } from "@/content/portfolio/types";

export const echoes: ProjectItem = {
  id: "proj-echoes",
  category: "projects",
  title: "Echoes",
  subjectKey: "project.echoes.subject",
  summaryKey: "project.echoes.summary",
  detailKey: "project.echoes.detail",
  link: "https://echoes-tracker.vercel.app/",
  repo: "https://github.com/thetiagogil/10-echoes",
  techs: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Radix UI",
    "Supabase",
    "PostgreSQL",
  ],
  dateStart: new Date("2024-08-01"),
  status: "completed",
  type: "experiment",
  scope: "concert-tracker",
  dataSource: "shared-database",
  featured: false,
  hasDetailsPage: true,
  images: [
    "projects/echoes/echoes-1.png",
    "projects/echoes/echoes-2.png",
    "projects/echoes/echoes-3.png",
    "projects/echoes/echoes-4.png",
  ],
};

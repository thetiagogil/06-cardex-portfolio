import type { ProjectItem } from "@/content/portfolio/types";

export const easyqa: ProjectItem = {
  id: "proj-easyqa",
  category: "projects",
  title: "Easyqa",
  subjectKey: "project.easyqa.subject",
  summaryKey: "project.easyqa.summary",
  detailKey: "project.easyqa.detail",
  link: "https://easyqa.vercel.app/",
  repo: "https://github.com/thetiagogil/07-easyqa",
  techs: ["Next.js", "TypeScript", "Joy UI", "Supabase", "PostgreSQL"],
  dateStart: new Date("2024-03-01"),
  status: "completed",
  type: "early-work",
  scope: "qa-app",
  dataSource: "shared-database",
  featured: false,
  hasDetailsPage: true,
  images: [
    "projects/easyqa/easyqa-1.png",
    "projects/easyqa/easyqa-2.png",
    "projects/easyqa/easyqa-3.png",
    "projects/easyqa/easyqa-4.png",
    "projects/easyqa/easyqa-5.png",
  ],
};

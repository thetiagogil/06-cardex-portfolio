import type { ProjectItem } from "@/content/portfolio/types";

export const uparque: ProjectItem = {
  id: "proj-uparque",
  category: "projects",
  title: "Uparque",
  subjectKey: "project.uparque.subject",
  summaryKey: "project.uparque.summary",
  detailKey: "project.uparque.detail",
  link: "https://uparque.pages.dev/",
  repo: "https://github.com/thetiagogil/14-uparque",
  techs: ["React", "TypeScript", "Tailwind CSS", "Radix UI"],
  dateStart: new Date("2026-04-01"),
  status: "completed",
  type: "product",
  scope: "cafe-website",
  dataSource: "hardcoded",
  featured: true,
  hasDetailsPage: true,
  images: [
    "projects/uparque/uparque-1.png",
    "projects/uparque/uparque-2.png",
    "projects/uparque/uparque-3.png",
    "projects/uparque/uparque-4.png",
    "projects/uparque/uparque-5.png",
  ],
};

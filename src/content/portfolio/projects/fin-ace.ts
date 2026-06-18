import type { ProjectItem } from "@/content/portfolio/types";

export const finAce: ProjectItem = {
  id: "proj-fin-ace",
  category: "projects",
  title: "Fin/Ace",
  subjectKey: "project.finAce.subject",
  summaryKey: "project.finAce.summary",
  detailKey: "project.finAce.detail",
  link: "https://fin-ace.pages.dev/",
  repo: "https://github.com/thetiagogil/03-finace",
  techs: ["React", "TypeScript", "Material UI"],
  dateStart: new Date("2023-10-01"),
  status: "completed",
  type: "early-work",
  scope: "finance-tool",
  dataSource: "local-storage",
  featured: false,
  hasDetailsPage: true,
  images: [
    "projects/finace/finace-1.png",
    "projects/finace/finace-2.png",
    "projects/finace/finace-3.png",
    "projects/finace/finace-4.png",
    "projects/finace/finace-5.png",
    "projects/finace/finace-6.png",
    "projects/finace/finace-7.png",
  ],
};

import type { ProjectItem } from "@/content/portfolio/types";

export const giraffesVsSea: ProjectItem = {
  id: "proj-giraffes-vs-sea",
  category: "projects",
  title: "Giraffes vs Sea",
  subjectKey: "project.giraffesVsSea.subject",
  summaryKey: "project.giraffesVsSea.summary",
  detailKey: "project.giraffesVsSea.detail",
  link: "https://thetiagogil.github.io/01-giraffes-vs-sea/",
  repo: "https://github.com/thetiagogil/01-giraffes-vs-sea",
  techs: ["HTML", "CSS", "JavaScript"],
  dateStart: new Date("2023-08-01"),
  status: "completed",
  type: "early-work",
  scope: "game",
  dataSource: "none",
  featured: false,
  hasDetailsPage: true,
  images: [
    "projects/giraffes-vs-sea/giraffes-vs-sea-1.png",
    "projects/giraffes-vs-sea/giraffes-vs-sea-2.png",
    "projects/giraffes-vs-sea/giraffes-vs-sea-3.png",
    "projects/giraffes-vs-sea/giraffes-vs-sea-4.png",
  ],
};

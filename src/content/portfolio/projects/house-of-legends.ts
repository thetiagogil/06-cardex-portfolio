import type { ProjectItem } from "@/content/portfolio/types";

export const houseOfLegends: ProjectItem = {
  id: "proj-house-of-legends",
  category: "projects",
  title: "House of Legends",
  subjectKey: "project.houseOfLegends.subject",
  summaryKey: "project.houseOfLegends.summary",
  detailKey: "project.houseOfLegends.detail",
  link: "https://house-of-legends.pages.dev/",
  repo: "https://github.com/thetiagogil/02-house-of-legends",
  techs: ["React", "TypeScript", "REST API"],
  dateStart: new Date("2023-09-01"),
  status: "completed",
  type: "early-work",
  scope: "game-companion",
  dataSource: "local-storage",
  featured: false,
  hasDetailsPage: true,
  images: [
    "projects/house-of-legends/house-of-legends-1.png",
    "projects/house-of-legends/house-of-legends-2.png",
    "projects/house-of-legends/house-of-legends-3.png",
    "projects/house-of-legends/house-of-legends-4.png",
    "projects/house-of-legends/house-of-legends-5.png",
    "projects/house-of-legends/house-of-legends-6.png",
  ],
};

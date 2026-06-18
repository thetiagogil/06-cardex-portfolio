import type { ProjectItem } from "@/content/portfolio/types";

export const wordlechain: ProjectItem = {
  id: "proj-wordlechain",
  category: "projects",
  title: "Wordlechain",
  org: "Subvisual",
  subjectKey: "project.wordlechain.subject",
  summaryKey: "project.wordlechain.summary",
  detailKey: "project.wordlechain.detail",
  link: "https://wordlechain.pages.dev",
  repo: "https://github.com/thetiagogil/12-wordlechain",
  techs: ["React", "TypeScript", "Joy UI", "Wagmi", "Solidity"],
  dateStart: new Date("2023-12-05"),
  status: "completed",
  type: "early-work",
  scope: "game",
  dataSource: "none",
  featured: false,
  hasDetailsPage: true,
  images: [
    "projects/wordlechain/wordlechain-1.png",
    "projects/wordlechain/wordlechain-2.png",
    "projects/wordlechain/wordlechain-3.png",
  ],
};

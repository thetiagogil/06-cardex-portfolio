import type { ProjectItem } from "@/content/portfolio/types";

export const portfolios: ProjectItem = {
  id: "proj-portfolios",
  category: "projects",
  title: "Portfolios",
  subjectKey: "project.portfolios.subject",
  summaryKey: "project.portfolios.summary",
  detailKey: "project.portfolios.detail",
  techs: [],
  dateStart: new Date("2024-02-05"),
  status: "completed",
  type: "design",
  scope: "portfolio",
  dataSource: "hardcoded",
  showcaseItems: [
    {
      href: "https://cardex-portfolio.pages.dev/",
      label: "Cardex Portfolio",
      techs: ["React", "TypeScript", "Tailwind CSS", "Radix UI"],
    },
    {
      href: "https://pinkex-portfolio.pages.dev/",
      label: "Pinkex Portfolio",
      techs: ["React", "TypeScript", "Tailwind CSS", "Radix UI"],
    },
  ],
  featured: false,
  hasDetailsPage: true,
  images: [],
};

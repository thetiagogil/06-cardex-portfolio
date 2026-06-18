import type { ExperienceItem } from "@/content/portfolio/types";

export const aquasis: ExperienceItem = {
  id: "exp-aquasis",
  category: "experience",
  title: "Frontend Developer",
  org: "Aquasis",
  summaryKey: "experience.aquasis.summary",
  detailKey: "experience.aquasis.detail",
  link: "https://aquasis.pt/",
  techs: ["React", "TypeScript", "Zustand", "Bootstrap", "PostgreSQL", ".NET"],
  dateStart: new Date("2025-01-01"),
  dateEnd: null,
  showcaseItems: [
    {
      label: "Aquaworks",
      descriptionKey: "experience.aquasis.showcase.aquaworks.description",
    },
  ],
  featured: true,
  hasDetailsPage: true,
};

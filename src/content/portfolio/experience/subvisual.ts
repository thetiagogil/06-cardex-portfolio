import type { ExperienceItem } from "@/content/portfolio/types";

export const subvisual: ExperienceItem = {
  id: "exp-subvisual",
  category: "experience",
  title: "Full-Stack Developer Apprentice",
  org: "Subvisual",
  summaryKey: "experience.subvisual.summary",
  detailKey: "experience.subvisual.detail",
  link: "https://subvisual.com",
  techs: [
    "React",
    "TypeScript",
    "Joy UI",
    "TanStack Query",
    "Supabase",
    "PostgreSQL",
    "Solidity",
    "Wagmi",
  ],
  dateStart: new Date("2023-12-01"),
  dateEnd: new Date("2024-02-29"),
  showcaseItems: [
    {
      itemId: "proj-wordlechain",
      label: "Wordlechain",
      descriptionKey: "experience.subvisual.showcase.wordlechain.description",
      techs: ["React", "TypeScript", "MUI", "Wagmi", "Solidity"],
    },
    {
      itemId: "proj-talio",
      label: "Talio",
      descriptionKey: "experience.subvisual.showcase.talio.description",
      techs: ["React", "TypeScript", "Material UI"],
    },
  ],
  featured: true,
  hasDetailsPage: true,
};

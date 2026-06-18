import type { ExperienceItem } from "@/content/portfolio/types";

export const talentProtocol: ExperienceItem = {
  id: "exp-talent-protocol",
  category: "experience",
  title: "Full-Stack Developer",
  org: "Talent Protocol",
  summaryKey: "experience.talentProtocol.summary",
  detailKey: "experience.talentProtocol.detail",
  link: "https://www.talentprotocol.com",
  techs: ["React", "Next.js", "TypeScript", "Joy UI", "Wagmi", "PostgreSQL"],
  dateStart: new Date("2024-03-01"),
  dateEnd: new Date("2025-02-28"),
  showcaseItems: [
    {
      label: "Talent Passport",
      href: "https://talent.app/",
      descriptionKey:
        "experience.talentProtocol.showcase.talentPassport.description",
      techs: ["Next.js", "TypeScript", "Joy UI"],
    },
    {
      label: "Build.top",
      href: "https://buildtoken.framer.website/",
      descriptionKey: "experience.talentProtocol.showcase.buildTop.description",
      techs: ["Next.js", "TypeScript", "Joy UI"],
    },
    {
      label: "Playground",
      descriptionKey:
        "experience.talentProtocol.showcase.playground.description",
      techs: ["React", "TypeScript", "Joy UI"],
    },
    {
      label: "Builder.fi",
      descriptionKey:
        "experience.talentProtocol.showcase.builderFi.description",
      techs: ["React", "TypeScript", "Joy UI"],
    },
  ],
  featured: true,
  hasDetailsPage: true,
};

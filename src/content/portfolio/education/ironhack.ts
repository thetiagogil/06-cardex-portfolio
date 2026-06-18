import type { EducationItem } from "@/content/portfolio/types";

export const ironhack: EducationItem = {
  id: "edu-ironhack",
  category: "education",
  titleKey: "education.ironhack.name",
  org: "Ironhack",
  summaryKey: "education.ironhack.summary",
  detailKey: "education.ironhack.detail",
  link: "https://www.ironhack.com",
  showcaseItems: [
    {
      itemId: "proj-giraffes-vs-sea",
      label: "Giraffes vs Sea",
      descriptionKey: "education.ironhack.showcase.giraffes.description",
    },
    {
      itemId: "proj-house-of-legends",
      label: "House of Legends",
      descriptionKey: "education.ironhack.showcase.houseOfLegends.description",
    },
    {
      itemId: "proj-fin-ace",
      label: "Fin/Ace",
      descriptionKey: "education.ironhack.showcase.finAce.description",
    },
  ],
  techs: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
  dateStart: new Date("2023-08-01"),
  dateEnd: new Date("2023-11-30"),
  detailLinks: [
    {
      href: "/education/ironhack/certification.pdf",
      label: "",
      labelKey: "education.certificate",
      variant: "secondary",
    },
  ],
  featured: true,
  hasDetailsPage: true,
};

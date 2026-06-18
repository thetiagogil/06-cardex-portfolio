import type { EducationItem } from "@/content/portfolio/types";

export const faul: EducationItem = {
  id: "edu-faul",
  category: "education",
  titleKey: "education.faul.name",
  orgKey: "education.faul.place",
  summaryKey: "education.faul.summary",
  detailKey: "education.faul.detail",
  link: "https://www.fa.ulisboa.pt/index.php/en",
  showcaseItems: [
    {
      href: "/education/faul/thesis.pdf",
      labelKey: "education.faul.showcase.thesis.label",
      label: "Master's thesis",
      descriptionKey: "education.faul.showcase.thesis.description",
    },
  ],
  techs: ["Revit", "AutoCAD", "Adobe Photoshop"],
  dateStart: new Date("2014-09-01"),
  dateEnd: new Date("2022-07-31"),
  detailLinks: [
    {
      href: "/education/faul/thesis.pdf",
      label: "",
      labelKey: "education.thesis",
      variant: "secondary",
    },
  ],
  featured: true,
  hasDetailsPage: true,
};

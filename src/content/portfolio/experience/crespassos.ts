import type { ExperienceItem } from "@/content/portfolio/types";

export const crEspassos: ExperienceItem = {
  id: "exp-crespassos",
  category: "experience",
  titleKey: "experience.crEspassos.role",
  org: "CR Espassos",
  summaryKey: "experience.crEspassos.summary",
  detailKey: "experience.crEspassos.detail",
  link: "https://crespassos.com",
  techs: ["Revit", "AutoCAD", "Microsoft Office"],
  dateStart: new Date("2022-09-01"),
  dateEnd: new Date("2023-08-31"),
  showcaseItems: [
    {
      labelKey: "experience.crEspassos.showcase.residential.label",
      label: "Residential architecture projects",
      descriptionKey: "experience.crEspassos.showcase.residential.description",
    },
    {
      labelKey: "experience.crEspassos.showcase.commercial.label",
      label: "Commercial and service buildings",
      descriptionKey: "experience.crEspassos.showcase.commercial.description",
    },
    {
      labelKey: "experience.crEspassos.showcase.urban.label",
      label: "Large-scale urban spaces",
      descriptionKey: "experience.crEspassos.showcase.urban.description",
    },
  ],
  hasDetailsPage: true,
};

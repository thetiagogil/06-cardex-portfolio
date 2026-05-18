import type { EducationItem } from "@/content/portfolio/types";

export const education: EducationItem[] = [
  {
    id: "edu-faul",
    category: "education",
    titleKey: "education_faul_name",
    orgKey: "education_faul_place",
    descriptionKey: "education_faul_description",
    detailsKey: "education_faul_details",
    link: "https://www.fa.ulisboa.pt/index.php/en",
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
  },
  {
    id: "edu-ironhack",
    category: "education",
    titleKey: "education_ironhack_name",
    org: "Ironhack",
    descriptionKey: "education_ironhack_description",
    detailsKey: "education_ironhack_details",
    link: "https://www.ironhack.com",
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
  },
];

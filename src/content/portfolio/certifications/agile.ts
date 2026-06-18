import type { CertificationItem } from "@/content/portfolio/types";

export const agile: CertificationItem = {
  id: "cert-agile",
  category: "certifications",
  title: "Agile Project Management",
  org: "Udemy",
  summaryKey: "certification.agile.summary",
  link: "https://www.udemy.com/course/agile-project-management-certification",
  techs: ["Agile Methodologies", "Lean Principles", "Kanban", "Jira"],
  dateStart: new Date("2024-02-01"),
  featured: false,
  hasDetailsPage: false,
};

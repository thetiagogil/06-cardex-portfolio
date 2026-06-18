import type { ProjectItem } from "@/content/portfolio/types";

export const trackio: ProjectItem = {
  id: "proj-trackio",
  category: "projects",
  title: "Trackio",
  subjectKey: "project.trackio.subject",
  summaryKey: "project.trackio.summary",
  detailKey: "project.trackio.detail",
  link: "https://trackio-tracker.vercel.app/",
  repo: "https://github.com/thetiagogil/09-trackio",
  techs: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Radix UI",
    "Supabase",
    "PostgreSQL",
  ],
  dateStart: new Date("2024-08-01"),
  status: "completed",
  type: "experiment",
  scope: "tracker-organizer",
  dataSource: "shared-database",
  featured: false,
  hasDetailsPage: true,
  images: ["projects/trackio/trackio-1.png", "projects/trackio/trackio-2.png"],
};

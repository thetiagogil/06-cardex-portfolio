import type {
  Category,
  DataItem,
  DetailItem,
  ProjectItem,
} from "@/features/portfolio/types";

const stripPrefix = (value: string, prefix: string) =>
  value.startsWith(prefix) ? value.slice(prefix.length) : value;

const detailPrefixes: Record<Category, string> = {
  experience: "exp-",
  projects: "proj-",
  education: "edu-",
  certifications: "cert-",
};

export const isProjectItem = (item: DataItem): item is ProjectItem =>
  item.category === "projects";

export const hasItemDetails = (item: DataItem): item is DetailItem =>
  item.hasDetailsPage === true;

export const getItemSlug = (item: DataItem) =>
  stripPrefix(item.id, detailPrefixes[item.category]);

export const getItemHref = (item: DataItem) =>
  hasItemDetails(item) ? `/${item.category}/${getItemSlug(item)}` : null;

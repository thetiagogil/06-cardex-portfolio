import {
  certifications,
  education,
  experience,
  projects,
} from "@/content/portfolio";
import { getItemSlug } from "@/features/portfolio/lib/portfolio-routing";
import type {
  Category,
  DataItem,
  DetailItem,
} from "@/features/portfolio/types";

export { certifications, education, experience, projects };

export const allItems: DataItem[] = [
  ...experience,
  ...projects,
  ...education,
  ...certifications,
];

export const getFeatured = () => allItems.filter((item) => item.featured);

export const getByCategory = (category: string) =>
  allItems.filter((item) => item.category === category);

export const getItemById = (id: string) =>
  allItems.find((item) => item.id === id);

export const getDetailItemByCategoryAndSlug = (
  category: Category,
  slug: string,
) =>
  allItems.find(
    (item): item is DetailItem =>
      item.category === category &&
      item.hasDetailsPage === true &&
      getItemSlug(item) === slug,
  );

export const getSorted = (items: DataItem[]) =>
  [...items].sort((a, b) => {
    const aStart = a.dateStart.getTime();
    const bStart = b.dateStart.getTime();
    if (bStart !== aStart) return bStart - aStart;

    const aEnd =
      a.dateEnd === null
        ? Number.POSITIVE_INFINITY
        : (a.dateEnd?.getTime() ?? a.dateStart.getTime());
    const bEnd =
      b.dateEnd === null
        ? Number.POSITIVE_INFINITY
        : (b.dateEnd?.getTime() ?? b.dateStart.getTime());
    if (bEnd !== aEnd) return bEnd - aEnd;

    return a.id.localeCompare(b.id);
  });

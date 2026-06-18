import type { Category, DetailItem } from "@/features/portfolio/types";

export interface PortfolioActionLink {
  href: string;
  label: string;
  variant: "primary" | "secondary";
}

const defaultLinkLabelKey: Record<Category, string> = {
  experience: "experience.visit",
  education: "education.visit",
  certifications: "certification.visit",
  projects: "project.visit",
};

export const getPortfolioActionLinks = ({
  item,
  projectRepo,
  translate,
}: {
  item: DetailItem;
  projectRepo?: string;
  translate: (key: string) => string;
}): PortfolioActionLink[] => {
  const primaryItemLinks: PortfolioActionLink[] = item.link
    ? [
        {
          href: item.link,
          label: translate(defaultLinkLabelKey[item.category]),
          variant: "primary",
        },
      ]
    : [];

  const repoLinks: PortfolioActionLink[] = projectRepo
    ? [
        {
          href: projectRepo,
          label: translate("project.repo"),
          variant: item.link ? "secondary" : "primary",
        },
      ]
    : [];

  const detailLinks: PortfolioActionLink[] = (item.detailLinks ?? [])
    .filter((entry) => entry.href)
    .map((entry, index) => ({
      href: entry.href,
      label: entry.labelKey ? translate(entry.labelKey) : entry.label,
      variant:
        entry.variant ??
        (!item.link && !projectRepo && index === 0 ? "primary" : "secondary"),
    }));

  return [...primaryItemLinks, ...repoLinks, ...detailLinks];
};

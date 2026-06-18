export type Category =
  | "experience"
  | "projects"
  | "education"
  | "certifications";

export type ItemStatus =
  | "planned"
  | "in progress"
  | "completed"
  | "archived"
  | "offline";

export type ProjectType =
  | "core"
  | "product"
  | "early-work"
  | "experiment"
  | "design";

export type ProjectScope =
  | "game"
  | "game-companion"
  | "team-planner"
  | "finance-tool"
  | "qa-app"
  | "ecommerce"
  | "cafe-website"
  | "portfolio"
  | "tracker-organizer"
  | "concert-tracker"
  | "ranking-tracker"
  | "life-system";

export type ProjectDataSource =
  | "none"
  | "hardcoded"
  | "local-storage"
  | "shared-database"
  | "dedicated-database";

export interface DetailLink {
  href: string;
  label: string;
  labelKey?: string;
  variant?: "primary" | "secondary";
}

export interface ShowcaseItem {
  itemId?: string;
  href?: string;
  label: string;
  labelKey?: string;
  description?: string;
  descriptionKey?: string;
  techs?: string[];
}

export interface BaseDataItem {
  id: string;
  title?: string;
  titleKey?: string;
  org?: string;
  orgKey?: string;
  subjectKey?: string;
  summaryKey?: string;
  detailKey?: string;
  link?: string;
  detailLinks?: DetailLink[];
  showcaseItems?: ShowcaseItem[];
  techs: string[];
  dateStart: Date;
  dateEnd?: Date | null;
  status?: ItemStatus;
  featured?: boolean;
  visible?: boolean;
  img?: string;
  hasDetailsPage: boolean;
}

export interface ExperienceItem extends BaseDataItem {
  category: "experience";
  roleKey?: string;
}

export interface ProjectItem extends Omit<
  BaseDataItem,
  "hasDetailsPage" | "img" | "status"
> {
  category: "projects";
  repo?: string;
  status: ItemStatus;
  type: ProjectType;
  scope: ProjectScope;
  dataSource: ProjectDataSource;
  hasDetailsPage?: boolean;
  images?: string[];
  img?: never;
}

export interface EducationItem extends BaseDataItem {
  category: "education";
}

export interface CertificationItem extends BaseDataItem {
  category: "certifications";
}

export type DataItem =
  | ExperienceItem
  | ProjectItem
  | EducationItem
  | CertificationItem;

export type DetailItem = DataItem & { hasDetailsPage: true };

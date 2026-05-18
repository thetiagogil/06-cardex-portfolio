export type Category =
  | "experience"
  | "projects"
  | "education"
  | "certifications";

export type ItemStatus = "in progress" | "completed" | "unavailable";

export type ProjectType =
  | "core"
  | "product"
  | "experiment"
  | "early work"
  | "design";

export interface DetailLink {
  href: string;
  label: string;
  labelKey?: string;
  variant?: "primary" | "secondary";
}

export interface BaseDataItem {
  id: string;
  title?: string;
  titleKey?: string;
  org?: string;
  orgKey?: string;
  subjectKey?: string;
  descriptionKey?: string;
  detailsKey?: string;
  link?: string;
  detailLinks?: DetailLink[];
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

export interface ProjectItem
  extends Omit<BaseDataItem, "hasDetailsPage" | "img" | "status"> {
  category: "projects";
  repo?: string;
  status: ItemStatus;
  type: ProjectType;
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

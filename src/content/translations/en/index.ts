import { certificationTranslations } from "@/content/translations/en/certifications";
import { educationTranslations } from "@/content/translations/en/education";
import { experienceTranslations } from "@/content/translations/en/experience";
import { projectTranslations } from "@/content/translations/en/projects";
import { uiTranslations } from "@/content/translations/en/ui";
import type { LocaleDictionary } from "@/content/translations/types";

export const enTranslations: LocaleDictionary = {
  ...uiTranslations,
  ...experienceTranslations,
  ...projectTranslations,
  ...educationTranslations,
  ...certificationTranslations,
};

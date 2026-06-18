import { certificationTranslations } from "@/content/translations/pt/certifications";
import { educationTranslations } from "@/content/translations/pt/education";
import { experienceTranslations } from "@/content/translations/pt/experience";
import { projectTranslations } from "@/content/translations/pt/projects";
import { uiTranslations } from "@/content/translations/pt/ui";
import type { LocaleDictionary } from "@/content/translations/types";

export const ptTranslations: LocaleDictionary = {
  ...uiTranslations,
  ...experienceTranslations,
  ...projectTranslations,
  ...educationTranslations,
  ...certificationTranslations,
};

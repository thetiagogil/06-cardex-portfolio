import { certificationTranslations } from "@/content/translations/certifications";
import { educationTranslations } from "@/content/translations/education";
import { experienceTranslations } from "@/content/translations/experience";
import { projectTranslations } from "@/content/translations/projects";
import type { TranslationDictionary } from "@/content/translations/types";
import { uiTranslations } from "@/content/translations/ui";

export const dictionary: TranslationDictionary = {
  ...uiTranslations,
  ...experienceTranslations,
  ...projectTranslations,
  ...educationTranslations,
  ...certificationTranslations,
};

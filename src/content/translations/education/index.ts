import { faulTranslations } from "@/content/translations/education/faul";
import { ironhackTranslations } from "@/content/translations/education/ironhack";
import type { TranslationDictionary } from "@/content/translations/types";

export const educationTranslations: TranslationDictionary = {
  ...faulTranslations,
  ...ironhackTranslations,
};

import { faulTranslations } from "@/content/translations/pt/education/faul";
import { ironhackTranslations } from "@/content/translations/pt/education/ironhack";
import type { LocaleDictionary } from "@/content/translations/types";

export const educationTranslations: LocaleDictionary = {
  ...faulTranslations,
  ...ironhackTranslations,
};

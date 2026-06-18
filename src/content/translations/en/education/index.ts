import { faulTranslations } from "@/content/translations/en/education/faul";
import { ironhackTranslations } from "@/content/translations/en/education/ironhack";
import type { LocaleDictionary } from "@/content/translations/types";

export const educationTranslations: LocaleDictionary = {
  ...faulTranslations,
  ...ironhackTranslations,
};

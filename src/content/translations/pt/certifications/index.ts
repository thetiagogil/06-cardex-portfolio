import { agileTranslations } from "@/content/translations/pt/certifications/agile";
import { outsystemsTranslations } from "@/content/translations/pt/certifications/outsystems";
import { reactNativeTranslations } from "@/content/translations/pt/certifications/react-native";
import type { LocaleDictionary } from "@/content/translations/types";

export const certificationTranslations: LocaleDictionary = {
  ...reactNativeTranslations,
  ...agileTranslations,
  ...outsystemsTranslations,
};

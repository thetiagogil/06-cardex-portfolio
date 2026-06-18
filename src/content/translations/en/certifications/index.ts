import { agileTranslations } from "@/content/translations/en/certifications/agile";
import { outsystemsTranslations } from "@/content/translations/en/certifications/outsystems";
import { reactNativeTranslations } from "@/content/translations/en/certifications/react-native";
import type { LocaleDictionary } from "@/content/translations/types";

export const certificationTranslations: LocaleDictionary = {
  ...reactNativeTranslations,
  ...agileTranslations,
  ...outsystemsTranslations,
};

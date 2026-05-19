import { agileTranslations } from "@/content/translations/certifications/agile";
import { outsystemsTranslations } from "@/content/translations/certifications/outsystems";
import { reactNativeTranslations } from "@/content/translations/certifications/react-native";
import type { TranslationDictionary } from "@/content/translations/types";

export const certificationTranslations: TranslationDictionary = {
  ...reactNativeTranslations,
  ...agileTranslations,
  ...outsystemsTranslations,
};

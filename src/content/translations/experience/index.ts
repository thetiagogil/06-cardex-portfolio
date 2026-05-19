import { aquasisTranslations } from "@/content/translations/experience/aquasis";
import { crEspassosTranslations } from "@/content/translations/experience/cr-espassos";
import { subvisualTranslations } from "@/content/translations/experience/subvisual";
import { talentProtocolTranslations } from "@/content/translations/experience/talent-protocol";
import type { TranslationDictionary } from "@/content/translations/types";

export const experienceTranslations: TranslationDictionary = {
  ...crEspassosTranslations,
  ...subvisualTranslations,
  ...talentProtocolTranslations,
  ...aquasisTranslations,
};

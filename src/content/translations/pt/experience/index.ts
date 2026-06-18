import { aquasisTranslations } from "@/content/translations/pt/experience/aquasis";
import { crEspassosTranslations } from "@/content/translations/pt/experience/cr-espassos";
import { subvisualTranslations } from "@/content/translations/pt/experience/subvisual";
import { talentProtocolTranslations } from "@/content/translations/pt/experience/talent-protocol";
import type { LocaleDictionary } from "@/content/translations/types";

export const experienceTranslations: LocaleDictionary = {
  ...crEspassosTranslations,
  ...subvisualTranslations,
  ...talentProtocolTranslations,
  ...aquasisTranslations,
};

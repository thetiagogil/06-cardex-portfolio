import { aquasisTranslations } from "@/content/translations/en/experience/aquasis";
import { crEspassosTranslations } from "@/content/translations/en/experience/cr-espassos";
import { subvisualTranslations } from "@/content/translations/en/experience/subvisual";
import { talentProtocolTranslations } from "@/content/translations/en/experience/talent-protocol";
import type { LocaleDictionary } from "@/content/translations/types";

export const experienceTranslations: LocaleDictionary = {
  ...crEspassosTranslations,
  ...subvisualTranslations,
  ...talentProtocolTranslations,
  ...aquasisTranslations,
};

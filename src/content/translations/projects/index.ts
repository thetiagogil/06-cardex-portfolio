import { finAceTranslations } from "@/content/translations/projects/fin-ace";
import { giraffesTranslations } from "@/content/translations/projects/giraffes-vs-sea";
import { houseOfLegendsTranslations } from "@/content/translations/projects/house-of-legends";
import { poketrackerTranslations } from "@/content/translations/projects/poketracker";
import { uparqueTranslations } from "@/content/translations/projects/uparque";
import { wordlechainTranslations } from "@/content/translations/projects/wordlechain";
import type { TranslationDictionary } from "@/content/translations/types";

export const projectTranslations: TranslationDictionary = {
  ...wordlechainTranslations,
  ...giraffesTranslations,
  ...houseOfLegendsTranslations,
  ...finAceTranslations,
  ...poketrackerTranslations,
  ...uparqueTranslations,
};

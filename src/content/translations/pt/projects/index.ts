import { echoesTranslations } from "@/content/translations/pt/projects/echoes";
import { easyqaTranslations } from "@/content/translations/pt/projects/easyqa";
import { finAceTranslations } from "@/content/translations/pt/projects/fin-ace";
import { giraffesTranslations } from "@/content/translations/pt/projects/giraffes-vs-sea";
import { houseOfLegendsTranslations } from "@/content/translations/pt/projects/house-of-legends";
import { lifeflowTranslations } from "@/content/translations/pt/projects/lifeflow";
import { onesbryneTranslations } from "@/content/translations/pt/projects/onesbryne";
import { portfoliosTranslations } from "@/content/translations/pt/projects/portfolios";
import { rankexTranslations } from "@/content/translations/pt/projects/rankex";
import { talioTranslations } from "@/content/translations/pt/projects/talio";
import { trackioTranslations } from "@/content/translations/pt/projects/trackio";
import { uparqueTranslations } from "@/content/translations/pt/projects/uparque";
import { voydexTranslations } from "@/content/translations/pt/projects/voydex";
import { wordlechainTranslations } from "@/content/translations/pt/projects/wordlechain";
import type { LocaleDictionary } from "@/content/translations/types";

export const projectTranslations: LocaleDictionary = {
  ...giraffesTranslations,
  ...houseOfLegendsTranslations,
  ...finAceTranslations,
  ...wordlechainTranslations,
  ...talioTranslations,
  ...easyqaTranslations,
  ...portfoliosTranslations,
  ...onesbryneTranslations,
  ...voydexTranslations,
  ...uparqueTranslations,
  ...trackioTranslations,
  ...echoesTranslations,
  ...rankexTranslations,
  ...lifeflowTranslations,
};

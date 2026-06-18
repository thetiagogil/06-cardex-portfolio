import { echoesTranslations } from "@/content/translations/en/projects/echoes";
import { easyqaTranslations } from "@/content/translations/en/projects/easyqa";
import { finAceTranslations } from "@/content/translations/en/projects/fin-ace";
import { giraffesTranslations } from "@/content/translations/en/projects/giraffes-vs-sea";
import { houseOfLegendsTranslations } from "@/content/translations/en/projects/house-of-legends";
import { lifeflowTranslations } from "@/content/translations/en/projects/lifeflow";
import { onesbryneTranslations } from "@/content/translations/en/projects/onesbryne";
import { portfoliosTranslations } from "@/content/translations/en/projects/portfolios";
import { rankexTranslations } from "@/content/translations/en/projects/rankex";
import { talioTranslations } from "@/content/translations/en/projects/talio";
import { trackioTranslations } from "@/content/translations/en/projects/trackio";
import { uparqueTranslations } from "@/content/translations/en/projects/uparque";
import { voydexTranslations } from "@/content/translations/en/projects/voydex";
import { wordlechainTranslations } from "@/content/translations/en/projects/wordlechain";
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

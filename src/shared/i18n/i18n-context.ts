import type { TranslationValue } from "@/content/translations/types";
import type { Lang } from "@/shared/i18n/types";
import { createContext } from "react";

export type I18nContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
  tr: (key: string | undefined) => string;
  tv: (key: string | undefined) => TranslationValue | undefined;
};

export const I18nContext = createContext<I18nContextType | null>(null);

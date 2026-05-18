import { dictionary } from "@/content/translations";
import type { TranslationValue } from "@/content/translations/types";
import { I18nContext } from "@/shared/i18n/i18n-context";
import { getStoredLocale, setStoredLocale } from "@/shared/i18n/locale-storage";
import type { Lang } from "@/shared/i18n/types";
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const getInitialLang = (): Lang => getStoredLocale() ?? "en";

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const getTranslationValue = useCallback(
    (key: string | undefined): TranslationValue | undefined => {
      if (!key) return undefined;

      const entry = dictionary[key];
      return entry?.[lang] ?? entry?.en;
    },
    [lang],
  );

  const setLang = useCallback((nextLang: Lang) => {
    setLangState(nextLang);
    setStoredLocale(nextLang);
    document.documentElement.lang = nextLang;
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useCallback(
    (key: string) => {
      const value = getTranslationValue(key);
      return typeof value === "string" ? value : key;
    },
    [getTranslationValue],
  );

  const tr = useCallback(
    (key: string | undefined) => {
      if (!key) return "";

      const value = getTranslationValue(key);
      return typeof value === "string" ? value : key;
    },
    [getTranslationValue],
  );

  const tv = useCallback(
    (key: string | undefined) => getTranslationValue(key),
    [getTranslationValue],
  );

  const value = useMemo(
    () => ({ lang, setLang, t, tr, tv }),
    [lang, setLang, t, tr, tv],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

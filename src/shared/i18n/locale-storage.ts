import type { Lang } from "@/shared/i18n/types";

const localeStorageKey = "thetiagogil-lang";

export const getStoredLocale = (): Lang | null => {
  const stored = localStorage.getItem(localeStorageKey);

  return stored === "en" || stored === "pt" ? stored : null;
};

export const setStoredLocale = (lang: Lang) => {
  localStorage.setItem(localeStorageKey, lang);
};

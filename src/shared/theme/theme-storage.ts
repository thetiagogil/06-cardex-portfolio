import type { ThemeMode } from "@/shared/theme/types";

const themeStorageKey = "thetiagogil-theme";

export const getStoredThemeMode = (): ThemeMode | null => {
  const stored = localStorage.getItem(themeStorageKey);

  return stored === "light" || stored === "dark" || stored === "system"
    ? stored
    : null;
};

export const setStoredThemeMode = (mode: ThemeMode) => {
  localStorage.setItem(themeStorageKey, mode);
};

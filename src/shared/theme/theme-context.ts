import type { ThemeMode } from "@/shared/theme/types";
import { createContext } from "react";

export type ThemeContextType = {
  mode: ThemeMode;
  resolved: "light" | "dark";
  setMode: (mode: ThemeMode) => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

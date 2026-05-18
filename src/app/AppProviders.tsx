import type { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

import { I18nProvider } from "@/shared/i18n/I18nProvider";
import { ThemeProvider } from "@/shared/theme/ThemeProvider";

export const AppProviders = ({ children }: { children: ReactNode }) => (
  <BrowserRouter>
    <ThemeProvider>
      <I18nProvider>{children}</I18nProvider>
    </ThemeProvider>
  </BrowserRouter>
);

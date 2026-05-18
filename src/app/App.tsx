import { AppProviders } from "@/app/AppProviders";
import { AppRouter } from "@/app/AppRouter";

export const App = () => (
  <AppProviders>
    <AppRouter />
  </AppProviders>
);

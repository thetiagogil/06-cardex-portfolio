import { FloatingControls } from "@/shared/components/layout/FloatingControls";
import { ScrollToTop } from "@/shared/components/layout/ScrollToTop";
import { SiteHeader } from "@/shared/components/layout/SiteHeader";
import { Route, Routes } from "react-router-dom";
import {
  CertificationsPage,
  EducationPage,
  ExperiencePage,
  HomePage,
  NotFoundPage,
  ProjectPage,
  TimelinePage,
} from "./lazy-pages";
import { RouteSuspense } from "./RouteSuspense";

export const AppRouter = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <ScrollToTop />
        <RouteSuspense>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/experience/:slug" element={<ExperiencePage />} />
            <Route path="/education/:slug" element={<EducationPage />} />
            <Route
              path="/certifications/:slug"
              element={<CertificationsPage />}
            />
            <Route path="/projects/:slug" element={<ProjectPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </RouteSuspense>
      </main>
      <FloatingControls />
    </div>
  );
};

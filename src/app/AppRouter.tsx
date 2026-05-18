import { CertificationsPage } from "@/pages/CertificationsPage";
import { EducationPage } from "@/pages/EducationPage";
import { ExperiencePage } from "@/pages/ExperiencePage";
import { HomePage } from "@/pages/home/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProjectPage } from "@/pages/ProjectPage";
import { TimelinePage } from "@/pages/TimelinePage";
import { FloatingControls } from "@/shared/components/layout/FloatingControls";
import { ScrollToTop } from "@/shared/components/layout/ScrollToTop";
import { SiteHeader } from "@/shared/components/layout/SiteHeader";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <ScrollToTop />
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
      </main>
      <FloatingControls />
    </div>
  );
};

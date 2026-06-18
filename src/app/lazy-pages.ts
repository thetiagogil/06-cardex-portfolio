import { lazy } from "react";

export const CertificationsPage = lazy(() =>
  import("@/pages/CertificationsPage").then((module) => ({
    default: module.CertificationsPage,
  })),
);

export const EducationPage = lazy(() =>
  import("@/pages/EducationPage").then((module) => ({
    default: module.EducationPage,
  })),
);

export const ExperiencePage = lazy(() =>
  import("@/pages/ExperiencePage").then((module) => ({
    default: module.ExperiencePage,
  })),
);

export const HomePage = lazy(() =>
  import("@/pages/home/HomePage").then((module) => ({
    default: module.HomePage,
  })),
);

export const NotFoundPage = lazy(() =>
  import("@/pages/NotFoundPage").then((module) => ({
    default: module.NotFoundPage,
  })),
);

export const ProjectPage = lazy(() =>
  import("@/pages/ProjectPage").then((module) => ({
    default: module.ProjectPage,
  })),
);

export const TimelinePage = lazy(() =>
  import("@/pages/TimelinePage").then((module) => ({
    default: module.TimelinePage,
  })),
);

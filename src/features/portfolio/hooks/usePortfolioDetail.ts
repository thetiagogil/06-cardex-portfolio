import type { TranslationValue } from "@/content/translations/types";
import { getPortfolioActionLinks } from "@/features/portfolio/lib/portfolio-detail-links";
import {
  formatMonthYearRange,
  formatProjectOriginDate,
} from "@/features/portfolio/lib/portfolio-dates";
import {
  getItemOrg,
  getItemTitle,
} from "@/features/portfolio/lib/portfolio-display";
import { getProjectImages } from "@/features/portfolio/lib/portfolio-images";
import { getDetailItemByCategoryAndSlug } from "@/features/portfolio/lib/portfolio-queries";
import { isProjectItem } from "@/features/portfolio/lib/portfolio-routing";
import type {
  Category,
  DetailItem,
  ProjectItem,
  ShowcaseItem,
} from "@/features/portfolio/types";
import { useI18n } from "@/shared/i18n/useI18n";
import { useNavigate, useParams } from "react-router-dom";

interface PortfolioDetailLabels {
  back: string;
  detailProjects: string;
  projectStack: string;
  projectMeta: {
    category: string;
    dates: string;
    scope: string;
    status: string;
  };
}

interface PortfolioDetailBase {
  actionLinks: ReturnType<typeof getPortfolioActionLinks>;
  dateLabel: string;
  details?: TranslationValue;
  handleBack: () => void;
  hasDetailSections: boolean;
  hasDetailsContent: boolean;
  hasInfoMeta: boolean;
  hasNonProjectLowerContent: boolean;
  hasPotentialMedia: boolean;
  labels: PortfolioDetailLabels;
  org?: string;
  projectImages: string[];
  showcaseItems: ShowcaseItem[];
  subject?: string;
  summary?: string;
  title: string;
}

interface PortfolioProjectDetail extends PortfolioDetailBase {
  isProject: true;
  item: DetailItem & ProjectItem;
}

interface PortfolioArticleDetail extends PortfolioDetailBase {
  isProject: false;
  item: Exclude<DetailItem, ProjectItem>;
}

export type PortfolioDetailViewModel =
  | PortfolioProjectDetail
  | PortfolioArticleDetail;

export const usePortfolioDetail = (
  category: Category,
): PortfolioDetailViewModel | null => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { lang, t, tr, tv } = useI18n();
  const item = slug
    ? getDetailItemByCategoryAndSlug(category, slug)
    : undefined;

  const handleBack = () => {
    const historyState = window.history.state as { idx?: number } | null;

    if (typeof historyState?.idx === "number" && historyState.idx > 0) {
      navigate(-1);
      return;
    }

    navigate("/timeline", { replace: true });
  };

  if (!item) {
    return null;
  }

  const isProject = isProjectItem(item);
  const projectImages = isProject ? getProjectImages(item) : [];
  const title = getItemTitle(item, tr) ?? item.id;
  const org = getItemOrg(item, tr);
  const dateLabel = isProject
    ? formatProjectOriginDate(item.dateStart, lang)
    : formatMonthYearRange({
        dateStart: item.dateStart,
        dateEnd: item.dateEnd,
        lang,
        presentLabel: t("timeline.present"),
      });
  const details = tv(item.detailKey);
  const showcaseItems = item.showcaseItems ?? [];
  const hasDetailsContent = Boolean(item.summaryKey || details);
  const hasDetailSections =
    typeof details === "object" && Boolean(details.sections?.length);
  const projectRepo = isProject ? item.repo : undefined;
  const actionLinks = getPortfolioActionLinks({
    item,
    projectRepo,
    translate: t,
  });
  const hasPotentialMedia = isProject
    ? projectImages.length > 0
    : Boolean(item.img);
  const hasInfoMeta = item.techs.length > 0 || actionLinks.length > 0;
  const hasNonProjectLowerContent =
    !isProject &&
    (hasDetailSections ||
      showcaseItems.length > 0 ||
      hasInfoMeta ||
      hasPotentialMedia);
  const baseDetail = {
    actionLinks,
    dateLabel,
    details,
    handleBack,
    hasDetailSections,
    hasDetailsContent,
    hasInfoMeta,
    hasNonProjectLowerContent,
    hasPotentialMedia,
    labels: {
      back: t("detail.back"),
      detailProjects: t("detail.projects"),
      projectStack: t("project.stack"),
      projectMeta: {
        category: t("project.category"),
        dates: t("project.dates"),
        scope: t("project.scope"),
        status: t("project.status"),
      },
    },
    org,
    projectImages,
    showcaseItems,
    subject: item.subjectKey ? tr(item.subjectKey) : undefined,
    summary: item.summaryKey ? tr(item.summaryKey) : undefined,
    title,
  };

  if (isProject) {
    return {
      ...baseDetail,
      isProject: true,
      item,
    };
  }

  return {
    ...baseDetail,
    isProject: false,
    item,
  };
};

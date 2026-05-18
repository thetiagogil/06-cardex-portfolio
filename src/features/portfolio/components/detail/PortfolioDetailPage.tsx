import { PortfolioDetailActions, type PortfolioActionLink } from "@/features/portfolio/components/detail/PortfolioDetailActions";
import { PortfolioDetailHeader } from "@/features/portfolio/components/detail/PortfolioDetailHeader";
import { PortfolioDetailMedia } from "@/features/portfolio/components/detail/PortfolioDetailMedia";
import { PortfolioDetailStack } from "@/features/portfolio/components/detail/PortfolioDetailStack";
import { PortfolioRichContent } from "@/features/portfolio/components/detail/PortfolioRichContent";
import { getDetailItemByCategoryAndSlug } from "@/features/portfolio/lib/portfolio-queries";
import { getItemOrg, getItemTitle } from "@/features/portfolio/lib/portfolio-display";
import { formatMonthYearRange, formatProjectOriginDate } from "@/features/portfolio/lib/portfolio-dates";
import { getProjectImages } from "@/features/portfolio/lib/portfolio-images";
import { isProjectItem } from "@/features/portfolio/lib/portfolio-routing";
import type { Category } from "@/features/portfolio/types";
import { cn } from "@/shared/lib/cn";
import { useI18n } from "@/shared/i18n/useI18n";
import { ArrowLeft } from "lucide-react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const articleContentClassName = "mt-8 space-y-8 md:mt-10 md:space-y-10";
const articleSectionClassName = "border-t border-border/60 pt-10";

const defaultLinkLabelKey: Record<Category, string> = {
  experience: "experience.visit",
  education: "education.visit",
  certifications: "certification.visit",
  projects: "project.visit",
};

export const PortfolioDetailPage = ({ category }: { category: Category }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { lang, t, tr, tv } = useI18n();

  const item = slug
    ? getDetailItemByCategoryAndSlug(category, slug)
    : undefined;

  if (!item) return <Navigate to="/" replace />;

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
  const details = tv(item.detailsKey);
  const hasDetailsContent = Boolean(item.descriptionKey || details);
  const projectRepo = isProject ? item.repo : undefined;
  const actionLinks: PortfolioActionLink[] = [
    ...(item.link
      ? [
          {
            href: item.link,
            label: t(defaultLinkLabelKey[item.category]),
            variant: "primary" as const,
          },
        ]
      : []),
    ...(projectRepo
      ? [
          {
            href: projectRepo,
            label: t("project.repo"),
            variant: item.link ? ("secondary" as const) : ("primary" as const),
          },
        ]
      : []),
    ...(item.detailLinks ?? [])
      .filter((entry) => entry.href)
      .map((entry, index) => ({
        href: entry.href,
        label: entry.labelKey ? t(entry.labelKey) : entry.label,
        variant:
          entry.variant ??
          (!item.link && !projectRepo && index === 0 ? "primary" : "secondary"),
      })),
  ];
  const hasPotentialMedia = isProject ? projectImages.length > 0 : Boolean(item.img);
  const hasContentSections =
    hasPotentialMedia ||
    item.techs.length > 0 ||
    hasDetailsContent ||
    actionLinks.length > 0;

  const handleBack = () => {
    const historyState = window.history.state as { idx?: number } | null;

    if (typeof historyState?.idx === "number" && historyState.idx > 0) {
      navigate(-1);
      return;
    }

    navigate("/timeline", { replace: true });
  };

  return (
    <article className="mx-auto max-w-215 px-6 py-10 md:px-12 md:py-14">
      <button
        type="button"
        onClick={handleBack}
        className="inline-flex cursor-pointer items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        <span>{t("detail.back")}</span>
      </button>

      <PortfolioDetailHeader
        dateLabel={dateLabel}
        isProject={isProject}
        org={org}
        projectType={isProject ? item.type : undefined}
        status={item.status}
        subject={item.subjectKey ? tr(item.subjectKey) : undefined}
        title={title}
      />

      {hasContentSections && (
        <div className={articleContentClassName}>
          <PortfolioDetailMedia
            item={item}
            org={org}
            projectImages={projectImages}
            title={title}
          />

          <PortfolioDetailStack
            className={articleSectionClassName}
            label={t("project.stack")}
            techs={item.techs}
          />

          {hasDetailsContent && (
            <section className={cn(articleSectionClassName, "space-y-6")}>
              {details ? (
                <PortfolioRichContent value={details} />
              ) : item.descriptionKey ? (
                <p className="text-sm leading-relaxed text-muted-foreground text-pretty md:text-lg">
                  {tr(item.descriptionKey)}
                </p>
              ) : null}
            </section>
          )}

          <PortfolioDetailActions
            className={articleSectionClassName}
            links={actionLinks}
          />
        </div>
      )}
    </article>
  );
};

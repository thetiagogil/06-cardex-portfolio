import {
  PortfolioDetailActions,
  type PortfolioActionLink,
} from "@/features/portfolio/components/detail/PortfolioDetailActions";
import { PortfolioDetailHeader } from "@/features/portfolio/components/detail/PortfolioDetailHeader";
import { PortfolioDetailMedia } from "@/features/portfolio/components/detail/PortfolioDetailMedia";
import { PortfolioDetailStack } from "@/features/portfolio/components/detail/PortfolioDetailStack";
import { PortfolioProjectMeta } from "@/features/portfolio/components/detail/PortfolioProjectMeta";
import { PortfolioRichContent } from "@/features/portfolio/components/detail/PortfolioRichContent";
import { PortfolioShowcaseLinks } from "@/features/portfolio/components/detail/PortfolioShowcaseLinks";
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
import type { Category } from "@/features/portfolio/types";
import { useI18n } from "@/shared/i18n/useI18n";
import { cn } from "@/shared/lib/cn";
import { ArrowLeft } from "lucide-react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const articleContentClassName = "mt-8 space-y-8 md:mt-10 md:space-y-10";
const articleSectionClassName = "border-t border-border/60 pt-8";
const articleInfoClassName = "max-w-230";
const projectContentClassName = "mt-6 space-y-4 md:mt-7 md:space-y-5";
const projectMediaClassName = "mt-5 md:mt-6";
const projectIntroClassName = "mt-5";

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
  const details = tv(item.detailKey);
  const showcaseItems = item.showcaseItems ?? [];
  const hasDetailsContent = Boolean(item.summaryKey || details);
  const hasDetailSections =
    typeof details === "object" && Boolean(details.sections?.length);
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

  const handleBack = () => {
    const historyState = window.history.state as { idx?: number } | null;

    if (typeof historyState?.idx === "number" && historyState.idx > 0) {
      navigate(-1);
      return;
    }

    navigate("/timeline", { replace: true });
  };

  return (
    <article className="mx-auto max-w-320 px-6 py-10 md:px-12 md:py-14">
      <button
        type="button"
        onClick={handleBack}
        className="text-muted-foreground hover:text-foreground inline-flex cursor-pointer items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase transition-colors duration-300"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        <span>{t("detail.back")}</span>
      </button>

      {isProject ? (
        <>
          <div className={articleInfoClassName}>
            <PortfolioDetailHeader
              dateLabel={dateLabel}
              isProject={isProject}
              org={org}
              projectType={item.type}
              showMeta={false}
              status={item.status}
              subject={item.subjectKey ? tr(item.subjectKey) : undefined}
              title={title}
            />

            {hasDetailsContent && (
              <section className={projectIntroClassName}>
                {details ? (
                  <PortfolioRichContent value={details} presentation="intro" />
                ) : item.summaryKey ? (
                  <p className="text-muted-foreground text-sm leading-relaxed text-pretty md:text-base">
                    {tr(item.summaryKey)}
                  </p>
                ) : null}
              </section>
            )}
          </div>

          {showcaseItems.length > 0 && (
            <PortfolioShowcaseLinks
              className="mt-5 md:mt-6"
              items={showcaseItems}
            />
          )}

          <div className={projectContentClassName}>
            <PortfolioProjectMeta
              dateLabel={dateLabel}
              labels={{
                category: t("project.category"),
                dates: t("project.dates"),
                scope: t("project.scope"),
                status: t("project.status"),
              }}
              projectType={item.type}
              scope={item.scope}
              status={item.status}
            />

            {hasInfoMeta && (
              <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
                <PortfolioDetailStack
                  className="min-w-0"
                  label={t("project.stack")}
                  techs={item.techs}
                />

                <PortfolioDetailActions links={actionLinks} />
              </div>
            )}
          </div>
        </>
      ) : (
        <div className={articleInfoClassName}>
          <PortfolioDetailHeader
            dateLabel={dateLabel}
            isProject={isProject}
            org={org}
            projectType={undefined}
            status={item.status}
            subject={item.subjectKey ? tr(item.subjectKey) : undefined}
            title={title}
          />

          {hasDetailsContent && (
            <section className={projectIntroClassName}>
              {details ? (
                <PortfolioRichContent value={details} presentation="intro" />
              ) : item.summaryKey ? (
                <p className="text-muted-foreground text-sm leading-relaxed text-pretty md:text-base">
                  {tr(item.summaryKey)}
                </p>
              ) : null}
            </section>
          )}
        </div>
      )}

      {isProject && hasPotentialMedia && (
        <div className={projectMediaClassName}>
          <PortfolioDetailMedia
            item={item}
            org={org}
            projectImages={projectImages}
            title={title}
          />
        </div>
      )}

      {hasNonProjectLowerContent && (
        <div className={cn(articleContentClassName, articleInfoClassName)}>
          {(hasDetailSections || showcaseItems.length > 0 || hasInfoMeta) && (
            <div className="space-y-8">
              {hasDetailSections && details && (
                <PortfolioRichContent value={details} presentation="sections" />
              )}

              {showcaseItems.length > 0 && (
                <section className={articleSectionClassName}>
                  <PortfolioShowcaseLinks
                    items={showcaseItems}
                    title={t("detail.projects")}
                  />
                </section>
              )}

              {hasInfoMeta && (
                <div
                  className={cn(
                    articleSectionClassName,
                    "grid gap-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-end",
                  )}
                >
                  <PortfolioDetailStack
                    className="min-w-0"
                    label={t("project.stack")}
                    techs={item.techs}
                  />

                  <PortfolioDetailActions links={actionLinks} />
                </div>
              )}
            </div>
          )}

          {hasPotentialMedia && (
            <PortfolioDetailMedia
              item={item}
              org={org}
              projectImages={projectImages}
              title={title}
            />
          )}
        </div>
      )}
    </article>
  );
};

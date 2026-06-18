import { PortfolioDetailHeader } from "@/features/portfolio/components/detail/PortfolioDetailHeader";
import { PortfolioDetailInfoActions } from "@/features/portfolio/components/detail/PortfolioDetailInfoActions";
import { PortfolioDetailIntro } from "@/features/portfolio/components/detail/PortfolioDetailIntro";
import { PortfolioDetailMedia } from "@/features/portfolio/components/detail/PortfolioDetailMedia";
import { PortfolioRichContent } from "@/features/portfolio/components/detail/PortfolioRichContent";
import { PortfolioShowcaseLinks } from "@/features/portfolio/components/detail/PortfolioShowcaseLinks";
import type { PortfolioDetailViewModel } from "@/features/portfolio/hooks/usePortfolioDetail";
import { cn } from "@/shared/lib/cn";

const articleContentClassName = "mt-8 space-y-8 md:mt-10 md:space-y-10";
const articleSectionClassName = "border-t border-border/60 pt-8";
const articleInfoClassName = "max-w-230";
const projectIntroClassName = "mt-5";

export const PortfolioArticleDetail = ({
  detail,
}: {
  detail: Extract<PortfolioDetailViewModel, { isProject: false }>;
}) => (
  <>
    <div className={articleInfoClassName}>
      <PortfolioDetailHeader
        dateLabel={detail.dateLabel}
        isProject={detail.isProject}
        org={detail.org}
        projectType={undefined}
        status={detail.item.status}
        subject={detail.subject}
        title={detail.title}
      />

      {detail.hasDetailsContent && (
        <section className={projectIntroClassName}>
          <PortfolioDetailIntro
            details={detail.details}
            summary={detail.summary}
          />
        </section>
      )}
    </div>

    {detail.hasNonProjectLowerContent && (
      <div className={cn(articleContentClassName, articleInfoClassName)}>
        {(detail.hasDetailSections ||
          detail.showcaseItems.length > 0 ||
          detail.hasInfoMeta) && (
          <div className="space-y-8">
            {detail.hasDetailSections && detail.details && (
              <PortfolioRichContent
                value={detail.details}
                presentation="sections"
              />
            )}

            {detail.showcaseItems.length > 0 && (
              <section className={articleSectionClassName}>
                <PortfolioShowcaseLinks
                  items={detail.showcaseItems}
                  title={detail.labels.detailProjects}
                />
              </section>
            )}

            {detail.hasInfoMeta && (
              <PortfolioDetailInfoActions
                actionLinks={detail.actionLinks}
                className={articleSectionClassName}
                stackLabel={detail.labels.projectStack}
                techs={detail.item.techs}
              />
            )}
          </div>
        )}

        {detail.hasPotentialMedia && (
          <PortfolioDetailMedia
            item={detail.item}
            org={detail.org}
            projectImages={detail.projectImages}
            title={detail.title}
          />
        )}
      </div>
    )}
  </>
);

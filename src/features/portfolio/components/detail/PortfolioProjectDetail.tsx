import { PortfolioDetailHeader } from "@/features/portfolio/components/detail/PortfolioDetailHeader";
import { PortfolioDetailInfoActions } from "@/features/portfolio/components/detail/PortfolioDetailInfoActions";
import { PortfolioDetailIntro } from "@/features/portfolio/components/detail/PortfolioDetailIntro";
import { PortfolioProjectMeta } from "@/features/portfolio/components/detail/PortfolioProjectMeta";
import { PortfolioShowcaseLinks } from "@/features/portfolio/components/detail/PortfolioShowcaseLinks";
import type { PortfolioDetailViewModel } from "@/features/portfolio/hooks/usePortfolioDetail";

const articleInfoClassName = "max-w-230";
const projectContentClassName = "mt-6 space-y-4 md:mt-7 md:space-y-5";
const projectIntroClassName = "mt-5";

export const PortfolioProjectDetail = ({
  detail,
}: {
  detail: Extract<PortfolioDetailViewModel, { isProject: true }>;
}) => (
  <>
    <div className={articleInfoClassName}>
      <PortfolioDetailHeader
        dateLabel={detail.dateLabel}
        isProject={detail.isProject}
        org={detail.org}
        projectType={detail.item.type}
        showMeta={false}
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

    {detail.showcaseItems.length > 0 && (
      <PortfolioShowcaseLinks
        className="mt-5 md:mt-6"
        items={detail.showcaseItems}
      />
    )}

    <div className={projectContentClassName}>
      <PortfolioProjectMeta
        dateLabel={detail.dateLabel}
        labels={detail.labels.projectMeta}
        projectType={detail.item.type}
        scope={detail.item.scope}
        status={detail.item.status}
      />

      {detail.hasInfoMeta && (
        <PortfolioDetailInfoActions
          actionLinks={detail.actionLinks}
          stackLabel={detail.labels.projectStack}
          techs={detail.item.techs}
        />
      )}
    </div>
  </>
);

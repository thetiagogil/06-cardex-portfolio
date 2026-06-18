import { PortfolioArticleDetail } from "@/features/portfolio/components/detail/PortfolioArticleDetail";
import { PortfolioDetailBackButton } from "@/features/portfolio/components/detail/PortfolioDetailBackButton";
import { PortfolioDetailMedia } from "@/features/portfolio/components/detail/PortfolioDetailMedia";
import { PortfolioProjectDetail } from "@/features/portfolio/components/detail/PortfolioProjectDetail";
import { usePortfolioDetail } from "@/features/portfolio/hooks/usePortfolioDetail";
import type { Category } from "@/features/portfolio/types";
import { Navigate } from "react-router-dom";

const projectMediaClassName = "mt-5 md:mt-6";

export const PortfolioDetailView = ({ category }: { category: Category }) => {
  const detail = usePortfolioDetail(category);

  if (!detail) return <Navigate to="/" replace />;

  return (
    <article className="mx-auto max-w-320 px-6 py-10 md:px-12 md:py-14">
      <PortfolioDetailBackButton
        label={detail.labels.back}
        onClick={detail.handleBack}
      />

      {detail.isProject ? (
        <PortfolioProjectDetail detail={detail} />
      ) : (
        <PortfolioArticleDetail detail={detail} />
      )}

      {detail.isProject && detail.hasPotentialMedia && (
        <div className={projectMediaClassName}>
          <PortfolioDetailMedia
            item={detail.item}
            org={detail.org}
            projectImages={detail.projectImages}
            title={detail.title}
          />
        </div>
      )}
    </article>
  );
};

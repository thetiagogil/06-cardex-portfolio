import { MetaPill } from "@/features/portfolio/components/MetaPill";
import { PortfolioProjectMetaItem } from "@/features/portfolio/components/detail/PortfolioProjectMetaItem";
import type {
  ItemStatus,
  ProjectScope,
  ProjectType,
} from "@/features/portfolio/types";
import { cn } from "@/shared/lib/cn";

interface ProjectMetaLabels {
  category: string;
  dates: string;
  scope: string;
  status: string;
}

export const PortfolioProjectMeta = ({
  className,
  dateLabel,
  labels,
  projectType,
  scope,
  status,
}: {
  className?: string;
  dateLabel: string;
  labels: ProjectMetaLabels;
  projectType: ProjectType;
  scope: ProjectScope;
  status?: ItemStatus;
}) => (
  <section className={cn("border-border/60 border-y py-4", className)}>
    <dl className="grid gap-x-7 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
      <PortfolioProjectMetaItem label={labels.dates}>
        <span className="text-muted-foreground font-mono text-[11px]">
          {dateLabel}
        </span>
      </PortfolioProjectMetaItem>

      <PortfolioProjectMetaItem label={labels.category}>
        <MetaPill kind="project" value={projectType} />
      </PortfolioProjectMetaItem>

      <PortfolioProjectMetaItem label={labels.scope}>
        <MetaPill kind="scope" value={scope} />
      </PortfolioProjectMetaItem>

      {status && (
        <PortfolioProjectMetaItem label={labels.status}>
          <MetaPill kind="status" value={status} />
        </PortfolioProjectMetaItem>
      )}
    </dl>
  </section>
);

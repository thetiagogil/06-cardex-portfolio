import { MetaPill } from "@/features/portfolio/components/MetaPill";
import type {
  ItemStatus,
  ProjectScope,
  ProjectType,
} from "@/features/portfolio/types";
import { cn } from "@/shared/lib/cn";
import type { ReactNode } from "react";

interface ProjectMetaLabels {
  category: string;
  dates: string;
  scope: string;
  status: string;
}

const ProjectMetaItem = ({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) => (
  <div>
    <dt className="text-muted-foreground font-mono text-[10px] tracking-[0.2em] uppercase">
      {label}
    </dt>
    <dd className="mt-2 text-sm leading-relaxed">{children}</dd>
  </div>
);

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
      <ProjectMetaItem label={labels.dates}>
        <span className="text-muted-foreground font-mono text-[11px]">
          {dateLabel}
        </span>
      </ProjectMetaItem>

      <ProjectMetaItem label={labels.category}>
        <MetaPill kind="project" value={projectType} />
      </ProjectMetaItem>

      <ProjectMetaItem label={labels.scope}>
        <MetaPill kind="scope" value={scope} />
      </ProjectMetaItem>

      {status && (
        <ProjectMetaItem label={labels.status}>
          <MetaPill kind="status" value={status} />
        </ProjectMetaItem>
      )}
    </dl>
  </section>
);

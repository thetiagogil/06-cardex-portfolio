import { MetaPill } from "@/features/portfolio/components/MetaPill";
import type { ItemStatus, ProjectType } from "@/features/portfolio/types";

export const PortfolioDetailHeader = ({
  dateLabel,
  isProject,
  org,
  projectType,
  showMeta = true,
  status,
  subject,
  title,
}: {
  dateLabel: string;
  isProject: boolean;
  org?: string;
  projectType?: ProjectType;
  showMeta?: boolean;
  status?: ItemStatus;
  subject?: string;
  title: string;
}) => (
  <header className="mt-8 space-y-2 md:mt-10">
    {org && (
      <p className="text-muted-foreground font-mono text-[12px] tracking-[0.22em] uppercase md:text-[14px]">
        {org}
      </p>
    )}

    <div className="space-y-3">
      <h1 className="font-display text-2xl tracking-tight text-balance md:text-5xl">
        {title}
      </h1>

      {subject && (
        <p className="text-muted-foreground max-w-3xl text-sm leading-relaxed text-pretty md:text-base">
          {subject}
        </p>
      )}

      {showMeta && (
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="text-muted-foreground font-mono text-[10px] md:text-[11px]">
            {dateLabel}
          </span>
          {isProject && projectType && (
            <MetaPill kind="project" value={projectType} />
          )}
          {status && <MetaPill kind="status" value={status} />}
        </div>
      )}
    </div>
  </header>
);

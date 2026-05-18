import { MetaPill } from "@/features/portfolio/components/MetaPill";
import type {
  ItemStatus,
  ProjectType,
} from "@/features/portfolio/types";

export const PortfolioDetailHeader = ({
  dateLabel,
  isProject,
  org,
  projectType,
  status,
  subject,
  title,
}: {
  dateLabel: string;
  isProject: boolean;
  org?: string;
  projectType?: ProjectType;
  status?: ItemStatus;
  subject?: string;
  title: string;
}) => (
  <header className="mt-8 space-y-2 md:mt-10">
    {org && (
      <p className="font-mono text-[12px] uppercase tracking-[0.22em] text-muted-foreground md:text-[14px]">
        {org}
      </p>
    )}

    <div className="space-y-3">
      <h1 className="font-display text-2xl tracking-tight text-balance md:text-5xl">
        {title}
      </h1>

      {subject && (
        <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground text-pretty md:text-lg">
          {subject}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <span className="font-mono text-[10px] text-muted-foreground md:text-[11px]">
          {dateLabel}
        </span>
        {isProject && projectType && (
          <MetaPill kind="project" value={projectType} />
        )}
        {status && <MetaPill kind="status" value={status} />}
      </div>
    </div>
  </header>
);

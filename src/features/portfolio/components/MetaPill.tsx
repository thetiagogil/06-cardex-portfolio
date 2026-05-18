import { Badge } from "@/shared/components/ui/Badge";
import { cn } from "@/shared/lib/cn";
import { useI18n } from "@/shared/i18n/useI18n";
import type { ItemStatus } from "@/features/portfolio/types";
import type { ProjectType } from "@/features/portfolio/types";

type MetaPillProps =
  | {
      kind: "project";
      value: ProjectType;
    }
  | {
      kind: "status";
      value: ItemStatus;
    };

const metaPillClassName =
  "inline-flex items-center rounded-full font-mono text-[10px] uppercase tracking-[0.15em]";

const statusClassName = "border-border/70 bg-muted/40 text-muted-foreground";

const projectTypeClassName: Record<ProjectType, string> = {
  core: "border-project-type-core/25 bg-project-type-core/10 text-project-type-core",
  product:
    "border-project-type-product/25 bg-project-type-product/10 text-project-type-product",
  experiment:
    "border-project-type-experiment/25 bg-project-type-experiment/10 text-project-type-experiment",
  "early work":
    "border-project-type-early-work/25 bg-project-type-early-work/10 text-project-type-early-work",
  design:
    "border-project-type-design/25 bg-project-type-design/10 text-project-type-design",
};

export const MetaPill = ({ kind, value }: MetaPillProps) => {
  const { t } = useI18n();
  const className =
    kind === "project" ? projectTypeClassName[value] : statusClassName;
  const label =
    kind === "project" ? t(`project.type.${value}`) : t(`status.${value}`);

  return (
    <Badge variant="outline" className={cn(metaPillClassName, className)}>
      {label}
    </Badge>
  );
};

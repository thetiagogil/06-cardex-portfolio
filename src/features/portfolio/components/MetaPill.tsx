import { Badge } from "@/shared/components/ui/Badge";
import { cn } from "@/shared/lib/cn";
import { useI18n } from "@/shared/i18n/useI18n";
import type {
  ItemStatus,
  ProjectScope,
  ProjectType,
} from "@/features/portfolio/types";

type MetaPillProps =
  | {
      kind: "project";
      label?: string;
      value: ProjectType;
    }
  | {
      kind: "scope";
      label?: string;
      value: ProjectScope;
    }
  | {
      kind: "status";
      label?: string;
      value: ItemStatus;
    };

const metaPillClassName =
  "inline-flex items-center rounded-full font-mono text-[10px] uppercase tracking-[0.15em]";

const statusClassName = "border-border/70 bg-muted/40 text-muted-foreground";
const scopeClassName = "border-border/70 bg-muted/40 text-muted-foreground";

const projectTypeClassName: Record<ProjectType, string> = {
  core: "border-project-type-core/25 bg-project-type-core/10 text-project-type-core",
  product:
    "border-project-type-product/25 bg-project-type-product/10 text-project-type-product",
  "early-work":
    "border-project-type-early-work/25 bg-project-type-early-work/10 text-project-type-early-work",
  experiment:
    "border-project-type-experiment/25 bg-project-type-experiment/10 text-project-type-experiment",
  design:
    "border-project-type-design/25 bg-project-type-design/10 text-project-type-design",
};

export const MetaPill = ({
  kind,
  label: labelOverride,
  value,
}: MetaPillProps) => {
  const { t } = useI18n();
  const className =
    kind === "project"
      ? projectTypeClassName[value]
      : kind === "scope"
        ? scopeClassName
        : statusClassName;
  const label =
    labelOverride ??
    (kind === "project"
      ? t(`project.type.${value}`)
      : kind === "scope"
        ? t(`project.scope.${value}`)
        : t(`status.${value}`));

  return (
    <Badge variant="outline" className={cn(metaPillClassName, className)}>
      {label}
    </Badge>
  );
};

import { TechBadge } from "@/features/portfolio/components/TechBadge";
import { getItemById } from "@/features/portfolio/lib/portfolio-queries";
import { getItemHref } from "@/features/portfolio/lib/portfolio-routing";
import type { ShowcaseItem } from "@/features/portfolio/types";
import { cn } from "@/shared/lib/cn";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export const PortfolioShowcaseItem = ({
  item,
  translate,
}: {
  item: ShowcaseItem;
  translate: (key: string | undefined) => string;
}) => {
  const linkedItem = item.itemId ? getItemById(item.itemId) : undefined;
  const internalHref = linkedItem ? getItemHref(linkedItem) : null;
  const href = internalHref ?? item.href;
  const isExternalHref = item.href && !internalHref;
  const label = item.labelKey ? translate(item.labelKey) : item.label;
  const description = item.descriptionKey
    ? translate(item.descriptionKey)
    : item.description;
  const hasTechs = Boolean(item.techs?.length);
  const itemKey = item.itemId ?? item.href ?? item.label;
  const linkContent = (
    <>
      <span>{label}</span>
      {internalHref ? (
        <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.8} />
      ) : href ? (
        <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.8} />
      ) : null}
    </>
  );

  return (
    <li
      className={cn(
        "gap-3",
        hasTechs
          ? "grid md:grid-cols-[minmax(0,1fr)_minmax(16rem,auto)] md:items-start md:gap-8"
          : "block",
      )}
    >
      <div className="min-w-0 space-y-1.5">
        {internalHref ? (
          <Link
            to={internalHref}
            className="text-foreground hover:text-primary decoration-border inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4 transition-colors duration-300 md:text-base"
          >
            {linkContent}
          </Link>
        ) : href ? (
          <a
            href={href}
            target={isExternalHref ? "_blank" : undefined}
            rel={isExternalHref ? "noreferrer" : undefined}
            className="text-foreground hover:text-primary decoration-border inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4 transition-colors duration-300 md:text-base"
          >
            {linkContent}
          </a>
        ) : (
          <p className="text-foreground text-sm font-semibold md:text-base">
            {label}
          </p>
        )}

        {description ? (
          <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
            {description}
          </p>
        ) : null}
      </div>

      {hasTechs ? (
        <div className="flex flex-wrap gap-2 md:justify-end">
          {item.techs?.map((tech) => (
            <TechBadge key={`${itemKey}-${tech}`} label={tech} />
          ))}
        </div>
      ) : null}
    </li>
  );
};

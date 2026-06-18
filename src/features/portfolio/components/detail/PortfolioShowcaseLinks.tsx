import { TechBadge } from "@/features/portfolio/components/TechBadge";
import { getItemById } from "@/features/portfolio/lib/portfolio-queries";
import { getItemHref } from "@/features/portfolio/lib/portfolio-routing";
import type { ShowcaseItem } from "@/features/portfolio/types";
import { useI18n } from "@/shared/i18n/useI18n";
import { cn } from "@/shared/lib/cn";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export const PortfolioShowcaseLinks = ({
  className,
  items,
  title,
}: {
  className?: string;
  items: ShowcaseItem[];
  title?: string;
}) => {
  const { tr } = useI18n();

  if (!items.length) return null;

  return (
    <div className={cn("space-y-4", className)}>
      {title ? (
        <h2 className="font-display text-foreground text-lg tracking-tight md:text-2xl">
          {title}
        </h2>
      ) : null}

      <ul className="space-y-4">
        {items.map((item) => {
          const linkedItem = item.itemId ? getItemById(item.itemId) : undefined;
          const internalHref = linkedItem ? getItemHref(linkedItem) : null;
          const href = internalHref ?? item.href;
          const isExternalHref = item.href && !internalHref;
          const label = item.labelKey ? tr(item.labelKey) : item.label;
          const description = item.descriptionKey
            ? tr(item.descriptionKey)
            : item.description;
          const hasTechs = Boolean(item.techs?.length);

          const content = (
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
              key={`${item.itemId ?? item.href ?? item.label}`}
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
                    {content}
                  </Link>
                ) : href ? (
                  <a
                    href={href}
                    target={isExternalHref ? "_blank" : undefined}
                    rel={isExternalHref ? "noreferrer" : undefined}
                    className="text-foreground hover:text-primary decoration-border inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4 transition-colors duration-300 md:text-base"
                  >
                    {content}
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
                    <TechBadge
                      key={`${item.itemId ?? item.href ?? item.label}-${tech}`}
                      label={tech}
                    />
                  ))}
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

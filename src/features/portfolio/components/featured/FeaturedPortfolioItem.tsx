import { MetaPill } from "@/features/portfolio/components/MetaPill";
import { TechBadge } from "@/features/portfolio/components/TechBadge";
import {
  getItemOrg,
  getItemTitle,
} from "@/features/portfolio/lib/portfolio-display";
import {
  formatProjectOriginDate,
  getYearDateParts,
} from "@/features/portfolio/lib/portfolio-dates";
import {
  getItemHref,
  isProjectItem,
} from "@/features/portfolio/lib/portfolio-routing";
import { shouldShowProjectStatus } from "@/features/portfolio/lib/portfolio-display";
import { useI18n } from "@/shared/i18n/useI18n";
import type { DataItem } from "@/features/portfolio/types";
import { ExternalLink, Link as LinkIcon } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

export const FeaturedPortfolioItem = ({ item }: { item: DataItem }) => {
  const { lang, t, tr } = useI18n();

  const itemHref = getItemHref(item);
  const externalHref = !itemHref && item.link ? item.link : null;
  const LinkIndicator = itemHref
    ? LinkIcon
    : externalHref
      ? ExternalLink
      : null;
  const isProject = isProjectItem(item);
  const projectDate = isProject
    ? formatProjectOriginDate(item.dateStart, lang)
    : null;
  const date = isProject
    ? null
    : getYearDateParts({
        dateStart: item.dateStart,
        dateEnd: item.dateEnd,
        presentLabel: t("timeline.present"),
      });
  const org = getItemOrg(item, tr);
  const showStatus =
    item.status && (!isProject || shouldShowProjectStatus(item, "summary"));

  const inner = (
    <div className="flex gap-3 md:gap-4">
      <div className="mt-1 w-12 shrink-0 text-right md:w-20">
        <div className="text-foreground font-mono text-[10px] leading-tight md:text-[11px]">
          {projectDate ?? date?.primary}
        </div>
        {date?.secondary && (
          <div className="text-muted-foreground mt-1 font-mono text-[9px] leading-tight md:text-[10px]">
            {date.secondary}
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1">
        {isProject && (
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <MetaPill kind="project" value={item.type} />
            {showStatus && item.status && (
              <MetaPill kind="status" value={item.status} />
            )}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <h3 className="font-display group-hover:text-primary text-base text-balance transition-colors duration-300 md:text-xl">
            {getItemTitle(item, tr)}
            {LinkIndicator && (
              <LinkIndicator
                className="text-muted-foreground group-hover:text-primary ml-2 inline-block h-3.5 w-3.5 transition-colors duration-300"
                strokeWidth={1.8}
              />
            )}
          </h3>

          {!isProject && showStatus && item.status && (
            <MetaPill kind="status" value={item.status} />
          )}
        </div>

        {org && (
          <span className="text-muted-foreground text-xs italic md:text-sm">
            {org}
          </span>
        )}

        {item.summaryKey && (
          <p className="text-muted-foreground mt-2 text-xs leading-relaxed text-pretty md:text-sm">
            {tr(item.summaryKey)}
          </p>
        )}

        {item.techs.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {item.techs.map((tag) => (
              <TechBadge key={tag} label={tag} />
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <li className="group py-5">
      {itemHref ? (
        <RouterLink
          to={itemHref!}
          className="block transition-colors duration-300"
        >
          {inner}
        </RouterLink>
      ) : externalHref ? (
        <a
          href={externalHref}
          target="_blank"
          rel="noreferrer"
          className="block transition-colors duration-300"
        >
          {inner}
        </a>
      ) : (
        inner
      )}
    </li>
  );
};

import { CategoryGlyph } from "@/features/portfolio/components/CategoryGlyph";
import { MetaPill } from "@/features/portfolio/components/MetaPill";
import { TechBadge } from "@/features/portfolio/components/TechBadge";
import {
  getItemOrg,
  getItemTitle,
} from "@/features/portfolio/lib/portfolio-display";
import {
  formatMonthYearRange,
  formatProjectOriginDate,
  getTimelineDateParts,
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

export const TimelineItem = ({ item }: { item: DataItem }) => {
  const { lang, t, tr } = useI18n();

  const itemHref = getItemHref(item);
  const externalHref = !itemHref && item.link ? item.link : null;
  const LinkIndicator = itemHref
    ? LinkIcon
    : externalHref
      ? ExternalLink
      : null;
  const isProject = isProjectItem(item);
  const org = getItemOrg(item, tr);
  const projectDate = isProject
    ? formatProjectOriginDate(item.dateStart, lang)
    : null;
  const date = isProject
    ? null
    : getTimelineDateParts({
        dateStart: item.dateStart,
        dateEnd: item.dateEnd,
        lang,
        presentLabel: t("timeline.present"),
        fromLabel: t("common.from"),
      });
  const fullDateRange =
    projectDate ??
    formatMonthYearRange({
      dateStart: item.dateStart,
      dateEnd: item.dateEnd,
      lang,
      presentLabel: t("timeline.present"),
    });
  const mobileDate = isProject
    ? null
    : getYearDateParts({
        dateStart: item.dateStart,
        dateEnd: item.dateEnd,
        presentLabel: t("timeline.present"),
      });
  const showStatus =
    item.status && (!isProject || shouldShowProjectStatus(item, "summary"));

  const inner = (
    <div className="relative grid grid-cols-[52px_1fr] gap-3 py-6 md:grid-cols-[152px_1fr] md:gap-8">
      <div className="text-right" aria-label={fullDateRange}>
        <div className="text-foreground font-mono text-[10px] leading-tight md:hidden">
          {projectDate ?? mobileDate?.primary}
        </div>
        {mobileDate?.secondary && (
          <div className="text-muted-foreground mt-1 font-mono text-[9px] leading-tight md:hidden">
            {mobileDate.secondary}
          </div>
        )}
        <div className="text-foreground hidden font-mono text-xs leading-tight md:block">
          {projectDate ?? date?.primary}
        </div>
        {date?.secondary && (
          <div className="text-muted-foreground mt-1 hidden font-mono text-[10px] leading-tight md:block">
            {date.secondary}
          </div>
        )}
      </div>

      <div className="relative pl-8 md:pl-10">
        <CategoryGlyph
          category={item.category}
          className="absolute left-1.5 h-5.5 w-5.5 md:-left-2 md:h-4.5 md:w-4.5"
        />

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="text-muted-foreground font-mono text-[9px] tracking-[0.2em] uppercase md:text-[10px]">
            {t(`section.${item.category}`)}
          </span>
          {isProject && <MetaPill kind="project" value={item.type} />}
          {showStatus && item.status && (
            <MetaPill kind="status" value={item.status} />
          )}
        </div>

        <h2 className="font-display group-hover:text-primary mt-1.5 text-lg tracking-tight text-balance transition-colors duration-300 md:text-2xl">
          {getItemTitle(item, tr)}
          {LinkIndicator && (
            <LinkIndicator
              className="text-muted-foreground group-hover:text-primary ml-2 inline-block h-4 w-4 transition-colors duration-300"
              strokeWidth={1.8}
            />
          )}
        </h2>

        {org && (
          <p className="text-muted-foreground mt-0.5 text-xs italic md:text-sm">
            {org}
          </p>
        )}

        {item.summaryKey && (
          <p className="text-muted-foreground mt-3 max-w-2xl text-xs leading-relaxed text-pretty md:text-base">
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
    <li className="group">
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

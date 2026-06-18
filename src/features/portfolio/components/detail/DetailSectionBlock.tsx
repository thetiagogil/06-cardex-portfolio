import { DetailEyebrow } from "@/features/portfolio/components/detail/DetailEyebrow";
import { DetailFactList } from "@/features/portfolio/components/detail/DetailFactList";
import { DetailItemList } from "@/features/portfolio/components/detail/DetailItemList";
import { DetailParagraphs } from "@/features/portfolio/components/detail/DetailParagraphs";
import { DetailTimeline } from "@/features/portfolio/components/detail/DetailTimeline";
import { sectionTitleClassName } from "@/features/portfolio/components/detail/PortfolioRichContent.styles";
import type { DetailSection } from "@/content/translations/types";

export const DetailSectionBlock = ({ section }: { section: DetailSection }) => {
  if (section.variant === "note") {
    return (
      <section className="border-border/70 bg-muted/25 border-y py-6">
        <DetailEyebrow>{section.eyebrow}</DetailEyebrow>
        <h2 className="font-display text-foreground text-lg tracking-tight md:text-2xl">
          {section.title}
        </h2>
        <div className="mt-4">
          <DetailParagraphs paragraphs={section.body} />
        </div>
      </section>
    );
  }

  return (
    <section className="border-border/60 grid gap-5 border-t pt-8 md:grid-cols-[13rem_1fr] md:gap-10 md:pt-10">
      <div>
        <DetailEyebrow>{section.eyebrow}</DetailEyebrow>
        <h2 className={sectionTitleClassName}>{section.title}</h2>
      </div>

      <div className="min-w-0">
        {section.variant === "narrative" && (
          <DetailParagraphs paragraphs={section.body} />
        )}
        {section.variant === "highlights" && (
          <DetailItemList items={section.items} />
        )}
        {section.variant === "facts" && <DetailFactList section={section} />}
        {section.variant === "timeline" && <DetailTimeline section={section} />}
      </div>
    </section>
  );
};

import { DetailSectionBlock } from "@/features/portfolio/components/detail/DetailSectionBlock";
import { RichTextInline } from "@/features/portfolio/components/detail/RichTextInline";
import { StringContent } from "@/features/portfolio/components/detail/StringContent";
import {
  getIntroParagraphs,
  introParagraphLimit,
} from "@/features/portfolio/lib/portfolio-rich-content";
import { cn } from "@/shared/lib/cn";
import type { TranslationValue } from "@/content/translations/types";

export const PortfolioRichContent = ({
  value,
  className,
  presentation = "full",
}: {
  value: TranslationValue;
  className?: string;
  presentation?: "full" | "intro" | "sections";
}) => {
  if (typeof value === "string") {
    if (presentation === "sections") {
      return null;
    }

    return <StringContent value={value} className={className} />;
  }

  if (presentation === "intro") {
    const introParagraphs = getIntroParagraphs(value).slice(
      0,
      introParagraphLimit,
    );

    if (!introParagraphs.length) {
      return null;
    }

    return (
      <div className={cn("max-w-3xl space-y-4", className)}>
        {introParagraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-muted-foreground text-sm leading-relaxed text-pretty md:text-base"
          >
            <RichTextInline content={paragraph} />
          </p>
        ))}
      </div>
    );
  }

  if (presentation === "sections") {
    return (
      <div className={cn("space-y-8 md:space-y-10", className)}>
        {(value.sections ?? []).map((section) => (
          <DetailSectionBlock key={section.id} section={section} />
        ))}
      </div>
    );
  }

  return (
    <div className={cn("space-y-8 md:space-y-10", className)}>
      {value.lead?.length ? (
        <div className="max-w-3xl space-y-4">
          {value.lead.map((paragraph, index) => (
            <p
              key={index}
              className="text-foreground/85 text-base leading-relaxed text-pretty md:text-lg"
            >
              <RichTextInline content={paragraph} />
            </p>
          ))}
        </div>
      ) : null}

      {(value.sections ?? []).map((section) => (
        <DetailSectionBlock key={section.id} section={section} />
      ))}
    </div>
  );
};

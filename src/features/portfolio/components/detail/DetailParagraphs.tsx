import { RichTextInline } from "@/features/portfolio/components/detail/RichTextInline";
import { baseTextClassName } from "@/features/portfolio/components/detail/PortfolioRichContent.styles";
import type { RichText } from "@/content/translations/types";

export const DetailParagraphs = ({
  paragraphs,
}: {
  paragraphs?: RichText[];
}) =>
  paragraphs?.length ? (
    <div className="space-y-4">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className={baseTextClassName}>
          <RichTextInline content={paragraph} />
        </p>
      ))}
    </div>
  ) : null;

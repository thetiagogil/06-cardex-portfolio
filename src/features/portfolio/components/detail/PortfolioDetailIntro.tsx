import { PortfolioRichContent } from "@/features/portfolio/components/detail/PortfolioRichContent";
import type { TranslationValue } from "@/content/translations/types";

export const PortfolioDetailIntro = ({
  details,
  summary,
}: {
  details?: TranslationValue;
  summary?: string;
}) => {
  if (details) {
    return <PortfolioRichContent value={details} presentation="intro" />;
  }

  if (!summary) {
    return null;
  }

  return (
    <p className="text-muted-foreground text-sm leading-relaxed text-pretty md:text-base">
      {summary}
    </p>
  );
};

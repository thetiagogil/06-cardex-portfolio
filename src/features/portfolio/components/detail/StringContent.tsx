import { baseTextClassName } from "@/features/portfolio/components/detail/PortfolioRichContent.styles";
import { splitParagraphs } from "@/features/portfolio/lib/portfolio-rich-content";
import { cn } from "@/shared/lib/cn";

export const StringContent = ({
  value,
  className,
}: {
  value: string;
  className?: string;
}) => (
  <div className={cn("space-y-4", className)}>
    {splitParagraphs(value).map((paragraph, index) => (
      <p key={index} className={cn(baseTextClassName, "whitespace-pre-line")}>
        {paragraph}
      </p>
    ))}
  </div>
);

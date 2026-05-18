import { getItemById } from "@/features/portfolio/lib/portfolio-queries";
import { getItemHref } from "@/features/portfolio/lib/portfolio-routing";
import { cn } from "@/shared/lib/cn";
import type {
  RichListItem,
  RichText,
  TranslationBlockValue,
  TranslationValue,
} from "@/content/translations/types";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const baseTextClassName =
  "text-sm leading-relaxed text-muted-foreground text-pretty md:text-lg";

const toParagraphs = (value: string) => value.split(/\n{2,}/).filter(Boolean);

const RichTextInline = ({ content }: { content: RichText }) => (
  <>
    {content.map((part, index) => {
      if (typeof part === "string") {
        return <Fragment key={index}>{part}</Fragment>;
      }

      const inner = part.bold ? (
        <strong className="font-semibold">{part.text}</strong>
      ) : (
        part.text
      );

      const item = part.itemId ? getItemById(part.itemId) : undefined;
      const internalHref = item ? getItemHref(item) : null;

      if (internalHref) {
        return (
          <Link
            key={index}
            to={internalHref}
            className="font-semibold text-foreground underline decoration-border underline-offset-4 transition-colors duration-300 hover:text-primary"
          >
            {inner}
          </Link>
        );
      }

      if (!part.href) {
        return (
          <span key={index} className="text-foreground">
            {inner}
          </span>
        );
      }

      const isExternalHref = /^https?:\/\//.test(part.href);

      return (
        <a
          key={index}
          href={part.href}
          target={isExternalHref ? "_blank" : undefined}
          rel={isExternalHref ? "noreferrer" : undefined}
          className="font-semibold text-foreground underline decoration-border underline-offset-4 transition-colors duration-300 hover:text-primary"
        >
          {inner}
        </a>
      );
    })}
  </>
);

const RichList = ({
  items,
  depth = 0,
}: {
  items: RichListItem[];
  depth?: number;
}) => (
  <ul className={cn("space-y-3.5", depth > 0 && "mt-3 space-y-3")}>
    {items.map((item, index) => (
      <li
        key={`${depth}-${index}`}
        className={cn(
          "relative pl-5 before:absolute before:left-0 before:top-[0.72em] before:h-1.5 before:w-1.5 before:rounded-full before:content-['']",
          depth === 0 ? "before:bg-primary" : "before:bg-border",
        )}
      >
        <p className={baseTextClassName}>
          <RichTextInline content={item.text} />
        </p>

        {item.children?.length ? (
          <div className="border-l border-border/70 pl-4">
            <RichList items={item.children} depth={depth + 1} />
          </div>
        ) : null}
      </li>
    ))}
  </ul>
);

const ContentBlock = ({
  value,
  className,
}: {
  value: TranslationBlockValue;
  className?: string;
}) => {
  if (typeof value === "string") {
    return (
      <div className={cn("space-y-4", className)}>
        {toParagraphs(value).map((paragraph, index) => (
          <p
            key={index}
            className={cn(baseTextClassName, "whitespace-pre-line")}
          >
            {paragraph}
          </p>
        ))}
      </div>
    );
  }

  if (value.type === "paragraphs") {
    return (
      <div className={cn("space-y-4", className)}>
        {value.paragraphs.map((paragraph, index) => (
          <p key={index} className={baseTextClassName}>
            <RichTextInline content={paragraph} />
          </p>
        ))}
      </div>
    );
  }

  return (
    <div className={className}>
      <RichList items={value.items} />
    </div>
  );
};

export const PortfolioRichContent = ({
  value,
  className,
}: {
  value: TranslationValue;
  className?: string;
}) => {
  if (typeof value !== "string" && value.type === "sections") {
    return (
      <div className={cn("space-y-7 md:space-y-8", className)}>
        {value.sections.map((section, index) => (
          <section
            key={`${section.title ?? "section"}-${index}`}
            className="border-t border-border/60 pt-6 first:border-t-0 first:pt-0"
          >
            {section.title && (
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/65 md:text-[11px]">
                {section.title}
              </p>
            )}

            <ContentBlock value={section.content} />
          </section>
        ))}
      </div>
    );
  }

  return <ContentBlock value={value} className={className} />;
};

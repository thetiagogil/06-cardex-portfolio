import { getItemById } from "@/features/portfolio/lib/portfolio-queries";
import { getItemHref } from "@/features/portfolio/lib/portfolio-routing";
import { cn } from "@/shared/lib/cn";
import type {
  DetailSection,
  DetailTranslationValue,
  RichText,
  TranslationValue,
} from "@/content/translations/types";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const baseTextClassName =
  "text-sm leading-relaxed text-muted-foreground text-pretty md:text-base";

const sectionTitleClassName =
  "font-display text-lg tracking-tight text-foreground md:text-2xl";

const introParagraphLimit = 1;

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
            className="text-foreground decoration-border hover:text-primary font-semibold underline underline-offset-4 transition-colors duration-300"
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
          className="text-foreground decoration-border hover:text-primary font-semibold underline underline-offset-4 transition-colors duration-300"
        >
          {inner}
        </a>
      );
    })}
  </>
);

const DetailEyebrow = ({ children }: { children?: string }) =>
  children ? (
    <p className="text-foreground/65 mb-2 font-mono text-[10px] tracking-[0.22em] uppercase md:text-[11px]">
      {children}
    </p>
  ) : null;

const DetailParagraphs = ({ paragraphs }: { paragraphs?: RichText[] }) =>
  paragraphs?.length ? (
    <div className="space-y-4">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className={baseTextClassName}>
          <RichTextInline content={paragraph} />
        </p>
      ))}
    </div>
  ) : null;

const DetailItemList = ({ items }: { items?: RichText[] }) =>
  items?.length ? (
    <ul className="grid gap-3.5 md:grid-cols-2">
      {items.map((item, index) => (
        <li key={index} className="border-border/70 relative border-l pl-4">
          <p className="text-muted-foreground text-sm leading-relaxed text-pretty md:text-base">
            <RichTextInline content={item} />
          </p>
        </li>
      ))}
    </ul>
  ) : null;

const DetailFactList = ({ section }: { section: DetailSection }) =>
  section.facts?.length ? (
    <dl className="grid gap-x-8 gap-y-5 md:grid-cols-2">
      {section.facts.map((fact) => (
        <div key={fact.label}>
          <dt className="text-muted-foreground font-mono text-[10px] tracking-[0.18em] uppercase">
            {fact.label}
          </dt>
          <dd className="mt-1 text-sm leading-relaxed text-pretty md:text-base">
            <RichTextInline content={fact.value} />
          </dd>
        </div>
      ))}
    </dl>
  ) : null;

const DetailTimeline = ({ section }: { section: DetailSection }) =>
  section.timeline?.length ? (
    <ol className="space-y-4">
      {section.timeline.map((item) => (
        <li
          key={item.label}
          className="border-border/70 grid gap-2 border-l pl-4 md:grid-cols-[8rem_1fr] md:gap-6"
        >
          <span className="text-foreground font-mono text-[10px] tracking-[0.18em] uppercase">
            {item.label}
          </span>
          <p className="text-muted-foreground text-sm leading-relaxed text-pretty md:text-base">
            <RichTextInline content={item.text} />
          </p>
        </li>
      ))}
    </ol>
  ) : null;

const DetailSectionBlock = ({ section }: { section: DetailSection }) => {
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

const StringContent = ({
  value,
  className,
}: {
  value: string;
  className?: string;
}) => (
  <div className={cn("space-y-4", className)}>
    {toParagraphs(value).map((paragraph, index) => (
      <p key={index} className={cn(baseTextClassName, "whitespace-pre-line")}>
        {paragraph}
      </p>
    ))}
  </div>
);

const getIntroParagraphs = (value: DetailTranslationValue) => {
  if (value.lead?.length) {
    return value.lead;
  }

  const firstNarrativeSection = value.sections?.find(
    (section) => section.variant === "narrative" && section.body?.length,
  );

  return firstNarrativeSection?.body ?? [];
};

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

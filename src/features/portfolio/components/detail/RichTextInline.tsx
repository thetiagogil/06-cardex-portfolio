import { getItemById } from "@/features/portfolio/lib/portfolio-queries";
import { getItemHref } from "@/features/portfolio/lib/portfolio-routing";
import type { RichText } from "@/content/translations/types";
import { Fragment } from "react";
import { Link } from "react-router-dom";

export const RichTextInline = ({ content }: { content: RichText }) => (
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

import { RichTextInline } from "@/features/portfolio/components/detail/RichTextInline";
import type { RichText } from "@/content/translations/types";

export const DetailItemList = ({ items }: { items?: RichText[] }) =>
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

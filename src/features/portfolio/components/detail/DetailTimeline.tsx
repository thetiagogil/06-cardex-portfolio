import { RichTextInline } from "@/features/portfolio/components/detail/RichTextInline";
import type { DetailSection } from "@/content/translations/types";

export const DetailTimeline = ({ section }: { section: DetailSection }) =>
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

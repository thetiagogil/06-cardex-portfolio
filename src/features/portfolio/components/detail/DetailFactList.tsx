import { RichTextInline } from "@/features/portfolio/components/detail/RichTextInline";
import type { DetailSection } from "@/content/translations/types";

export const DetailFactList = ({ section }: { section: DetailSection }) =>
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

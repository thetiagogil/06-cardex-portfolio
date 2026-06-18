import type {
  DetailTranslationValue,
  RichText,
} from "@/content/translations/types";

export const introParagraphLimit = 1;

export const splitParagraphs = (value: string) =>
  value.split(/\n{2,}/).filter(Boolean);

export const getIntroParagraphs = (
  value: DetailTranslationValue,
): RichText[] => {
  if (value.lead?.length) {
    return value.lead;
  }

  const firstNarrativeSection = value.sections?.find(
    (section) => section.variant === "narrative" && section.body?.length,
  );

  return firstNarrativeSection?.body ?? [];
};

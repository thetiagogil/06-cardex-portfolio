export interface RichTextPart {
  text: string;
  href?: string;
  itemId?: string;
  bold?: boolean;
}

export type RichText = Array<string | RichTextPart>;

export interface DetailFact {
  label: string;
  value: RichText;
}

export interface DetailTimelineItem {
  label: string;
  text: RichText;
}

export type DetailSectionVariant =
  | "narrative"
  | "highlights"
  | "facts"
  | "timeline"
  | "note";

export interface DetailSection {
  id: string;
  title: string;
  eyebrow?: string;
  variant: DetailSectionVariant;
  body?: RichText[];
  items?: RichText[];
  facts?: DetailFact[];
  timeline?: DetailTimelineItem[];
}

export interface DetailTranslationValue {
  type: "detail";
  lead?: RichText[];
  sections?: DetailSection[];
}

export type TranslationValue = string | DetailTranslationValue;

export type LocaleDictionary = Record<string, TranslationValue>;

export interface TranslationDictionary {
  en: LocaleDictionary;
  pt: LocaleDictionary;
}

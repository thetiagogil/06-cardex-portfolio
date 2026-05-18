export interface RichTextPart {
  text: string;
  href?: string;
  itemId?: string;
  bold?: boolean;
}

export type RichText = Array<string | RichTextPart>;

export interface ParagraphTranslationValue {
  type: "paragraphs";
  paragraphs: RichText[];
}

export interface RichListItem {
  text: RichText;
  children?: RichListItem[];
}

export interface ListTranslationValue {
  type: "list";
  items: RichListItem[];
}

export interface TranslationSection {
  title?: string;
  content: TranslationBlockValue;
}

export interface SectionsTranslationValue {
  type: "sections";
  sections: TranslationSection[];
}

export type TranslationBlockValue =
  | string
  | ParagraphTranslationValue
  | ListTranslationValue;

export type TranslationValue =
  | TranslationBlockValue
  | SectionsTranslationValue;

export interface TranslationEntry {
  en: TranslationValue;
  pt?: TranslationValue;
}

export type TranslationDictionary = Record<string, TranslationEntry>;


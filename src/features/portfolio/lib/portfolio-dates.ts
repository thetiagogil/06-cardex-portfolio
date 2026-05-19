import type { Lang } from "@/shared/i18n/types";

type MonthStyle = "long" | "short";

const localeMap: Record<Lang, string> = {
  en: "en-US",
  pt: "pt-PT",
};

const formatterCache = new Map<string, Intl.DateTimeFormat>();

const getMonthYearFormatter = (lang: Lang, monthStyle: MonthStyle) => {
  const key = `${lang}:${monthStyle}`;
  const cached = formatterCache.get(key);

  if (cached) return cached;

  const formatter = new Intl.DateTimeFormat(localeMap[lang], {
    month: monthStyle,
    year: "numeric",
  });

  formatterCache.set(key, formatter);

  return formatter;
};

export const formatMonthYear = (
  date: Date,
  lang: Lang,
  monthStyle: MonthStyle = "short",
) => getMonthYearFormatter(lang, monthStyle).format(date);

export const formatProjectOriginDate = (date: Date, lang: Lang) =>
  formatMonthYear(date, lang);

export const formatMonthYearRange = ({
  dateStart,
  dateEnd,
  lang,
  presentLabel,
  monthStyle = "short",
}: {
  dateStart: Date;
  dateEnd?: Date | null;
  lang: Lang;
  presentLabel: string;
  monthStyle?: MonthStyle;
}) => {
  const startLabel = formatMonthYear(dateStart, lang, monthStyle);

  if (dateEnd === null) {
    return `${startLabel} - ${presentLabel}`;
  }

  if (!dateEnd) {
    return startLabel;
  }

  const endLabel = formatMonthYear(dateEnd, lang, monthStyle);

  return startLabel === endLabel ? startLabel : `${startLabel} - ${endLabel}`;
};

export const getYearDateParts = ({
  dateStart,
  dateEnd,
  presentLabel,
}: {
  dateStart: Date;
  dateEnd?: Date | null;
  presentLabel: string;
}) => {
  const startYear = dateStart.getFullYear();

  if (dateEnd === null) {
    return {
      primary: presentLabel,
      secondary: String(startYear),
    };
  }

  const endYear = dateEnd?.getFullYear() ?? startYear;

  if (startYear === endYear) {
    return {
      primary: String(endYear),
      secondary: "",
    };
  }

  return {
    primary: String(endYear),
    secondary: String(startYear),
  };
};

export const getTimelineDateParts = ({
  dateStart,
  dateEnd,
  lang,
  presentLabel,
  fromLabel,
}: {
  dateStart: Date;
  dateEnd?: Date | null;
  lang: Lang;
  presentLabel: string;
  fromLabel: string;
}) => {
  if (dateEnd === null) {
    return {
      primary: presentLabel,
      secondary: `${fromLabel} ${formatMonthYear(dateStart, lang)}`,
    };
  }

  if (!dateEnd) {
    return {
      primary: formatMonthYear(dateStart, lang),
      secondary: "",
    };
  }

  const startLabel = formatMonthYear(dateStart, lang);
  const endLabel = formatMonthYear(dateEnd, lang);

  if (startLabel === endLabel) {
    return {
      primary: startLabel,
      secondary: "",
    };
  }

  return {
    primary: endLabel,
    secondary: `${fromLabel} ${startLabel}`,
  };
};

import { useI18n } from "@/shared/i18n/useI18n";
import { useTheme } from "@/shared/theme/useTheme";
import type { Lang } from "@/shared/i18n/types";
import type { ThemeMode } from "@/shared/theme/types";
import { Settings } from "lucide-react";
import { useState } from "react";

export const SettingsButton = () => {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useI18n();
  const { mode, setMode } = useTheme();

  const langs: { value: Lang; label: string }[] = [
    { value: "en", label: "EN" },
    { value: "pt", label: "PT" },
  ];

  const modes: { value: ThemeMode; label: string }[] = [
    { value: "light", label: t("settings.light") },
    { value: "dark", label: t("settings.dark") },
    { value: "system", label: t("settings.system") },
  ];

  return (
    <div className="relative flex flex-col items-end">
      {open && (
        <button
          type="button"
          aria-label="Close settings"
          onClick={() => setOpen(false)}
          className="bg-foreground/10 fixed inset-0 z-40"
        />
      )}

      {open && (
        <div
          className="border-border bg-card text-card-foreground absolute right-0 bottom-full z-50 mb-3 w-72 rounded-md border shadow-2xl"
          role="dialog"
          aria-modal="true"
        >
          <div className="border-border border-b px-5 py-4">
            <p className="text-muted-foreground font-mono text-[10px] tracking-[0.25em] uppercase">
              {t("settings.title")}
            </p>
          </div>
          <div className="space-y-5 p-5">
            <div>
              <p className="text-muted-foreground mb-2 font-mono text-[10px] tracking-[0.2em] uppercase">
                {t("settings.language")}
              </p>
              <div className="bg-muted grid grid-cols-2 gap-1 rounded-sm p-1">
                {langs.map((entry) => (
                  <button
                    key={entry.value}
                    type="button"
                    onClick={() => setLang(entry.value)}
                    className={`cursor-pointer rounded-[2px] px-3 py-1.5 font-mono text-xs tracking-wider transition-colors duration-300 ${
                      lang === entry.value
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {entry.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-muted-foreground mb-2 font-mono text-[10px] tracking-[0.2em] uppercase">
                {t("settings.theme")}
              </p>
              <div className="bg-muted grid grid-cols-3 gap-1 rounded-sm p-1">
                {modes.map((entry) => (
                  <button
                    key={entry.value}
                    type="button"
                    onClick={() => setMode(entry.value)}
                    className={`cursor-pointer rounded-[2px] px-2 py-1.5 text-xs transition-colors duration-300 ${
                      mode === entry.value
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {entry.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-label={t("settings.open")}
        aria-expanded={open}
        className="bg-foreground text-background hover:bg-primary relative z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full shadow-xl transition-colors duration-300"
      >
        <Settings
          size={18}
          strokeWidth={1.6}
          style={{
            transition: "transform 0.4s cubic-bezier(0.2,0.7,0.2,1)",
            transform: open ? "rotate(90deg)" : "rotate(0)",
          }}
        />
      </button>
    </div>
  );
};

import { useI18n } from "@/shared/i18n/useI18n";
import { Link, useLocation } from "react-router-dom";

export const SiteHeader = () => {
  const { t } = useI18n();
  const location = useLocation();

  return (
    <header className="border-b border-border/60">
      <div className="max-w-350 mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <span className="font-display text-xl tracking-tight">Tiago Gil</span>
          <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Portfolio
          </span>
        </Link>

        <nav className="flex items-center gap-1">
          <Link
            to="/"
            className={`px-3 py-1.5 text-sm font-mono tracking-wide transition-colors duration-300 ${
              location.pathname === "/"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t("nav.home")}
          </Link>
          <Link
            to="/timeline"
            className={`px-3 py-1.5 text-sm font-mono tracking-wide transition-colors duration-300 ${
              location.pathname === "/timeline"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t("nav.timeline")}
          </Link>
        </nav>
      </div>
    </header>
  );
};

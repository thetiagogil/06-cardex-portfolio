import { useI18n } from "@/shared/i18n/useI18n";
import { Link, useLocation } from "react-router-dom";

export const SiteHeader = () => {
  const { t } = useI18n();
  const location = useLocation();

  return (
    <header className="border-border/60 border-b">
      <div className="mx-auto flex max-w-350 items-center justify-between px-6 py-5 md:px-12">
        <Link to="/" className="group flex items-center gap-3">
          <span className="font-display text-xl tracking-tight">Tiago Gil</span>
          <span className="text-muted-foreground hidden font-mono text-[10px] tracking-[0.25em] uppercase sm:inline">
            Portfolio
          </span>
        </Link>

        <nav className="flex items-center gap-1">
          <Link
            to="/"
            className={`px-3 py-1.5 font-mono text-sm tracking-wide transition-colors duration-300 ${
              location.pathname === "/"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t("nav.home")}
          </Link>
          <Link
            to="/timeline"
            className={`px-3 py-1.5 font-mono text-sm tracking-wide transition-colors duration-300 ${
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

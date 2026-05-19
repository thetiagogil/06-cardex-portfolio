import { FeaturedPortfolioSection } from "@/features/portfolio/components/featured/FeaturedPortfolioSection";
import type { Category } from "@/features/portfolio/types";
import { ArrowRight } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

import { HomeHero } from "@/pages/home/_components/HomeHero";
import { useI18n } from "@/shared/i18n/useI18n";

const sectionOrder: Category[] = [
  "experience",
  "projects",
  "education",
  "certifications",
];

export const HomePage = () => {
  const { t } = useI18n();

  return (
    <div className="mx-auto max-w-350 px-6 py-10 md:px-12 md:py-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        <HomeHero />

        <section className="space-y-12 lg:col-span-7">
          {sectionOrder.map((category) => (
            <FeaturedPortfolioSection key={category} category={category} />
          ))}

          <div className="pt-4 text-center">
            <RouterLink
              to="/timeline"
              className="font-display text-muted-foreground hover:text-primary inline-flex items-center gap-2 text-base italic transition-colors duration-300 md:text-lg"
            >
              {t("home.viewTimeline")}
              <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
            </RouterLink>
          </div>
        </section>
      </div>
    </div>
  );
};

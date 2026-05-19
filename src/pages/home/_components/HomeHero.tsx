import portrait from "@/assets/tg.png";
import { person } from "@/content/profile/person";
import { ProfileContactMeta } from "@/features/profile/components/ProfileContactMeta";
import { ResumeLink } from "@/features/profile/components/ResumeLink";
import { SocialLinks } from "@/features/profile/components/SocialLinks";
import { PortfolioRichContent } from "@/features/portfolio/components/detail/PortfolioRichContent";
import { useI18n } from "@/shared/i18n/useI18n";
import { ArrowRight } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

export const HomeHero = () => {
  const { t, tv } = useI18n();
  const homeBio = tv("home.bio") ?? t("home.bio");

  return (
    <aside className="space-y-8 lg:sticky lg:top-10 lg:col-span-5 lg:self-start">
      <div className="grain border-border relative overflow-hidden rounded-sm border">
        <img
          src={portrait}
          alt={person.name}
          width={768}
          height={960}
          className="block h-auto w-full grayscale-15"
        />
        <div className="text-background/90 absolute bottom-3 left-3 font-mono text-[10px] tracking-[0.25em] uppercase mix-blend-difference">
          MMXXV {"\u00B7"} 01
        </div>
      </div>

      <div>
        <p className="text-muted-foreground font-mono text-[11px] tracking-[0.25em] uppercase md:text-[12px]">
          {t("home.role")}
        </p>
        <h1 className="font-display mt-2 text-3xl tracking-tight text-balance md:text-5xl">
          {person.name}
        </h1>
        <PortfolioRichContent
          value={homeBio}
          className="mt-5 max-w-xl [&_p]:text-justify [&_p]:md:text-base!"
        />
      </div>

      <ProfileContactMeta
        basedLabel={t("home.based")}
        email={person.email}
        locationLabel={t("home.location")}
      />

      <SocialLinks links={person.socials} />

      <div className="flex flex-wrap gap-3 pt-2">
        <RouterLink
          to="/timeline"
          className="bg-foreground text-background hover:bg-primary inline-flex items-center gap-2 px-5 py-3 font-mono text-xs tracking-[0.18em] uppercase transition-colors duration-300"
        >
          {t("home.viewTimeline")}
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.8} />
        </RouterLink>
        <ResumeLink href={person.resumeHref} label={t("home.downloadCv")} />
      </div>
    </aside>
  );
};

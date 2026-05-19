import type { ProfileSocialLink } from "@/features/profile/types";
import { ExternalLink } from "lucide-react";

export const SocialLinks = ({ links }: { links: ProfileSocialLink[] }) => (
  <div className="flex flex-wrap gap-x-5 gap-y-2">
    {links.map((social) => (
      <a
        key={social.label}
        href={social.href}
        target="_blank"
        rel="noreferrer"
        className="text-foreground hover:text-primary inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.18em] uppercase transition-colors duration-300"
      >
        <span>{social.label}</span>
        <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.8} />
      </a>
    ))}
  </div>
);

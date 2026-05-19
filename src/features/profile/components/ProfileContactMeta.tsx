import { getEmailHref } from "@/features/profile/lib/profile-links";

export const ProfileContactMeta = ({
  basedLabel,
  email,
  locationLabel,
}: {
  basedLabel: string;
  email: string;
  locationLabel: string;
}) => (
  <div className="space-y-2 font-mono text-[11px] tracking-[0.18em] uppercase">
    <p className="text-muted-foreground">
      {basedLabel} <span className="text-foreground">{locationLabel}</span>
    </p>
    <p className="text-muted-foreground">
      <a
        href={getEmailHref(email)}
        className="text-foreground hover:text-primary transition-colors duration-300"
      >
        {email}
      </a>
    </p>
  </div>
);

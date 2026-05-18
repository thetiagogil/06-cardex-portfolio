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
  <div className="space-y-2 font-mono text-[11px] uppercase tracking-[0.18em]">
    <p className="text-muted-foreground">
      {basedLabel} <span className="text-foreground">{locationLabel}</span>
    </p>
    <p className="text-muted-foreground">
      <a
        href={getEmailHref(email)}
        className="text-foreground transition-colors duration-300 hover:text-primary"
      >
        {email}
      </a>
    </p>
  </div>
);

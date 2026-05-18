export interface ProfileSocialLink {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  email: string;
  photo: string;
  resumeHref: string;
  socials: ProfileSocialLink[];
}

export type SiteConfiguration = {
  name: string;
  bio: string;
  url: string;
  locale: string;
};

export type SocialLinks = {
  [key: string]: SocialLink;
};

export type SocialLink = {
  label: string;
  url: string;
};

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

// for tooling
export interface SiteConfig {
  name: string;
  bio: string;
  profilePicture: string;
  colors: Colors;
  iconLinks: IconLink[];
  customLinks: CustomLink[];
}

export interface IconLink {
  id: string;
  icon: string;
  url: string;
}

export interface CustomLink {
  id: string;
  title: string;
  url: string;
}

export type ColorCategory = {
  [key: string]: string;
};

export type ModeColors = {
  basic: ColorCategory;
  iconLink: ColorCategory;
  customLink: ColorCategory;
};

export type Colors = {
  light: ModeColors;
  dark: ModeColors;
};

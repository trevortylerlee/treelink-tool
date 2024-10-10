import type { SiteConfig, IconLink, CustomLink } from "@/types";

import { iconMap } from "./IconMap";

interface SiteRecreationProps {
  config: SiteConfig;
}

const SiteRecreation: React.FC<SiteRecreationProps> = ({ config }) => {
  return (
    // BaseLayout
    <div className="background-dynamic min-h-screen w-full max-w-screen-sm p-3 font-sans sm:p-6">
      {/* Introduction */}
      <div className="mt-8">
        <img
          src={config.profilePicture}
          className="mx-auto size-32 rounded-full"
        />
      </div>
      <h1 className="mt-4 text-center text-3xl font-semibold text-lightModeForeground dark:text-darkModeForeground">
        {config.name}
      </h1>
      <p className="mt-1 text-balance text-center text-sm text-lightModeForegroundMuted dark:text-darkModeForegroundMuted">
        {config.bio}
      </p>
      {/* Icon Links */}
      <div className="mt-4 flex justify-center space-x-4">
        {config.iconLinks.map((link: IconLink) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="square group flex size-10 items-center justify-center rounded-full bg-lightModeIconLinkBackground p-3 ring-2 ring-lightModeIconLinkOutline transition-colors hover:bg-lightModeIconLinkBackgroundHover hover:ring-lightModeIconLinkOutlineHover dark:bg-darkModeIconLinkBackground dark:ring-darkModeIconLinkOutline dark:hover:bg-darkModeIconLinkBackgroundHover dark:hover:ring-darkModeIconLinkOutlineHover"
          >
            <span className="text-lightModeIconLinkText transition-colors group-hover:text-lightModeIconLinkTextHover dark:text-darkModeIconLinkText group-hover:dark:text-darkModeIconLinkTextHover">
              {iconMap[link.icon] || iconMap.default}
            </span>
          </a>
        ))}
      </div>
      {/* Custom Links */}
      <div className="mt-6 space-y-4">
        {config.customLinks.map((link: CustomLink) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-md bg-lightModeCustomLinkBackground px-4 py-3 text-center text-lightModeCustomLinkText hover:bg-lightModeCustomLinkBackgroundHover hover:text-lightModeCustomLinkTextHover dark:bg-darkModeCustomLinkBackground dark:text-darkModeCustomLinkText dark:hover:bg-darkModeCustomLinkBackgroundHover dark:hover:text-darkModeCustomLinkTextHover"
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SiteRecreation;

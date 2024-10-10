import type { SiteConfig, IconLink, CustomLink } from "@/types";

import { iconMap } from "./IconMap";

interface SiteRecreationProps {
  config: SiteConfig;
}

const SiteRecreation: React.FC<SiteRecreationProps> = ({ config }) => {
  return (
    // BaseLayout
    <div className="min-h-screen w-full max-w-screen-sm bg-lightModeBackground p-3 font-sans sm:p-6 dark:bg-darkModeBackground">
      {/* Introduction */}
      <div className="mt-8">
        <img
          src={config.profilePicture}
          className="mx-auto size-32 rounded-full"
          draggable="false"
          loading="eager"
          alt="Profile picture"
        />
      </div>
      <h1 className="mt-4 text-center text-3xl font-semibold text-lightModeForeground dark:text-darkModeForeground">
        {config.name}
      </h1>
      <p className="mt-1 text-balance text-center text-sm text-lightModeForegroundMuted dark:text-darkModeForegroundMuted">
        {config.bio}
      </p>
      {/* Icon Links */}
      <div className="flex justify-center space-x-4 py-16">
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
      <div className="space-y-6">
        {config.customLinks.map((link: CustomLink) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-lightModeCustomLinkBackground px-6 py-3 text-lg text-lightModeCustomLinkText ring-2 ring-lightModeCustomLinkOutline transition-colors hover:bg-lightModeCustomLinkBackgroundHover hover:text-lightModeCustomLinkTextHover hover:ring-lightModeCustomLinkOutlineHover dark:bg-darkModeCustomLinkBackground dark:text-darkModeCustomLinkText dark:ring-darkModeCustomLinkOutline dark:hover:bg-darkModeCustomLinkBackgroundHover dark:hover:text-darkModeCustomLinkTextHover dark:hover:ring-darkModeCustomLinkOutlineHover"
          >
            {link.title}
          </a>
        ))}
      </div>
      {/* Blog posts */}
      <div className="flex flex-col gap-y-8 pb-16 pt-24">
        <div>
          <span className="flex flex-wrap justify-center text-balance text-2xl font-medium text-lightModeForeground dark:text-darkModeForeground">
            The Metamorphosis (1915)
          </span>
          <div className="mt-1 text-center text-sm text-lightModeForegroundMuted dark:text-darkModeForegroundMuted">
            2024-08-02
          </div>
        </div>
        <div>
          <span className="flex flex-wrap justify-center text-balance text-2xl font-medium text-lightModeForeground dark:text-darkModeForeground">
            The Yellow Wallpaper (1892)
          </span>
          <div className="mt-1 text-center text-sm text-lightModeForegroundMuted dark:text-darkModeForegroundMuted">
            2024-07-04
          </div>
        </div>
        <div>
          <span className="flex flex-wrap justify-center text-balance text-2xl font-medium text-lightModeForeground dark:text-darkModeForeground">
            Alice in Wonderland (1865)
          </span>
          <div className="mt-1 text-center text-sm text-lightModeForegroundMuted dark:text-darkModeForegroundMuted">
            2024-07-01
          </div>
        </div>
        <div>
          <span className="flex flex-wrap justify-center text-balance text-2xl font-medium text-lightModeForeground dark:text-darkModeForeground">
            The Legend of Sleepy Hollow (1820)
          </span>
          <div className="mt-1 text-center text-sm text-lightModeForegroundMuted dark:text-darkModeForegroundMuted">
            2024-06-30
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteRecreation;

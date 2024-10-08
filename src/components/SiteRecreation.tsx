import type { SiteConfig, IconLink, CustomLink } from "@/types";
import { useState } from "react";

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
          src="/profile-picture.jpg"
          className="mx-auto size-32 rounded-full"
        />
      </div>
      <h1 className="mt-4 text-center text-3xl font-semibold text-lightModeForeground dark:text-darkModeForeground">
        {config.name}
      </h1>
      <p className="mt-1 text-balance text-center text-sm text-lightModeForegroundMuted dark:text-darkModeForegroundMuted">
        {config.bio}
      </p>
    </div>
  );
};

export default SiteRecreation;

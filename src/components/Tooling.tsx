import { useState } from "react";

import InfoDialog from "@/components/InfoDialog";
import SiteConfigEditor from "@/components/SiteConfigEditor";
import SiteRecreation from "@/components/SiteRecreation";
import { type SiteConfig } from "@/types";

const DEFAULT_CONFIG: SiteConfig = {
  name: "Trevor Tyler Lee",
  bio: "Free, open source LinkTree alternative built with Astro & Tailwind CSS",
  profilePicture: "/profile-picture.jpg",
  colors: {
    light: {
      basic: {
        background: "#f0f0f0",
        foreground: "#000000",
        foregroundMuted: "#323232",
      },
      iconLink: {
        outline: "#323232",
        background: "#ffffff",
        text: "#000000",
        outlineHover: "#000000",
        backgroundHover: "#f0f0f0",
        textHover: "#000000",
      },
      customLink: {
        outline: "#323232",
        background: "#ffffff",
        text: "#000000",
        outlineHover: "#000000",
        backgroundHover: "#f0f0f0",
        textHover: "#000000",
      },
    },
    dark: {
      basic: {
        background: "#0a0a0a",
        foreground: "#ffffff",
        foregroundMuted: "#cdcdcd",
      },
      iconLink: {
        outline: "#cdcdcd",
        background: "#000000",
        text: "#ffffff",
        outlineHover: "#ffffff",
        backgroundHover: "#323232",
        textHover: "#ffffff",
      },
      customLink: {
        outline: "#cdcdcd",
        background: "#000000",
        text: "#ffffff",
        outlineHover: "#ffffff",
        backgroundHover: "#323232",
        textHover: "#ffffff",
      },
    },
  },
  iconLinks: [
    {
      id: "1728534577184",
      icon: "github",
      url: "https://github.com/trevortylerlee",
    },
  ],
  customLinks: [
    {
      id: "1728534585730",
      title: "customLink Title",
      url: "https://boogerbuttcheeks.com",
    },
  ],
};

export default function Tooling() {
  const [config, setConfig] = useState<SiteConfig>(DEFAULT_CONFIG);

  return (
    <>
      <SiteRecreation config={config} />
      <div className="w-full">
        <div className="mt-6 flex items-center justify-between px-6 py-2">
          <p className="flex flex-wrap items-baseline gap-x-3 text-3xl font-bold">
            TreeLink{" "}
            <span className="text-sm font-normal text-neutral-400 dark:text-neutral-500">
              by{" "}
              <a href="https://trevortylerlee.com" className="underline">
                Trevor
              </a>
            </span>
          </p>
          <InfoDialog>?</InfoDialog>
        </div>
        <SiteConfigEditor config={config} setConfig={setConfig} />
      </div>
    </>
  );
}

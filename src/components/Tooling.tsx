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
        background: "#ffffff",
        backgroundHover: "#f0f0f0",
        outline: "#323232",
        outlineHover: "#000000",
        text: "#000000",
        textHover: "#000000",
      },
      customLink: {
        background: "#ffffff",
        backgroundHover: "#f0f0f0",
        outline: "#323232",
        outlineHover: "#000000",
        text: "#000000",
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
        background: "#000000",
        backgroundHover: "#323232",
        outline: "#cdcdcd",
        outlineHover: "#ffffff",
        text: "#ffffff",
        textHover: "#ffffff",
      },
      customLink: {
        background: "#000000",
        backgroundHover: "#323232",
        outline: "#cdcdcd",
        outlineHover: "#ffffff",
        text: "#ffffff",
        textHover: "#ffffff",
      },
    },
  },
  iconLinks: [
    {
      id: "1728534577184",
      icon: "link",
      url: "https://trevortylerlee.com",
    },
    {
      id: "1728534577185",
      icon: "email",
      url: "mailto:ttl@trevortylerlee.com",
    },
    {
      id: "1728534577186",
      icon: "github",
      url: "https://github.com/trevortylerlee",
    },
    {
      id: "1728534577187",
      icon: "twitter",
      url: "https://twitter.com/boogerbuttcheek",
    },
  ],
  customLinks: [
    {
      id: "1728534585738",
      title: "🍌 donkey kong country on the snes",
      url: "https://tinyurl.com/2zp9r772",
    },
    {
      id: "1728534585739",
      title: " Best macOS apps",
      url: "https://macintoshapps.com",
    },
    {
      id: "1728534585740",
      title: "💕 36 Questions To Fall In Love",
      url: "https://thirtysixquestions.org",
    },
    {
      id: "1728534585741",
      title: "SuperWeb Themes",
      url: "https://superwebthemes.com",
    },
    {
      id: "1728534585742",
      title: "♥ Donate",
      url: "https://donate.stripe.com/aEU6ow7VEf7u7sseUU",
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
          <div className="flex items-center gap-1.5">
            <img src="/android-chrome-192x192.png" className="size-8" />
            <p className="flex flex-wrap items-baseline gap-x-3 text-3xl font-bold">
              TreeLink{" "}
              <span className="text-sm font-normal text-neutral-400 dark:text-neutral-500">
                by{" "}
                <a href="https://trevortylerlee.com" className="underline">
                  Trevor
                </a>
              </span>
            </p>
          </div>
          <InfoDialog>?</InfoDialog>
        </div>
        <SiteConfigEditor config={config} setConfig={setConfig} />
      </div>
    </>
  );
}

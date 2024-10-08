import { useState } from "react";

import InfoDialog from "@/components/InfoDialog";
import ColorThemePicker from "@/components/ColorThemePicker";
import SiteRecreation from "@/components/SiteRecreation";

export default function Tooling() {
  const [name, setName] = useState("Trevor Tyler Lee");
  const [bio, setBio] = useState(
    "Free, open source LinkTree alternative built with Astro & Tailwind CSS.",
  );

  return (
    <>
      <SiteRecreation name={name} bio={bio} />
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
        <ColorThemePicker
          name={name}
          setName={setName}
          bio={bio}
          setBio={setBio}
        />
      </div>
    </>
  );
}

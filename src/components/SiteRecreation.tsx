import { useState } from "react";

export default function SiteRecreation({
  name,
  bio,
}: {
  name: string;
  bio: string;
}) {
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
        {name}
      </h1>
      <p className="mt-1 text-balance text-center text-sm text-lightModeForegroundMuted dark:text-darkModeForegroundMuted">
        {bio}
      </p>
    </div>
  );
}

import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/blog": "/",
  },
  site: "https://astro-blink.vercel.app",
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
    icon(),
    react(),
  ],
});

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
  theme: {
    extend: {
      colors: {
        lightModeBackground:
          "rgb(var(--light-mode-background) / <alpha-value>)",
        lightModeForeground:
          "rgb(var(--light-mode-foreground) / <alpha-value>)",
        lightModeForegroundMuted:
          "rgb(var(--light-mode-foreground-muted) / <alpha-value>)",
        lightModeIconLinkOutline:
          "rgb(var(--light-mode-icon-link-outline) / <alpha-value>)",
        lightModeIconLinkBackground:
          "rgb(var(--light-mode-icon-link-background) / <alpha-value>)",
        lightModeIconLinkText:
          "rgb(var(--light-mode-icon-link-text) / <alpha-value>)",
        lightModeIconLinkOutlineHover:
          "rgb(var(--light-mode-icon-link-outline-hover) / <alpha-value>)",
        lightModeIconLinkBackgroundHover:
          "rgb(var(--light-mode-icon-link-background-hover) / <alpha-value>)",
        lightModeIconLinkTextHover:
          "rgb(var(--light-mode-icon-link-text-hover) / <alpha-value>)",
        lightModeCustomLinkOutline:
          "rgb(var(--light-mode-custom-link-outline) / <alpha-value>)",
        lightModeCustomLinkBackground:
          "rgb(var(--light-mode-custom-link-background) / <alpha-value>)",
        lightModeCustomLinkText:
          "rgb(var(--light-mode-custom-link-text) / <alpha-value>)",
        lightModeCustomLinkOutlineHover:
          "rgb(var(--light-mode-custom-link-outline-hover) / <alpha-value>)",
        lightModeCustomLinkBackgroundHover:
          "rgb(var(--light-mode-custom-link-background-hover) / <alpha-value>)",
        lightModeCustomLinkTextHover:
          "rgb(var(--light-mode-custom-link-text-hover) / <alpha-value>)",
        darkModeBackground: "rgb(var(--dark-mode-background) / <alpha-value>)",
        darkModeForeground: "rgb(var(--dark-mode-foreground) / <alpha-value>)",
        darkModeForegroundMuted:
          "rgb(var(--dark-mode-foreground-muted) / <alpha-value>)",
        darkModeIconLinkOutline:
          "rgb(var(--dark-mode-icon-link-outline) / <alpha-value>)",
        darkModeIconLinkBackground:
          "rgb(var(--dark-mode-icon-link-background) / <alpha-value>)",
        darkModeIconLinkText:
          "rgb(var(--dark-mode-icon-link-text) / <alpha-value>)",
        darkModeIconLinkOutlineHover:
          "rgb(var(--dark-mode-icon-link-outline-hover) / <alpha-value>)",
        darkModeIconLinkBackgroundHover:
          "rgb(var(--dark-mode-icon-link-background-hover) / <alpha-value>)",
        darkModeIconLinkTextHover:
          "rgb(var(--dark-mode-icon-link-text-hover) / <alpha-value>)",
        darkModeCustomLinkOutline:
          "rgb(var(--dark-mode-custom-link-outline) / <alpha-value>)",
        darkModeCustomLinkBackground:
          "rgb(var(--dark-mode-custom-link-background) / <alpha-value>)",
        darkModeCustomLinkText:
          "rgb(var(--dark-mode-custom-link-text) / <alpha-value>)",
        darkModeCustomLinkOutlineHover:
          "rgb(var(--dark-mode-custom-link-outline-hover) / <alpha-value>)",
        darkModeCustomLinkBackgroundHover:
          "rgb(var(--dark-mode-custom-link-background-hover) / <alpha-value>)",
        darkModeCustomLinkTextHover:
          "rgb(var(--dark-mode-custom-link-text-hover) / <alpha-value>)",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
};

import { Button } from "./ui/button";

import type { Colors, ModeColors } from "@/types";

const themes: { name: string; colors: Colors }[] = [
  {
    name: "Default",
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
  },
  {
    name: "Pastel",
    colors: {
      light: {
        basic: {
          background: "#FFF0F5",
          foreground: "#4A0E1C",
          foregroundMuted: "#7E6B8F",
        },
        iconLink: {
          background: "#FFFFFF",
          backgroundHover: "#FFF0F5",
          outline: "#7E6B8F",
          outlineHover: "#4A0E1C",
          text: "#4A0E1C",
          textHover: "#4A0E1C",
        },
        customLink: {
          background: "#FFFFFF",
          backgroundHover: "#FFF0F5",
          outline: "#7E6B8F",
          outlineHover: "#4A0E1C",
          text: "#4A0E1C",
          textHover: "#4A0E1C",
        },
      },
      dark: {
        basic: {
          background: "#4A0E1C",
          foreground: "#FFF0F5",
          foregroundMuted: "#C3B1E1",
        },
        iconLink: {
          background: "#7E6B8F",
          backgroundHover: "#6A5ACD",
          outline: "#C3B1E1",
          outlineHover: "#FFF0F5",
          text: "#FFF0F5",
          textHover: "#FFF0F5",
        },
        customLink: {
          background: "#7E6B8F",
          backgroundHover: "#6A5ACD",
          outline: "#C3B1E1",
          outlineHover: "#FFF0F5",
          text: "#FFF0F5",
          textHover: "#FFF0F5",
        },
      },
    },
  },
  {
    name: "Mandarin Orange",
    colors: {
      light: {
        basic: {
          background: "#FFE5B4",
          foreground: "#994F00",
          foregroundMuted: "#CC7A00",
        },
        iconLink: {
          background: "#FFFFFF",
          backgroundHover: "#FFE5B4",
          outline: "#CC7A00",
          outlineHover: "#994F00",
          text: "#994F00",
          textHover: "#994F00",
        },
        customLink: {
          background: "#FFFFFF",
          backgroundHover: "#FFE5B4",
          outline: "#CC7A00",
          outlineHover: "#994F00",
          text: "#994F00",
          textHover: "#994F00",
        },
      },
      dark: {
        basic: {
          background: "#994F00",
          foreground: "#FFE5B4",
          foregroundMuted: "#FFCC99",
        },
        iconLink: {
          background: "#CC7A00",
          backgroundHover: "#E67E00",
          outline: "#FFCC99",
          outlineHover: "#FFE5B4",
          text: "#FFE5B4",
          textHover: "#FFE5B4",
        },
        customLink: {
          background: "#CC7A00",
          backgroundHover: "#E67E00",
          outline: "#FFCC99",
          outlineHover: "#FFE5B4",
          text: "#FFE5B4",
          textHover: "#FFE5B4",
        },
      },
    },
  },
  {
    name: "Plum Purple",
    colors: {
      light: {
        basic: {
          background: "#E0B0FF",
          foreground: "#4B0082",
          foregroundMuted: "#7D26CD",
        },
        iconLink: {
          background: "#FFFFFF",
          backgroundHover: "#E0B0FF",
          outline: "#7D26CD",
          outlineHover: "#4B0082",
          text: "#4B0082",
          textHover: "#4B0082",
        },
        customLink: {
          background: "#FFFFFF",
          backgroundHover: "#E0B0FF",
          outline: "#7D26CD",
          outlineHover: "#4B0082",
          text: "#4B0082",
          textHover: "#4B0082",
        },
      },
      dark: {
        basic: {
          background: "#4B0082",
          foreground: "#E0B0FF",
          foregroundMuted: "#BA8CCC",
        },
        iconLink: {
          background: "#7D26CD",
          backgroundHover: "#9400D3",
          outline: "#BA8CCC",
          outlineHover: "#E0B0FF",
          text: "#E0B0FF",
          textHover: "#E0B0FF",
        },
        customLink: {
          background: "#7D26CD",
          backgroundHover: "#9400D3",
          outline: "#BA8CCC",
          outlineHover: "#E0B0FF",
          text: "#E0B0FF",
          textHover: "#E0B0FF",
        },
      },
    },
  },
  {
    name: "Apple Green",
    colors: {
      light: {
        basic: {
          background: "#BDFCC9",
          foreground: "#228B22",
          foregroundMuted: "#6B8E23",
        },
        iconLink: {
          background: "#FFFFFF",
          backgroundHover: "#BDFCC9",
          outline: "#6B8E23",
          outlineHover: "#228B22",
          text: "#228B22",
          textHover: "#228B22",
        },
        customLink: {
          background: "#FFFFFF",
          backgroundHover: "#BDFCC9",
          outline: "#6B8E23",
          outlineHover: "#228B22",
          text: "#228B22",
          textHover: "#228B22",
        },
      },
      dark: {
        basic: {
          background: "#228B22",
          foreground: "#BDFCC9",
          foregroundMuted: "#9DE09B",
        },
        iconLink: {
          background: "#6B8E23",
          backgroundHover: "#556B2F",
          outline: "#9DE09B",
          outlineHover: "#BDFCC9",
          text: "#BDFCC9",
          textHover: "#BDFCC9",
        },
        customLink: {
          background: "#6B8E23",
          backgroundHover: "#556B2F",
          outline: "#9DE09B",
          outlineHover: "#BDFCC9",
          text: "#BDFCC9",
          textHover: "#BDFCC9",
        },
      },
    },
  },
  {
    name: "Strawberry Red",
    colors: {
      light: {
        basic: {
          background: "#FFC0CB",
          foreground: "#C71585",
          foregroundMuted: "#FF69B4",
        },
        iconLink: {
          background: "#FFFFFF",
          backgroundHover: "#FFC0CB",
          outline: "#FF69B4",
          outlineHover: "#C71585",
          text: "#C71585",
          textHover: "#C71585",
        },
        customLink: {
          background: "#FFFFFF",
          backgroundHover: "#FFC0CB",
          outline: "#FF69B4",
          outlineHover: "#C71585",
          text: "#C71585",
          textHover: "#C71585",
        },
      },
      dark: {
        basic: {
          background: "#C71585",
          foreground: "#FFC0CB",
          foregroundMuted: "#FFA7C5",
        },
        iconLink: {
          background: "#FF69B4",
          backgroundHover: "#FF1493",
          outline: "#FFA7C5",
          outlineHover: "#FFC0CB",
          text: "#FFC0CB",
          textHover: "#FFC0CB",
        },
        customLink: {
          background: "#FF69B4",
          backgroundHover: "#FF1493",
          outline: "#FFA7C5",
          outlineHover: "#FFC0CB",
          text: "#FFC0CB",
          textHover: "#FFC0CB",
        },
      },
    },
  },
  {
    name: "Banana Yellow",
    colors: {
      light: {
        basic: {
          background: "#FFFACD",
          foreground: "#FFD700",
          foregroundMuted: "#EEC900",
        },
        iconLink: {
          background: "#FFFFFF",
          backgroundHover: "#FFFACD",
          outline: "#EEC900",
          outlineHover: "#FFD700",
          text: "#FFD700",
          textHover: "#FFD700",
        },
        customLink: {
          background: "#FFFFFF",
          backgroundHover: "#FFFACD",
          outline: "#EEC900",
          outlineHover: "#FFD700",
          text: "#FFD700",
          textHover: "#FFD700",
        },
      },
      dark: {
        basic: {
          background: "#FFD700",
          foreground: "#FFFACD",
          foregroundMuted: "#FFF68F",
        },
        iconLink: {
          background: "#EEC900",
          backgroundHover: "#DAA520",
          outline: "#FFF68F",
          outlineHover: "#FFFACD",
          text: "#FFFACD",
          textHover: "#FFFACD",
        },
        customLink: {
          background: "#EEC900",
          backgroundHover: "#DAA520",
          outline: "#FFF68F",
          outlineHover: "#FFFACD",
          text: "#FFFACD",
          textHover: "#FFFACD",
        },
      },
    },
  },
  {
    name: "Blueberry Blue",
    colors: {
      light: {
        basic: {
          background: "#E0EBFF",
          foreground: "#4F83FF",
          foregroundMuted: "#3A6BDF",
        },
        iconLink: {
          background: "#FFFFFF",
          backgroundHover: "#E0EBFF",
          outline: "#3A6BDF",
          outlineHover: "#4F83FF",
          text: "#4F83FF",
          textHover: "#4F83FF",
        },
        customLink: {
          background: "#FFFFFF",
          backgroundHover: "#E0EBFF",
          outline: "#3A6BDF",
          outlineHover: "#4F83FF",
          text: "#4F83FF",
          textHover: "#4F83FF",
        },
      },
      dark: {
        basic: {
          background: "#4F83FF",
          foreground: "#E0EBFF",
          foregroundMuted: "#BFD1FF",
        },
        iconLink: {
          background: "#3A6BDF",
          backgroundHover: "#335FC9",
          outline: "#BFD1FF",
          outlineHover: "#E0EBFF",
          text: "#E0EBFF",
          textHover: "#E0EBFF",
        },
        customLink: {
          background: "#3A6BDF",
          backgroundHover: "#335FC9",
          outline: "#BFD1FF",
          outlineHover: "#E0EBFF",
          text: "#E0EBFF",
          textHover: "#E0EBFF",
        },
      },
    },
  },
  {
    name: "Dragonfruit Pink",
    colors: {
      light: {
        basic: {
          background: "#FFE0F0",
          foreground: "#FF4F9A",
          foregroundMuted: "#E23F80",
        },
        iconLink: {
          background: "#FFFFFF",
          backgroundHover: "#FFE0F0",
          outline: "#E23F80",
          outlineHover: "#FF4F9A",
          text: "#FF4F9A",
          textHover: "#FF4F9A",
        },
        customLink: {
          background: "#FFFFFF",
          backgroundHover: "#FFE0F0",
          outline: "#E23F80",
          outlineHover: "#FF4F9A",
          text: "#FF4F9A",
          textHover: "#FF4F9A",
        },
      },
      dark: {
        basic: {
          background: "#FF4F9A",
          foreground: "#FFE0F0",
          foregroundMuted: "#FFB6D5",
        },
        iconLink: {
          background: "#E23F80",
          backgroundHover: "#C9346B",
          outline: "#FFB6D5",
          outlineHover: "#FFE0F0",
          text: "#FFE0F0",
          textHover: "#FFE0F0",
        },
        customLink: {
          background: "#E23F80",
          backgroundHover: "#C9346B",
          outline: "#FFB6D5",
          outlineHover: "#FFE0F0",
          text: "#FFE0F0",
          textHover: "#FFE0F0",
        },
      },
    },
  },
  {
    name: "Golden Kiwi",
    colors: {
      light: {
        basic: {
          background: "#FFF7E0",
          foreground: "#FFDB4F",
          foregroundMuted: "#E2B93F",
        },
        iconLink: {
          background: "#FFFFFF",
          backgroundHover: "#FFF7E0",
          outline: "#E2B93F",
          outlineHover: "#FFDB4F",
          text: "#FFDB4F",
          textHover: "#FFDB4F",
        },
        customLink: {
          background: "#FFFFFF",
          backgroundHover: "#FFF7E0",
          outline: "#E2B93F",
          outlineHover: "#FFDB4F",
          text: "#FFDB4F",
          textHover: "#FFDB4F",
        },
      },
      dark: {
        basic: {
          background: "#FFDB4F",
          foreground: "#FFF7E0",
          foregroundMuted: "#FFEBB6",
        },
        iconLink: {
          background: "#E2B93F",
          backgroundHover: "#C99934",
          outline: "#FFEBB6",
          outlineHover: "#FFF7E0",
          text: "#FFF7E0",
          textHover: "#FFF7E0",
        },
        customLink: {
          background: "#E2B93F",
          backgroundHover: "#C99934",
          outline: "#FFEBB6",
          outlineHover: "#FFF7E0",
          text: "#FFF7E0",
          textHover: "#FFF7E0",
        },
      },
    },
  },
];

interface ThemeSelectorProps {
  updateColor: (
    mode: "light" | "dark",
    category: keyof ModeColors,
    key: string,
    value: string,
  ) => void;
}

const ThemeSelector = ({ updateColor }: ThemeSelectorProps) => {
  const handleThemeChange = (themeName: string) => {
    const selectedTheme = themes.find((theme) => theme.name === themeName);
    if (selectedTheme) {
      ["light", "dark"].forEach((mode) => {
        Object.entries(selectedTheme.colors[mode as "light" | "dark"]).forEach(
          ([category, colors]) => {
            Object.entries(colors).forEach(([key, value]) => {
              updateColor(
                mode as "light" | "dark",
                category as keyof ModeColors,
                key,
                value,
              );
            });
          },
        );
      });
    }
  };

  return (
    <div className="flex flex-col gap-y-3 md:grid md:grid-cols-2 md:gap-x-3">
      {themes.map((theme) => (
        <div key={theme.name}>
          <Button
            value={theme.name}
            id={theme.name}
            variant="outline"
            onClick={() => handleThemeChange(theme.name)}
            className="w-full"
          >
            <div className="flex items-center gap-x-2">
              {theme.name}
              <div
                className="size-6 rounded-full"
                style={{
                  backgroundColor: theme.colors.light.basic.background,
                }}
              />
              <div
                className="size-6 rounded-full"
                style={{
                  backgroundColor: theme.colors.light.basic.foreground,
                }}
              />
            </div>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ThemeSelector;

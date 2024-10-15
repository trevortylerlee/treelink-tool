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
    name: "Wild Strawberry",
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
    name: "Orange Burst",
    colors: {
      light: {
        basic: {
          background: "#ffe7de",
          foreground: "#2A1200",
          foregroundMuted: "#5B3A0E",
        },
        iconLink: {
          background: "#FFFFFF",
          backgroundHover: "#FF8C00",
          outline: "#FF8C00",
          outlineHover: "#FFA500",
          text: "#2A1200",
          textHover: "#2A1200",
        },
        customLink: {
          background: "#FFFFFF",
          backgroundHover: "#FF8C00",
          outline: "#FF8C00",
          outlineHover: "#FFA500",
          text: "#2A1200",
          textHover: "#2A1200",
        },
      },
      dark: {
        basic: {
          background: "#914400",
          foreground: "#FFE5B4",
          foregroundMuted: "#FFD39B",
        },
        iconLink: {
          background: "#FF8C00",
          backgroundHover: "#ff9f45",
          outline: "#FFD39B",
          outlineHover: "#FFE5B4",
          text: "#1f1a00",
          textHover: "#1f1a00",
        },
        customLink: {
          background: "#FF8C00",
          backgroundHover: "#ff9f45",
          outline: "#FFD39B",
          outlineHover: "#FFE5B4",
          text: "#1f1a00",
          textHover: "#1f1a00",
        },
      },
    },
  },
  {
    name: "Golden Lemon",
    colors: {
      light: {
        basic: {
          background: "#FFFACD",
          foreground: "#1f1a00",
          foregroundMuted: "#4f4303",
        },
        iconLink: {
          background: "#FFFFFF",
          backgroundHover: "#FFFACD",
          outline: "#EEC900",
          outlineHover: "#FFD700",
          text: "#1f1a00",
          textHover: "#1f1a00",
        },
        customLink: {
          background: "#FFFFFF",
          backgroundHover: "#FFFACD",
          outline: "#EEC900",
          outlineHover: "#FFD700",
          text: "#1f1a00",
          textHover: "#1f1a00",
        },
      },
      dark: {
        basic: {
          background: "#1f1a00",
          foreground: "#FFFACD",
          foregroundMuted: "#FFF68F",
        },
        iconLink: {
          background: "#EEC900",
          backgroundHover: "#DAA520",
          outline: "#FFF68F",
          outlineHover: "#FFFACD",
          text: "#1f1a00",
          textHover: "#1f1a00",
        },
        customLink: {
          background: "#EEC900",
          backgroundHover: "#DAA520",
          outline: "#FFF68F",
          outlineHover: "#FFFACD",
          text: "#1f1a00",
          textHover: "#1f1a00",
        },
      },
    },
  },
  {
    name: "Granny Smith",
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
          background: "#285c03",
          backgroundHover: "#0e2e00",
          outline: "#9DE09B",
          outlineHover: "#BDFCC9",
          text: "#BDFCC9",
          textHover: "#BDFCC9",
        },
        customLink: {
          background: "#285c03",
          backgroundHover: "#0e2e00",
          outline: "#9DE09B",
          outlineHover: "#BDFCC9",
          text: "#BDFCC9",
          textHover: "#BDFCC9",
        },
      },
    },
  },
  {
    name: "Blueberry",
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
    name: "Plum",
    colors: {
      light: {
        basic: {
          background: "#E0B0FF",
          foreground: "#4B0082",
          foregroundMuted: "#7D26CD",
        },
        iconLink: {
          background: "#FFFFFF",
          backgroundHover: "#eeb0ff",
          outline: "#7D26CD",
          outlineHover: "#4B0082",
          text: "#4B0082",
          textHover: "#4B0082",
        },
        customLink: {
          background: "#FFFFFF",
          backgroundHover: "#eeb0ff",
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
    name: "Vibrant Violet",
    colors: {
      light: {
        basic: {
          background: "#EE82EE",
          foreground: "#440088",
          foregroundMuted: "#6A0DAD",
        },
        iconLink: {
          background: "#FFFFFF",
          backgroundHover: "#f5a0f5",
          outline: "#6A0DAD",
          outlineHover: "#440088",
          text: "#440088",
          textHover: "#440088",
        },
        customLink: {
          background: "#FFFFFF",
          backgroundHover: "#f5a0f5",
          outline: "#6A0DAD",
          outlineHover: "#440088",
          text: "#440088",
          textHover: "#440088",
        },
      },
      dark: {
        basic: {
          background: "#720078",
          foreground: "#EE82EE",
          foregroundMuted: "#CC99CC",
        },
        iconLink: {
          background: "#ad0d8a",
          backgroundHover: "#750f5f",
          outline: "#CC99CC",
          outlineHover: "#EE82EE",
          text: "#CC99CC",
          textHover: "#CC99CC",
        },
        customLink: {
          background: "#ad0d8a",
          backgroundHover: "#750f5f",
          outline: "#CC99CC",
          outlineHover: "#EE82EE",
          text: "#CC99CC",
          textHover: "#CC99CC",
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

import React, {
  useState,
  useCallback,
  useMemo,
  type Dispatch,
  type SetStateAction,
} from "react";
import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";

interface ThemePickerInterface {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  bio: string;
  setBio: Dispatch<SetStateAction<string>>;
}

type ColorCategory = {
  [key: string]: string;
};

type ModeColors = {
  basic: ColorCategory;
  iconLink: ColorCategory;
  customLink: ColorCategory;
};

type Colors = {
  light: ModeColors;
  dark: ModeColors;
};

const DEFAULT_COLORS = {
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
};

const hexToRgb = (hex: string) => {
  const bigint = parseInt(hex.slice(1), 16);
  return `${(bigint >> 16) & 255} ${(bigint >> 8) & 255} ${bigint & 255}`;
};

const ColorThemePicker = ({
  name,
  setName,
  bio,
  setBio,
}: ThemePickerInterface) => {
  const [colors, setColors] = useState(DEFAULT_COLORS);

  const updateColor = useCallback(
    (
      mode: keyof Colors,
      category: keyof ModeColors,
      key: string,
      value: string,
    ) => {
      setColors((prevColors) => ({
        ...prevColors,
        [mode]: {
          ...prevColors[mode],
          [category]: {
            ...prevColors[mode][category],
            [key]: value,
          },
        },
      }));
      const cssVarName = `--${mode}-mode-${category === "basic" ? "" : `${category}-`}${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
      document.documentElement.style.setProperty(cssVarName, hexToRgb(value));
    },
    [],
  );

  const renderColorInputs = useMemo(() => {
    return Object.entries(colors).map(([mode, categories]) => (
      <div key={mode} className="mb-4">
        <details className="flex flex-row hover:bg-neutral-100" open>
          <summary>
            <h2 className="inline-flex cursor-pointer p-3 font-bold capitalize">
              {mode} Mode Colors
            </h2>
          </summary>
          <div className="mt-4 rounded bg-white p-3 shadow-lg">
            {Object.entries(categories).map(([category, categoryColors]) => (
              <div key={category} className="mb-6">
                <h3 className="mb-3 text-xl font-semibold capitalize">
                  {category}
                </h3>
                <div className="3xl:grid-cols-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
                  {Object.entries(categoryColors).map(([key, value]) => (
                    <div key={key}>
                      <Label
                        htmlFor={`${mode}-${category}-${key}`}
                        className="mb-2 block text-sm"
                      >
                        {key.replace(/([A-Z])/g, " $1").trim()}:
                      </Label>
                      <Input
                        id={`${mode}-${category}-${key}`}
                        type="color"
                        value={value}
                        onChange={(e) =>
                          updateColor(
                            mode as keyof Colors,
                            category as keyof ModeColors,
                            key,
                            e.target.value,
                          )
                        }
                        className="h-10 w-full cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </details>
      </div>
    ));
  }, [colors, updateColor]);

  return (
    <div className="p-6">
      <div className="mb-8">
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={(e) => {
            const newValue = e.target.value;
            setName(newValue);
          }}
        />
        <Label htmlFor="bio">Bio</Label>
        <Input
          type="text"
          id="bio"
          value={bio}
          onChange={(e) => {
            const newValue = e.target.value;
            setBio(newValue);
          }}
        />
      </div>
      {renderColorInputs}
    </div>
  );
};

export default ColorThemePicker;

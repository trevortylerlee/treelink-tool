import React, {
  useState,
  useCallback,
  useMemo,
  type Dispatch,
  type SetStateAction,
} from "react";
import type { SiteConfig, Colors, ModeColors } from "@/types";
import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";

interface SiteConfigEditorProps {
  config: SiteConfig;
  setConfig: Dispatch<SetStateAction<SiteConfig>>;
}

const hexToRgb = (hex: string) => {
  const bigint = parseInt(hex.slice(1), 16);
  return `${(bigint >> 16) & 255} ${(bigint >> 8) & 255} ${bigint & 255}`;
};

const SiteConfigEditor: React.FC<SiteConfigEditorProps> = ({
  config,
  setConfig,
}) => {
  const updateConfig = useCallback((key: keyof SiteConfig, value: any) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  }, []);

  const updateColor = useCallback(
    (
      mode: keyof Colors,
      category: keyof ModeColors,
      key: string,
      value: string,
    ) => {
      setConfig((prev) => ({
        ...prev,
        colors: {
          ...prev.colors,
          [mode]: {
            ...prev.colors[mode],
            [category]: {
              ...prev.colors[mode][category],
              [key]: value,
            },
          },
        },
      }));
      const cssVarName = `--${mode}-mode-${category === "basic" ? "" : `${category}-`}${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
      document.documentElement.style.setProperty(cssVarName, hexToRgb(value));
    },
    [],
  );

  const renderColorInputs = useMemo(() => {
    return Object.entries(config.colors).map(([mode, categories]) => (
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
  }, [config.colors, updateColor]);

  return (
    <div className="p-6">
      <div className="mb-8">
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          value={config.name}
          onChange={(e) => updateConfig("name", e.target.value)}
        />
        <Label htmlFor="bio">Bio</Label>
        <Input
          type="text"
          id="bio"
          value={config.bio}
          onChange={(e) => updateConfig("bio", e.target.value)}
        />
      </div>
      {renderColorInputs}
    </div>
  );
};

export default SiteConfigEditor;

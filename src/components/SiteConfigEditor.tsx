import React, {
  useState,
  useCallback,
  useMemo,
  type Dispatch,
  type SetStateAction,
} from "react";
import type {
  SiteConfig,
  Colors,
  ModeColors,
  IconLink,
  CustomLink,
} from "@/types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { IconCombobox } from "./IconCombobox";
import { PlusCircle, Trash2 } from "lucide-react";

interface SiteConfigEditorProps {
  config: SiteConfig;
  setConfig: Dispatch<SetStateAction<SiteConfig>>;
}

const hexToRgb = (hex: string) => {
  const bigint = parseInt(hex.slice(1), 16);
  return `${(bigint >> 16) & 255} ${(bigint >> 8) & 255} ${bigint & 255}`;
};

const getCssVarName = (mode: string, category: string, key: string) => {
  let prefix = `--${mode}-mode-`;

  if (category === "iconLink") {
    prefix += "icon-link-";
  } else if (category === "customLink") {
    prefix += "custom-link-";
  }

  const kebabKey = key.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

  return prefix + kebabKey;
};

const SiteConfigEditor: React.FC<SiteConfigEditorProps> = ({
  config,
  setConfig,
}) => {
  const updateConfig = useCallback((key: keyof SiteConfig, value: any) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  }, []);

  const [numberOfIconLinks, setNumberOfIconLinks] = useState(0);

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
      const cssVarName = getCssVarName(mode, category, key);
      document.documentElement.style.setProperty(cssVarName, hexToRgb(value));
    },
    [],
  );

  const handleFileUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          updateConfig("profilePicture", reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    },
    [updateConfig],
  );

  const addLink = useCallback(
    (type: "iconLinks" | "customLinks") => {
      const newLink =
        type === "iconLinks"
          ? { id: Date.now().toString(), icon: "", url: "" }
          : { id: Date.now().toString(), title: "", url: "" };
      setConfig((prev) => ({ ...prev, [type]: [...prev[type], newLink] }));
      setNumberOfIconLinks(numberOfIconLinks + 1);
    },
    [setConfig, numberOfIconLinks],
  );

  const updateLink = useCallback(
    (
      type: "iconLinks" | "customLinks",
      id: string,
      key: string,
      value: string,
    ) => {
      setConfig((prev) => ({
        ...prev,
        [type]: prev[type].map((link) =>
          link.id === id ? { ...link, [key]: value } : link,
        ),
      }));
    },
    [setConfig],
  );

  const removeLink = useCallback(
    (type: "iconLinks" | "customLinks", id: string) => {
      setConfig((prev) => ({
        ...prev,
        [type]: prev[type].filter((link) => link.id !== id),
      }));
      setNumberOfIconLinks(numberOfIconLinks - 1);
    },
    [setConfig, numberOfIconLinks],
  );

  const exportConfig = useCallback(() => {
    const configToExport = {
      ...config,
      profilePicture: config.profilePicture.startsWith("data:")
        ? "/profile-picture.jpg"
        : config.profilePicture,
    };
    const blob = new Blob([JSON.stringify(configToExport, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "siteConfig.json";
    a.click();
    URL.revokeObjectURL(url);
  }, [config]);

  const renderColorInputs = useMemo(() => {
    return Object.entries(config.colors).map(([mode, categories]) => (
      <div key={mode}>
        <details className="flex flex-row">
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
    <div className="space-y-8 p-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            value={config.name}
            onChange={(e) => updateConfig("name", e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="bio">Bio</Label>
          <Input
            type="text"
            id="bio"
            value={config.bio}
            onChange={(e) => updateConfig("bio", e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="profilePicture">Profile Picture</Label>
          <Input
            type="file"
            id="profilePicture"
            accept="image/*"
            onChange={handleFileUpload}
          />
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-lg font-semibold">Icon Links</h3>
        {config.iconLinks.map((link: IconLink) => (
          <div key={link.id} className="mb-2 flex items-center space-x-2">
            <IconCombobox
              value={link.icon}
              onChange={(newValue: string) =>
                updateLink("iconLinks", link.id, "icon", newValue)
              }
            />
            <Input
              placeholder="URL"
              value={link.url}
              onChange={(e) =>
                updateLink("iconLinks", link.id, "url", e.target.value)
              }
            />
            <Button
              onClick={() => removeLink("iconLinks", link.id)}
              variant="destructive"
              size="icon"
              className="aspect-square"
            >
              <Trash2 className="size-4" />
            </Button>
          </div>
        ))}
        {numberOfIconLinks < 6 ? (
          <Button
            onClick={() => addLink("iconLinks")}
            variant="outline"
            size="sm"
          >
            <PlusCircle className="mr-2 size-4" /> Add Icon Link
          </Button>
        ) : null}
      </div>

      <div>
        <h3 className="mb-2 text-lg font-semibold">Custom Links</h3>
        {config.customLinks.map((link: CustomLink) => (
          <div key={link.id} className="mb-2 flex items-center space-x-2">
            <Input
              placeholder="Title"
              value={link.title}
              onChange={(e) =>
                updateLink("customLinks", link.id, "title", e.target.value)
              }
            />
            <Input
              placeholder="URL"
              value={link.url}
              onChange={(e) =>
                updateLink("customLinks", link.id, "url", e.target.value)
              }
            />
            <Button
              onClick={() => removeLink("customLinks", link.id)}
              variant="destructive"
              size="icon"
              className="aspect-square"
            >
              <Trash2 className="size-4" />
            </Button>
          </div>
        ))}
        <Button
          onClick={() => addLink("customLinks")}
          variant="outline"
          size="sm"
        >
          <PlusCircle className="mr-2 size-4" /> Add Custom Link
        </Button>
      </div>
      <div className="pt-4">{renderColorInputs}</div>
      <Button onClick={exportConfig}>Export Config</Button>
    </div>
  );
};

export default SiteConfigEditor;

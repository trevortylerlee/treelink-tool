import {
  type ChangeEvent,
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
import JSZip from "jszip";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { IconCombobox } from "./IconCombobox";
import ThemeSelector from "./ThemeSelector";
import { Checkbox } from "./ui/checkbox";
import { PlusCircle, Trash2 } from "lucide-react";

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

interface SiteConfigEditorProps {
  config: SiteConfig;
  setConfig: Dispatch<SetStateAction<SiteConfig>>;
  colors: Colors;
  setColors: Dispatch<SetStateAction<Colors>>;
}

const SiteConfigEditor = ({
  config,
  setConfig,
  colors,
  setColors,
}: SiteConfigEditorProps) => {
  const [numberOfIconLinks, setNumberOfIconLinks] = useState(4);

  const updateConfig = useCallback((key: keyof SiteConfig, value: any) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  }, []);

  const updateColors = useCallback((key: keyof Colors, value: any) => {
    setColors((prev) => ({ ...prev, [key]: value }));
  }, []);

  const updateColor = useCallback(
    (
      mode: keyof Colors,
      category: keyof ModeColors,
      key: string,
      value: string,
    ) => {
      setColors((prev) => ({
        ...prev,
        [mode]: {
          ...prev[mode],
          [category]: {
            ...prev[mode][category],
            [key]: value,
          },
        },
      }));

      const cssVarName = getCssVarName(mode, category, key);
      document.documentElement.style.setProperty(cssVarName, hexToRgb(value));
    },
    [],
  );

  const handleFileUpload = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
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
      console.log(numberOfIconLinks);
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

  const exportConfigZip = useCallback(async () => {
    const zip = new JSZip();
    // Prepare the config JSON
    const configToExport = {
      ...config,
      profilePicture: "/profile-picture.jpg",
    };
    // Add the JSON config to the zip
    zip.file("siteConfig.json", JSON.stringify(configToExport, null, 2));

    // Format colors for colorsConfig.txt
    const formattedColors = Object.entries(colors)
      .flatMap(([mode, modeColors]) =>
        Object.entries(modeColors).flatMap(([section, sectionColors]) =>
          Object.entries(sectionColors).map(([key, value]) => {
            const rgbResult = exportHexToRgb(value);
            if (rgbResult === null) {
              console.error(`Invalid color value: ${value}`);
              return "";
            }
            const [r, g, b] = rgbResult;
            const formattedSection =
              section === "basic"
                ? ""
                : `${section.replace(/([A-Z])/g, "-$1").toLowerCase()}-`;
            const formattedKey = `${mode}-mode-${formattedSection}${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
            return `--${formattedKey}: ${r} ${g} ${b};`;
          }),
        ),
      )
      .filter(Boolean)
      .join("\n");

    // Add the formatted colors to the zip
    zip.file("colorsConfig.txt", formattedColors);

    // Add the profile picture to the zip
    if (config.profilePicture.startsWith("data:")) {
      // Convert base64 to blob
      const response = await fetch(config.profilePicture);
      const blob = await response.blob();
      zip.file("profile-picture.jpg", blob);
    } else {
      // If it's a URL, you might want to fetch it first
      // For now, we'll just add a placeholder text file
      zip.file(
        "profile-picture.txt",
        'There was an error exporting your profile picture. Please manually add it to your project in /src/assets. It should be a square jpg file named "profile-picture.jpg".',
      );
    }
    // Generate the zip file
    const content = await zip.generateAsync({ type: "blob" });
    // Trigger download
    const url = URL.createObjectURL(content);
    const a = document.createElement("a");
    a.href = url;
    a.download = "site-config.zip";
    a.click();
    URL.revokeObjectURL(url);
  }, [config, colors]);

  // Helper function to convert hex to RGB
  function exportHexToRgb(hex: string): number[] | null {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? [
          parseInt(result[1], 16),
          parseInt(result[2], 16),
          parseInt(result[3], 16),
        ]
      : null;
  }

  const renderColorInputs = useMemo(() => {
    return Object.entries(colors).map(([mode, categories]) => (
      <div key={mode}>
        <details className="flex flex-row">
          <summary>
            <h2 className="inline-flex cursor-pointer p-3 font-bold capitalize">
              {mode} Mode Colors
            </h2>
            <span id={mode} className="hidden text-sm text-muted-foreground">
              Active
            </span>
          </summary>
          <div className="mt-4 rounded bg-white p-3">
            {Object.entries(categories).map(([category, categoryColors]) => (
              <div key={category} className="mb-6">
                <h3 className="mb-3 font-semibold capitalize">{category}</h3>
                <div className="3xl:grid-cols-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
                  {Object.entries(categoryColors).map(([key, value]) => (
                    <div key={key}>
                      <Label
                        htmlFor={`${mode}-${category}-${key}`}
                        className="mb-2 block text-sm"
                      >
                        {key
                          .replace(/([A-Z])/g, " $1")
                          .trim()
                          .toLowerCase()}
                        :
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
    <div className="space-y-8 p-2 sm:p-6">
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
        <div>
          <Label htmlFor="url">URL</Label>
          <Input
            type="text"
            id="url"
            value={config.url}
            onChange={(e) => updateConfig("url", e.target.value)}
          />
        </div>
        <div className="items-top flex space-x-2 pt-4">
          <Checkbox
            id="blog"
            checked={config.blog}
            onCheckedChange={(checked) =>
              setConfig({ ...config, blog: Boolean(checked) })
            }
          />
          <div className="grid gap-1.5 leading-none">
            <Label
              htmlFor="blog"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Enable blog
            </Label>
            <Label
              className="text-sm font-normal text-muted-foreground"
              htmlFor="blog"
            >
              You can change the titles and content of your blog posts later.
            </Label>
          </div>
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
      <div className="py-12">
        <h3 className="mb-2 text-lg font-semibold">Themes</h3>
        <ThemeSelector updateColor={updateColor} />
      </div>
      <div className="pt-4">
        <h3 className="mb-2 text-lg font-semibold">Custom Colors</h3>
        {renderColorInputs}
      </div>
      <Button className="w-full" onClick={exportConfigZip}>
        Export Config
      </Button>
    </div>
  );
};

export default SiteConfigEditor;

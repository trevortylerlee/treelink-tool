import { useState } from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const links = [
  {
    value: "adobe",
    label: "Adobe",
  },
  {
    value: "aliexpress",
    label: "Aliexpress",
  },
  {
    value: "appStore",
    label: "App Store",
  },
  {
    value: "apple",
    label: "Apple",
  },
  {
    value: "appleArcade",
    label: "Apple Arcade",
  },
  {
    value: "appleMusic",
    label: "Apple Music",
  },
  {
    value: "arch",
    label: "Arch",
  },
  {
    value: "astro",
    label: "Astro",
  },
  {
    value: "bandcamp",
    label: "Bandcamp",
  },
  {
    value: "bitbucket",
    label: "BitBucket",
  },
  {
    value: "bitcoin",
    label: "Bitcoin",
  },
  {
    value: "bluesky",
    label: "Bluesky",
  },
  {
    value: "buyMeACoffee",
    label: "Buy Me A Coffee",
  },
  {
    value: "github",
    label: "GitHub",
  },
  {
    value: "link",
    label: "Link",
  },
];

interface IconComboboxProps {
  value?: string;
  onChange: (value: string) => void;
}

export function IconCombobox({ value = "link", onChange }: IconComboboxProps) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? links.find((link) => link.value === value)?.label
            : "Select icon..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search icons..." className="h-9" />
          <CommandList>
            <CommandEmpty>No icon found.</CommandEmpty>
            <CommandGroup>
              {links.map((link) => (
                <CommandItem
                  key={link.value}
                  value={link.value}
                  onSelect={(currentValue) => {
                    onChange(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {link.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === link.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

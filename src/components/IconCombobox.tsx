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
    value: "calendar",
    label: "Calendar",
  },
  {
    value: "cashApp",
    label: "Cashapp",
  },
  {
    value: "chat",
    label: "Chat",
  },
  {
    value: "coursera",
    label: "Coursera",
  },
  {
    value: "debian",
    label: "Debian",
  },
  {
    value: "devto",
    label: "Dev.to",
  },
  {
    value: "deviantArt",
    label: "Deviant Art",
  },
  {
    value: "discord",
    label: "Discord",
  },
  {
    value: "ebay",
    label: "eBay",
  },
  {
    value: "emacs",
    label: "Emacs",
  },
  {
    value: "email",
    label: "Email",
  },
  {
    value: "etsy",
    label: "Etsy",
  },
  {
    value: "facebook",
    label: "Facebook",
  },
  {
    value: "fedora",
    label: "Fedora",
  },
  {
    value: "figma",
    label: "Figma",
  },
  {
    value: "freebsd",
    label: "FreeBSD",
  },
  {
    value: "gentoo",
    label: "Gentoo",
  },
  {
    value: "github",
    label: "GitHub",
  },
  {
    value: "gitlab",
    label: "GitLab",
  },
  {
    value: "gmail",
    label: "Gmail",
  },
  {
    value: "gnu",
    label: "GNU",
  },
  {
    value: "google",
    label: "Google",
  },
  {
    value: "googleDrive",
    label: "Google Drive",
  },
  {
    value: "googleMaps",
    label: "Google Maps",
  },
  {
    value: "googlePlay",
    label: "Google Play",
  },
  {
    value: "gumroad",
    label: "Gumroad",
  },
  {
    value: "hackerNews",
    label: "Hacker News",
  },
  {
    value: "heart",
    label: "Heart",
  },
  {
    value: "imdb",
    label: "IMDB",
  },
  {
    value: "information",
    label: "Information",
  },
  {
    value: "instagram",
    label: "Instagram",
  },
  {
    value: "kofi",
    label: "Kofi",
  },
  {
    value: "lemonSqueezy",
    label: "Lemon Squeezy",
  },
  {
    value: "letterboxd",
    label: "Letterboxd",
  },
  {
    value: "line",
    label: "LINE",
  },
  {
    value: "link",
    label: "Link",
  },
  {
    value: "linkedIn",
    label: "LinkedIn",
  },
  // linux
  {
    value: "linuxMint",
    label: "Linux Mint",
  },
  {
    value: "mastodon",
    label: "Mastodon",
  },
  {
    value: "medium",
    label: "Medium",
  },
  {
    value: "messenger",
    label: "Messenger",
  },
  {
    value: "meta",
    label: "Meta",
  },
  {
    value: "neovim",
    label: "Neovim",
  },
  {
    value: "netflix",
    label: "Netflix",
  },
  {
    value: "nintendo",
    label: "Nintendo",
  },
  {
    value: "notion",
    label: "Notion",
  },
  {
    value: "obsidian",
    label: "Obsidian",
  },
  {
    value: "onlyfans",
    label: "OnlyFans",
  },
  {
    value: "openai",
    label: "OpenAI",
  },
  {
    value: "outlook",
    label: "Outlook",
  },
  {
    value: "paddle",
    label: "Paddle",
  },
  {
    value: "patreon",
    label: "Patreon",
  },
  {
    value: "phone",
    label: "Phone",
  },
  {
    value: "pinterest",
    label: "Pinterest",
  },
  {
    value: "playstation",
    label: "Playstation",
  },
  {
    value: "qq",
    label: "QQ",
  },
  {
    value: "readcv",
    label: "Read.cv",
  },
  {
    value: "redbubble",
    label: "Redbubble",
  },
  {
    value: "reddit",
    label: "Reddit",
  },
  {
    value: "redHat",
    label: "Red Hat",
  },
  {
    value: "rss",
    label: "RSS",
  },
  {
    value: "signal",
    label: "Signal",
  },
  {
    value: "skype",
    label: "Skype",
  },
  {
    value: "snapchat",
    label: "Snapchat",
  },
  {
    value: "soundcloud",
    label: "Soundcloud",
  },
  {
    value: "spotify",
    label: "Spotify",
  },
  {
    value: "steam",
    label: "Steam",
  },
  {
    value: "stripe",
    label: "Stripe",
  },
  {
    value: "sublimeText",
    label: "Sublime Text",
  },
  {
    value: "substack",
    label: "Substack",
  },
  {
    value: "tailwind",
    label: "Tailwind CSS",
  },
  {
    value: "teams",
    label: "Teams",
  },
  {
    value: "telegram",
    label: "Telegram",
  },
  {
    value: "tesla",
    label: "Tesla",
  },
  {
    value: "threads",
    label: "Threads",
  },
  {
    value: "tiktok",
    label: "TikTok",
  },
  {
    value: "tumblr",
    label: "tumblr",
  },
  {
    value: "twitch",
    label: "Twitch",
  },
  {
    value: "twitter",
    label: "Twitter",
  },
  {
    value: "ubuntu",
    label: "Ubuntu",
  },
  {
    value: "udemy",
    label: "Udemy",
  },
  // venmo
  {
    value: "visualStudioCode",
    label: "Visual Studio Code",
  },
  {
    value: "wechat",
    label: "WeChat",
  },
  {
    value: "weibo",
    label: "Weibo",
  },
  {
    value: "whatsApp",
    label: "WhatsApp",
  },
  {
    value: "wikipedia",
    label: "Wikipedia",
  },
  {
    value: "x",
    label: "X",
  },
  {
    value: "xbox",
    label: "Xbox",
  },
  {
    value: "yahoo",
    label: "Yahoo",
  },
  {
    value: "youtube",
    label: "YouTube",
  },
  {
    value: "zed",
    label: "Zed",
  },
  {
    value: "zoom",
    label: "Zoom",
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

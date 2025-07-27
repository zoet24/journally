import { Bookmark, BookText, Heart, Quote, SquarePen, Tag } from "lucide-react";

// Define the type for a tab configuration
export type EntryTabConfig = {
  key: string;
  title: string;
  icon: typeof BookText;
  colour: string;
};

// The array of all tab configurations
export const ENTRY_TABS_ARRAY = [
  {
    key: "preview",
    title: "Preview",
    icon: BookText,
    colour: "text-violet-500",
  },
  {
    key: "daily",
    title: "General Entry",
    icon: SquarePen,
    colour: "text-blue-500",
  },
  {
    key: "gratitude",
    title: "Gratitude",
    icon: Heart,
    colour: "text-rose-500",
  },
  {
    key: "quote",
    title: "Quote",
    icon: Quote,
    colour: "text-amber-500",
  },
  {
    key: "bookmarks",
    title: "Bookmark",
    icon: Bookmark,
    colour: "text-emerald-500",
  },
  {
    key: "tags",
    title: "Tags",
    icon: Tag,
    colour: "text-indigo-500",
  },
] as const;

// Create a lookup object for direct access by key
export const ENTRY_TABS = ENTRY_TABS_ARRAY.reduce((acc, tab) => {
  acc[tab.key] = tab;
  return acc;
}, {} as Record<string, EntryTabConfig>);

// Export the keys as a type for type safety
export type EntryTabKey = (typeof ENTRY_TABS_ARRAY)[number]["key"];

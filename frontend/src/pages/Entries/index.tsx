import EntryTabList from "@/components/shared/EntryTabList/EntryTabList";
import { Input } from "@/components/ui/input";
import { Tabs } from "@/components/ui/tabs";
import { format, parse } from "date-fns";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { entries } from "./entriesDb";
import EntryCard from "./EntryCard/EntryCard";

function matchesDateSearch(date: string, searchTerm: string): boolean {
  const entryDate = new Date(date);
  const searchLower = searchTerm.toLowerCase();

  // Format the date in different ways to match against
  const dateFormats = {
    fullDate: format(entryDate, "EEEE do MMMM yyyy").toLowerCase(),
    dayName: format(entryDate, "EEEE").toLowerCase(),
    dayWithOrdinal: format(entryDate, "do").toLowerCase(),
    monthName: format(entryDate, "MMMM").toLowerCase(),
    monthAndYear: format(entryDate, "MMMM yyyy").toLowerCase(),
    year: format(entryDate, "yyyy"),
  };

  // Check for month and year combination (e.g., "May 2025")
  const monthYearMatch = searchLower.match(/^([a-z]+)\s*(\d{4})$/);
  if (monthYearMatch) {
    try {
      const searchDate = parse(searchLower, "MMMM yyyy", new Date());
      const entryMonthYear = format(entryDate, "MMMM yyyy").toLowerCase();
      return entryMonthYear === format(searchDate, "MMMM yyyy").toLowerCase();
    } catch {
      // If parsing fails, continue with other checks
    }
  }

  // Check against all date formats
  return Object.values(dateFormats).some((dateStr) =>
    dateStr.includes(searchLower)
  );
}

export default function Entries() {
  const [activeTab, setActiveTab] = useState("preview");
  const [searchTerm, setSearchTerm] = useState("");

  const sortedEntries = useMemo(
    () =>
      [...entries].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    []
  );

  const filteredEntries = useMemo(() => {
    if (!searchTerm) {
      // If no search term, just filter by tab content
      return sortedEntries.filter((entry) => {
        switch (activeTab) {
          case "daily":
            return !!entry.daily;
          case "gratitude":
            return !!entry.gratitude;
          case "quote":
            return !!entry.quotes?.length;
          case "bookmarks":
            return !!entry.bookmarks?.length;
          case "tags":
            return !!entry.tags?.length;
          case "preview":
            return true;
          default:
            return false;
        }
      });
    }

    const searchLower = searchTerm.toLowerCase();
    return sortedEntries.filter((entry) => {
      // Check for date match first
      if (matchesDateSearch(entry.date, searchTerm)) {
        return true;
      }

      // Get the searchable content based on active tab
      let searchableContent: string;
      switch (activeTab) {
        case "daily":
          if (!entry.daily) return false;
          searchableContent = entry.daily;
          break;
        case "gratitude":
          if (!entry.gratitude) return false;
          searchableContent = entry.gratitude;
          break;
        case "quote":
          if (!entry.quotes?.length) return false;
          searchableContent = entry.quotes
            .map((q) => `${q.quote} ${q.quoteSource}`)
            .join(" ");
          break;
        case "bookmarks":
          if (!entry.bookmarks?.length) return false;
          searchableContent = entry.bookmarks
            .map((b) => `${b.bookmarkTitle} ${b.bookmarkDescription}`)
            .join(" ");
          break;
        case "tags":
          if (!entry.tags?.length) return false;
          searchableContent = entry.tags.map((t) => t.title).join(" ");
          break;
        case "preview":
          searchableContent = [
            entry.daily,
            entry.gratitude,
            ...(entry.quotes?.map((q) => `${q.quote} ${q.quoteSource}`) || []),
            ...(entry.bookmarks?.map(
              (b) => `${b.bookmarkTitle} ${b.bookmarkDescription}`
            ) || []),
            ...(entry.tags?.map((t) => t.title) || []),
          ].join(" ");
          break;
        default:
          return false;
      }

      return searchableContent.toLowerCase().includes(searchLower);
    });
  }, [sortedEntries, searchTerm, activeTab]);

  return (
    <div className="space-y-6">
      <div className="sticky top-[88px] bg-gray-50 pt-4 pb-2 z-10">
        <Tabs value={activeTab} className="w-full">
          <EntryTabList
            activeTab={activeTab}
            onTabChange={setActiveTab}
            showPreview={true}
          />
        </Tabs>
        <div className="relative mt-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
          <Input
            type="text"
            placeholder="Search entries by content or date..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>
      {filteredEntries.map((entry) => (
        <EntryCard
          key={entry.id}
          entry={entry}
          activeTab={activeTab}
          searchTerm={searchTerm}
        />
      ))}
    </div>
  );
}

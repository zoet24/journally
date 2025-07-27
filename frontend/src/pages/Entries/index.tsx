import EntryTabList from "@/components/shared/EntryTabList/EntryTabList";
import { Tabs } from "@/components/ui/tabs";
import { useState } from "react";
import { entries } from "./entriesDb";
import EntryCard from "./EntryCard/EntryCard";

export default function Entries() {
  const [activeTab, setActiveTab] = useState("preview");

  const sortedEntries = [...entries].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} className="w-full">
        <EntryTabList
          activeTab={activeTab}
          onTabChange={setActiveTab}
          showPreview={true}
        />
      </Tabs>
      {sortedEntries.map((entry) => (
        <EntryCard key={entry.id} entry={entry} activeTab={activeTab} />
      ))}
    </div>
  );
}

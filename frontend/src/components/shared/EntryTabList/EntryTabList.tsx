import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ENTRY_TABS_ARRAY, EntryTabConfig } from "./EntryTabListConfig";

interface EntryTabListProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  showPreview?: boolean;
}

export default function EntryTabList({
  activeTab,
  onTabChange,
}: EntryTabListProps) {
  return (
    <TabsList className="grid w-full grid-cols-6 mb-4">
      {ENTRY_TABS_ARRAY.map((tab: EntryTabConfig) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.key;
        return (
          <TabsTrigger
            key={tab.key}
            value={tab.key}
            onClick={() => onTabChange(tab.key)}
          >
            <Icon
              className={`inline w-7 h-7 ${tab.colour} ${
                isActive ? "stroke-[2.5]" : "stroke-[2]"
              }`}
            />
          </TabsTrigger>
        );
      })}
    </TabsList>
  );
}

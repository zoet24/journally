import { ENTRY_TABS } from "@/components/shared/EntryTabList/EntryTabListConfig";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { promptsDaily } from "@/constants/prompts";
import { useMemo } from "react";
import EntryCard from "../EntryCard/EntryCard";

interface DailyTabProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function DailyTab({ value, onChange }: DailyTabProps) {
  const { daily: DailyIcon } = ENTRY_TABS;

  const prompt = useMemo(
    () => promptsDaily[Math.floor(Math.random() * promptsDaily.length)],
    []
  );

  return (
    <EntryCard
      icon={DailyIcon.icon}
      colour={DailyIcon.colour}
      title={DailyIcon.title}
    >
      <Label htmlFor="daily">Today I am...</Label>
      <Textarea
        id="daily"
        name="daily"
        className="mt-2"
        rows={4}
        value={value}
        onChange={onChange}
        placeholder={prompt}
      />
    </EntryCard>
  );
}

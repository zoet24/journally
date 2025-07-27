import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ENTRY_TABS } from "../../../components/shared/EntryTabList/EntryTabListConfig";
import EntryCard from "../EntryCard/EntryCard";

interface DailyTabProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function DailyTab({ value, onChange }: DailyTabProps) {
  const { icon, colour, title } = ENTRY_TABS.daily;

  return (
    <EntryCard icon={icon} colour={colour} title={title}>
      <Label htmlFor="entry">Today I am...</Label>
      <Textarea
        id="entry"
        name="entry"
        className="mt-2"
        rows={4}
        value={value}
        onChange={onChange}
        required
      />
    </EntryCard>
  );
}

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ENTRY_TABS } from "../../../components/shared/EntryTabList/EntryTabListConfig";
import EntryCard from "../EntryCard/EntryCard";

interface GratitudeTabProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function GratitudeTab({ value, onChange }: GratitudeTabProps) {
  const { icon, colour, title } = ENTRY_TABS.gratitude;

  return (
    <EntryCard icon={icon} colour={colour} title={title}>
      <Label htmlFor="gratitude">Something I'm grateful for</Label>
      <Textarea
        id="gratitude"
        name="gratitude"
        className="mt-2"
        rows={3}
        value={value}
        onChange={onChange}
      />
    </EntryCard>
  );
}

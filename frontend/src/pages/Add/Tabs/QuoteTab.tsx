import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ENTRY_TABS } from "../../../components/shared/EntryTabList/EntryTabListConfig";
import EntryCard from "../EntryCard/EntryCard";

interface QuoteTabProps {
  quoteValue: string;
  quoteSourceValue: string;
  onQuoteChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSourceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function QuoteTab({
  quoteValue,
  quoteSourceValue,
  onQuoteChange,
  onSourceChange,
}: QuoteTabProps) {
  const { icon, colour, title } = ENTRY_TABS.quote;

  return (
    <EntryCard icon={icon} colour={colour} title={title}>
      <div>
        <Label htmlFor="quote">Quotes</Label>
        <Textarea
          id="quote"
          name="quote"
          className="mt-2"
          rows={3}
          value={quoteValue}
          onChange={onQuoteChange}
        />
      </div>
      <div>
        <Label htmlFor="quoteSource">Source</Label>
        <Input
          id="quoteSource"
          name="quoteSource"
          className="mt-2"
          value={quoteSourceValue}
          onChange={onSourceChange}
        />
      </div>
    </EntryCard>
  );
}

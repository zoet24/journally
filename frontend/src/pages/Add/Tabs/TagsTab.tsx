import { ENTRY_TABS } from "@/components/shared/EntryTabList/EntryTabListConfig";
import TagGroup from "@/components/shared/TagGroup/TagGroup";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import EntryCard from "../EntryCard/EntryCard";

interface TagsTabProps {
  activeTags: string[];
  availableTags: string[];
  onAddTag: (tag: string) => void;
  onRemoveTag: (tag: string) => void;
  onDropdownAdd: (value: string) => void;
}

export default function TagsTab({
  activeTags,
  availableTags,
  onAddTag,
  onRemoveTag,
  onDropdownAdd,
}: TagsTabProps) {
  const { icon, colour, title } = ENTRY_TABS.tags;

  return (
    <EntryCard icon={icon} colour={colour} title={title}>
      <TagGroup
        label="Active Tags"
        tags={activeTags}
        variant="active"
        emptyMessage="No tags selected"
        onTagClick={onRemoveTag}
        onTagRemove={onRemoveTag}
      />
      <TagGroup
        label="Suggested Tags"
        tags={availableTags}
        onTagClick={onAddTag}
      />
      <div className="mb-2">
        <Label>Add Tag</Label>
        <Select onValueChange={onDropdownAdd}>
          <SelectTrigger className="mt-2 w-full">
            <SelectValue placeholder="Select a tag to add" />
          </SelectTrigger>
          <SelectContent>
            {availableTags.map((tag) => (
              <SelectItem key={tag} value={tag}>
                {tag}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </EntryCard>
  );
}

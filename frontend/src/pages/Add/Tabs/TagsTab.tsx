import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";
import { ENTRY_TABS } from "../../../components/shared/EntryTabList/EntryTabListConfig";
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
      <div className="mb-2">
        <Label>Active Tags</Label>
        <div className="flex flex-wrap gap-2 mt-2">
          {activeTags.length === 0 && (
            <span className="text-gray-400">No tags selected</span>
          )}
          {activeTags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center bg-green-100 text-green-800 px-2 py-1 rounded cursor-pointer hover:bg-green-200 transition"
              onClick={() => onRemoveTag(tag)}
              title="Remove tag"
            >
              {tag}
              <X className="ml-1 w-3 h-3" />
            </span>
          ))}
        </div>
      </div>
      <div className="mb-2">
        <Label>Suggested Tags</Label>
        <div className="flex flex-wrap gap-2 mt-2">
          {availableTags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded cursor-pointer hover:bg-blue-200 transition"
              onClick={() => onAddTag(tag)}
              title="Add tag"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
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

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { ENTRY_TABS } from "../../../components/shared/EntryTabList/EntryTabListConfig";
import EntryCard from "../EntryCard/EntryCard";

interface BookmarksTabProps {
  titleValue: string;
  descriptionValue: string;
  categoryValue: string;
  doneValue: boolean;
  onTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDescriptionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onCategoryChange: (value: string) => void;
  onDoneChange: (checked: boolean) => void;
}

export default function BookmarksTab({
  titleValue,
  descriptionValue,
  categoryValue,
  doneValue,
  onTitleChange,
  onDescriptionChange,
  onCategoryChange,
  onDoneChange,
}: BookmarksTabProps) {
  const { icon, colour, title } = ENTRY_TABS.bookmarks;

  return (
    <EntryCard icon={icon} colour={colour} title={title}>
      <div>
        <Label htmlFor="bookmarkTitle">Title</Label>
        <Input
          id="bookmarkTitle"
          name="bookmarkTitle"
          className="mt-2"
          value={titleValue}
          onChange={onTitleChange}
        />
      </div>
      <div>
        <Label htmlFor="bookmarkDescription">Description</Label>
        <Textarea
          id="bookmarkDescription"
          name="bookmarkDescription"
          className="mt-2"
          rows={3}
          value={descriptionValue}
          onChange={onDescriptionChange}
        />
      </div>
      <div>
        <Label htmlFor="bookmarkCategory">Category</Label>
        <Select value={categoryValue} onValueChange={onCategoryChange}>
          <SelectTrigger className="mt-2">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="book">Book</SelectItem>
            <SelectItem value="film">Film</SelectItem>
            <SelectItem value="music">Music</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <Label htmlFor="bookmarkDone">Done?</Label>
        <Switch
          id="bookmarkDone"
          checked={doneValue}
          onCheckedChange={onDoneChange}
        />
        <span className="text-sm text-gray-500">
          {doneValue ? "Done" : "To Do"}
        </span>
      </div>
    </EntryCard>
  );
}

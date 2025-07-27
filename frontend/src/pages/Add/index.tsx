import EntryTabList from "@/components/shared/EntryTabList/EntryTabList";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";
import BookmarksTab from "./Tabs/BookmarksTab";
import DailyTab from "./Tabs/DailyTab";
import GratitudeTab from "./Tabs/GratitudeTab";
import PreviewTab from "./Tabs/PreviewTab";
import QuoteTab from "./Tabs/QuoteTab";
import TagsTab from "./Tabs/TagsTab";

const SUGGESTED_TAGS = [
  "happy",
  "travel",
  "ideas",
  "work",
  "health",
  "gratitude",
  "reflection",
  "goal",
  "fun",
  "family",
];

export default function Add() {
  const [form, setForm] = useState({
    daily: "",
    gratitude: "",
    quote: "",
    quoteSource: "",
    bookmarkTitle: "",
    bookmarkDescription: "",
    bookmarkCategory: "book",
    bookmarkDone: false,
  });
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState<
    null | (typeof form & { tags: string[] })
  >(null);
  const [activeTab, setActiveTab] = useState("daily");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSelect = (value: string) => {
    setForm((prev) => ({ ...prev, bookmarkCategory: value }));
  };

  const handleSwitch = (checked: boolean) => {
    setForm((prev) => ({ ...prev, bookmarkDone: checked }));
  };

  const handleAddTag = (tag: string) => {
    if (!activeTags.includes(tag)) setActiveTags([...activeTags, tag]);
  };

  const handleRemoveTag = (tag: string) => {
    setActiveTags(activeTags.filter((t) => t !== tag));
  };

  const handleDropdownAdd = (value: string) => {
    handleAddTag(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted({ ...form, tags: activeTags });
    setForm({
      daily: "",
      gratitude: "",
      quote: "",
      quoteSource: "",
      bookmarkTitle: "",
      bookmarkDescription: "",
      bookmarkCategory: "book",
      bookmarkDone: false,
    });
    setActiveTags([]);
    setActiveTab("daily");
  };

  const availableTags = SUGGESTED_TAGS.filter(
    (tag) => !activeTags.includes(tag)
  );

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <EntryTabList activeTab={activeTab} onTabChange={setActiveTab} />

        {submitted && (
          <TabsContent value="preview">
            <PreviewTab submitted={submitted} />
          </TabsContent>
        )}

        <TabsContent value="daily">
          <DailyTab value={form.daily} onChange={handleChange as any} />
        </TabsContent>

        <TabsContent value="gratitude">
          <GratitudeTab value={form.gratitude} onChange={handleChange as any} />
        </TabsContent>

        <TabsContent value="quote">
          <QuoteTab
            quoteValue={form.quote}
            quoteSourceValue={form.quoteSource}
            onQuoteChange={handleChange as any}
            onSourceChange={handleChange as any}
          />
        </TabsContent>

        <TabsContent value="bookmarks">
          <BookmarksTab
            titleValue={form.bookmarkTitle}
            descriptionValue={form.bookmarkDescription}
            categoryValue={form.bookmarkCategory}
            doneValue={form.bookmarkDone}
            onTitleChange={handleChange as any}
            onDescriptionChange={handleChange as any}
            onCategoryChange={handleSelect}
            onDoneChange={handleSwitch}
          />
        </TabsContent>

        <TabsContent value="tags">
          <TagsTab
            activeTags={activeTags}
            availableTags={availableTags}
            onAddTag={handleAddTag}
            onRemoveTag={handleRemoveTag}
            onDropdownAdd={handleDropdownAdd}
          />
        </TabsContent>
      </Tabs>
      <Button type="submit" className="w-full mt-2">
        Submit
      </Button>
    </form>
  );
}

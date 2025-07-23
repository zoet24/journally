import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Bookmark, BookText, Heart, Quote, Tag, X } from "lucide-react";
import { useState } from "react";

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
    entry: "",
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
  const [activeTab, setActiveTab] = useState("entry");

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
      entry: "",
      gratitude: "",
      quote: "",
      quoteSource: "",
      bookmarkTitle: "",
      bookmarkDescription: "",
      bookmarkCategory: "book",
      bookmarkDone: false,
    });
    setActiveTags([]);
    setActiveTab("entry");
  };

  const availableTags = SUGGESTED_TAGS.filter(
    (tag) => !activeTags.includes(tag)
  );

  return (
    <div className="max-w-md mx-auto mt-8 flex flex-col gap-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-4">
            <TabsTrigger value="entry">
              <BookText className="inline" />
            </TabsTrigger>
            <TabsTrigger value="gratitude">
              <Heart className="inline text-pink-500" />
            </TabsTrigger>
            <TabsTrigger value="quote">
              <Quote className="inline text-yellow-500" />
            </TabsTrigger>
            <TabsTrigger value="bookmarks">
              <Bookmark className="inline text-green-500" />
            </TabsTrigger>
            <TabsTrigger value="tags">
              <Tag className="inline text-purple-500" />
            </TabsTrigger>
          </TabsList>

          <TabsContent value="entry">
            <Card>
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <BookText className="text-blue-500 w-7 h-7" />
                <CardTitle className="text-2xl font-bold text-left">
                  General Entry
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Label htmlFor="entry">Write your thoughts here...</Label>
                <Textarea
                  id="entry"
                  name="entry"
                  className="mt-2"
                  rows={4}
                  value={form.entry}
                  onChange={handleChange}
                  required
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gratitude">
            <Card>
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <Heart className="text-pink-500 w-7 h-7" />
                <CardTitle className="text-2xl font-bold text-left">
                  Gratitude
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Label htmlFor="gratitude">Something I'm grateful for</Label>
                <Textarea
                  id="gratitude"
                  name="gratitude"
                  className="mt-2"
                  rows={3}
                  value={form.gratitude}
                  onChange={handleChange}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="quote">
            <Card>
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <Quote className="text-yellow-500 w-7 h-7" />
                <CardTitle className="text-2xl font-bold text-left">
                  Quote
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div>
                  <Label htmlFor="quote">Quote</Label>
                  <Textarea
                    id="quote"
                    name="quote"
                    className="mt-2"
                    rows={3}
                    value={form.quote}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="quoteSource">Source</Label>
                  <Input
                    id="quoteSource"
                    name="quoteSource"
                    className="mt-2"
                    value={form.quoteSource}
                    onChange={handleChange}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bookmarks">
            <Card>
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <Bookmark className="text-green-500 w-7 h-7" />
                <CardTitle className="text-2xl font-bold text-left">
                  Bookmark
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div>
                  <Label htmlFor="bookmarkTitle">Title</Label>
                  <Input
                    id="bookmarkTitle"
                    name="bookmarkTitle"
                    className="mt-2"
                    value={form.bookmarkTitle}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="bookmarkDescription">Description</Label>
                  <Textarea
                    id="bookmarkDescription"
                    name="bookmarkDescription"
                    className="mt-2"
                    rows={3}
                    value={form.bookmarkDescription}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="bookmarkCategory">Category</Label>
                  <Select
                    value={form.bookmarkCategory}
                    onValueChange={handleSelect}
                  >
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
                    checked={form.bookmarkDone}
                    onCheckedChange={handleSwitch}
                  />
                  <span className="text-sm text-gray-500">
                    {form.bookmarkDone ? "Done" : "To Do"}
                  </span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tags">
            <Card>
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <Tag className="text-purple-500 w-7 h-7" />
                <CardTitle className="text-2xl font-bold text-left">
                  Tags
                </CardTitle>
              </CardHeader>
              <CardContent>
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
                        onClick={() => handleRemoveTag(tag)}
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
                        onClick={() => handleAddTag(tag)}
                        title="Add tag"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-2">
                  <Label>Add Tag</Label>
                  <Select onValueChange={handleDropdownAdd}>
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
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        <Button type="submit" className="w-full mt-2">
          Submit
        </Button>
      </form>
      {submitted && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Your Entry</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <span className="font-semibold">General Entry:</span>{" "}
              {submitted.entry}
            </div>
            <div>
              <span className="font-semibold">Gratitude:</span>{" "}
              {submitted.gratitude}
            </div>
            <div>
              <span className="font-semibold">Quote:</span> {submitted.quote}
            </div>
            <div>
              <span className="font-semibold">Source:</span>{" "}
              {submitted.quoteSource}
            </div>
            <div>
              <span className="font-semibold">Bookmark:</span>{" "}
              {submitted.bookmarkTitle}
            </div>
            <div>
              <span className="font-semibold">Description:</span>{" "}
              {submitted.bookmarkDescription}
            </div>
            <div>
              <span className="font-semibold">Category:</span>{" "}
              {submitted.bookmarkCategory}
            </div>
            <div>
              <span className="font-semibold">Status:</span>{" "}
              {submitted.bookmarkDone ? "Done" : "To Do"}
            </div>
            <div>
              <span className="font-semibold">Tags:</span>{" "}
              {submitted.tags.map((t, i) => (
                <span
                  key={i}
                  className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded mr-2 mb-1"
                >
                  {t}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

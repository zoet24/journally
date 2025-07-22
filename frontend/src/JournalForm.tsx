import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Bookmark, BookText, Heart, Quote, Tag } from "lucide-react";
import { useState } from "react";
import { Button } from "./components/ui/button";

export default function JournalForm() {
  const [form, setForm] = useState({
    entry: "",
    gratitude: "",
    quote: "",
    bookmarks: "",
    tags: "",
  });
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(form);
    setForm({
      entry: "",
      gratitude: "",
      quote: "",
      bookmarks: "",
      tags: "",
    });
  };

  return (
    <div className="max-w-md mx-auto mt-8 flex flex-col gap-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center gap-2 pb-2">
            <BookText className="text-blue-500" />
            <CardTitle className="text-lg">General Entry</CardTitle>
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

        <Card>
          <CardHeader className="flex flex-row items-center gap-2 pb-2">
            <Heart className="text-pink-500" />
            <CardTitle className="text-lg">Gratitude</CardTitle>
          </CardHeader>
          <CardContent>
            <Label htmlFor="gratitude">Something I'm grateful for</Label>
            <Input
              id="gratitude"
              name="gratitude"
              className="mt-2"
              value={form.gratitude}
              onChange={handleChange}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-2 pb-2">
            <Quote className="text-yellow-500" />
            <CardTitle className="text-lg">Quote</CardTitle>
          </CardHeader>
          <CardContent>
            <Label htmlFor="quote">A quote that inspires you</Label>
            <Input
              id="quote"
              name="quote"
              className="mt-2"
              value={form.quote}
              onChange={handleChange}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-2 pb-2">
            <Bookmark className="text-green-500" />
            <CardTitle className="text-lg">Bookmarks</CardTitle>
          </CardHeader>
          <CardContent>
            <Label htmlFor="bookmarks">
              Comma-separated (books, films, music, etc.)
            </Label>
            <Input
              id="bookmarks"
              name="bookmarks"
              className="mt-2"
              value={form.bookmarks}
              onChange={handleChange}
              placeholder="e.g. Book1, Film2, Restaurant3"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-2 pb-2">
            <Tag className="text-purple-500" />
            <CardTitle className="text-lg">Tags</CardTitle>
          </CardHeader>
          <CardContent>
            <Label htmlFor="tags">Comma-separated tags</Label>
            <Input
              id="tags"
              name="tags"
              className="mt-2"
              value={form.tags}
              onChange={handleChange}
              placeholder="e.g. happy, travel, ideas"
            />
          </CardContent>
        </Card>

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
              <span className="font-semibold">Bookmarks:</span>{" "}
              {submitted.bookmarks.split(",").map((b, i) => (
                <span
                  key={i}
                  className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2 mb-1"
                >
                  {b.trim()}
                </span>
              ))}
            </div>
            <div>
              <span className="font-semibold">Tags:</span>{" "}
              {submitted.tags.split(",").map((t, i) => (
                <span
                  key={i}
                  className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded mr-2 mb-1"
                >
                  {t.trim()}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

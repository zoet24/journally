import TagGroup from "../../components/shared/TagGroup/TagGroup";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

const entry = {
  title: "Sunday 29th",
  daily:
    "This is my daily entry. This is my daily entry. This is my daily entry. This is my daily entry. This is my daily entry. This is my daily entry. This is my daily entry. This is my daily entry. ",
  gratitude: "I am grateful for my family",
  quote: "The only way to do great work is to love what you do",
  quoteSource: "Steve Jobs",
  bookmarkTitle: "The Art of War",
  bookmarkDescription: "A book about the art of war",
  bookmarkCategory: "book",
  tags: ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6"],
};

export default function Entries() {
  const tagsNum = 2;
  return (
    <div>
      <Card>
        <CardHeader className="flex flex-row items-center gap-3 pb-2 justify-between">
          <CardTitle className="text-xl font-bold text-left">
            {entry.title}
          </CardTitle>
          <TagGroup
            tags={[
              ...entry.tags.slice(0, tagsNum),
              ...(entry.tags.length > tagsNum
                ? [`+${entry.tags.length - tagsNum}`]
                : []),
            ]}
          />
        </CardHeader>
        <CardContent>{entry.daily}</CardContent>
      </Card>
    </div>
  );
}

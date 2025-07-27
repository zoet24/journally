import { ENTRY_TABS } from "@/components/shared/EntryTabList/EntryTabListConfig";
import TagGroup from "@/components/shared/TagGroup/TagGroup";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Entry } from "@/types/Entry";
import { format } from "date-fns";

interface EntryCardProps {
  entry: Entry;
  tagsToShow?: number;
  activeTab: string;
  searchTerm?: string;
}

// Add a helper function to highlight search terms
function HighlightedText({
  text,
  searchTerm,
}: {
  text: string;
  searchTerm: string;
}) {
  if (!searchTerm) return <>{text}</>;

  const parts = text.split(new RegExp(`(${searchTerm})`, "gi"));
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === searchTerm.toLowerCase() ? (
          <span key={i} className="bg-yellow-200">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
}

export default function EntryCard({
  entry,
  tagsToShow = 2,
  activeTab,
  searchTerm = "",
}: EntryCardProps) {
  const {
    daily: DailyIcon,
    gratitude: GratitudeIcon,
    quote: QuoteIcon,
    bookmarks: BookmarkIcon,
    tags: TagIcon,
  } = ENTRY_TABS;

  const hasContentForTab = () => {
    switch (activeTab) {
      case "daily":
        return !!entry.daily;
      case "gratitude":
        return !!entry.gratitude;
      case "quote":
        return !!entry.quotes?.length;
      case "bookmarks":
        return !!entry.bookmarks?.length;
      case "tags":
        return !!entry.tags?.length;
      case "preview":
        return true;
      default:
        return false;
    }
  };

  if (!hasContentForTab()) return null;

  const renderContent = () => {
    switch (activeTab) {
      case "daily":
        return (
          entry.daily && (
            <div className="flex gap-3 items-start">
              <DailyIcon.icon className={`w-5 h-5 mt-1 ${DailyIcon.colour}`} />
              <p className="flex-1">
                <HighlightedText text={entry.daily} searchTerm={searchTerm} />
              </p>
            </div>
          )
        );
      case "gratitude":
        return (
          entry.gratitude && (
            <div className="flex gap-3 items-start">
              <GratitudeIcon.icon
                className={`w-5 h-5 mt-1 ${GratitudeIcon.colour}`}
              />
              <p className="flex-1">
                <HighlightedText
                  text={entry.gratitude}
                  searchTerm={searchTerm}
                />
              </p>
            </div>
          )
        );
      case "quote":
        return entry.quotes?.map((quote, index) => (
          <div key={index} className="flex gap-3 items-start">
            <QuoteIcon.icon className={`w-5 h-5 mt-1 ${QuoteIcon.colour}`} />
            <div className="flex-1">
              <p className="italic">
                "<HighlightedText text={quote.quote} searchTerm={searchTerm} />"
              </p>
              {quote.quoteSource && (
                <p className="text-sm text-gray-500 mt-1">
                  —{" "}
                  <HighlightedText
                    text={quote.quoteSource}
                    searchTerm={searchTerm}
                  />
                </p>
              )}
            </div>
          </div>
        ));
      case "bookmarks":
        return entry.bookmarks?.map((bookmark, index) => (
          <div key={index} className="flex gap-3 items-start">
            <BookmarkIcon.icon
              className={`w-5 h-5 mt-1 ${BookmarkIcon.colour}`}
            />
            <div className="flex-1">
              <p className="font-medium">
                <HighlightedText
                  text={bookmark.bookmarkTitle}
                  searchTerm={searchTerm}
                />
              </p>
              {bookmark.bookmarkDescription && (
                <p className="text-sm text-gray-600 mt-1">
                  <HighlightedText
                    text={bookmark.bookmarkDescription}
                    searchTerm={searchTerm}
                  />
                </p>
              )}
              <div className="flex gap-2 items-center mt-2 text-sm text-gray-500">
                <span>{bookmark.bookmarkCategory}</span>
                <span>•</span>
                <span>{bookmark.bookmarkDone ? "Completed" : "To Do"}</span>
              </div>
            </div>
          </div>
        ));
      case "tags":
        return <TagGroup tags={entry.tags?.map((tag) => tag.title) || []} />;
      case "preview":
      default:
        return (
          <>
            {entry.daily && (
              <div className="flex gap-3 items-start">
                <DailyIcon.icon
                  className={`w-5 h-5 mt-1 ${DailyIcon.colour}`}
                />
                <p className="flex-1">
                  <HighlightedText text={entry.daily} searchTerm={searchTerm} />
                </p>
              </div>
            )}

            {entry.gratitude && (
              <div className="flex gap-3 items-start">
                <GratitudeIcon.icon
                  className={`w-5 h-5 mt-1 ${GratitudeIcon.colour}`}
                />
                <p className="flex-1">
                  <HighlightedText
                    text={entry.gratitude}
                    searchTerm={searchTerm}
                  />
                </p>
              </div>
            )}

            {entry.quotes?.map((quote, index) => (
              <div key={index} className="flex gap-3 items-start">
                <QuoteIcon.icon
                  className={`w-5 h-5 mt-1 ${QuoteIcon.colour}`}
                />
                <div className="flex-1">
                  <p className="italic">
                    "
                    <HighlightedText
                      text={quote.quote}
                      searchTerm={searchTerm}
                    />
                    "
                  </p>
                  {quote.quoteSource && (
                    <p className="text-sm text-gray-500 mt-1">
                      —{" "}
                      <HighlightedText
                        text={quote.quoteSource}
                        searchTerm={searchTerm}
                      />
                    </p>
                  )}
                </div>
              </div>
            ))}

            {entry.bookmarks?.map((bookmark, index) => (
              <div key={index} className="flex gap-3 items-start">
                <BookmarkIcon.icon
                  className={`w-5 h-5 mt-1 ${BookmarkIcon.colour}`}
                />
                <div className="flex-1">
                  <p className="font-medium">
                    <HighlightedText
                      text={bookmark.bookmarkTitle}
                      searchTerm={searchTerm}
                    />
                  </p>
                  {bookmark.bookmarkDescription && (
                    <p className="text-sm text-gray-600 mt-1">
                      <HighlightedText
                        text={bookmark.bookmarkDescription}
                        searchTerm={searchTerm}
                      />
                    </p>
                  )}
                  <div className="flex gap-2 items-center mt-2 text-sm text-gray-500">
                    <span>{bookmark.bookmarkCategory}</span>
                    <span>•</span>
                    <span>{bookmark.bookmarkDone ? "Completed" : "To Do"}</span>
                  </div>
                </div>
              </div>
            ))}
          </>
        );
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-3 pb-2 justify-between">
        <CardTitle className="text-xl font-bold text-left">
          {format(new Date(entry.date), "EEEE do")}
        </CardTitle>
        {entry.tags && activeTab !== "tags" && (
          <TagGroup
            tags={[
              ...(entry.tags?.slice(0, tagsToShow).map((tag) => tag.title) ||
                []),
              ...(entry.tags && entry.tags.length > tagsToShow
                ? [`+${entry.tags.length - tagsToShow}`]
                : []),
            ]}
          />
        )}
      </CardHeader>
      <CardContent className="space-y-6">{renderContent()}</CardContent>
    </Card>
  );
}

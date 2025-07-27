import { ENTRY_TABS } from "@/components/shared/EntryTabList/EntryTabListConfig";
import EntryCard from "../EntryCard/EntryCard";

interface PreviewTabProps {
  submitted: {
    daily: string;
    gratitude: string;
    quote: string;
    quoteSource: string;
    bookmarkTitle: string;
    bookmarkDescription: string;
    bookmarkCategory: string;
    bookmarkDone: boolean;
    tags: string[];
  };
}

export default function PreviewTab({ submitted }: PreviewTabProps) {
  const { icon, colour, title } = ENTRY_TABS.preview;

  return (
    <EntryCard icon={icon} colour={colour} title={title}>
      <div className="space-y-2">
        {submitted.daily && (
          <div>
            <span className="font-semibold">General Entry:</span>{" "}
            {submitted.daily}
          </div>
        )}
        {submitted.gratitude && (
          <div>
            <span className="font-semibold">Gratitude:</span>{" "}
            {submitted.gratitude}
          </div>
        )}
        {submitted.quote && (
          <div>
            <span className="font-semibold">Quote:</span> {submitted.quote}
          </div>
        )}
        {submitted.quoteSource && (
          <div>
            <span className="font-semibold">Source:</span>{" "}
            {submitted.quoteSource}
          </div>
        )}
        {submitted.bookmarkTitle && (
          <>
            <div>
              <span className="font-semibold">Bookmark:</span>{" "}
              {submitted.bookmarkTitle}
            </div>
            {submitted.bookmarkDescription && (
              <div>
                <span className="font-semibold">Description:</span>{" "}
                {submitted.bookmarkDescription}
              </div>
            )}
            <div>
              <span className="font-semibold">Category:</span>{" "}
              {submitted.bookmarkCategory}
            </div>
            <div>
              <span className="font-semibold">Status:</span>{" "}
              {submitted.bookmarkDone ? "Done" : "To Do"}
            </div>
          </>
        )}
        {submitted.tags.length > 0 && (
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
        )}
      </div>
    </EntryCard>
  );
}

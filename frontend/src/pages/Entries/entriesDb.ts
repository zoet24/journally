import { Entry } from "@/types/Entry";

export const entries: Entry[] = [
  {
    id: "1",
    date: "2024-01-29",
    daily:
      "This is my daily entry. This is my daily entry. This is my daily entry. This is my daily entry. This is my daily entry. This is my daily entry. This is my daily entry. This is my daily entry.",
    gratitude: "I am grateful for my family",
    quotes: [
      {
        quote: "The only way to do great work is to love what you do",
        quoteSource: "Steve Jobs",
      },
    ],
    bookmarks: [
      {
        bookmarkTitle: "The Art of War",
        bookmarkDescription: "A book about the art of war",
        bookmarkCategory: "book",
        bookmarkDone: false,
      },
    ],
    tags: [
      { id: "1", title: "tag1" },
      { id: "2", title: "tag2" },
      { id: "3", title: "tag3" },
      { id: "4", title: "tag4" },
      { id: "5", title: "tag5" },
      { id: "6", title: "tag6" },
    ],
  },
  {
    id: "2",
    date: "2024-01-30",
    daily:
      "This is my daily entry. This is my daily entry. This is my daily entry. This is my daily entry. This is my daily entry. This is my daily entry. This is my daily entry. This is my daily entry.",
    gratitude: "I am grateful for my family",
  },
];

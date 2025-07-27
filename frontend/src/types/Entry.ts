export interface Quote {
  quote: string;
  quoteSource: string;
}

export interface Bookmark {
  bookmarkTitle: string;
  bookmarkDescription: string;
  bookmarkCategory: "book" | "film" | "music";
  bookmarkDone: boolean;
}

export interface Tag {
  id: string;
  title: string;
}

export interface Entry {
  id?: string;
  date: string;
  daily?: string;
  gratitude?: string;
  quotes?: Quote[];
  bookmarks?: Bookmark[];
  tags?: Tag[];
}

// Form state type (used in Add page)
export interface EntryFormState {
  date: string;
  daily: string;
  gratitude: string;
  quotes: Quote[];
  bookmarks: Bookmark[];
  tags: Tag[];
}

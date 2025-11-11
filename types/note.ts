export interface Note {
  id: string;
  title: string;
  content: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
}

export enum NoteTag {
  Work = "Work",
  Personal = "Personal",
  Meeting = "Meeting",
  Shopping = "Shopping",
  Todo = "Todo",
}

export interface CreateNoteData {
  title: string;
  content: string;
  tag: NoteTag;
}


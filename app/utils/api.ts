import { db } from "./db.server";
import { Note } from "./types";

export const getNoteById = async (noteId: number) => {
  return await db.note.findUnique({
    where: { id: noteId },
  });
};

export const createNewNote = async () => {
  return await db.note.create({
    data: {
      title: "",
      content: "",
    },
  });
};

export const updateNote = async (noteId: number, data: Partial<Note>) => {
  const note = await getNoteById(noteId);
  if (!note) {
    throw new Error(`No contact found for ${note}`);
  }
  const title = data.title;
  const content = data.content;
  return await db.note.update({
    where: { id: note.id },
    data: { title: title, content: content },
  });
};

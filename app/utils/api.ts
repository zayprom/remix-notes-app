import { db } from "./db.server";
import { Note } from "./types";

export const getNoteById = async (noteId: number) => {
  return await db.note.findUnique({
    where: { id: noteId },
  });
};

export const updateNote = async (noteId: number, data: Note) => {
  const note = await getNoteById(noteId);
  if (!note) {
    throw new Error(`No contanct found for ${note}`);
  }
  return await db.note.update({
    where: { id: note.id },
    data: data,
  });
};

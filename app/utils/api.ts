import { db } from "./db.server";

export const getNoteById = async (noteId: number) => {
  return await db.note.findUnique({
    where: { id: noteId },
  });
};

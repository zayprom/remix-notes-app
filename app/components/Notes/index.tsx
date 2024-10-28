import { NavLink } from "@remix-run/react";
import { Note } from "~/utils/types";
import styles from "./styles.module.css";
import { SingleNote } from "../Note";

interface NotesListProps {
  notes: Note[];
}

export const NotesList = (props: NotesListProps) => {
  return (
    <ul className={styles.notesList}>
      {props.notes.map((note) => (
        <SingleNote note={note} />
      ))}
    </ul>
  );
};

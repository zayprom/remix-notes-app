import { NavLink } from "@remix-run/react";
import { Note } from "~/utils/types";

interface NotesListProps {
  notes: Note[];
}

export const NotesList = (props: NotesListProps) => {
  return (
    <ul className="notesList">
      {props.notes.map((note) => (
        <li key={note.id}>
          <NavLink to={`notes/${note.id}`}>{note.title}</NavLink>
          <NavLink to={`notes/${note.id}/edit`}>Edit</NavLink>
        </li>
      ))}
    </ul>
  );
};

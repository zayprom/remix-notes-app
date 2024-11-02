import { Note } from "~/utils/types";
import { NavLink } from "@remix-run/react";
import styles from "./styles.module.css";

interface SingleNoteProps {
  note: Note;
}

export const SingleNote = (props: SingleNoteProps) => {
  return (
    <li className={styles.li} key={props.note.id}>
      <NavLink to={`notes/${props.note.id}`}>{props.note.title}</NavLink>
      <NavLink to={`notes/${props.note.id}/edit`}>Edit</NavLink>
    </li>
  );
};

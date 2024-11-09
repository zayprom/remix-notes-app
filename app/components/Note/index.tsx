import { Note } from "~/utils/types";
import { NavLink } from "@remix-run/react";
import styles from "./styles.module.css";

interface SingleNoteProps {
  note: Note;
}

export const SingleNote = (props: SingleNoteProps) => {
  return (
    <li className={styles.li}>
      <div className={styles.noteHeading}>
        <NavLink to={`notes/${props.note.id}`} className={styles.titleLink}>
          {props.note.title}
        </NavLink>
        <NavLink to={`notes/${props.note.id}/edit`}>Edit</NavLink>
      </div>
      <div className={styles.info}>
        <span>{props.note.content}</span>
      </div>
    </li>
  );
};

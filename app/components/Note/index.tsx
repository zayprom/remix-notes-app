import { Note } from "~/utils/types";
import { NavLink } from "@remix-run/react";
import styles from "./styles.module.css";

interface SingleNoteProps {
  note: Note;
}

export const SingleNote = (props: SingleNoteProps) => {
  const getFormattedText = (text: string) => {
    const textToArray = text.split(" ");
    const modifiedText = textToArray.slice(0, 4).join(" ");

    return textToArray.length <= 4 ? `${modifiedText}` : `${modifiedText}...`;
  };

  return (
    <li className={styles.li}>
      <div className={styles.noteHeading}>
        <NavLink to={`notes/${props.note.id}`} className={styles.titleLink}>
          {props.note.title ? getFormattedText(props.note.title) : "New note"}
        </NavLink>
        <NavLink className={styles.editBtn} to={`notes/${props.note.id}/edit`}>
          Edit
        </NavLink>
      </div>
      <div className={styles.info}>
        <span>
          {props.note.content
            ? getFormattedText(props.note.content)
            : "No content added"}
        </span>
      </div>
    </li>
  );
};

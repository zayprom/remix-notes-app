import { Note } from "~/utils/types";
import { useNavigate } from "@remix-run/react";
import styles from "./styles.module.css";

interface EditNoteFormProps {
  defaultValues: Note;
}

export const EditNoteForm = (props: EditNoteFormProps) => {
  const navigate = useNavigate();
  return (
    <div className={styles.detailSection}>
      <div className={styles.titleSection}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          defaultValue={props.defaultValues.title}
        />
      </div>
      <div className={styles.contentSection}>
        <label>Content</label>
        <textarea
          // rows={10}
          name="content"
          defaultValue={props.defaultValues.content}
          spellCheck="true"
        />
      </div>
      <button type="submit">Save</button>
      <button type="button" onClick={() => navigate(-1)}>
        Cancel
      </button>
    </div>
  );
};

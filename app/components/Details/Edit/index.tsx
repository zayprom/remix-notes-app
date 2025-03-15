import { Note } from "~/utils/types";
import { useNavigate } from "react-router";
import styles from "./styles.module.css";

interface EditNoteFormProps {
  defaultValues: Note;
}

export const EditNoteForm = (props: EditNoteFormProps) => {
  const navigate = useNavigate();
  return (
    <div className={styles.detailSection}>
      <div className={styles.topSection}>
        <button type="button" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
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
          name="content"
          defaultValue={props.defaultValues.content}
          spellCheck="true"
        />
      </div>
      <div className={styles.actionSection}>
        <button type="button" onClick={() => navigate(-1)}>
          Cancel
        </button>
        <button type="submit">Save</button>
      </div>
    </div>
  );
};

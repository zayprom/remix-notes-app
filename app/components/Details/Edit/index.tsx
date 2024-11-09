import "../commonStyles.css";
import { Note } from "~/utils/types";
import { useNavigate } from "@remix-run/react";

interface EditNoteFormProps {
  defaultValues: Note;
}

export const EditNoteForm = (props: EditNoteFormProps) => {
  const navigate = useNavigate();
  return (
    <div className="detailSection">
      <div className="titleSection">
        <label>Title:</label>
        <input
          type="text"
          name="title"
          defaultValue={props.defaultValues.title}
        />
      </div>
      <div className="contentSection">
        <label>Content:</label>
        <textarea
          rows={10}
          name="content"
          defaultValue={props.defaultValues.content}
        />
        <button type="submit">Save</button>
        <button type="button" onClick={() => navigate(-1)}>
          Cancel
        </button>
      </div>
    </div>
  );
};

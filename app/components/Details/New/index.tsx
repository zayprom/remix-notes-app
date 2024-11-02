import styles from "./styles.module.css";
import { Form } from "@remix-run/react";
import "../commonStyles.css";

export const NewNote = () => {
  return (
    <div className="detailSection">
      <Form method="post">
        <div className="titleSection">
          <label>Title:</label>
          <input type="text" name="title" />
        </div>
        <div className="contentSection">
          <label>Content:</label>
          <textarea rows={10} name="content" />
          <button type="submit">New note</button>
        </div>
      </Form>
    </div>
  );
};

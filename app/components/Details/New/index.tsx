import styles from "./styles.module.css";
import { Form } from "@remix-run/react";

export const NewNote = () => {
  return (
    <div>
      <Form method="post">
        <div>
          <label>
            Title: <input type="text" name="title" />
          </label>
        </div>
        <div>
          <label>
            Content: <textarea rows={10} name="content" />
          </label>
          <button type="submit">New note</button>
        </div>
      </Form>
    </div>
  );
};

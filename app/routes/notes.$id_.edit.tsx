import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form, json, useLoaderData, useNavigate } from "@remix-run/react";
import { getNoteById, updateNote } from "~/utils/api";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const id = Number(params.id);
  const note = await getNoteById(id);

  if (!note) {
    throw new Response("Note not found", { status: 404 });
  }

  return json({ note });
};

export const action = async ({ params, request }: ActionFunctionArgs) => {
  const id = Number(params.id);
  const formData = await request.formData();
  const updatedData = Object.fromEntries(formData);
  console.log(updatedData);
};

export function EditNote() {
  const { note } = useLoaderData<typeof loader>();

  return (
    <Form key={note.id} id="contact-form" method="post">
      <div>
        <span>Title</span>
        <input
          aria-label="Note title"
          defaultValue={note.title}
          name="title"
          placeholder="Title"
          type="text"
        />
        <textarea
          aria-label="Content"
          defaultValue={note.content}
          name="content"
          placeholder="Content"
          rows={20}
        />
        <p>
          <button type="submit">Save changes</button>
        </p>
      </div>
    </Form>
  );
}

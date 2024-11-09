import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form, json, redirect, useLoaderData } from "@remix-run/react";
import { EditNoteForm } from "~/components/Details/Edit";
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
  await updateNote(id, updatedData);
  return redirect(`/notes/${id}`);
};

export default function EditNote() {
  const { note } = useLoaderData<typeof loader>();

  return (
    <Form key={note.id} id="notes-form" method="post">
      <EditNoteForm defaultValues={note} />
    </Form>
  );
}

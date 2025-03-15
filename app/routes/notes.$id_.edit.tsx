import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form, redirect, useLoaderData } from "@remix-run/react";
import { EditNoteForm } from "~/components/Details/Edit";
import { getNoteById, updateNote } from "~/api/requests";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const id = Number(params.id);
  const note = await getNoteById(id);

  if (!note) {
    throw new Response("Note not found", { status: 404 });
  }

  return { note };
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
  const formattedNote = {
    ...note,
    createdAt: note.createdAt.toISOString(),
    updatedAt: note.updatedAt.toISOString(),
  };
  return (
    <Form key={note.id} id="editForm" method="post">
      <EditNoteForm defaultValues={formattedNote} />
    </Form>
  );
}

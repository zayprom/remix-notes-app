import { Form, json, redirect, useLoaderData } from "@remix-run/react";
import { LoaderFunctionArgs } from "@remix-run/node";
import { getNoteById } from "~/utils/api";

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const id = Number(params.id);

  if (typeof id !== "number") {
    return redirect("/");
  }

  const note = await getNoteById(id);

  if (!note) {
    throw new Response("Note ID not found", { status: 404 });
  }
  return json({ note });
};

export default function Note() {
  const { note } = useLoaderData<typeof loader>();
  return (
    note.id && (
      <div>
        <h1>{note.title}</h1>
        <p>{note.content}</p>

        <Form action="edit">
          <button type="submit">Edit</button>
        </Form>
      </div>
    )
  );
}

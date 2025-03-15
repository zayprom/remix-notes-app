import { Form, json, redirect, useLoaderData } from "@remix-run/react";
import { LoaderFunctionArgs } from "@remix-run/node";
import { getNoteById } from "~/api/requests";

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const id = Number(params.id);

  if (typeof id !== "number") {
    return redirect("/");
  }

  const note = await getNoteById(id);

  if (!note) {
    throw new Response("Note ID not found", { status: 404 });
  }
  return { note };
};

export default function Note() {
  const { note } = useLoaderData<typeof loader>();
  return (
    note.id && (
      <div>
        <Form id="editSingleNote" action="edit">
          <button className="noteEditBtn" type="submit">
            Edit
          </button>
        </Form>

        <h1>{note.title ? note.title : "New note"}</h1>
        <p>{note.content ? note.content : "No content added"}</p>
      </div>
    )
  );
}

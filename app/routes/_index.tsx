import type {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/node";
import { Form, json, NavLink, redirect, useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const notes = await db.note.findMany({
    orderBy: { createdAt: "desc" },
  });

  return json({ notes });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const title = formData.get("title");
  const content = formData.get("content");

  if (typeof title !== "string" || typeof content !== "string") {
    return { formError: "Form not submitted correctly." };
  }

  const newNote = await db.note.create({
    data: {
      title,
      content,
    },
  });

  return redirect(`notes/${newNote.id}`);
}

export default function Index() {
  const { notes } = useLoaderData<typeof loader>();
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            Welcome to Remix-notes-app
          </h1>
        </header>
        <Form method="post">
          <div>
            <label>
              Title: <input type="text" name="title" />
            </label>
          </div>
          <div>
            <label>
              Content: <input type="text" name="content" />
            </label>
            <button type="submit">New note</button>
          </div>
        </Form>
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <NavLink to={`notes/${note.id}`}>{note.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

import type {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/node";
import { Form, json, NavLink, redirect, useLoaderData } from "@remix-run/react";
import { SideBar } from "~/components/Sidebar";
import { db } from "~/utils/db.server";
import "../app.css";
import { NotesList } from "~/components/Notes";
import { NewNote } from "~/components/Details/New";

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
    <main>
      <SideBar>
        <header>
          <h1>Welcome to Remix-notes-app</h1>
        </header>
        <NotesList notes={notes} />
      </SideBar>
      <NewNote />
    </main>
  );
}

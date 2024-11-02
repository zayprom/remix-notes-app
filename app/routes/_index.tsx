import type {
  ActionFunctionArgs,
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/node";
import { json, redirect, useLoaderData } from "@remix-run/react";
import { SideBar } from "~/components/Sidebar";
import { db } from "~/utils/db.server";
import "../app.css";
import { NotesList } from "~/components/Notes";
import { NewNote } from "~/components/Details/New";
import "./app.css?url";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Notes App" },
    { name: "description", content: "Create notes with Remix!" },
  ];
};

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

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

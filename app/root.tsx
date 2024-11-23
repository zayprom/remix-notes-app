import {
  Form,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type {
  LinksFunction,
  LoaderFunctionArgs,
  ActionFunctionArgs,
} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import stylesHref from "./app.css?url";
import { SideBar } from "./components/Sidebar";
import { NotesList } from "./components/Notes";
import { db } from "./utils/db.server";
import { createNewNote } from "./utils/api";

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
  { rel: "stylesheet", href: stylesHref },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const notes = await db.note.findMany({
    orderBy: { createdAt: "desc" },
  });

  return json({ notes });
}

export async function action({ request }: ActionFunctionArgs) {
  const newNote = await createNewNote();
  return redirect(`notes/${newNote.id}/edit`);
}

export default function App() {
  const { notes } = useLoaderData<typeof loader>();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <SideBar>
          <Form method="post" id="addForm">
            <button type="submit" className="addNewNote">
              New
            </button>
          </Form>
          <NotesList notes={notes} />
        </SideBar>
        <main>
          <Outlet />

          <ScrollRestoration />
          <Scripts />
        </main>
      </body>
    </html>
  );
}

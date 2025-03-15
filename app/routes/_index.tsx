import type { MetaFunction, LinksFunction } from "react-router";
import "../app.css";
import stylesHref from "../app.css?url";

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
  { rel: "stylesheet", href: stylesHref },
];

export default function Index() {
  return (
    <header>
      <h1>Welcome to Remix-notes-app</h1>
    </header>
  );
}

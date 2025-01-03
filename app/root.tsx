// Add this import at the top
import { LinksFunction } from "@remix-run/node";
import { currentFont } from "./config/fonts";

// Update the links function
export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: currentFont.url,
  },
];

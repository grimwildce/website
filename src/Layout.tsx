import type { ReactNode } from "react";
import { Links, Meta, Scripts } from "react-router";

import type { Route } from "./+types/root";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
  }
];

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" className="bg-page text-base-color font-text">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <title>Grimwild Community Edition</title>
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
};

export default Layout;

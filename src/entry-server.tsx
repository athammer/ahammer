// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Aaron Hammer - Full Stack Software Engineer, Founder, and Builder. Experienced in React, TypeScript, Golang, and building scalable web applications. Based in Stamford, CT."
          />
          <meta
            name="keywords"
            content="Aaron Hammer, Full Stack Engineer, Software Engineer, React, TypeScript, Golang, Web Developer, Stamford CT, Square, Block"
          />
          <meta name="author" content="Aaron Hammer" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Aaron Hammer | Full Stack Engineer"
          />
          <meta
            property="og:description"
            content="Full Stack Software Engineer, Founder, and Builder. Experienced in React, TypeScript, Golang, and building scalable web applications."
          />
          <meta property="og:site_name" content="Aaron Hammer" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@ahammer__" />
          <meta name="twitter:creator" content="@ahammer__" />
          <meta
            name="twitter:title"
            content="Aaron Hammer | Full Stack Engineer"
          />
          <meta
            name="twitter:description"
            content="Full Stack Software Engineer, Founder, and Builder. Experienced in React, TypeScript, Golang, and building scalable web applications."
          />

          {/* Canonical URL - will be set per page */}
          <link rel="canonical" href="https://ahammer.dev" />

          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossorigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));

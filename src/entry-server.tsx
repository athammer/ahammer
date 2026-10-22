// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#f7f4ef" />
          <meta name="author" content="Aaron Hammer" />
          <meta property="og:site_name" content="Aaron Hammer" />
          <meta property="og:locale" content="en_US" />
          <meta name="twitter:site" content="@ahammer__" />
          <meta name="twitter:creator" content="@ahammer__" />

          {/* Ties this site to the same person's profiles elsewhere */}
          <link rel="me" href="https://linkedin.com/in/athammer" />
          <link rel="me" href="https://github.com/athammer" />
          <link rel="me" href="https://x.com/ahammer__" />

          <link rel="icon" href="/favicon.ico" />
          <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossorigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Newsreader:ital,opsz,wght@0,6..72,400..700;1,6..72,400..700&display=swap"
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

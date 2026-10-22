import { SITE_URL } from "~/components/ui/Seo";
import { publishedBlogs } from "~/data/blogs";

// Built from the blog data so new posts show up without editing XML by hand.
// Drafts are left out because their pages are noindex.
export function GET() {
  const urls = [
    { path: "/" },
    { path: "/blogs" },
    ...publishedBlogs.map((blog) => ({
      path: `/blogs/${blog.slug}`,
      lastmod: blog.updated,
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ path, lastmod }) =>
      `  <url>\n    <loc>${SITE_URL}${path}</loc>\n${
        lastmod ? `    <lastmod>${lastmod}</lastmod>\n` : ""
      }  </url>`
  )
  .join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

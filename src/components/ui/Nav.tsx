import { useLocation } from "@solidjs/router";
import { TextLink } from "~/components/ui/Text";

export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "border-sky-600"
      : "border-transparent hover:border-sky-600";
  return (
    <header class="bg-white shadow">
      <nav class="container mx-auto flex flex-wrap items-center justify-between p-4 text-gray-700">
        <div class="text-lg font-semibold">
          <a href="/">Aaron Hammer</a>
        </div>

        <ul class="flex flex-wrap gap-4 text-sm">
          <li class={`border-b-2 ${active("/")}`}>
            <a href="/" class="hover:text-sky-600">
              Home
            </a>
          </li>
          <li class={`border-b-2 ${active("/blogs")}`}>
            <a href="/blogs" class="hover:text-sky-600">
              Blogs
            </a>
          </li>
          <li>
            <a
              href="https://x.com/ahammer__"
              target="_blank"
              rel="noopener"
              class="hover:text-sky-600"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/athammer/"
              target="_blank"
              rel="noopener"
              class="hover:text-sky-600"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/athammer"
              target="_blank"
              rel="noopener"
              class="hover:text-sky-600"
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

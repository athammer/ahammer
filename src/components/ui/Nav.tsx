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
          <TextLink href="/" variantColor="default" class="hover:text-sky-600">
            Aaron Hammer
          </TextLink>
        </div>

        <ul class="flex flex-wrap gap-4 text-sm">
          <li class={`border-b-2 ${active("/")}`}>
            <TextLink
              href="/"
              class="hover:text-sky-600"
              variantColor="default"
            >
              Home
            </TextLink>
          </li>
          <li class={`border-b-2 ${active("/blogs")}`}>
            <TextLink
              href="/blogs"
              class="hover:text-sky-600"
              variantColor="default"
            >
              Blogs
            </TextLink>
          </li>
          <li>
            <TextLink
              href="https://x.com/ahammer__"
              target="_blank"
              rel="noopener"
              class="hover:text-sky-600"
              variantColor="default"
            >
              Twitter
            </TextLink>
          </li>
          <li>
            <TextLink
              href="https://www.linkedin.com/in/athammer/"
              target="_blank"
              rel="noopener"
              class="hover:text-sky-600"
              variantColor="default"
            >
              LinkedIn
            </TextLink>
          </li>
          <li>
            <TextLink
              href="https://github.com/athammer"
              target="_blank"
              rel="noopener"
              class="hover:text-sky-600"
              variantColor="default"
            >
              GitHub
            </TextLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

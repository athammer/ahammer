import { A, useLocation } from "@solidjs/router";
import { randomBlog } from "~/features/blog/random-blog";

export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "border-sky-600"
      : "border-transparent hover:border-sky-600";

  return (
    <nav class="mb-8">
      <ul class="container flex items-center pr-3 font-semibold">
        <li class={`border-b-2 ${active("/")} mr-1.5 sm:mr-6`}>
          <A href="/blog">Home</A>
        </li>
        |
        <li class={`border-b-2 ${active("/blog")} mx-1.5 sm:mx-6`}>
          <A href={randomBlog()}>Random Blog</A>
        </li>
        |
        <li class={`border-b-2 ${active("/about")} mx-1.5 sm:mx-6`}>
          <a href="https://twitter.com/athammer_" target="_blank">
            Twitter
          </a>
        </li>
        |
        <li class={`border-b-2 ${active("/about")} mx-1.5 sm:mx-6`}>
          <a href="https://www.linkedin.com/in/athammer/" target="_blank">
            Linkedin
          </a>
        </li>
        |
        <li class={`border-b-2 ${active("/about")} mx-1.5 sm:mx-6`}>
          <a href="https://github.com/athammer" target="_blank">
            Github
          </a>
        </li>
      </ul>
    </nav>
  );
}

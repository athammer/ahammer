import { A, useLocation } from "@solidjs/router";
import { randomBlog } from "~/features/blog/random-blog";
import { Link } from "~/components/Link";

export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "border-sky-600"
      : "border-transparent hover:border-sky-600";

  return (
    <nav class="mb-8">
      <ul class="container flex items-center pr-3 font-semibold flex-wrap">
        <li class={`border-b-2 ${active("/")} mr-1.5 sm:mr-6`}>
          <Link href="/" defaultBlack>
            Home
          </Link>
        </li>
        |
        <li class={`border-b-2 ${active("/blog")} mx-1.5 sm:mx-6`}>
          <Link href={randomBlog()} defaultBlack>
            Random Blog
          </Link>
        </li>
        |
        <li class={`border-b-2 ${active("/about")} mx-1.5 sm:mx-6`}>
          <Link href="https://twitter.com/athammer_" defaultBlack external>
            Twitter
          </Link>
        </li>
        |
        <li class={`border-b-2 ${active("/about")} mx-1.5 sm:mx-6`}>
          <Link
            href="https://www.linkedin.com/in/athammer/"
            defaultBlack
            external
          >
            Linkedin
          </Link>
        </li>
        |
        <li class={`border-b-2 ${active("/about")} mx-1.5 sm:mx-6`}>
          <Link href="https://github.com/athammer" defaultBlack external>
            Github
          </Link>
        </li>
      </ul>
    </nav>
  );
}

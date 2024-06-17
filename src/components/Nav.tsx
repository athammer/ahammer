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
      <ul class="container flex items-center font-semibold flex-wrap gap-4 sm:gap-6">
        <li class={`border-b-2 ${active("/")} mr-5 sm:mr-6`}>
          <Link href="/" defaultBlack>
            Home
          </Link>
        </li>
        |
        <li class={`border-b-2 ${active("/blog")}`}>
          <Link href={randomBlog()} defaultBlack>
            Random Blog
          </Link>
        </li>
        |
        <li class={`border-b-2 ${active("/blog")}`}>
          <a href="/Aaron Taylor Hammer.pdf" download="Aaron Hammer's Resume">Resume</a>
        </li>
        |
        <li class={`border-b-2 ${active("/about")}`}>
          <Link href="https://twitter.com/ahammer_dev" defaultBlack external>
            Twitter
          </Link>
        </li>
        |
        <li class={`border-b-2 ${active("/about")}`}>
          <Link
            href="https://www.linkedin.com/in/athammer/"
            defaultBlack
            external
          >
            Linkedin
          </Link>
        </li>
        |
        <li class={`border-b-2 ${active("/about")}`}>
          <Link href="https://github.com/athammer" defaultBlack external>
            Github
          </Link>
        </li>
      </ul>
    </nav>
  );
}

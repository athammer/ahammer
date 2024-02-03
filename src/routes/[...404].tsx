import { A } from "@solidjs/router";
import { Link } from "~/components/Link";
import { randomBlog } from "~/features/blog/random-blog";

export default function NotFound() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="">Not Found :(</h1>
      <p>
        Try a <Link href={randomBlog()}>random blog post</Link> instead? :)
      </p>
    </main>
  );
}

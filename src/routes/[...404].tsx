import { A } from "@solidjs/router";
import { randomBlog } from "~/features/blog/random-blog";

export default function NotFound() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="">Not Found :(</h1>
      <p>
        Try a{" "}
        <A
          class=" border-b-2 border-transparent hover:border-sky-600"
          href={randomBlog()}
        >
          random blog post
        </A>{" "}
        instead? :)
      </p>
    </main>
  );
}

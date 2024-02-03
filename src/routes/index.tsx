import { A } from "@solidjs/router";

import Title from "~/features/Title";
import Blog from "~/features/blog/ui/Blog";
import Work from "~/features/Work";
import Project from "~/features/Project";

export default function Home() {
  return (
    <main class="mx-auto text-gray-700">
      <div>
        <Title />
        <Blog />
        <Work />
        <Project />
      </div>
    </main>
  );
}

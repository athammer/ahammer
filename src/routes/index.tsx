import Title from "~/features/Title";
import Blog from "~/features/blog/ui/Blog";
import Work from "~/features/Work";
import Project from "~/features/Project";

export default function Home() {
  return (
    <main class="mx-auto text-gray-800">
      <div>
        <Title />
        <Blog />
        <Work />
        <Project />
      </div>
    </main>
  );
}

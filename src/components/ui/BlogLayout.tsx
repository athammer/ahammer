import { JSX, Component } from "solid-js";
import { cn } from "~/utils/styles";
import { Text } from "~/components/ui/Text";
// @ts-ignore - provided by runtime
import { Title } from "@solidjs/meta";

// Defines a centered, padded container with consistent typography spacing for blog posts.
const BlogLayout: Component<{
  children: JSX.Element;
  title: string;
  date: string;
  visitors: number;
}> = (props) => {
  return (
    <main class="mx-auto max-w-3xl p-8 text-gray-800">
      <Title>{props.title + " | Aaron Hammer"}</Title>
      <article class={cn("space-y-6")}>
        <header>
          <Text variant="h1" class="mb-2">
            {props.title}
          </Text>
          <div class="flex items-center gap-2 justify-between">
            <Text variant="small" variantColor="muted">
              {props.date}
            </Text>
            <Text variant="small" variantColor="muted">
              {props.visitors} views
            </Text>
          </div>
        </header>
        {props.children}
      </article>
    </main>
  );
};

export default BlogLayout;

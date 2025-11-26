import { JSX, Component, createSignal, onMount } from "solid-js";
import { cn } from "~/utils/styles";
import { Text } from "~/components/ui/Text";
// @ts-ignore - provided by runtime
import { Title } from "@solidjs/meta";

// Defines a centered, padded container with consistent typography spacing for blog posts.
const BlogLayout: Component<{
  children: JSX.Element;
  title: string;
  date: string;
  id: number;
}> = (props) => {
  const [views, setViews] = createSignal(0);
  const [loading, setLoading] = createSignal(true);

  onMount(async () => {
    try {
      const viewedKey = `blog_viewed_${props.id}`;
      const hasViewed = sessionStorage.getItem(viewedKey);

      if (hasViewed) {
        // Already viewed in this session, just fetch the count
        console.log(`Fetching view count for blog ${props.id} (already viewed)`);
        const response = await fetch(`/api/views/${props.id}`);
        if (response.ok) {
          const data = await response.json();
          console.log(`Got view count for blog ${props.id}:`, data.views);
          setViews(data.views);
        } else {
          console.error(`Failed to fetch views for blog ${props.id}:`, response.status);
        }
      } else {
        // First view in this session, increment the count
        console.log(`Incrementing view count for blog ${props.id} (first view)`);
        const response = await fetch(`/api/views/${props.id}`, {
          method: "POST",
        });

        if (response.ok) {
          const data = await response.json();
          console.log(`Incremented view count for blog ${props.id}:`, data.views);
          setViews(data.views);
          // Mark as viewed in this session
          sessionStorage.setItem(viewedKey, "true");
        } else {
          console.error(`Failed to increment views for blog ${props.id}:`, response.status);
        }
      }
    } catch (error) {
      console.error("Failed to fetch/increment view count:", error);
    } finally {
      setLoading(false);
    }
  });

  return (
    <main class="mx-auto max-w-4xl p-6 md:p-10 my-4 bg-white/80 backdrop-blur-md text-gray-800 shadow-xl ring-1 ring-gray-200 rounded-2xl">
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
              {loading() ? "..." : `${views().toLocaleString()} views`}
            </Text>
          </div>
        </header>
        {props.children}
      </article>
    </main>
  );
};

export default BlogLayout;

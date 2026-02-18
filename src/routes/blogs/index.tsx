// @ts-ignore - provided by runtime
import { Title } from "@solidjs/meta";
import { Text } from "~/components/ui/Text";
import { blogs, type Blog } from "~/data/blogs";
import { createSignal, onMount, For } from "solid-js";

type BlogWithViews = Blog & { viewCount: number; loading: boolean };

export default function BlogsList() {
  const [blogsWithViews, setBlogsWithViews] = createSignal<BlogWithViews[]>(
    blogs.map((blog) => ({ ...blog, viewCount: 0, loading: true }))
  );

  onMount(async () => {
    // Fetch fresh data
    const viewPromises = blogs.map(async (blog) => {
      try {
        const response = await fetch(`/api/views/${blog.id}`);
        if (response.ok) {
          const data = await response.json();
          return { ...blog, viewCount: data.views, loading: false };
        } else {
          console.error(
            `Failed to fetch views for blog ${blog.id}: ${response.status}`
          );
        }
      } catch (error) {
        console.error(`Failed to fetch views for blog ${blog.id}:`, error);
      }
      return { ...blog, viewCount: 0, loading: false };
    });

    const results = await Promise.all(viewPromises);
    setBlogsWithViews(results);
  });

  return (
    <>
      <Title>Blogs | Aaron Hammer</Title>
      <meta
        name="description"
        content="Technical blog posts by Aaron Hammer on software engineering, full stack development, alerts, observability, and building scalable systems."
      />
      <main class="mx-auto max-w-3xl my-4">
        <div class="bg-white shadow-sm ring-1 ring-gray-200 rounded-2xl p-6 md:p-10">
          <header class="text-center pb-6 border-b border-gray-100 mb-8">
            <Text variant="h1" class="mb-2">
              Blogs
            </Text>
            <Text variant="small" variantColor="muted" class="mb-0">
              random thoughts, random blogs
            </Text>
          </header>

          {/* Group blogs by year */}
          <ul class="space-y-8">
            {Object.keys(
              blogsWithViews().reduce(
                (acc: Record<number, BlogWithViews[]>, blog) => {
                  (acc[blog.year] ||= []).push(blog);
                  return acc;
                },
                {}
              )
            )
              .sort((a, b) => Number(b) - Number(a))
              .map((year) => {
                const yearBlogs = blogsWithViews().filter(
                  (b) => b.year === Number(year)
                );
                return (
                  <li>
                    <Text
                      variant="small"
                      variantColor="muted"
                      class="mb-3 tracking-widest uppercase font-semibold"
                    >
                      {year}
                    </Text>
                    <ul class="space-y-1">
                      <For each={yearBlogs}>
                        {(blog) => (
                          <li>
                            <a
                              href={`/blogs/${blog.slug}`}
                              class="group flex items-baseline justify-between gap-6 py-2.5 border-b border-gray-100 last:border-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                              aria-label={`Read blog post: ${blog.title}`}
                            >
                              <span class="font-poppins text-base text-gray-800 group-hover:text-blue-600 transition-colors">
                                {blog.title}
                              </span>
                              <span class="text-sm text-gray-400 shrink-0 whitespace-nowrap">
                                {blog.loading ? (
                                  <span class="opacity-0">0 views</span>
                                ) : (
                                  `${blog.viewCount.toLocaleString()} views`
                                )}
                              </span>
                            </a>
                          </li>
                        )}
                      </For>
                    </ul>
                  </li>
                );
              })}
          </ul>
        </div>
      </main>
    </>
  );
}

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
      <main class="mx-auto max-w-3xl p-6 md:p-10 text-gray-800 space-y-6">
        <header class="text-center">
          <Text variant="h1" class="mb-2">
            Blogs
          </Text>
          <Text variant="small" variantColor="muted">
            random thoughts random blogs
          </Text>
          <Text variant="small" variantColor="muted">
            sorry blogs are still a work in progress :(
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
                    variant="large"
                    variantColor="secondary"
                    class="mb-2 pl-1 tracking-wide uppercase"
                  >
                    {year}
                  </Text>
                  <ul class="space-y-4">
                    <For each={yearBlogs}>
                      {(blog) => (
                        <li>
                          <a
                            href={`/blogs/${blog.slug}`}
                            class="group block p-1 rounded-lg transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                            aria-label={`Read blog post: ${blog.title}`}
                          >
                            <article class="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                              <Text
                                variant="h4"
                                class="flex-1 group-hover:text-blue-600 transition-colors"
                              >
                                {blog.title}
                              </Text>
                              <div class="flex items-center gap-4 text-sm text-gray-400 shrink-0">
                                <span class="whitespace-nowrap">
                                  {blog.loading ? (
                                    <span class="opacity-0">0 views</span>
                                  ) : (
                                    `${blog.viewCount.toLocaleString()} views`
                                  )}
                                </span>
                              </div>
                            </article>
                          </a>
                        </li>
                      )}
                    </For>
                  </ul>
                </li>
              );
            })}
        </ul>
      </main>
    </>
  );
}

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
    // Try to load from session storage first
    const cachedViews = sessionStorage.getItem("blog_views_cache");
    const cacheTimestamp = sessionStorage.getItem("blog_views_cache_time");
    const CACHE_DURATION = 60_000 * 30; // 30 minutes in milliseconds

    if (cachedViews && cacheTimestamp) {
      const age = Date.now() - parseInt(cacheTimestamp, 10);
      if (age < CACHE_DURATION) {
        // Use cached data if it's fresh
        console.log("Using cached data");
        const cached = JSON.parse(cachedViews);
        setBlogsWithViews(
          blogs.map((blog) => ({
            ...blog,
            viewCount: cached[blog.id] || 0,
            loading: false,
          }))
        );
        return;
      }
    }

    // Fetch fresh data
    const viewPromises = blogs.map(async (blog) => {
      try {
        const response = await fetch(`/api/views/${blog.id}`);
        if (response.ok) {
          const data = await response.json();
          return { ...blog, viewCount: data.views, loading: false };
        }
      } catch (error) {
        console.error(`Failed to fetch views for blog ${blog.id}:`, error);
      }
      return { ...blog, viewCount: 0, loading: false };
    });

    const results = await Promise.all(viewPromises);
    setBlogsWithViews(results);

    // Cache the results
    const viewsCache: Record<number, number> = {};
    results.forEach((blog) => {
      viewsCache[blog.id] = blog.viewCount;
    });
    sessionStorage.setItem("blog_views_cache", JSON.stringify(viewsCache));
    sessionStorage.setItem("blog_views_cache_time", Date.now().toString());
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
                            class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 p-5 rounded-lg bg-white/80 shadow-sm hover:shadow-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                            aria-label={`Read blog post: ${blog.title}`}
                          >
                            <Text variant="h4" class="flex-1">
                              {blog.title}
                            </Text>
                            <Text
                              variant="small"
                              variantColor="muted"
                              class="whitespace-nowrap w-20 text-right"
                            >
                              {blog.loading ? (
                                <span class="opacity-0">0 views</span>
                              ) : (
                                `${blog.viewCount.toLocaleString()} views`
                              )}
                            </Text>
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

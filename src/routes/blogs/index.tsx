// @ts-ignore - provided by runtime
import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";
import { createSignal, onMount, For, Show } from "solid-js";
import { MarginRow, Page } from "~/components/ui/Layout";
import { blogs, type Blog } from "~/data/blogs";

type BlogWithViews = Blog & { viewCount: number; loading: boolean };

type Group = { label: string; posts: BlogWithViews[] };

export default function BlogsList() {
  const [blogsWithViews, setBlogsWithViews] = createSignal<BlogWithViews[]>(
    blogs.map((blog) => ({ ...blog, viewCount: 0, loading: true }))
  );

  onMount(async () => {
    // Fetch fresh data
    const viewPromises = blogs.map(async (blog) => {
      if (blog.draft) return { ...blog, viewCount: 0, loading: false };
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

  // Published posts grouped by year (newest first), drafts collected last.
  const groups = (): Group[] => {
    const byYear = new Map<number, BlogWithViews[]>();
    const drafts: BlogWithViews[] = [];
    for (const blog of blogsWithViews()) {
      if (blog.draft) drafts.push(blog);
      else byYear.set(blog.year, [...(byYear.get(blog.year) ?? []), blog]);
    }
    const result: Group[] = [...byYear.entries()]
      .sort(([a], [b]) => b - a)
      .map(([year, posts]) => ({ label: String(year), posts }));
    if (drafts.length) result.push({ label: "Drafting", posts: drafts });
    return result;
  };

  return (
    <>
      <Title>Blog | Aaron Hammer</Title>
      <meta
        name="description"
        content="Technical blog posts by Aaron Hammer on software engineering, full stack development, alerts, observability, and building scalable systems."
      />
      <Page>
        <header class="mb-14 md:mb-16">
          <h1 class="font-serif text-[2.625rem] font-medium leading-[1.05] tracking-[-0.02em] text-ink md:text-[3.5rem]">
            Blog
          </h1>
          <p class="mt-3 text-lg italic text-muted">
            random thoughts, random blogs
          </p>
        </header>

        <div class="space-y-10">
          <For each={groups()}>
            {(group) => (
              <MarginRow aside={group.label}>
                <ul class="divide-y divide-rule border-y border-rule">
                  <For each={group.posts}>
                    {(blog) => (
                      <li>
                        <Show
                          when={!blog.draft}
                          fallback={
                            <p class="py-3.5 text-[1.0625rem] leading-snug text-muted">
                              {blog.title}
                            </p>
                          }
                        >
                          <A
                            href={`/blogs/${blog.slug}`}
                            class="group flex items-baseline justify-between gap-6 py-3.5"
                          >
                            <span class="text-[1.0625rem] leading-snug text-ink underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-accent">
                              {blog.title}
                            </span>
                            <span class="shrink-0 whitespace-nowrap font-mono text-[0.8125rem] text-muted">
                              <Show
                                when={!blog.loading}
                                fallback={<span class="opacity-0">0 views</span>}
                              >
                                {blog.viewCount.toLocaleString()}{" "}
                                {blog.viewCount === 1 ? "view" : "views"}
                              </Show>
                            </span>
                          </A>
                        </Show>
                      </li>
                    )}
                  </For>
                </ul>
              </MarginRow>
            )}
          </For>
        </div>
      </Page>
    </>
  );
}

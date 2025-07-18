import { Text } from "~/components/ui/Text";
import { blogs, type Blog } from "~/data/blogs";

export default function BlogsList() {
  return (
    <main class="mx-auto max-w-3xl p-8 text-gray-800 space-y-6">
      <header class="text-center">
        <Text variant="h1" class="mb-2">
          Blogs
        </Text>
        <Text variant="small" variantColor="muted">
          random thoughts random blogs
        </Text>
      </header>

      {/* Group blogs by year */}
      <ul class="space-y-8">
        {Object.keys(
          blogs.reduce((acc: Record<number, Blog[]>, blog) => {
            (acc[blog.year] ||= []).push(blog);
            return acc;
          }, {})
        )
          .sort((a, b) => Number(b) - Number(a))
          .map((year) => {
            const yearBlogs = blogs.filter((b) => b.year === Number(year));
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
                  {yearBlogs.map((blog) => (
                    <li>
                      <a
                        href={`/blogs/${blog.slug}`}
                        class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 p-4 rounded-lg bg-white/80 shadow-sm hover:shadow-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                        aria-label={`Read blog post: ${blog.title}`}
                      >
                        <Text variant="h3" class="flex-1">
                          {blog.title}
                        </Text>
                        <Text
                          variant="small"
                          variantColor="muted"
                          class="whitespace-nowrap"
                        >
                          {blog.visitors.toLocaleString()} views
                        </Text>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
      </ul>
    </main>
  );
}

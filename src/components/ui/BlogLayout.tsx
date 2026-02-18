import { JSX, Component, createSignal, onMount, onCleanup } from "solid-js";
import { cn } from "~/utils/styles";
import { Text } from "~/components/ui/Text";
// @ts-ignore - provided by runtime
import { Title } from "@solidjs/meta";

// Defines a centered, padded container with consistent typography spacing for blog posts.
const BlogLayout: Component<{
  children: JSX.Element;
  title: string;
  date: string;
  lastEdited?: string;
  id: number;
}> = (props) => {
  const [views, setViews] = createSignal(0);
  const [loading, setLoading] = createSignal(true);
  const [progress, setProgress] = createSignal(0);
  const [readTime, setReadTime] = createSignal(0);
  let articleRef: HTMLElement | undefined;

  const handleScroll = () => {
    if (!articleRef) return;

    const scrollTop = window.scrollY;
    const articleTop = articleRef.offsetTop;
    const articleHeight = articleRef.clientHeight;
    const winHeight = window.innerHeight;

    // Start tracking only after we scroll past the header (approximate)
    const startOffset = articleTop;
    // The total scrollable distance of the article itself
    const endOffset = articleTop + articleHeight - winHeight;

    if (scrollTop < startOffset) {
      setProgress(0);
    } else if (scrollTop > endOffset) {
      setProgress(1);
    } else {
      const p = (scrollTop - startOffset) / (endOffset - startOffset);
      setProgress(Math.min(Math.max(p, 0), 1));
    }
  };

  onMount(async () => {
    window.addEventListener("scroll", handleScroll);

    // Calculate read time
    if (articleRef) {
      const text = articleRef.innerText;
      const wpm = 225;
      const words = text.trim().split(/\s+/).length;
      const time = Math.ceil(words / wpm);
      setReadTime(time);
    }

    try {
      const viewedKey = `blog_viewed_${props.id}`;
      const hasViewed = sessionStorage.getItem(viewedKey);

      if (hasViewed) {
        // Already viewed in this session, just fetch the count
        const response = await fetch(`/api/views/${props.id}`);
        if (response.ok) {
          const data = await response.json();
          setViews(data.views);
        }
      } else {
        // First view in this session, increment the count
        const response = await fetch(`/api/views/${props.id}`, {
          method: "POST",
        });

        if (response.ok) {
          const data = await response.json();
          setViews(data.views);
          // Mark as viewed in this session
          sessionStorage.setItem(viewedKey, "true");
        }
      }
    } catch (error) {
      console.error("Failed to fetch/increment view count:", error);
    } finally {
      setLoading(false);
    }
  });

  onCleanup(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("scroll", handleScroll);
    }
  });

  return (
    <>
      <Title>{props.title + " | Aaron Hammer"}</Title>

      {/* Progress Bar */}
      <div
        class="fixed top-0 left-0 w-full h-1 bg-blue-500/90 z-[100] transition-all duration-150 ease-out origin-left shadow-[0_1px_2px_rgba(59,130,246,0.3)]"
        style={{ transform: `scaleX(${progress()})` }}
      />

      <main class="mx-auto max-w-3xl my-4">
        <div class="bg-white shadow-sm ring-1 ring-gray-200 rounded-2xl px-6 py-10 md:px-12 md:py-14">
          <article ref={articleRef} class={cn("space-y-8")}>
            <header class="text-center space-y-4 pb-8 border-b border-gray-100">
              <Text
                variant="small"
                class="font-semibold tracking-widest uppercase text-gray-400"
              >
                {props.date}
              </Text>
              <Text
                variant="h1"
                class="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight"
              >
                {props.title}
              </Text>
              <div class="flex items-center justify-center gap-3 text-gray-400 text-sm font-medium font-poppins">
                <span>{readTime()} min read</span>
                <span>·</span>
                <span>
                  {loading() ? "..." : `${views().toLocaleString()} views`}
                </span>
                {props.lastEdited && (
                  <>
                    <span>·</span>
                    <span>Updated {props.lastEdited}</span>
                  </>
                )}
              </div>
            </header>

            <div class="text-base leading-relaxed text-gray-700 space-y-6">
              {props.children}
            </div>

            <footer class="pt-8 border-t border-gray-100">
              <div class="text-center space-y-4">
                <Text variant="small" variantColor="muted">
                  Enjoyed this post? Share it.
                </Text>
                <div class="flex justify-center gap-3">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert("Link copied to clipboard!");
                    }}
                    class="px-4 py-2 border border-gray-300 bg-white rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition cursor-pointer"
                  >
                    Copy Link
                  </button>
                  <button
                    onClick={() => {
                      const url = window.location.href;
                      const text = props.title;
                      window.open(
                        `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                          text
                        )}&url=${encodeURIComponent(url)}`,
                        "_blank"
                      );
                    }}
                    class="px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-medium hover:bg-gray-700 transition cursor-pointer"
                  >
                    Share on X
                  </button>
                </div>
              </div>
            </footer>
          </article>
        </div>
      </main>
    </>
  );
};

export default BlogLayout;

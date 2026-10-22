import {
  JSX,
  Component,
  createSignal,
  onMount,
  onCleanup,
  For,
  Show,
} from "solid-js";
import { A, useLocation } from "@solidjs/router";
import { ExternalArrow, MarginRow, Page } from "~/components/ui/Layout";
import { publishedBlogs } from "~/data/blogs";
// @ts-ignore - provided by runtime
import { Title } from "@solidjs/meta";

const SITE_URL = "https://ahammer.dev";

// Article page laid out on the same margin grid as the resume.
const BlogLayout: Component<{
  children: JSX.Element;
  title: string;
  date: string;
  lastEdited?: string;
  id: number;
}> = (props) => {
  const location = useLocation();
  const [views, setViews] = createSignal(0);
  const [loading, setLoading] = createSignal(true);
  const [progress, setProgress] = createSignal(0);
  const [readTime, setReadTime] = createSignal(0);
  const [copied, setCopied] = createSignal(false);
  let articleRef: HTMLElement | undefined;
  let bodyRef: HTMLDivElement | undefined;
  let copiedTimer: ReturnType<typeof setTimeout> | undefined;

  const shareUrl = () => SITE_URL + location.pathname;
  const morePosts = () => publishedBlogs.filter((blog) => blog.id !== props.id);

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

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      clearTimeout(copiedTimer);
      copiedTimer = setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  };

  onMount(async () => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Calculate read time
    if (bodyRef) {
      const text = bodyRef.innerText;
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
    clearTimeout(copiedTimer);
    if (typeof window !== "undefined") {
      window.removeEventListener("scroll", handleScroll);
    }
  });

  return (
    <>
      <Title>{props.title + " | Aaron Hammer"}</Title>

      {/* Reading progress */}
      <div
        aria-hidden="true"
        class="no-print fixed left-0 top-0 z-50 h-0.5 w-full origin-left bg-accent transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress()})` }}
      />

      <Page class="pt-8 md:pt-12">
        <A
          href="/blogs"
          class="no-print mb-10 inline-block font-mono text-[0.8125rem] text-muted transition-colors hover:text-ink md:mb-14"
        >
          ← All posts
        </A>

        <article ref={articleRef}>
          <header class="mb-12">
            <MarginRow aside={props.date}>
              <h1 class="text-balance font-serif text-[2.25rem] font-medium leading-[1.1] tracking-[-0.015em] text-ink md:text-[2.75rem]">
                {props.title}
              </h1>
              <p class="mt-4 flex flex-wrap gap-x-2 font-mono text-[0.8125rem] text-muted">
                <Show when={readTime() > 0}>
                  <span>{readTime()} min read</span>
                  <span aria-hidden="true">·</span>
                </Show>
                <span>
                  {loading()
                    ? "– views"
                    : `${views().toLocaleString()} ${views() === 1 ? "view" : "views"}`}
                </span>
                <Show when={props.lastEdited}>
                  <span aria-hidden="true">·</span>
                  <span>Updated {props.lastEdited}</span>
                </Show>
              </p>
            </MarginRow>
          </header>

          <MarginRow>
            <div
              ref={bodyRef}
              class="space-y-6 [&_h2]:pt-6 [&_h3]:pt-3 [&_h4]:pt-2"
            >
              {props.children}
            </div>
          </MarginRow>
        </article>

        <footer class="no-print mt-16 space-y-8 border-t border-rule pt-8">
          <MarginRow aside="Share">
            <div class="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[0.8125rem]">
              <button
                type="button"
                onClick={copyLink}
                class="cursor-pointer text-ink-soft transition-colors hover:text-ink"
              >
                <span aria-live="polite">
                  {copied() ? "Copied ✓" : "Copy link"}
                </span>
              </button>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  props.title
                )}&url=${encodeURIComponent(shareUrl())}`}
                target="_blank"
                rel="noopener"
                class="text-ink-soft transition-colors hover:text-ink"
              >
                Post on X
                <ExternalArrow />
              </a>
            </div>
          </MarginRow>

          <MarginRow aside="More">
            <ul class="space-y-2">
              <For each={morePosts()}>
                {(blog) => (
                  <li>
                    <A
                      href={`/blogs/${blog.slug}`}
                      class="text-ink underline decoration-rule underline-offset-4 hover:decoration-accent"
                    >
                      {blog.title}
                    </A>
                  </li>
                )}
              </For>
              <li>
                <A
                  href="/blogs"
                  class="font-mono text-[0.8125rem] text-muted transition-colors hover:text-ink"
                >
                  All posts →
                </A>
              </li>
            </ul>
          </MarginRow>
        </footer>
      </Page>
    </>
  );
};

export default BlogLayout;

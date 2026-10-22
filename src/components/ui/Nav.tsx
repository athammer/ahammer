import { A, useLocation } from "@solidjs/router";
import { For } from "solid-js";
import { ExternalArrow, PAGE_WIDTH } from "~/components/ui/Layout";
import { contact } from "~/data/resume";
import { cn } from "~/utils/styles";

const internalLinks = [
  { label: "Resume", href: "/", match: (p: string) => p === "/" || p === "/resume" },
  { label: "Blog", href: "/blogs", match: (p: string) => p.startsWith("/blogs") },
];

export default function Nav() {
  const location = useLocation();

  return (
    <header class="no-print border-b border-rule">
      <a
        href="#main"
        class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:bg-paper focus:px-2 font-mono text-sm"
      >
        Skip to content
      </a>
      <nav
        class={cn(PAGE_WIDTH, "flex h-14 items-center justify-between gap-6")}
      >
        <A href="/" class="font-serif text-lg font-semibold text-ink">
          Aaron Hammer
        </A>

        <ul class="flex items-center gap-5 font-mono text-[0.8125rem] sm:gap-6">
          <For each={internalLinks}>
            {(link) => {
              const active = () => link.match(location.pathname);
              return (
                <li>
                  <A
                    href={link.href}
                    aria-current={active() ? "page" : undefined}
                    class={cn(
                      "py-1 transition-colors",
                      active()
                        ? "text-ink underline decoration-accent decoration-2 underline-offset-[6px]"
                        : "text-muted hover:text-ink"
                    )}
                  >
                    {link.label}
                  </A>
                </li>
              );
            }}
          </For>
          <For each={contact.links}>
            {(link) => (
              <li class="hidden sm:block">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener"
                  class="py-1 text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                  <ExternalArrow />
                </a>
              </li>
            )}
          </For>
        </ul>
      </nav>
    </header>
  );
}

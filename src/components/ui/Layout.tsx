import { Component, JSX } from "solid-js";
import { cn } from "~/utils/styles";

// Page column shared by every route so the nav, resume, and posts line up.
export const PAGE_WIDTH = "mx-auto w-full max-w-[52rem] px-5 md:px-8";

export const Page: Component<{ children: JSX.Element; class?: string }> = (
  props
) => (
  <main id="main" class={cn(PAGE_WIDTH, "pt-12 pb-24 md:pt-20", props.class)}>
    {props.children}
  </main>
);

// Two-column row in the style of a printed CV: dates and labels sit in the
// left margin, content on the right. Collapses to a stack on small screens.
export const MarginRow: Component<{
  aside?: JSX.Element;
  children: JSX.Element;
  class?: string;
}> = (props) => (
  <div
    class={cn(
      "md:grid md:grid-cols-[10rem_minmax(0,1fr)] md:items-baseline md:gap-x-10",
      props.class
    )}
  >
    <div class="mb-1 font-mono text-[0.8125rem] leading-6 text-muted empty:hidden md:mb-0 md:empty:block">
      {props.aside}
    </div>
    <div class="min-w-0">{props.children}</div>
  </div>
);

export const SectionLabel: Component<{ children: JSX.Element; id?: string }> = (
  props
) => (
  <h2
    id={props.id}
    class="mb-8 flex items-center gap-4 font-mono text-xs font-medium uppercase tracking-[0.16em] text-muted after:h-px after:flex-1 after:bg-rule"
  >
    {props.children}
  </h2>
);

export const ExternalArrow = () => (
  <span aria-hidden="true" class="ml-0.5 text-[0.85em] text-muted">
    ↗
  </span>
);

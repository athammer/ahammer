import { A } from "@solidjs/router";
import { HttpStatusCode } from "@solidjs/start";
import { createSignal, onMount, onCleanup, Show } from "solid-js";
import { MarginRow, Page } from "~/components/ui/Layout";
import Seo from "~/components/ui/Seo";

export default function NotFound() {
  // game state
  const GAME_DURATION = 30; // seconds
  const HAMMER_SIZE = 48; // px – approximate

  const [score, setScore] = createSignal(0);
  const [timeLeft, setTimeLeft] = createSignal(GAME_DURATION);
  const [playing, setPlaying] = createSignal(true);
  const [position, setPosition] = createSignal({ x: 0, y: 0 });
  let containerRef: HTMLDivElement | undefined;
  let timer: ReturnType<typeof setInterval> | undefined;

  function randomizePosition() {
    if (!containerRef) return;
    const rect = containerRef.getBoundingClientRect();
    const maxX = rect.width - HAMMER_SIZE;
    const maxY = rect.height - HAMMER_SIZE;
    setPosition({
      x: Math.random() * maxX,
      y: Math.random() * maxY,
    });
  }

  function startGame() {
    clearInterval(timer);
    setScore(0);
    setTimeLeft(GAME_DURATION);
    setPlaying(true);
    randomizePosition();
    timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timer);
          setPlaying(false);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  }

  onMount(startGame);
  onCleanup(() => clearInterval(timer));

  return (
    <>
      <HttpStatusCode code={404} />
      <Seo
        title="404 Not Found | Aaron Hammer"
        description="This page doesn't exist."
        noindex
      />
      <Page>
        <header class="mb-12">
          <MarginRow aside="404">
            <h1 class="font-serif text-[2.625rem] font-medium leading-[1.05] tracking-[-0.02em] text-ink md:text-[3.5rem]">
              Nothing here.
            </h1>
            <p class="mt-4 text-lg text-ink-soft">
              That page doesn't exist. While you're here, whack some hammers,
              or head back to the{" "}
              <A
                href="/"
                class="text-ink underline decoration-accent/50 underline-offset-4 hover:decoration-accent"
              >
                resume
              </A>
              .
            </p>
          </MarginRow>
        </header>

        <MarginRow
          class="md:items-start"
          aside={
            <div class="space-y-1 tabular-nums">
              <div>Time {timeLeft()}s</div>
              <div class="text-ink">Score {score()}</div>
            </div>
          }
        >
          <div
            ref={containerRef}
            class="relative h-72 w-full overflow-hidden border border-dashed border-rule bg-white/40"
          >
            <Show
              when={playing()}
              fallback={
                <div class="flex h-full flex-col items-center justify-center gap-3 text-center">
                  <p class="text-lg text-ink">
                    You smashed {score()} hammer{score() === 1 ? "" : "s"}.
                  </p>
                  <button
                    type="button"
                    class="cursor-pointer border border-ink px-4 py-1.5 font-mono text-[0.8125rem] text-ink transition-colors hover:bg-ink hover:text-paper"
                    onClick={startGame}
                  >
                    Play again
                  </button>
                </div>
              }
            >
              <button
                type="button"
                aria-label="Hammer"
                class="absolute cursor-pointer select-none text-5xl leading-none transition-transform duration-150 active:scale-125"
                style={{ top: `${position().y}px`, left: `${position().x}px` }}
                onClick={() => {
                  setScore((s) => s + 1);
                  randomizePosition();
                }}
              >
                🔨
              </button>
            </Show>
          </div>
        </MarginRow>
      </Page>
    </>
  );
}

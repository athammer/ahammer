// @ts-ignore - provided by runtime
import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";
import { createSignal, onMount, onCleanup, Show } from "solid-js";
import { Text } from "~/components/ui/Text";

export default function NotFound() {
  // game state
  const GAME_DURATION = 30; // seconds
  const HAMMER_SIZE = 40; // px – approximate

  const [score, setScore] = createSignal(0);
  const [timeLeft, setTimeLeft] = createSignal(GAME_DURATION);
  const [playing, setPlaying] = createSignal(true);
  const [position, setPosition] = createSignal({ x: 0, y: 0 });
  let containerRef: HTMLDivElement | undefined;

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

  onMount(() => {
    randomizePosition();
    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timer);
          setPlaying(false);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    onCleanup(() => clearInterval(timer));
  });

  return (
    <>
      <Title>404 Not Found | Aaron Hammer</Title>
      <main class="text-center mx-auto text-gray-700 p-4">
        <Text variant="h1" class="mb-4">
          Oops! Not Found
        </Text>
        <Text variant="h4" variantColor="secondary" class="mb-4">
          But while you're here, click some hammers 🔨
        </Text>

        {/* Scoreboard */}
        <Text variant="h3">
          Time Left: {timeLeft()}s | Score: {score()}
        </Text>

        {/* Game area */}
        <div
          ref={containerRef}
          class="relative mx-auto mt-6 w-full max-w-lg h-72 bg-white/60 backdrop-blur-sm rounded-lg shadow-lg border border-sky-200 overflow-hidden"
        >
          {/* Star */}
          <Show when={playing()}>
            <div
              class="absolute cursor-pointer select-none text-5xl transition-transform duration-150 active:scale-125"
              style={{ top: `${position().y}px`, left: `${position().x}px` }}
              onClick={() => {
                if (!playing()) return;
                setScore((s) => s + 1);
                randomizePosition();
              }}
            >
              🔨
            </div>
          </Show>
        </div>

        {/* Game over & actions */}
        <Show when={!playing()}>
          <Text variant="h4">
            Game Over! You smashed {score()} hammer{score() === 1 ? "" : "s"}.
          </Text>
          <button
            class="mt-2 bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700"
            onClick={() => window.location.reload()}
          >
            Play Again
          </button>
        </Show>

        {/* Links */}
        <Text variant="h4" class="mt-4">
          <A href="/" class="text-sky-600 hover:underline">
            Home
          </A>{" "}
          - 404 Not Found
        </Text>
      </main>
    </>
  );
}

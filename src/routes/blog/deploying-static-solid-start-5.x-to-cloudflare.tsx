import { BlogPost } from "~/features/blog/ui/BlogPost";
import { BlogParagraph } from "~/features/blog/ui/BlogParagraph";
import { Link } from "~/components/Link";

import { CodeBlock } from "~/features/blog/ui/CodeBlock";
import { Suspense } from "solid-js";

export default function DeployingSolidStartCloudflare() {
  return (
    <BlogPost title="Deploying your Statis Solid Start 5.x to Cloudflare">
      <BlogParagraph>
        <Link href="https://vinxi.vercel.app/">SolidStart</Link>, a
        meta-framework for <Link href="https://www.solidjs.com/">SolidJS</Link>{" "}
        recently went through a large shift in philosophy in it's latest 4.0
        release. They introduced{" "}
        <Link href="https://vinxi.vercel.app/">Vinxi</Link>, an agnostic
        Framework Bundler that leverages the power of{" "}
        <Link href="https://vitest.dev/">Vite</Link> and{" "}
        <Link href="https://nitro.unjs.io/">Nitro</Link>. With this change
        SolidStart can focus more on the core framework and less on the bundler
        and server. However this means the deploy processes has also shifted.
        process has also shifted.
      </BlogParagraph>

      <BlogParagraph subtitle="Updating your Vite Config">
        <Suspense>
          <CodeBlock
            code={`
import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  start: {
    server: {
      preset: "cloudflare-pages",
      prerender: {
        crawlLinks: true,
      },
    },
    ssr: true,
  },
});
          `}
          />
        </Suspense>
      </BlogParagraph>
    </BlogPost>
  );
}

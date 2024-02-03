import { BlogPost } from "~/features/blog/ui/BlogPost";
import { BlogParagraph } from "~/features/blog/ui/BlogParagraph";
import { Link } from "~/components/Link";

import { CodeBlock } from "~/features/blog/ui/CodeBlock";
import { Suspense } from "solid-js";

export default function DeployingSolidStartCloudflarePages() {
  return (
    <BlogPost title="Deploying your Statis Solid Start 5.x to Cloudflare Pages">
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
        process has also shifted. This broke a lot of deployment processes for
        people who were using the previous version of SolidStart. This blog post
        will cover how to fix your SolidStart 5.x deploy to Cloudflare Pages.
      </BlogParagraph>

      <BlogParagraph subtitle="Updating your Vite Config">
        The first step in deploying your SolidStart 5.x to Cloudflare is to
        update your Vite config. You will need to add the "cloudflare-pages"
        preset to your Vite config shown below.
        <Suspense>
          <CodeBlock
            code={`
import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  start: {
    server: {
      preset: "cloudflare-pages",
    },
  },
});
          `}
          />
        </Suspense>
      </BlogParagraph>

      <BlogParagraph subtitle="Updating your Vite Config">
        And that's it! You should now be able to deploy your SolidStart 5.x to
        Cloudflare Pages. If you're still having issues, reach out in the{" "}
        <Link href="https://discord.gg/solidjs">SolidStart's Discord</Link>.
        Below is my build configuration as well in case it helps!
        <img
          src="/images/blog/deploy-solidstart-to-cloudflare/config.webp"
          alt="deploy config for cloudflare pages"
        />
      </BlogParagraph>
    </BlogPost>
  );
}

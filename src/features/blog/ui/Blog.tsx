import { A } from "@solidjs/router";
import { Link } from "~/components/Link";

export default function Blog() {
  return (
    <section class="max-w-xl mb-8">
      <h2 class="text-2xl font-bold uppercase">Blog</h2>
      <div class="mb-4">
        <header class="flex gap-4 border-b-2">
          <div class="min-w-14">Date</div>
          <div>Title</div>
        </header>
        <Link
          href="/blog/setting-up-square-payment-links-the-stripe-alternative"
          defaultBlack
        >
          <div class="flex gap-4 border-b-2 py-2 hover:bg-slate-100">
            <div class="min-w-14">2023</div>
            <h3>Setting up Square Payment Links the Stripe Alternative</h3>
          </div>
        </Link>
        <Link
          href="/blog/deploying-static-solid-start-5.x-to-cloudflare"
          defaultBlack
        >
          <div class="flex gap-4 border-b-2 py-2 hover:bg-slate-100">
            <div class="min-w-14"></div>
            <h3>Deploying Solid Start 5.x to Cloudflare</h3>
          </div>
        </Link>
      </div>
    </section>
  );
}

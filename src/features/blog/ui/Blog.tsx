import { A } from "@solidjs/router";

export default function Blog() {
  return (
    <div class="max-w-xl mb-8">
      <h2 class="text-2xl font-bold uppercase">Blog</h2>
      <div class="mb-4">
        <header class="flex gap-4 border-b-2">
          <div class="min-w-14">Date</div>
          <div>Title</div>
        </header>
        <A
          href="/blog/setting-up-square-payment-links-the-stripe-alternative"
          class=""
        >
          <div class="flex gap-4 border-b-2 py-2 hover:bg-slate-100">
            <div class="min-w-14">2023</div>
            <h3>Setting Up Square Payment Links The Stripe Alternative</h3>
          </div>
        </A>
      </div>
    </div>
  );
}

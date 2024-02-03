import { Link } from "~/components/Link";

export default function Project() {
  return (
    <section>
      <h2 class="text-2xl font-bold uppercase">Projects</h2>
      <div class="mb-4">
        <div class="flex place-content-between">
          <h3 class="font-semibold ">CheapGames</h3>
          <div>October 2023 - Present</div>
        </div>
        <div class="flex">
          <Link href="#">To be released</Link>
          <div class="text-slate-500 pl-2">- Owner and Creator</div>
        </div>

        <ul class="list-disc ml-4">
          <li>
            Helps users find the best deals on video games across multiple
            stores. Built with Solid.js, TailwindCSS, and Golang.
          </li>
        </ul>
      </div>
      <div class="mb-4">
        <div class="flex place-content-between">
          <h3 class="font-semibold ">PayShare</h3>
          <div>January 2023 - October 2023</div>
        </div>
        <div class="flex">
          <Link href="https://payshare.gg">PayShare.gg</Link>
          <div class="text-slate-500 pl-2">- Owner and Creator</div>
        </div>

        <ul class="list-disc ml-4">
          <li>
            Service that lets users share costs with friends and family with
            one-time and subscription payments. Built with React Server
            Components, TailwindCSS, MySQL, and Stripe for payment processing.
          </li>
        </ul>
      </div>
    </section>
  );
}

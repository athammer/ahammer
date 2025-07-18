import { Text } from "~/components/ui/Text";
import { blogs } from "~/data/blogs";

export default function Home() {
  const handleRandomBlog = async () => {
    const openInternalRandom = () => {
      if (blogs.length === 0) {
        window.location.href = "/blogs";
        return;
      }
      const randomBlog = blogs[Math.floor(Math.random() * blogs.length)];
      window.location.href = `/blogs/${randomBlog.slug}`;
    };

    openInternalRandom();
  };
  return (
    <>
      {/* Resume download button */}
      <div class="mx-auto max-w-4xl flex flex-col sm:flex-row gap-4 items-center justify-center sm:justify-end mt-4">
        <a
          href="https://drive.google.com/file/d/1AX2hg96dhFrnytj0mNN9uIxIcN0QrXOv/view?usp=sharing"
          target="_blank"
          class="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2 text-sm md:text-base font-semibold text-white shadow-lg transition hover:from-sky-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-5 w-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 16.5v-9m0 9L8.25 12.75M12 16.5l3.75-3.75M4.5 20.25h15a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25h-3.75a2.25 2.25 0 01-2.25-2.25V0"
            />
          </svg>
          Download Resume
        </a>
        <button
          type="button"
          class="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-pink-500 to-fuchsia-500 px-4 py-2 text-sm md:text-base font-semibold text-white shadow-lg transition hover:from-pink-600 hover:to-fuchsia-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-500 cursor-pointer"
          onClick={handleRandomBlog}
        >
          Random Blog
        </button>
      </div>

      <main class="mx-auto max-w-4xl p-6 md:p-10 bg-white/80 backdrop-blur-md text-gray-800 shadow-xl ring-1 ring-gray-200 rounded-2xl space-y-10 my-4">
        <section class="text-center mb-6">
          <Text variant="h1" class="mb-2">
            AARON HAMMER
          </Text>
          <Text variant="h2" class="mb-2">
            Full Stack Engineer, Founder, &amp; Builder
          </Text>
          <Text variant="small" variantColor="muted" class="mb-4">
            New York, NY · aaron@athammer.me · (716) 445-1308
          </Text>
        </section>

        {/* Summary */}
        <section class="mt-8">
          <Text variant="h2" class="mb-2 border-b border-gray-200 pb-1">
            Summary
          </Text>
          <Text class="mt-2">
            High agency and passionate full stack software engineer who owns and
            drives the full stack of a product from it's CSS to the backend to
            observability to finally ensuring it's product market fit for our
            customers.
          </Text>
        </section>

        {/* Experience */}
        <section class="mt-8">
          <Text variant="h2" class="mb-2 border-b border-gray-200 pb-1">
            Experience
          </Text>

          {/* Square – Block */}
          <div class="mt-4">
            <Text variant="h3" class="mb-2">
              Senior Full Stack Software Engineer
            </Text>
            <div class="flex justify-between">
              <Text variant="small" variantColor="muted" class="mb-2">
                Square / Block, New York, NY
              </Text>
              <Text variant="small" variantColor="muted" class="mb-2">
                May&nbsp;2024 – Present
              </Text>
            </div>
          </div>
          <ul class="list-disc pl-5 mt-2 space-y-2 marker:text-blue-500 text-gray-700 leading-relaxed">
            <li>
              <Text as="span">
                Pitched and created the architecture for the Block Checkout
                Platform that was funded which was created to unify all 14+ web
                checkouts throughout Square, Cash App, Tidal, and more.
              </Text>
            </li>
            <li>
              <Text as="span">
                Led a small team to build out the Block Checkout Platform, which
                spanned multiple business units and required coordination with
                over 12 platform and application teams.
              </Text>
            </li>
          </ul>

          {/* Square – Block (previous role) */}
          <div class="mt-6">
            <Text variant="h3" class="mb-2">
              Full Stack Software Engineer
            </Text>
            <div class="flex justify-between">
              <Text variant="small" variantColor="muted" class="mb-2">
                Square / Block, New York, NY
              </Text>
              <Text variant="small" variantColor="muted" class="mb-2">
                Oct&nbsp;2022 – May&nbsp;2024
              </Text>
            </div>
            <ul class="list-disc pl-5 mt-2 space-y-2 marker:text-blue-500 text-gray-700 leading-relaxed">
              <li>
                <Text as="span">
                  Designed and led several projects for Square Payment Links on
                  a 9-person team using Golang, PHP, TypeScript, and Vue that
                  managed over $2.2 B in processing volume, growing 54% YoY for
                  2023.
                </Text>
              </li>
              <li>
                <Text as="span">
                  Rebuilt Square Payment Links' tipping feature enabling over 1
                  M sellers to customize tip percentages in their local
                  currencies, with localized defaults.
                </Text>
              </li>
              <li>
                <Text as="span">
                  Created new observability standards by migrating the team's
                  stack to Datadog, introducing anomaly alerts, enhanced
                  dashboards, front-end metric alerting, and automatic API
                  acceptance testing.
                </Text>
              </li>
              <li>
                <Text as="span">
                  Led the migration of all tier-1 services for Square Payment
                  Links from on-prem to AWS using Terraform.
                </Text>
              </li>
              <li>
                <Text as="span">
                  Built the buyer-side flow for Square's restaurant QR code
                  checkout experience, contributing ~$70 M in monthly processing
                  volume.
                </Text>
              </li>
            </ul>
          </div>

          {/* Rally Health */}
          <div class="mt-6">
            <Text variant="h3" class="mb-2">
              Full Stack Software Engineer
            </Text>
            <div class="flex justify-between">
              <Text variant="small" variantColor="muted" class="mb-2">
                Rally Health / Optum Digital, Denver, CO
              </Text>
              <Text variant="small" variantColor="muted" class="mb-2">
                Jul&nbsp;2021 – Oct&nbsp;2022
              </Text>
            </div>
            <ul class="list-disc pl-5 mt-2 space-y-2 marker:text-blue-500 text-gray-700 leading-relaxed">
              <li>
                <Text as="span">
                  Contributed with an 8-person team to a React front-end and
                  Scala microservice back-end for a UHC dashboard accessed by 50
                  M+ members.
                </Text>
              </li>
              <li>
                <Text as="span">
                  Implemented urgent SSO redirect on myUHC enabling 26 M
                  customers to order free COVID-19 tests in compliance with
                  federal mandate within one week.
                </Text>
              </li>
              <li>
                <Text as="span">
                  Drove performance initiative cutting the max bundle from 1.62
                  MB to 495 KB and reducing FCP by 0.4 s via lazy-loading and
                  bundle splitting.
                </Text>
              </li>
              <li>
                <Text as="span">
                  Spearheaded front-end domain unification reducing domains from
                  6 to 1 for improved UX and developer clarity.
                </Text>
              </li>
              <li>
                <Text as="span">
                  Migrated myUHC from AngularJS to ReactJS, shrinking bundle
                  size by 30 % and page-load time by ~15 %.
                </Text>
              </li>
            </ul>
          </div>

          {/* Clearview Social – Developer */}
          <div class="mt-6">
            <Text variant="h3" class="mb-2">
              Junior Full Stack Software Engineer
            </Text>
            <div class="flex justify-between">
              <Text variant="small" variantColor="muted" class="mb-2">
                Clearview Social, Buffalo, NY
              </Text>
              <Text variant="small" variantColor="muted" class="mb-2">
                Aug&nbsp;2019 – Jul&nbsp;2021
              </Text>
            </div>
            <ul class="list-disc pl-5 mt-2 space-y-2 marker:text-blue-500 text-gray-700 leading-relaxed">
              <li>
                <Text as="span">
                  Engineered a web and mobile React / Expo React Native app
                  backed by Node Express in a 5-person Agile team.
                </Text>
              </li>
              <li>
                <Text as="span">
                  Reduced React bundle size ~12 % with tree-shaking and package
                  pruning.
                </Text>
              </li>
              <li>
                <Text as="span">
                  Introduced Redis cache-aside strategy, achieving ~85 %
                  cache-hit rate on common endpoints and lowering DB load.
                </Text>
              </li>
              <li>
                <Text as="span">
                  Designed serverless image-caching API on AWS, cutting image
                  transfer size by 80 % on heavy pages.
                </Text>
              </li>
            </ul>
          </div>

          {/* Clearview Social – Intern */}
          <div class="mt-6">
            <Text variant="h3" class="mb-2">
              Software Engineering Intern
            </Text>
            <div class="flex justify-between">
              <Text variant="small" variantColor="muted" class="mb-2">
                Clearview Social, Buffalo, NY
              </Text>
              <Text variant="small" variantColor="muted" class="mb-2">
                May&nbsp;2018 – Aug&nbsp;2019
              </Text>
            </div>
            <ul class="list-disc pl-5 mt-2 space-y-2 marker:text-blue-500 text-gray-700 leading-relaxed">
              <li>
                <Text as="span">
                  Helped build newly released Android &amp; iOS app using React
                  Native, Redux, and Expo.
                </Text>
              </li>
              <li>
                <Text as="span">
                  Maintained SaaS web app built with React, Node.js, Express,
                  Webpack, and Sass.
                </Text>
              </li>
              <li>
                <Text as="span">
                  Added unit &amp; snapshot tests with Mocha, Chai, and Jest
                  achieving ~92 % coverage.
                </Text>
              </li>
              <li>
                <Text as="span">
                  Wrote optimized SQL and Sequelize queries for MySQL database
                  on AWS RDS.
                </Text>
              </li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section class="mt-8">
          <Text variant="h2" class="border-b border-gray-200 pb-1 mb-2">
            Projects
          </Text>

          {/* CheapGames */}
          <div class="mt-4">
            <div class="flex justify-between">
              <Text variant="h3" class="mb-2">
                CheapGames – Owner &amp; Creator
              </Text>
            </div>
            <ul class="list-disc pl-5 mt-2 space-y-2 marker:text-blue-500 text-gray-700 leading-relaxed">
              <li>
                <Text as="span">
                  Helps users find the best deals on video games across multiple
                  stores. Built with Solid.js, TailwindCSS, and Golang.
                </Text>
              </li>
            </ul>
          </div>

          {/* PayShare */}
          <div class="mt-4">
            <div class="flex justify-between">
              <Text variant="h3" class="mb-2">
                PayShare.gg
              </Text>
            </div>
            <ul class="list-disc pl-5 mt-2 space-y-2 marker:text-blue-500 text-gray-700 leading-relaxed">
              <li>
                <Text as="span">
                  Service enabling friends and family to share costs through
                  one-time or subscription payments. Built with React Server
                  Components, TailwindCSS, MySQL, and Stripe.
                </Text>
              </li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section class="mt-8">
          <Text variant="h2" class="border-b border-gray-200 pb-1 mb-2">
            Education
          </Text>
          <div class="mt-4">
            <Text variant="h3" class="mb-2">
              Bachelor of Science in Computer Science
            </Text>
            <div class="flex justify-between">
              <Text variant="small" variantColor="muted" class="mb-2">
                University of Buffalo, Buffalo, NY
              </Text>
              <Text variant="small" variantColor="muted" class="mb-2">
                Aug&nbsp;2015 – Aug&nbsp;2019
              </Text>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section class="mt-8 mb-12">
          <Text variant="h2" class="border-b border-gray-200 pb-1 mb-2">
            Skills
          </Text>
          <Text class="mt-2">
            JavaScript, TypeScript, Solid.js, React, HTML, CSS, Tailwind,
            Webpack, Vite, Git, Figma, Accessibility (WCAG), Unit Testing
            (Vitest, Jest)
          </Text>
        </section>
      </main>
    </>
  );
}

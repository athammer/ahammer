import { Text, TextLink } from "~/components/ui/Text";
import { blogs } from "~/data/blogs";
// @ts-ignore - provided by runtime
import { Title } from "@solidjs/meta";

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
      <Title>Aaron Hammer | Full Stack Engineer</Title>

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Aaron Taylor Hammer",
          alternateName: "Aaron Hammer",
          url: "https://ahammer.dev",
          image: "https://ahammer.dev/favicon.ico",
          jobTitle: "Senior Full Stack Software Engineer",
          worksFor: {
            "@type": "Organization",
            name: "Square / Block",
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Stamford",
            addressRegion: "CT",
            addressCountry: "US",
          },
          email: "aaron@athammer.me",
          sameAs: [
            "https://linkedin.com/in/athammer",
            "https://github.com/athammer",
            "https://twitter.com/ahammer__",
          ],
          knowsAbout: [
            "JavaScript",
            "TypeScript",
            "React",
            "Golang",
            "PHP",
            "Full Stack Development",
            "Web Development",
            "Software Engineering",
          ],
        })}
      </script>

      {/* Resume download button */}
      <div class="mx-auto max-w-5xl flex flex-col sm:flex-row gap-4 items-center justify-center sm:justify-end mt-4">
        <a
          href="https://drive.google.com/file/d/13irV_bCwpUlnL_n8AYRJ84Jogidl0dkF/view?usp=sharing"
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
        <a
          href="https://twitter.com/ahammer__"
          target="_blank"
          class="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 text-sm md:text-base font-semibold text-white shadow-lg transition hover:from-blue-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            class="h-5 w-5"
          >
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
          Twitter
        </a>

        <button
          type="button"
          class="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-pink-500 to-fuchsia-500 px-4 py-2 text-sm md:text-base font-semibold text-white shadow-lg transition hover:from-pink-600 hover:to-fuchsia-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-500 cursor-pointer"
          onClick={handleRandomBlog}
        >
          Random Blog
        </button>
      </div>

      <main class="mx-auto max-w-5xl p-6 md:p-10 bg-white/80 backdrop-blur-md shadow-xl ring-1 ring-gray-200 rounded-2xl space-y-10 my-4">
        <section class="text-center mb-6">
          <Text variant="h1" class="mb-2">
            AARON TAYLOR HAMMER
          </Text>
          <Text variant="small" variantColor="muted" class="mb-4">
            aaron@athammer.me · Stamford, CT
            <span> · </span>
            <TextLink
              href="https://linkedin.com/in/athammer"
              target="_blank"
              class="text-blue-600 hover:text-blue-700 transition-colors"
            >
              linkedin.com/in/athammer
            </TextLink>
            <span> · </span>
            <TextLink
              href="https://github.com/athammer"
              target="_blank"
              class="text-blue-600 hover:text-blue-700 transition-colors"
            >
              github.com/athammer
            </TextLink>
          </Text>
        </section>

        {/* Experience */}
        <section class="mt-8">
          <Text variant="h2" class="mb-0 border-b border-gray-200 pb-1">
            Experience
          </Text>

          {/* Square – Block */}
          <div class="mt-4">
            <Text variant="h3" class="mb-0">
              Senior Full Stack Software Engineer
            </Text>
            <div class="flex justify-between">
              <Text variant="small" variantColor="muted" class="mb-0">
                Square / Block - Block, Stamford, CT - Remote
              </Text>
              <Text variant="small" variantColor="muted" class="mb-0">
                Oct&nbsp;2024 – Present
              </Text>
            </div>
            <ul class="list-disc pl-5 mt-2 space-y-2 marker:text-blue-500">
              <li>
                <Text as="span" variant="serif">
                  Pitched and created the initial fullstack architecture for the
                  Block Checkout Platform which was created to unify all
                  checkouts that total $35 billion in yearly GPV spanning 8
                  teams across Cash App and Square.
                </Text>
              </li>
              <li>
                <Text as="span" variant="serif">
                  Ranked #1 in Cursor AI token usage while ensuring high-quality
                  output through rigorous code reviews and precise model
                  selection for specific tasks.
                </Text>
              </li>
              <li>
                <Text as="span" variant="serif">
                  Architectured the frontend engineering designs and led a small
                  team of 3 to implement Order with Google and Google Business
                  Profile syncing for all Square and Cash App sellers in React
                  and Typescript.
                </Text>
              </li>
              <li>
                <Text as="span">
                  Led a team of 6 engineers for a rapid prototyping to prove out
                  Square's agentic commerce capabilities.
                </Text>
              </li>
              <li>
                <Text as="span">
                  With a team of 2 other engineers we quickly brought Square's
                  ecommerce checkouts in EAA's accessibility compliance
                </Text>
              </li>
            </ul>
          </div>

          {/* Square – Block (previous role) */}
          <div class="mt-6">
            <Text variant="h3" class="mb-0">
              Full Stack Software Engineer II
            </Text>
            <div class="flex justify-between">
              <Text variant="small" variantColor="muted" class="mb-2">
                Square / Block - Block, Denver, CO - Remote
              </Text>
              <Text variant="small" variantColor="muted" class="mb-2">
                Oct&nbsp;2022 – Oct&nbsp;2024
              </Text>
            </div>
            <ul class="list-disc pl-5 mt-2 space-y-2 marker:text-blue-500">
              <li>
                <Text as="span">
                  Led several projects and owned the frontend for Square Payment
                  Links on a 9-person team using Golang, PHP, Typescript, and
                  Vue that managed over $4+ billion in processing volume,
                  growing 62% YoY for 2024.
                </Text>
              </li>
              <li>
                <Text as="span">
                  Rebuilt Square Payment Link's tipping feature to let over 1
                  million sellers customize tip percentages, support their local
                  currencies, and to provide more localized tipping percentages
                  as defaults.
                </Text>
              </li>
              <li>
                <Text as="span">
                  Drove our code red for reliability, created and owned our
                  observability documentation and stack in Datadog, and wrote up
                  and led a 90-day plan to get all our SLOs from failing to
                  99.995% at the end of our initiative.
                </Text>
              </li>
              <li>
                <Text as="span">
                  Led the migration of our Payment Links' services from on-prem
                  to AWS infrastructure using Terraform.
                </Text>
              </li>
              <li>
                <Text as="span">
                  Created the buyer-side frontend for Square's restaurant QR
                  code checkout experience, visited restaurants during to offer
                  help, and unlocked over $70 million in processing volume for
                  Square Payment Links' MoM.
                </Text>
              </li>
            </ul>
          </div>

          {/* Rally Health */}
          <div class="mt-6">
            <Text variant="h3" class="mb-0">
              Full Stack Software Engineer II
            </Text>
            <div class="flex justify-between">
              <Text variant="small" variantColor="muted" class="mb-2">
                Formerly Rally Health - Optum Digital / UnitedHealth Group,
                Denver, CO - Remote
              </Text>
              <Text variant="small" variantColor="muted" class="mb-2">
                Jul&nbsp;2021 – Oct&nbsp;2022
              </Text>
            </div>
            <ul class="list-disc pl-5 mt-2 space-y-2 marker:text-blue-500">
              <li>
                <Text as="span">
                  Contributed with an 8-person Scrum team to a React frontend
                  and Scala microservice backend for the UHC healthcare client
                  dashboard landing page that's accessed by over 50+ million
                  customers worldwide.
                </Text>
              </li>
              <li>
                <Text as="span">
                  Led and rapidly implemented the frontend requirements for a
                  SSO redirect on myUHC to enable over 26 million customers to
                  receive free COVID-19 tests by week's end to comply with
                  federal mandates.
                </Text>
              </li>
              <li>
                <Text as="span">
                  Drove a performance initiative to improve UX. I reduced our
                  max bundle from 1.62MBs to 495KBs and slashed FCP by 0.4
                  seconds through lazy-loading, bundle-splitting and concurrent
                  rendering.
                </Text>
              </li>
              <li>
                <Text as="span">
                  Contributed with a dedicated team to migrate the client
                  dashboard, myUHC, from AngularJS to ReactJS
                </Text>
              </li>
            </ul>
          </div>

          {/* Clearview Social – Developer */}
          <div class="mt-6">
            <Text variant="h3" class="mb-0">
              Full Stack Software Developer
            </Text>
            <div class="flex justify-between">
              <Text variant="small" variantColor="muted" class="mb-2">
                Clearview Social, Denver, CO - Remote
              </Text>
              <Text variant="small" variantColor="muted" class="mb-2">
                Aug&nbsp;2019 – Jul&nbsp;2021
              </Text>
            </div>
            <ul class="list-disc pl-5 mt-2 space-y-2 marker:text-blue-500">
              <li>
                <Text as="span">
                  Modeled and created the AWS infrastructure for a scalable
                  serverless image caching API that returns images in a
                  specified size and image format while caching alternative
                  formats. Image transfer size dropped 50%+.
                </Text>
              </li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section class="mt-8">
          <Text variant="h2" class="border-b border-gray-200 pb-1 mb-0">
            Projects
          </Text>

          {/* PlacePixels */}
          <div class="group rounded-xl p-4 -mx-4 transition-colors hover:bg-gray-50/50">
            <Text variant="h3" class="mb-1 font-bold text-gray-900">
              PlacePixels
            </Text>
            <div class="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3">
              <Text variant="small" class="text-gray-600 font-medium">
                <a
                  href="https://placepixels.com"
                  target="_blank"
                  class="underline decoration-blue-500 decoration-2 underline-offset-4 hover:text-blue-600"
                >
                  https://placepixels.com
                </a>
              </Text>
              <Text
                variant="small"
                variantColor="muted"
                class="text-gray-500 font-medium shrink-0"
              >
                Jan 2025 – Present
              </Text>
            </div>
            <ul class="list-disc pl-5 space-y-2 marker:text-blue-500">
              <li>
                <Text as="span" variant="serif">
                  A modern r/place alternative where communities can create
                  pixel art together in real-time.
                </Text>
              </li>
            </ul>
          </div>

          {/* StationScreen */}
          <div class="group rounded-xl p-4 -mx-4 transition-colors hover:bg-gray-50/50">
            <Text variant="h3" class="mb-1 font-bold text-gray-900">
              StationScreen
            </Text>
            <div class="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3">
              <Text variant="small" class="text-gray-600 font-medium">
                <a
                  href="https://stationscreen.com"
                  target="_blank"
                  class="underline decoration-blue-500 decoration-2 underline-offset-4 hover:text-blue-600"
                >
                  https://stationscreen.com
                </a>
              </Text>
              <Text
                variant="small"
                variantColor="muted"
                class="text-gray-500 font-medium shrink-0"
              >
                Sep 2024 – Present
              </Text>
            </div>
            <ul class="list-disc pl-5 space-y-2 marker:text-blue-500">
              <li>
                <Text as="span" variant="serif">
                  A digital dashboard for your home that shows you the transit
                  times such as buses, trains, and subways.
                </Text>
              </li>
            </ul>
          </div>

          {/* Where I'd Live */}
          <div class="group rounded-xl p-4 -mx-4 transition-colors hover:bg-gray-50/50">
            <Text variant="h3" class="mb-1 font-bold text-gray-900">
              WhereIdLive
            </Text>
            <div class="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3">
              <Text variant="small" class="text-gray-600 font-medium">
                <a
                  href="https://whereidlive.com"
                  target="_blank"
                  class="underline decoration-blue-500 decoration-2 underline-offset-4 hover:text-blue-600"
                >
                  https://whereidlive.com
                </a>
              </Text>
              <Text
                variant="small"
                variantColor="muted"
                class="text-gray-500 font-medium shrink-0"
              >
                Aug 2025 – Present
              </Text>
            </div>
            <ul class="list-disc pl-5 space-y-2 marker:text-blue-500">
              <li>
                <Text as="span" variant="serif">
                  Viral application that lets users pick their living
                  preferences with 1m+ unique visits and 12m+ votes.
                </Text>
              </li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section class="mt-8">
          <Text variant="h2" class="border-b border-gray-200 pb-1 mb-0">
            Education
          </Text>
          <div class="mt-4">
            <Text variant="h3" class="mb-0">
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
          <Text variant="h2" class="border-b border-gray-200 pb-1 mb-0">
            Skills
          </Text>
          <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Text variant="h4" class="mb-0">
                Language &amp; Frameworks
              </Text>
              <Text>
                Javascript, Python, Typescript, Golang, PHP, React, React
                Native, Vue, Node.js, Express.js, Next.js, SQL
              </Text>
            </div>
            <div>
              <Text variant="h4" class="mb-0">
                Tools, Tech, Certs, &amp; Skills
              </Text>
              <Text>
                DataDog, AWS, Terraform, Checkouts, Payments, Conversions
                optimizations, Accessibility, Observability, Testing,
                Maintenance and refactoring, Software design and architecture
              </Text>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

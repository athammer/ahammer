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

      {/* Action buttons */}
      <div class="mx-auto max-w-5xl flex flex-col sm:flex-row gap-2 items-center justify-center sm:justify-end mt-4">
        <a
          href="https://drive.google.com/file/d/13irV_bCwpUlnL_n8AYRJ84Jogidl0dkF/view?usp=sharing"
          target="_blank"
          class="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-4 w-4"
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
          class="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            class="h-4 w-4"
          >
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
          Twitter
        </a>
        <button
          type="button"
          class="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 cursor-pointer"
          onClick={handleRandomBlog}
        >
          Random Blog
        </button>
      </div>

      <main class="mx-auto max-w-5xl p-6 md:p-10 bg-white shadow-sm ring-1 ring-gray-200 rounded-2xl my-4">
        <section class="text-center pb-8 border-b border-gray-100">
          <Text variant="h1" class="mb-2">
            AARON TAYLOR HAMMER
          </Text>
          <Text variant="small" variantColor="muted" class="mb-0 tracking-wide">
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
        <section class="pt-6">
          <Text variant="h2" class="mb-4 border-b border-gray-200 pb-2">
            Experience
          </Text>

          {/* Square – Block */}
          <div class="mt-2">
            <div class="flex justify-between items-baseline">
              <Text variant="h3" class="mb-0">
                Senior Full Stack Software Engineer
              </Text>
              <Text variant="small" variantColor="muted" class="mb-0 shrink-0 ml-4">
                Oct&nbsp;2024 – Present
              </Text>
            </div>
            <Text variant="small" variantColor="muted" class="mb-2 mt-0.5">
              Square / Block, Stamford, CT — Remote
            </Text>
            <ul class="list-disc pl-5 mt-3 space-y-1.5 marker:text-blue-500">
              <li>
                <Text as="span" variant="serif">
                  Pitched and created the initial fullstack architecture for the
                  Block Checkout Platform to unify all checkouts totaling $35
                  billion in yearly GPV spanning 8 teams across Cash App and
                  Square.
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
                  Created, led a team of 3, and planned the frontend for Order
                  with Google and Google Business Profile syncing for all Square
                  and Cash App sellers, with our integration driving 24% of all
                  online profile traffic.
                </Text>
              </li>
              <li>
                <Text as="span" variant="serif">
                  Led a team of 6 engineers to rapidly prototype Square's
                  agentic AI commerce capabilities for Vercel's V0 team and
                  Square leadership, proving out viability of the platform.
                </Text>
              </li>
              <li>
                <Text as="span" variant="serif">
                  With a team of 2 other engineers, brought Square's ecommerce
                  checkouts into EAA accessibility compliance before regulatory
                  deadlines.
                </Text>
              </li>
            </ul>
          </div>

          {/* Square – Block (previous role) */}
          <div class="mt-7">
            <div class="flex justify-between items-baseline">
              <Text variant="h3" class="mb-0">
                Full Stack Software Engineer II
              </Text>
              <Text variant="small" variantColor="muted" class="mb-0 shrink-0 ml-4">
                Oct&nbsp;2022 – Oct&nbsp;2024
              </Text>
            </div>
            <Text variant="small" variantColor="muted" class="mb-2 mt-0.5">
              Square / Block, Denver, CO — Remote
            </Text>
            <ul class="list-disc pl-5 mt-3 space-y-1.5 marker:text-blue-500">
              <li>
                <Text as="span" variant="serif">
                  Led several projects and owned the frontend for Square Payment
                  Links on a 9-person team using Golang, PHP, TypeScript, and
                  Vue — managing over $4B in processing volume, growing 62% YoY
                  for 2024.
                </Text>
              </li>
              <li>
                <Text as="span" variant="serif">
                  Rebuilt Square Payment Links' tipping feature to let over 1
                  million sellers customize tip percentages, support local
                  currencies, and provide more localized tipping defaults.
                </Text>
              </li>
              <li>
                <Text as="span" variant="serif">
                  Drove a reliability code red: created and owned our
                  observability stack in Datadog and led a 90-day plan to bring
                  all SLOs from failing to 99.995%.
                </Text>
              </li>
              <li>
                <Text as="span" variant="serif">
                  Led the migration of Payment Links services from on-prem to
                  AWS infrastructure using Terraform.
                </Text>
              </li>
              <li>
                <Text as="span" variant="serif">
                  On my own initiative, investigated bot traffic inflating
                  Datadog RUM costs and filtered them out, reducing spend by
                  $28k/month — 10% of my org's bill and 2% of Block's total
                  usage.
                </Text>
              </li>
              <li>
                <Text as="span" variant="serif">
                  Created the buyer-side frontend for Square's restaurant QR
                  code checkout experience and unlocked over $70M in processing
                  volume for Square Payment Links MoM.
                </Text>
              </li>
            </ul>
          </div>

          {/* Rally Health */}
          <div class="mt-7">
            <div class="flex justify-between items-baseline">
              <Text variant="h3" class="mb-0">
                Full Stack Software Engineer II
              </Text>
              <Text variant="small" variantColor="muted" class="mb-0 shrink-0 ml-4">
                Jul&nbsp;2021 – Oct&nbsp;2022
              </Text>
            </div>
            <Text variant="small" variantColor="muted" class="mb-2 mt-0.5">
              Formerly Rally Health — Optum Digital / UnitedHealth Group, Denver, CO — Remote
            </Text>
            <ul class="list-disc pl-5 mt-3 space-y-1.5 marker:text-blue-500">
              <li>
                <Text as="span" variant="serif">
                  Contributed with an 8-person Scrum team to a React frontend
                  and Scala microservice backend for the UHC healthcare client
                  dashboard, accessed by 50M+ customers worldwide.
                </Text>
              </li>
              <li>
                <Text as="span" variant="serif">
                  Led rapid frontend implementation of an SSO redirect on myUHC
                  enabling 26M+ customers to receive free COVID-19 tests within
                  a week to meet federal mandates.
                </Text>
              </li>
              <li>
                <Text as="span" variant="serif">
                  Drove a performance initiative reducing the max bundle from
                  1.62MB to 495KB and cutting FCP by 0.4s via lazy-loading,
                  bundle-splitting, and concurrent rendering.
                </Text>
              </li>
              <li>
                <Text as="span" variant="serif">
                  Migrated the myUHC client dashboard from AngularJS to ReactJS
                  with a dedicated team.
                </Text>
              </li>
            </ul>
          </div>

          {/* Clearview Social – Developer */}
          <div class="mt-7">
            <div class="flex justify-between items-baseline">
              <Text variant="h3" class="mb-0">
                Full Stack Software Developer
              </Text>
              <Text variant="small" variantColor="muted" class="mb-0 shrink-0 ml-4">
                Aug&nbsp;2019 – Jul&nbsp;2021
              </Text>
            </div>
            <Text variant="small" variantColor="muted" class="mb-2 mt-0.5">
              Clearview Social, Denver, CO — Remote
            </Text>
            <ul class="list-disc pl-5 mt-3 space-y-1.5 marker:text-blue-500">
              <li>
                <Text as="span" variant="serif">
                  Modeled and built AWS infrastructure for a scalable serverless
                  image caching API that returns images in specified sizes and
                  formats while caching alternatives, cutting image transfer
                  size by 50%+.
                </Text>
              </li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section class="pt-8 border-t border-gray-100">
          <Text variant="h2" class="mb-4 border-b border-gray-200 pb-2">
            Projects
          </Text>

          <div class="space-y-5">
            {/* PlacePixels */}
            <div>
              <div class="flex justify-between items-baseline">
                <Text variant="h3" class="mb-0">
                  PlacePixels
                </Text>
                <Text variant="small" variantColor="muted" class="mb-0 shrink-0 ml-4">
                  Jan 2025 – Present
                </Text>
              </div>
              <Text variant="small" class="mb-2 mt-0.5">
                <a
                  href="https://placepixels.com"
                  target="_blank"
                  class="text-blue-500 hover:text-blue-600 transition-colors"
                >
                  placepixels.com
                </a>
              </Text>
              <ul class="list-disc pl-5 space-y-1.5 marker:text-blue-500">
                <li>
                  <Text as="span" variant="serif">
                    A modern r/place alternative where communities can create
                    pixel art together in real-time.
                  </Text>
                </li>
              </ul>
            </div>

            {/* StationScreen */}
            <div>
              <div class="flex justify-between items-baseline">
                <Text variant="h3" class="mb-0">
                  StationScreen
                </Text>
                <Text variant="small" variantColor="muted" class="mb-0 shrink-0 ml-4">
                  Sep 2024 – Present
                </Text>
              </div>
              <Text variant="small" class="mb-2 mt-0.5">
                <a
                  href="https://stationscreen.com"
                  target="_blank"
                  class="text-blue-500 hover:text-blue-600 transition-colors"
                >
                  stationscreen.com
                </a>
              </Text>
              <ul class="list-disc pl-5 space-y-1.5 marker:text-blue-500">
                <li>
                  <Text as="span" variant="serif">
                    A digital dashboard for your home showing real-time transit
                    times for buses, trains, and subways.
                  </Text>
                </li>
              </ul>
            </div>

            {/* WhereIdLive */}
            <div>
              <div class="flex justify-between items-baseline">
                <Text variant="h3" class="mb-0">
                  WhereIdLive
                </Text>
                <Text variant="small" variantColor="muted" class="mb-0 shrink-0 ml-4">
                  Aug 2025 – Present
                </Text>
              </div>
              <Text variant="small" class="mb-2 mt-0.5">
                <a
                  href="https://whereidlive.com"
                  target="_blank"
                  class="text-blue-500 hover:text-blue-600 transition-colors"
                >
                  whereidlive.com
                </a>
              </Text>
              <ul class="list-disc pl-5 space-y-1.5 marker:text-blue-500">
                <li>
                  <Text as="span" variant="serif">
                    Viral app that lets users pick their living preferences —
                    1M+ unique visits and 12M+ votes.
                  </Text>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section class="pt-8 border-t border-gray-100">
          <Text variant="h2" class="mb-4 border-b border-gray-200 pb-2">
            Education
          </Text>
          <div>
            <div class="flex justify-between items-baseline">
              <Text variant="h3" class="mb-0">
                Bachelor of Science in Computer Science
              </Text>
              <Text variant="small" variantColor="muted" class="mb-0 shrink-0 ml-4">
                Aug&nbsp;2015 – Aug&nbsp;2019
              </Text>
            </div>
            <Text variant="small" variantColor="muted" class="mt-0.5 mb-0">
              University at Buffalo, Buffalo, NY
            </Text>
          </div>
        </section>

        {/* Skills */}
        <section class="pt-8 pb-4 border-t border-gray-100">
          <Text variant="h2" class="mb-4 border-b border-gray-200 pb-2">
            Skills
          </Text>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Text variant="h4" class="mb-1">
                Languages &amp; Frameworks
              </Text>
              <Text variant="serif">
                JavaScript, Python, TypeScript, Golang, PHP, React, React
                Native, Vue, Node.js, Express.js, Next.js, SQL
              </Text>
            </div>
            <div>
              <Text variant="h4" class="mb-1">
                Tools, Tech &amp; Skills
              </Text>
              <Text variant="serif">
                Datadog, AWS, Terraform, Payments, Checkout flows, Conversion
                optimization, Accessibility, Observability, Testing, Software
                design and architecture
              </Text>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

import { A, useNavigate } from "@solidjs/router";
import { For, Show } from "solid-js";
import {
  ExternalArrow,
  MarginRow,
  Page,
  SectionLabel,
} from "~/components/ui/Layout";
import { blogs, publishedBlogs } from "~/data/blogs";
import {
  contact,
  education,
  jobs,
  projects,
  skills,
} from "~/data/resume";
import Seo, { OG_IMAGE, PERSON_ID, SITE_NAME, SITE_URL } from "~/components/ui/Seo";

const Dates = (props: { start: string; end: string }) => (
  <span class="whitespace-nowrap">
    {props.start} – {props.end}
  </span>
);

const hostname = (url: string) => new URL(url).hostname;

// Person + profile page + website, linked by @id, so search engines can tie
// "Aaron Hammer" to this site and to the same person's other profiles.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": PERSON_ID },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profile`,
      url: SITE_URL,
      name: "Aaron Hammer | Senior Full Stack Engineer",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@id": PERSON_ID },
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Aaron Hammer",
      alternateName: "Aaron Taylor Hammer",
      givenName: "Aaron",
      additionalName: "Taylor",
      familyName: "Hammer",
      url: SITE_URL,
      image: OG_IMAGE,
      email: `mailto:${contact.email}`,
      jobTitle: "Senior Full Stack Software Engineer",
      worksFor: {
        "@type": "Organization",
        name: "Square",
        url: "https://squareup.com",
        parentOrganization: {
          "@type": "Organization",
          name: "Block, Inc.",
          url: "https://block.xyz",
        },
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: education.school,
        url: "https://www.buffalo.edu",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Stamford",
        addressRegion: "CT",
        addressCountry: "US",
      },
      sameAs: [
        ...contact.links.map((link) => link.href),
        "https://twitter.com/ahammer__",
      ],
      knowsAbout: [
        "Payments",
        "Checkout",
        "Full Stack Development",
        "TypeScript",
        "React",
        "Golang",
        "Observability",
        "Accessibility",
      ],
    },
  ],
};

export default function Home() {
  const navigate = useNavigate();

  const openRandomPost = () => {
    if (publishedBlogs.length === 0) return navigate("/blogs");
    const post =
      publishedBlogs[Math.floor(Math.random() * publishedBlogs.length)];
    navigate(`/blogs/${post.slug}`);
  };

  // Finished posts first, newest first; drafts trail behind.
  const posts = [...blogs].sort(
    (a, b) => Number(!!a.draft) - Number(!!b.draft) || b.year - a.year
  );

  return (
    <>
      <Seo
        title="Aaron Hammer | Senior Full Stack Engineer"
        description="Aaron Hammer is a senior full stack software engineer at Square / Block in Stamford, CT, working on checkout and payments. Resume, projects, and writing."
        path="/"
        type="profile"
      />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

      <Page class="print:p-0">
        <header class="mb-16 md:mb-20 print:mb-8">
          <h1 class="font-serif text-[2.625rem] font-medium leading-[1.05] tracking-[-0.02em] text-ink md:text-[3.5rem]">
            Aaron Taylor Hammer
          </h1>
          <p class="mt-4 max-w-[34rem] text-lg leading-relaxed text-ink-soft">
            Senior full stack software engineer at Square&nbsp;/&nbsp;Block,
            working on checkout and payments.
          </p>

          <ul class="mt-6 flex flex-wrap items-center gap-x-5 gap-y-1.5 font-mono text-[0.8125rem] text-muted">
            <li>
              <a
                href={`mailto:${contact.email}`}
                class="text-ink underline decoration-rule underline-offset-4 hover:decoration-accent"
              >
                {contact.email}
              </a>
            </li>
            <li>{contact.location}</li>
            <For each={contact.links}>
              {(link) => (
                <li>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener"
                    class="transition-colors hover:text-ink"
                  >
                    <span class="print:hidden">{link.label}</span>
                    <span class="hidden print:inline">
                      {link.href.replace(/^https:\/\/(www\.)?/, "")}
                    </span>
                    <span class="print:hidden">
                      <ExternalArrow />
                    </span>
                  </a>
                </li>
              )}
            </For>
            <li class="no-print">
              <a
                href={contact.resumePdf}
                target="_blank"
                rel="noopener"
                class="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
              >
                PDF version
              </a>
            </li>
          </ul>
        </header>

        <section aria-labelledby="experience" class="mb-16 print:mb-8">
          <SectionLabel id="experience">Experience</SectionLabel>
          <div class="space-y-12 print:space-y-6">
            <For each={jobs}>
              {(job) => (
                <article class="space-y-6 print:space-y-3">
                  <MarginRow>
                    <h3 class="text-[1.375rem] font-semibold leading-tight text-ink">
                      {job.company}
                    </h3>
                    <Show when={job.note}>
                      <p class="mt-0.5 text-[0.95rem] italic text-muted">
                        {job.note}
                      </p>
                    </Show>
                  </MarginRow>
                  <For each={job.roles}>
                    {(role) => (
                      <MarginRow
                        aside={<Dates start={role.start} end={role.end} />}
                      >
                        <h4 class="text-[1.0625rem] font-medium leading-snug text-ink">
                          {role.title}
                          <span class="font-normal italic text-muted">
                            {" "}
                            — {role.location}
                          </span>
                        </h4>
                        <ul class="dash-list mt-3 space-y-2 leading-[1.65] text-ink-soft">
                          <For each={role.highlights}>
                            {(item) => <li>{item}</li>}
                          </For>
                        </ul>
                      </MarginRow>
                    )}
                  </For>
                </article>
              )}
            </For>
          </div>
        </section>

        <section aria-labelledby="projects" class="mb-16 print:mb-8">
          <SectionLabel id="projects">Projects</SectionLabel>
          <div class="space-y-7 print:space-y-3">
            <For each={projects}>
              {(project) => (
                <MarginRow
                  aside={<Dates start={project.start} end={project.end} />}
                >
                  <h3 class="text-[1.0625rem] leading-snug">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener"
                      class="group font-semibold text-ink"
                    >
                      <span class="underline decoration-rule underline-offset-4 group-hover:decoration-accent">
                        {project.name}
                      </span>
                      <span
                        aria-hidden="true"
                        class="ml-2 font-mono text-[0.8125rem] font-normal text-muted"
                      >
                        {hostname(project.url)}
                      </span>
                    </a>
                  </h3>
                  <p class="mt-1 leading-[1.65] text-ink-soft">
                    {project.description}
                  </p>
                </MarginRow>
              )}
            </For>
          </div>
        </section>

        <section aria-labelledby="education" class="mb-16 print:mb-8">
          <SectionLabel id="education">Education</SectionLabel>
          <MarginRow
            aside={<Dates start={education.start} end={education.end} />}
          >
            <h3 class="text-[1.0625rem] font-semibold leading-snug text-ink">
              {education.school}
            </h3>
            <p class="mt-1 text-ink-soft">
              {education.degree}
              <span class="italic text-muted"> — {education.location}</span>
            </p>
          </MarginRow>
        </section>

        <section aria-labelledby="skills" class="mb-16 print:mb-0">
          <SectionLabel id="skills">Skills</SectionLabel>
          <div class="space-y-5">
            <For each={skills}>
              {(group) => (
                <MarginRow aside={group.label}>
                  <p class="leading-[1.65] text-ink-soft">{group.items}</p>
                </MarginRow>
              )}
            </For>
          </div>
        </section>

        <section aria-labelledby="writing" class="no-print">
          <SectionLabel id="writing">Writing</SectionLabel>
          <ul class="space-y-3">
            <For each={posts}>
              {(post) => (
                <li>
                  <MarginRow aside={post.draft ? "Drafting" : post.year}>
                    <Show
                      when={!post.draft}
                      fallback={<span class="text-muted">{post.title}</span>}
                    >
                      <A
                        href={`/blogs/${post.slug}`}
                        class="text-ink underline decoration-rule underline-offset-4 hover:decoration-accent"
                      >
                        {post.title}
                      </A>
                    </Show>
                  </MarginRow>
                </li>
              )}
            </For>
          </ul>
          <MarginRow class="mt-6">
            <div class="flex gap-5 font-mono text-[0.8125rem]">
              <A href="/blogs" class="text-muted hover:text-ink">
                All posts →
              </A>
              <button
                type="button"
                onClick={openRandomPost}
                class="cursor-pointer text-muted hover:text-ink"
              >
                Random post
              </button>
            </div>
          </MarginRow>
        </section>
      </Page>
    </>
  );
}

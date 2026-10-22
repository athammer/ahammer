export type Role = {
  title: string;
  start: string;
  end: string;
  location: string;
  highlights: string[];
};

export type Job = {
  company: string;
  note?: string;
  roles: Role[];
};

export type Project = {
  name: string;
  url: string;
  start: string;
  end: string;
  description: string;
};

export const contact = {
  email: "aaron@athammer.me",
  location: "Stamford, CT",
  resumePdf:
    "https://drive.google.com/file/d/13irV_bCwpUlnL_n8AYRJ84Jogidl0dkF/view?usp=sharing",
  links: [
    { label: "LinkedIn", href: "https://linkedin.com/in/athammer" },
    { label: "GitHub", href: "https://github.com/athammer" },
    { label: "X", href: "https://x.com/ahammer__" },
  ],
};

export const jobs: Job[] = [
  {
    company: "Square / Block",
    roles: [
      {
        title: "Senior Full Stack Software Engineer",
        start: "Oct 2024",
        end: "Present",
        location: "Stamford, CT · Remote",
        highlights: [
          "Pitched and created the initial fullstack architecture for the Block Checkout Platform to unify all checkouts totaling $35 billion in yearly GPV spanning 8 teams across Cash App and Square.",
          "Ranked #1 in Cursor AI token usage while ensuring high-quality output through rigorous code reviews and precise model selection for specific tasks.",
          "Created, led a team of 3, and planned the frontend for Order with Google and Google Business Profile syncing for all Square and Cash App sellers, with our integration driving 24% of all online profile traffic.",
          "Led a team of 6 engineers to rapidly prototype Square's agentic AI commerce capabilities for Vercel's V0 team and Square leadership, proving out viability of the platform.",
          "With a team of 2 other engineers, brought Square's ecommerce checkouts into EAA accessibility compliance before regulatory deadlines.",
        ],
      },
      {
        title: "Full Stack Software Engineer II",
        start: "Oct 2022",
        end: "Oct 2024",
        location: "Denver, CO · Remote",
        highlights: [
          "Led several projects and owned the frontend for Square Payment Links on a 9-person team using Golang, PHP, TypeScript, and Vue — managing over $4B in processing volume, growing 62% YoY for 2024.",
          "Rebuilt Square Payment Links' tipping feature to let over 1 million sellers customize tip percentages, support local currencies, and provide more localized tipping defaults.",
          "Drove a reliability code red: created and owned our observability stack in Datadog and led a 90-day plan to bring all SLOs from failing to 99.995%.",
          "Led the migration of Payment Links services from on-prem to AWS infrastructure using Terraform.",
          "On my own initiative, investigated bot traffic inflating Datadog RUM costs and filtered them out, reducing spend by $28k/month — 10% of my org's bill and 2% of Block's total usage.",
          "Created the buyer-side frontend for Square's restaurant QR code checkout experience and unlocked over $70M in processing volume for Square Payment Links MoM.",
        ],
      },
    ],
  },
  {
    company: "Rally Health",
    note: "Now Optum Digital / UnitedHealth Group",
    roles: [
      {
        title: "Full Stack Software Engineer II",
        start: "Jul 2021",
        end: "Oct 2022",
        location: "Denver, CO · Remote",
        highlights: [
          "Contributed with an 8-person Scrum team to a React frontend and Scala microservice backend for the UHC healthcare client dashboard, accessed by 50M+ customers worldwide.",
          "Led rapid frontend implementation of an SSO redirect on myUHC enabling 26M+ customers to receive free COVID-19 tests within a week to meet federal mandates.",
          "Drove a performance initiative reducing the max bundle from 1.62MB to 495KB and cutting FCP by 0.4s via lazy-loading, bundle-splitting, and concurrent rendering.",
          "Migrated the myUHC client dashboard from AngularJS to ReactJS with a dedicated team.",
        ],
      },
    ],
  },
  {
    company: "Clearview Social",
    roles: [
      {
        title: "Full Stack Software Developer",
        start: "Aug 2019",
        end: "Jul 2021",
        location: "Denver, CO · Remote",
        highlights: [
          "Modeled and built AWS infrastructure for a scalable serverless image caching API that returns images in specified sizes and formats while caching alternatives, cutting image transfer size by 50%+.",
        ],
      },
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Today's Game",
    url: "https://todays.game",
    start: "Oct 2026",
    end: "Present",
    description:
      "A new daily browser game every day, like Wordle, with an archive of every game played so far.",
  },
  {
    name: "Flint",
    url: "https://withflintpay.com",
    start: "Nov 2025",
    end: "Present",
    description:
      "An AI-native payments API with orders, tax, inventory, shipping, and returns built in, so teams can focus on their own product.",
  },
  {
    name: "WhereIdLive",
    url: "https://whereidlive.com",
    start: "Aug 2025",
    end: "Present",
    description:
      "Viral app that lets users pick their living preferences — 1M+ unique visits and 12M+ votes.",
  },
  {
    name: "PlacePixels",
    url: "https://placepixels.com",
    start: "Jan 2025",
    end: "Present",
    description:
      "A modern r/place alternative where communities can create pixel art together in real-time.",
  },
  {
    name: "StationScreen",
    url: "https://stationscreen.com",
    start: "Sep 2024",
    end: "Present",
    description:
      "A digital dashboard for your home showing real-time transit times for buses, trains, and subways.",
  },
];

export const education = {
  degree: "Bachelor of Science in Computer Science",
  school: "University at Buffalo",
  location: "Buffalo, NY",
  start: "Aug 2015",
  end: "Aug 2019",
};

export const skills = [
  {
    label: "Languages & frameworks",
    items:
      "JavaScript, Python, TypeScript, Golang, PHP, React, React Native, Vue, Node.js, Express.js, Next.js, SQL",
  },
  {
    label: "Tools & practice",
    items:
      "Datadog, AWS, Terraform, Payments, Checkout flows, Conversion optimization, Accessibility, Observability, Testing, Software design and architecture",
  },
];

export type Blog = {
  id: number;
  slug: string;
  title: string;
  year: number;
  visitors: number;
  // Author provides full article via a SolidJS component file in `src/blogArticles/{slug}.tsx`
};

export const blogs: Blog[] = [
  {
    id: 0,
    slug: "perfecting-your-teams-alerts-but-watch-your-back",
    title: "Perfecting your team's alerts, but watch your back",
    year: 2025,
    visitors: 0,
  },
  {
    id: 1,
    slug: "how-not-to-pitch-a-100b-product-to-your-company",
    title: "How not to pitch a $100b product to your company",
    year: 2026,
    visitors: 0,
  },
  {
    id: 2,
    slug: "stripes-apis-are-a-dead-end-design-and-theyre-perfect",
    title: "Stripe's APIs are a dead end design, and they're perfect",
    year: 2026,
    visitors: 0,
  },
];

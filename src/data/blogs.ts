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
    id: 1,
    slug: "perfecting-your-teams-alerts-but-watch-your-back",
    title: "Perfecting your team's alerts, but watch your back",
    year: 2025,
    visitors: 0,
  },
];

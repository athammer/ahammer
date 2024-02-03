export const randomBlog = () => {
  const blogs = [
    "/blog/setting-up-square-payment-links-the-stripe-alternative",
    "/blog/fix-for-deploying-static-solid-start-5.x-to-cloudflare-pages",
  ];
  const random = Math.floor(Math.random() * blogs.length);
  return blogs[random];
};

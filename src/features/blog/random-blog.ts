export const randomBlog = () => {
  const blogs = [
    "/blog/setting-up-square-payment-links-the-stripe-alternative",
    "/blog/deploying-static-solid-start-5.x-to-cloudflare",
  ];
  const random = Math.floor(Math.random() * blogs.length);
  return blogs[random];
};

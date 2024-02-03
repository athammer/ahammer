export const randomBlog = () => {
  const blogs = [
    "/blog/setting-up-square-payment-links-the-stripe-alternative",
  ];
  const random = Math.floor(Math.random() * blogs.length);
  return blogs[random];
};

type BlogPostProps = {
  title: string;
  children: any;
};
export const BlogPost = (props: BlogPostProps) => {
  return (
    <div>
      <h1 class="text-4xl font-bold uppercase mb-4">{props.title}</h1>
      <p>{props.children}</p>
    </div>
  );
};

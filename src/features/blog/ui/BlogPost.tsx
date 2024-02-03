type BlogPostProps = {
  title: string;
  children: any;
};
export const BlogPost = (props: BlogPostProps) => {
  return (
    <div class="max-w-4xl">
      <h1 class="text-4xl font-bold uppercase mb-4">{props.title}</h1>
      {props.children}
    </div>
  );
};

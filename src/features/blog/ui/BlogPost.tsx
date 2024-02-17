import { Title } from "@solidjs/meta";

type BlogPostProps = {
  title: string;
  children: any;
};
export const BlogPost = (props: BlogPostProps) => {
  return (
    <div class="max-w-4xl">
      <Title>{props.title} | ahammer.dev</Title>

      <h1 class="text-4xl font-bold uppercase pb-4">{props.title}</h1>
      {props.children}
    </div>
  );
};

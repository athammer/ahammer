type BlogParagraphProps = {
  subtitle?: string;
  children: any;
};
export const BlogParagraph = (props: BlogParagraphProps) => {
  return (
    <section class="pb-4">
      {props.subtitle && (
        <h2 class="text-2xl font-bold uppercase">{props.subtitle}</h2>
      )}
      <p>{props.children}</p>
    </section>
  );
};

type BlogParagraphProps = {
  subSectionTitle?: string;
  children: any;
};
export const BlogParagraphSubsection = (props: BlogParagraphProps) => {
  return (
    <div class="py-4">
      {props.subSectionTitle && (
        <h2 class="text-lg font-bold color text-gray-700 uppercase">
          {props.subSectionTitle}
        </h2>
      )}
      <p>{props.children}</p>
    </div>
  );
};

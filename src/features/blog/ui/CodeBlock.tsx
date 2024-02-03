import { createResource } from "solid-js";
import { convertCodeString } from "~/features/blog/code-formatter";

type CodeBlockProps = {
  code: string;
};
export const CodeBlock = (props: CodeBlockProps) => {
  const [html] = createResource([props.code], convertCodeString);
  return <div class="w-fit" innerHTML={html.latest} />;
};

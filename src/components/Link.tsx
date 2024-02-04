import { A } from "@solidjs/router";

type LinkProps = {
  href: string;
  external?: boolean;
  children: any;
  defaultBlack?: boolean;
};
export const Link = (props: LinkProps) => {
  if (props.external) {
    return (
      <a
        href={props.href}
        target="_blank"
        class={` ${
          props.defaultBlack ? "" : "text-sky-700"
        } hover:text-sky-400`}
      >
        {props.children}
      </a>
    );
  }

  return (
    <A
      href={props.href}
      class={`${props.defaultBlack ? "" : "text-sky-700"} hover:text-sky-400`}
    >
      {props.children}
    </A>
  );
};

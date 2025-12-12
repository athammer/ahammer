import { cva, type VariantProps } from "class-variance-authority";
import { Component, JSX, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";
import { BaseUIProps } from "~/types/utils";
import { cn } from "~/utils/styles";

const textVariants = cva("text-foreground", {
  variants: {
    variant: {
      default: "leading-relaxed md:leading-relaxed",
      headerCta: "text-6xl font-semibold tracking-tight font-merriweather",
      h1: "text-4xl font-extrabold tracking-tight lg:text-5xl font-merriweather",
      h2: "text-3xl font-semibold tracking-tight font-merriweather",
      h3: "text-2xl font-semibold tracking-tight font-merriweather",
      h4: "text-xl font-semibold tracking-tight font-merriweather",
      large: "text-lg font-semibold font-merriweather",
      small: "text-sm font-medium leading-6 font-poppins",
      serif: "font-poppins text-base leading-relaxed text-slate-700",
    },
    variantColor: {
      default: "text-gray-900",
      link: "text-blue-600 hover:underline",
      primary: "text-blue-600",
      secondary: "text-gray-600",
      muted: "text-gray-500",
    },
  },
  defaultVariants: {
    variant: "default",
    variantColor: "default",
  },
});

type TextProps = BaseUIProps &
  VariantProps<typeof textVariants> & {
    as?: Component | keyof JSX.IntrinsicElements;
    children?: JSX.Element;
  };

export const Text: Component<TextProps> = (props) => {
  const [local, rest] = splitProps(props, [
    "as",
    "class",
    "variant",
    "variantColor",
  ]);

  let component: Component | keyof JSX.IntrinsicElements = "p";
  if (local.as) {
    component = local.as;
  } else {
    if (local.variant === "h1") {
      component = "h1";
    } else if (local.variant === "h2") {
      component = "h2";
    } else if (local.variant === "h3") {
      component = "h3";
    } else if (local.variant === "h4") {
      component = "h4";
    }
  }

  return (
    <Dynamic
      component={component}
      {...rest}
      class={cn(
        local.class,
        textVariants({
          variant: local.variant,
          variantColor: local.variantColor,
        })
      )}
    />
  );
};

type TextLinkProps = TextProps & JSX.AnchorHTMLAttributes<HTMLAnchorElement>;
export const TextLink: Component<TextLinkProps> = (props) => {
  return (
    <Text
      as="a"
      variantColor="link"
      class={cn(props.class, "hover:underline leading-inherit")}
      {...props}
    />
  );
};

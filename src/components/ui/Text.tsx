import { cva, type VariantProps } from "class-variance-authority";
import { Component, JSX, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";
import { BaseUIProps } from "~/types/utils";
import { cn } from "~/utils/styles";

const textVariants = cva("", {
  variants: {
    variant: {
      default: "font-serif text-[1.0625rem] leading-[1.7] text-ink-soft",
      h1: "font-serif text-4xl md:text-[2.75rem] font-medium tracking-[-0.015em] leading-[1.1] text-ink text-balance",
      h2: "font-serif text-[1.625rem] font-semibold tracking-[-0.01em] leading-tight text-ink",
      h3: "font-serif text-xl font-semibold leading-snug text-ink",
      h4: "font-serif text-lg font-semibold italic leading-snug text-ink",
      large: "font-serif text-lg font-semibold text-ink",
      small: "font-mono text-[0.8125rem] leading-6 text-muted",
      serif: "font-serif text-[1.0625rem] leading-[1.7] text-ink-soft",
    },
    variantColor: {
      default: "text-ink",
      link: "text-ink underline decoration-accent/50 underline-offset-[3px] hover:decoration-accent",
      primary: "text-accent",
      secondary: "text-ink-soft",
      muted: "text-muted",
    },
  },
  defaultVariants: {
    variant: "default",
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
        textVariants({
          variant: local.variant,
          variantColor: local.variantColor,
        }),
        local.class
      )}
    />
  );
};

type TextLinkProps = TextProps & JSX.AnchorHTMLAttributes<HTMLAnchorElement>;
export const TextLink: Component<TextLinkProps> = (props) => {
  return <Text as="a" variantColor="link" {...props} />;
};

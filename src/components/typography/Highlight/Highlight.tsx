import React from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import styles from "./highlight.module.scss";

export interface HighlightProps extends React.HTMLAttributes<HTMLElement> {
  /** The full text to highlight substrings in. */
  children: string;
  /** Substring(s) to highlight. */
  highlight: string | string[];
  /** Custom class name for the highlighted `<mark>` element. */
  highlightClassName?: string;
  /** Custom styles for the highlighted `<mark>` element. */
  highlightStyles?: React.CSSProperties;
  /** The HTML tag or component to use for the container. Default is "span". */
  as?: React.ElementType;
  /** If true, the component will be rendered as its child. */
  asChild?: boolean;
}

/**
 * Highlight component that emphasizes specific parts of a text.
 */
export const Highlight = React.forwardRef<HTMLElement, HighlightProps>(
  (
    {
      children,
      highlight,
      highlightClassName,
      highlightStyles,
      as: AsComponent = "span",
      asChild = false,
      className,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : AsComponent;

    if (typeof children !== "string") {
      // Fallsave if children is not a string
      return (
        <Component className={classNames(styles.root, className)} ref={ref} {...props}>
          <Slottable>{children}</Slottable>
        </Component>
      );
    }

    if (!highlight || (Array.isArray(highlight) && highlight.length === 0)) {
      return (
        <Component className={classNames(styles.root, className)} ref={ref} {...props}>
          <Slottable>{children}</Slottable>
        </Component>
      );
    }

    const queries = (Array.isArray(highlight) ? highlight : [highlight])
      .filter((q) => q.length > 0)
      .map((q) => q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));

    if (queries.length === 0) {
      return (
        <Component className={classNames(styles.root, className)} ref={ref} {...props}>
          <Slottable>{children}</Slottable>
        </Component>
      );
    }

    const regex = new RegExp(`(${queries.join("|")})`, "gi");
    const parts = children.split(regex);

    return (
      <Component className={classNames(styles.root, className)} ref={ref} {...props}>
        <Slottable>
          {parts.map((part, i) => {
            const isMatch = regex.test(part);
            // Reset lastIndex because of 'g' flag
            regex.lastIndex = 0;

            return isMatch ? (
              <mark key={i} className={classNames(styles.mark, highlightClassName)} style={highlightStyles}>
                {part}
              </mark>
            ) : (
              part
            );
          })}
        </Slottable>
      </Component>
    );
  },
);

Highlight.displayName = "Highlight";

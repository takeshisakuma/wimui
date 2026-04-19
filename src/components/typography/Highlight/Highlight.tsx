import React from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import styles from "./highlight.module.scss";

export interface HighlightProps extends React.HTMLAttributes<HTMLElement> {
  /** The full text to highlight substrings in. */
  children: React.ReactNode;
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

    const buildParts = (text: string): React.ReactNode[] | null => {
      if (!highlight || (Array.isArray(highlight) && highlight.length === 0)) return null;

      const queries = (Array.isArray(highlight) ? highlight : [highlight])
        .filter((q) => q.length > 0)
        .map((q) => q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));

      if (queries.length === 0) return null;

      const regex = new RegExp(`(${queries.join("|")})`, "gi");
      const parts = text.split(regex);

      return parts.map((part, i) => {
        const isMatch = regex.test(part);
        regex.lastIndex = 0;
        return isMatch ? (
          <mark key={i} className={classNames(styles.mark, highlightClassName)} style={highlightStyles}>
            {part}
          </mark>
        ) : (
          part
        );
      });
    };

    if (asChild) {
      const child = React.Children.only(children as React.ReactElement<{ children?: React.ReactNode }>);
      const childText = child.props.children;
      const parts = typeof childText === "string" ? buildParts(childText) : null;
      const slotChild = parts ? React.cloneElement(child, {}, parts) : child;

      return (
        <Component className={classNames(styles.root, className)} ref={ref} {...props}>
          <Slottable>{slotChild}</Slottable>
        </Component>
      );
    }

    if (typeof children !== "string") {
      return (
        <Component className={classNames(styles.root, className)} ref={ref} {...props}>
          <Slottable>{children}</Slottable>
        </Component>
      );
    }

    const parts = buildParts(children);

    return (
      <Component className={classNames(styles.root, className)} ref={ref} {...props}>
        <Slottable>
          {parts ?? children}
        </Slottable>
      </Component>
    );
  },
);

Highlight.displayName = "Highlight";

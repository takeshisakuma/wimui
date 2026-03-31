import React from "react";
import classNames from "classnames";
import "./highlight.scss";

export type HighlightProps = React.ComponentPropsWithoutRef<"span"> & {
  /** The full text to highlight substrings in. */
  children: string;
  /** Substring(s) to highlight. */
  highlight: string | string[];
  /** Custom class name for the highlighted `<mark>` element. */
  highlightClassName?: string;
  /** Custom styles for the highlighted `<mark>` element. */
  highlightStyles?: React.CSSProperties;
  /** The HTML tag or component to use for the container. Default is "span". */
  component?: React.ElementType;
};

/**
 * Highlight component that emphasizes specific parts of a text.
 */
export const Highlight = ({
  children,
  highlight,
  highlightClassName,
  highlightStyles,
  component: Component = "span",
  className,
  ...props
}: HighlightProps) => {
  if (typeof children !== "string") {
    // Fallsave if children is not a string
    return (
      <Component className={className} {...props}>
        {children}
      </Component>
    );
  }

  if (!highlight || (Array.isArray(highlight) && highlight.length === 0)) {
    return (
      <Component className={className} {...props}>
        {children}
      </Component>
    );
  }

  const queries = (Array.isArray(highlight) ? highlight : [highlight])
    .filter((q) => q.length > 0)
    .map((q) => q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));

  if (queries.length === 0) {
    return (
      <Component className={className} {...props}>
        {children}
      </Component>
    );
  }

  const regex = new RegExp(`(${queries.join("|")})`, "gi");
  const parts = children.split(regex);

  return (
    <Component
      className={classNames("wim-highlight-container", className)}
      {...props}
    >
      {parts.map((part, i) => {
        const isMatch = regex.test(part);
        // Reset lastIndex because of 'g' flag
        regex.lastIndex = 0;

        return isMatch ? (
          <mark
            key={i}
            className={classNames("wim-highlight", highlightClassName)}
            style={highlightStyles}
          >
            {part}
          </mark>
        ) : (
          part
        );
      })}
    </Component>
  );
};

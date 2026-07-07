import React from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { mergeRefs } from "../../_internal/mergeRefs";
import styles from "./code.module.scss";

export interface CodeProps extends Omit<React.HTMLAttributes<HTMLElement>, "content"> {
  /**
   * If true, the code will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
  /**
   * Code to display. Ignored when `code` is set (unless asChild is true).
   */
  children?: React.ReactNode;
  /**
   * Code string to display. Takes precedence over children.
   */
  code?: string;
  /**
   * If true, renders as a block (`<pre>`) instead of inline.
   * @default false
   */
  block?: boolean;
  /**
   * Language identifier appended as a `language-<lang>` class for syntax highlighters.
   */
  language?: string;
}

export const Code = React.forwardRef<HTMLElement, CodeProps>(
  ({ asChild = false, children, code, block = false, language, className, ...props }, ref) => {
    const Component = asChild ? Slot : block ? "pre" : "code";
    const finalContent = asChild ? children : (code || children);

    return (
      <Component
        className={classNames(
          styles.root,
          block ? styles.block : styles.inline,
          language && `language-${language}`,
          className,
        )}
        ref={mergeRefs(ref)}
        {...props}
      >
        {!asChild && block ? (
          <code className={language && `language-${language}`}>
            <Slottable>{finalContent}</Slottable>
          </code>
        ) : (
          <Slottable>{finalContent}</Slottable>
        )}
      </Component>
    );
  },
);

Code.displayName = "Code";

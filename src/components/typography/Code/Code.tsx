import React from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import styles from "./code.module.scss";

export interface CodeProps extends Omit<React.HTMLAttributes<HTMLElement>, "content"> {
  asChild?: boolean;
  children?: React.ReactNode;
  code?: string;
  block?: boolean;
  language?: string;
}

export const Code = React.forwardRef<HTMLElement, CodeProps>(
  ({ asChild = false, children, code, block = false, language, className, ...props }, ref) => {
    const Component = asChild ? Slot : block ? "pre" : "code";

    return (
      <Component
        className={classNames(
          styles.root,
          block ? styles.block : styles.inline,
          language && `language-${language}`,
          className,
        )}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        {...props}
      >
        {block ? (
          <code className={language && `language-${language}`}>
            <Slottable>{code || children}</Slottable>
          </code>
        ) : (
          <Slottable>{code || children}</Slottable>
        )}
      </Component>
    );
  },
);

Code.displayName = "Code";

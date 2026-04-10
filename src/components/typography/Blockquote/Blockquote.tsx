import React from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import styles from "./blockquote.module.scss";
import { ComponentSize } from "../../../types/tokens";

export interface BlockquoteProps extends Omit<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, "cite" | "content"> {
  asChild?: boolean;
  size?: ComponentSize;
  color?:
    | "black"
    | "deepgray"
    | "gray"
    | "lightgray"
    | "white"
    | "primary"
    | "success"
    | "warning"
    | "error"
    | "info";
  content?: React.ReactNode;
  cite?: React.ReactNode;
  border?: boolean;
}

export const Blockquote = React.forwardRef<HTMLQuoteElement, BlockquoteProps>(
  (
    { asChild = false, size = "md", content, cite, color = "black", border = true, className, children, ...props },
    ref,
  ) => {
    const Component = asChild ? Slot : "blockquote";
    const finalContent = content ?? children;

    return (
      <Component
        className={classNames(
          styles.root,
          styles[size],
          styles[color],
          border && styles.border,
          className,
        )}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        {...props}
      >
        <div className={styles.content}>
          <Slottable>{finalContent}</Slottable>
        </div>
        {cite && <cite className={styles.cite}>{cite}</cite>}
      </Component>
    );
  },
);

Blockquote.displayName = "Blockquote";

import React from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import "./quote.scss";
import { ComponentSize } from "../../../types/tokens";

export interface QuoteProps extends Omit<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, "cite" | "content"> {
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

export const Quote = React.forwardRef<HTMLQuoteElement, QuoteProps>(
  (
    { asChild = false, size = "md", content, cite, color = "black", border = true, className, children, ...props },
    ref,
  ) => {
    const Component = asChild ? Slot : "blockquote";
    const finalContent = content ?? children;

    return (
      <Component
        className={classNames(
          "wim-quote",
          `wim-quote--${size}`,
          `wim-quote--${color}`,
          border && "wim-quote--border",
          className,
        )}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        {...props}
      >
        <div className="wim-quote__content">
          <Slottable>{finalContent}</Slottable>
        </div>
        {cite && <cite className="wim-quote__cite">{cite}</cite>}
      </Component>
    );
  },
);

Quote.displayName = "Quote";

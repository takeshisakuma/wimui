import React from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import styles from "./blockquote.module.scss";
import { ComponentSizeBasic, WimColor } from "../../../types/tokens";
import { getColorValue } from "../../../utilities/style-utils";

export interface BlockquoteProps extends Omit<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, "cite" | "content" | "color"> {
  asChild?: boolean;
  size?: ComponentSizeBasic;
  color?: WimColor;
  content?: React.ReactNode;
  cite?: React.ReactNode;
  border?: boolean;
}

export const Blockquote = React.forwardRef<HTMLQuoteElement, BlockquoteProps>(
  (
    { asChild = false, size = "md", content, cite, color, border = true, className, style, children, ...props },
    ref,
  ) => {
    const Component = asChild ? Slot : "blockquote";
    const finalContent = asChild ? children : (content ?? children);
    
    // For backwards compatibility with standard intent colors
    const mappedColors = ["primary", "success", "warning", "error", "info"];
    const useClassNameForColor = typeof color === "string" && mappedColors.includes(color);

    return (
      <Component
        className={classNames(
          styles.root, 
          styles[size], 
          useClassNameForColor && styles[color as keyof typeof styles], 
          border && styles.border, 
          className
        )}
        style={{
          color: !useClassNameForColor ? getColorValue(color) : undefined,
          ...(style as React.CSSProperties),
        }}
        ref={ref}
        {...props}
      >
        <Slottable>{finalContent}</Slottable>
        {cite && <cite className={styles.cite}>{cite}</cite>}
      </Component>
    );
  },
);

Blockquote.displayName = "Blockquote";

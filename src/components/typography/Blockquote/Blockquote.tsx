import React from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import styles from "./blockquote.module.scss";
import { ComponentSizeBasic, WimColor } from "../../../types/tokens";
import { getColorValue } from "../../../utilities/style-utils";

export interface BlockquoteProps extends Omit<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, "cite" | "content" | "color"> {
  /**
   * If true, the blockquote will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
  /**
   * Font size of the quote.
   * @default "md"
   */
  size?: ComponentSizeBasic;
  /**
   * Text color. Accepts a design token color name or any CSS color value.
   */
  color?: WimColor;
  /**
   * Quoted content. Alternative to children.
   */
  content?: React.ReactNode;
  /**
   * Source of the quote, rendered in a `<cite>` element.
   */
  cite?: React.ReactNode;
  /**
   * Whether to show the left border.
   * @default true
   */
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

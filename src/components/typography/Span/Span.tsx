import React from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import styles from "./span.module.scss";
import { Icon } from "../../media/Icon/Icon";
import { WimColor, ComponentSize, WimFontWeight } from "../../../types/tokens";
import { getColorValue, getFontWeightValue } from "../../../utilities/style-utils";

export interface SpanProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color" | "content"> {
  /**
   * If true, the span will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: WimColor;
  weight?: "normal" | "bold" | "medium";
  fontStyle?: "normal" | "italic";
  decoration?: "line-through" | "underline" | "highlight" | "none";
  content?: React.ReactNode;
  iconName?: React.ComponentProps<typeof Icon>["name"];
  iconPosition?: "left" | "right";
}

export const Span = React.forwardRef<HTMLSpanElement, SpanProps>(
  (
    {
      asChild = false,
      size = "md",
      content,
      color,
      weight = "normal",
      fontStyle = "normal",
      iconName = undefined,
      iconPosition = "left",
      decoration = "none",
      className,
      style,
      children,
      ...props
    },
    ref,
  ) => {
    const finalContent = content ?? children;

    // Icon の size プロパティは "sm" | "md" | "lg" のみ許容されているためマッピング
    const iconSizeMap: Record<string, ComponentSize> = {
      xs: "sm",
      sm: "sm",
      md: "md",
      lg: "lg",
      xl: "lg",
    };
    const iconSize = iconSizeMap[size] || "md";

    const iconComponent = iconName ? <Icon name={iconName} size={iconSize} /> : null;

    const contentToRender = iconName ? (
      <>
        {iconPosition === "left" && iconComponent}
        <Slottable>
          <span>{finalContent}</span>
        </Slottable>
        {iconPosition === "right" && iconComponent}
      </>
    ) : (
      <Slottable>{finalContent}</Slottable>
    );

    const mappedColors = [
      "black",
      "deepgray",
      "gray",
      "lightgray",
      "white",
      "error",
      "primary",
      "destructive",
      "success",
      "warning",
      "info",
    ];
    const useClassNameForColor = typeof color === "string" && mappedColors.includes(color);

    const Component = asChild ? Slot : "span";

    return (
      <Component
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        className={classNames(
          styles.root,
          styles[size],
          useClassNameForColor && styles[color as keyof typeof styles],
          weight === "bold" && styles.bold,
          fontStyle === "italic" && styles.italic,
          decoration !== "none" && styles[decoration],
          className,
        )}
        style={{
          color: !useClassNameForColor ? getColorValue(color) : undefined,
          fontWeight: getFontWeightValue(weight as WimFontWeight),
          ...(style as React.CSSProperties),
        }}
        {...props}
      >
        {contentToRender}
      </Component>
    );
  },
);

Span.displayName = "Span";

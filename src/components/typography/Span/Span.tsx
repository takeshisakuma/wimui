import React from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import styles from "./span.module.scss";
import { Icon } from "../../media/Icon/Icon";
import { WimColor, ComponentSize, ComponentSizeText, WimFontWeight, WimFontWeightKey } from "../../../types/tokens";
import { getColorValue, getFontWeightValue } from "../../../utilities/style-utils";

export interface SpanProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color" | "content"> {
  /**
   * If true, the span will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
  /**
   * Font size of the text.
   * @default "md"
   */
  size?: ComponentSizeText;
  /**
   * Text color. Accepts a design token color name or any CSS color value.
   */
  color?: WimColor;
  /**
   * Font weight.
   * @default "normal"
   */
  weight?: WimFontWeightKey;
  /**
   * Font style.
   * @default "normal"
   */
  fontStyle?: "normal" | "italic";
  /**
   * Visual decoration applied to the text.
   * @default "none"
   */
  decoration?: "line-through" | "underline" | "highlight" | "none";
  /**
   * Content of the span. Alternative to children.
   */
  content?: React.ReactNode;
  /**
   * Name of the icon displayed alongside the text.
   */
  iconName?: React.ComponentProps<typeof Icon>["name"];
  /**
   * Position of the icon relative to the text.
   * @default "left"
   */
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
    const finalContent = asChild ? children : (content ?? children);

    // テキストサイズより大きいアイコンは間延びするため lg に丸める
    const iconSizeMap: Record<ComponentSizeText, ComponentSize> = {
      xs: "xs",
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
          {asChild ? finalContent : <span>{finalContent}</span>}
        </Slottable>
        {iconPosition === "right" && iconComponent}
      </>
    ) : (
      <Slottable>{finalContent}</Slottable>
    );

    const mappedColors = [
      "danger",
      "primary",
      "danger",
      "success",
      "warning",
      "info",
    ];
    const useClassNameForColor = typeof color === "string" && mappedColors.includes(color);

    const Component = asChild ? Slot : "span";

    return (
      <Component
        ref={ref}
        className={classNames("wim-span", 
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

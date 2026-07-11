import React from "react";
import classNames from "classnames";
import { WimColor, ComponentSizeBasic } from "../../../types/tokens";
import { mergeRefs } from "../../_internal/mergeRefs";
import { getColorValue } from "../../../utilities/style-utils";
import styles from "./indicator.module.scss";

type IndicatorProps = React.HTMLAttributes<HTMLSpanElement> & {
  /**
   * Element the indicator dot is attached to. If omitted, only the dot is rendered.
   */
  children?: React.ReactNode;
  /**
   * Color of the dot. Accepts a design token color name or any CSS color value.
   * @default "primary"
   */
  color?: WimColor;
  /**
   * Size of the dot.
   * @default "md"
   */
  size?: ComponentSizeBasic;
  /**
   * Corner of the children the dot is placed at.
   * @default "top-right"
   */
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  /**
   * If true, the dot pulses to draw attention.
   * @default false
   */
  pulse?: boolean;
  /**
   * If true, renders the dot inline instead of positioning it on a corner.
   * @default false
   */
  inline?: boolean;
  /**
   * Additional CSS class name.
   */
  className?: string;
  /**
   * Inline styles for the container.
   */
  style?: React.CSSProperties;
};

/**
 * Small dot that indicates the state of an element (online, unread, error, etc.).
 */
export const Indicator = React.forwardRef<HTMLSpanElement, IndicatorProps>(
  (
    {
      children,
      color = "primary",
      size = "md",
      position = "top-right",
      pulse = false,
      inline = false,
      className,
      style,
      ...props
    },
    ref,
  ) => {
    const mappedColors = ["primary", "success", "error", "warning", "neutral"];
    const useClassNameForColor = typeof color === "string" && mappedColors.includes(color);

    return (
      <span
        ref={mergeRefs(ref)}
        className={classNames("wim-indicator", styles.root, inline && styles.inlineRoot, className)}
        style={style}
        {...props}
      >
        {children}
        <span
          className={classNames(
            styles.dot,
            useClassNameForColor && styles[color as string],
            styles[size],
            !inline && styles[position],
            pulse && styles.pulse,
          )}
          style={{
            backgroundColor: !useClassNameForColor ? getColorValue(color) : undefined,
          }}
        />
      </span>
    );
  },
);

Indicator.displayName = "Indicator";

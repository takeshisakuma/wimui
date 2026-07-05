import React from "react";
import classNames from "classnames";
import { WimColor, ComponentSizeBasic } from "../../../types/tokens";
import { mergeRefs } from "../../_internal/mergeRefs";
import { getColorValue } from "../../../utilities/style-utils";
import styles from "./indicator.module.scss";

type IndicatorProps = React.HTMLAttributes<HTMLSpanElement> & {
  children?: React.ReactNode;
  color?: WimColor;
  size?: ComponentSizeBasic;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  pulse?: boolean;
  inline?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * 要素の状態（オンライン、未読、エラーなど）を示す小さなドットコンポーネント。
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
        className={classNames(styles.root, inline && styles.inlineRoot, className)}
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

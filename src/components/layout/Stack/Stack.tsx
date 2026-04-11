import React from "react";
import classNames from "classnames";
import { Box, BoxProps } from "../../layout/Box/Box";
import { ResponsiveProp } from "../../layout/Grid/grid-utils";
import styles from "./stack.module.scss";

export type StackProps<C extends React.ElementType = "div"> = BoxProps<C> & {
  /**
   * If true, the stack will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
  /** Gap between children. Can be a number (px) or a spacing token (e.g., 'sm', 'md', 'lg'). */
  gap?: number | string;
  /** Stack direction */
  direction?: ResponsiveProp<"row" | "column">;
  /** Align-items */
  align?:
    | "start"
    | "center"
    | "end"
    | "stretch"
    | "baseline"
    | React.CSSProperties["alignItems"];
  /** Justify-content */
  justify?:
    | "start"
    | "center"
    | "end"
    | "between"
    | "around"
    | "evenly"
    | "stretch"
    | React.CSSProperties["justifyContent"];
};

const mapAlign = (val?: string) => {
  if (val === "start") return "flex-start";
  if (val === "end") return "flex-end";
  return val;
};

const mapJustify = (val?: string) => {
  if (val === "start") return "flex-start";
  if (val === "end") return "flex-end";
  if (val === "between") return "space-between";
  if (val === "around") return "space-around";
  if (val === "evenly") return "space-evenly";
  return val;
};

/**
 * Stack component is used to distribute space between elements in a vertical or horizontal layout.
 */
export interface StackComponent {
  <C extends React.ElementType = "div">(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    props: StackProps<C> & { ref?: React.Ref<any> },
  ): React.ReactElement | null;
  displayName?: string;
}

export const Stack = React.forwardRef(
  <C extends React.ElementType = "div">(
    {
      as,
      asChild = false,
      direction = "column",
      gap = "md",
      align,
      justify,
      style,
      className,
      children,
      ...props
    }: StackProps<C>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: React.Ref<any>,
  ) => {
    const getGapValue = (val?: number | string) => {
      if (typeof val === "number") return `${val}px`;
      const tokens = [
        "3xs",
        "2xs",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "3xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
      ];
      if (typeof val === "string" && tokens.includes(val)) {
        return `var(--wim-spacing-${val})`;
      }
      return val ? String(val) : undefined;
    };

    const generateResponsiveDirection = (
      dir?: ResponsiveProp<"row" | "column">,
    ) => {
      if (dir === undefined) return {};
      if (typeof dir === "string") return { "--wim-stack-dir": dir };

      const styles: Record<string, string> = {
        "--wim-stack-dir": dir.base || "column",
      };
      if (dir.sm) styles["--wim-stack-dir-sm"] = dir.sm;
      if (dir.md) styles["--wim-stack-dir-md"] = dir.md;
      if (dir.lg) styles["--wim-stack-dir-lg"] = dir.lg;
      if (dir.xl) styles["--wim-stack-dir-xl"] = dir.xl;
      return styles;
    };

    const responsiveStyles = generateResponsiveDirection(direction);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const BoxComponent = Box as any;
    return (
      <BoxComponent
        as={as}
        asChild={asChild}
        ref={ref}
        display="flex"
        className={classNames(styles.root, className)}
        style={{
          flexDirection:
            "var(--wim-stack-dir)" as React.CSSProperties["flexDirection"],
          gap: getGapValue(gap),
          alignItems: mapAlign(align as string),
          justifyContent: mapJustify(justify as string),
          ...responsiveStyles,
          ...style,
        }}
        {...props}
      >
        {children}
      </BoxComponent>
    );
  },
) as StackComponent;

Stack.displayName = "Stack";

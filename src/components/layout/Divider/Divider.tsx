import React from "react";
import classNames from "classnames";
import styles from "./divider.module.scss";

export type DividerProps = React.ComponentPropsWithoutRef<"div"> & {
  /** Orientation of the divider */
  orientation?: "horizontal" | "vertical";
  /**
   * Thickness of the line, in pixels. Left out, the line is as thick as every
   * other hairline in the theme, so a theme that thickens its borders thickens
   * this too.
   */
  thickness?: number;
};

/**
 * `Divider` is a component for visually separating content.
 */
export const Divider = ({
  orientation = "horizontal",
  thickness,
  className,
  style,
  ...props
}: DividerProps) => {
  /* 既定は `1`（px）の直書きだった。`--wim-border-width-thin` が同じ 1px を持って
     いるのに、線の太さを変えたテーマでも区切り線だけ 1px のまま残る（必須ルール 4）。
     **渡されたときだけ変数を置き**、既定は SCSS のフォールバックでトークンから取る。
     `thickness` の型は `number` のままなので、利用者の書き方は変わらない。 */
  const customStyle: React.CSSProperties = {
    ...style,
    ...(thickness !== undefined
      ? { "--wim-divider-thickness": `${thickness}px` }
      : null),
  } as React.CSSProperties;

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={classNames("wim-divider", 
        styles.root,
        styles[orientation],
        className,
      )}
      style={customStyle}
      {...props}
    />
  );
};

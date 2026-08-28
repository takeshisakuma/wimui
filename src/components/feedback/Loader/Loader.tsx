import React from "react";
import classNames from "classnames";
import { WimColor, ComponentSizeExtended } from "../../../types/tokens";
import { getColorValue } from "../../../utilities/style-utils";
import styles from "./loader.module.scss";

export type LoaderVariant = "bars" | "dots" | "pulse";

export type LoaderProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * Animation style of the loader.
   * @default "bars"
   */
  variant?: LoaderVariant;
  /**
   * Size of the loader.
   * @default "md"
   */
  size?: ComponentSizeExtended;
  /**
   * Color of the loader. Accepts a design token color name or "currentColor".
   * @default "primary"
   */
  color?: "currentColor" | WimColor;
};

/**
 * Indicates that data is loading or being processed.
 */
export const Loader = ({
  variant = "bars",
  size = "md",
  color = "primary",
  className,
  style,
  ...props
}: LoaderProps) => {
  const mappedColors = ["primary", "secondary", "success", "warning", "danger", "neutral"];
  const useClassNameForColor = typeof color === "string" && mappedColors.includes(color);

  return (
    <div
      className={classNames("wim-loader", 
        styles.root,
        styles[variant],
        styles[size],
        useClassNameForColor && styles[color as string],
        className,
      )}
      style={{
        color: !useClassNameForColor ? getColorValue(color) : undefined,
        ...(style as React.CSSProperties),
      }}
      // T228: live region が読み上げるのは内容の変化。この 3 つの span は空の
      // まま変化しないので、role="status" は何も伝えないまま「付いているよう
      // に見える」だけだった。素の装飾として置き、待機を伝えたい呼び出し側は
      // 読み込み中の領域そのものを live region で囲む（`Spinner` は `label` を
      // 渡したときだけ live region になる）。
      {...props}
    >
      <span className={styles.item}></span>
      <span className={styles.item}></span>
      <span className={styles.item}></span>
    </div>
  );
};

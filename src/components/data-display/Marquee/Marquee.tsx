import React from "react";
import classNames from "classnames";
import styles from "./marquee.module.scss";

export type MarqueeProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * アニメーションの速度（秒）。デフォルトは `20`。
   */
  duration?: number;
  /**
   * アニメーションを逆方向にするかどうか。
   */
  reverse?: boolean;
  /**
   * ホバー時にアニメーションを一時停止するかどうか。
   */
  pauseOnHover?: boolean;
  /**
   * 垂直方向に流すかどうか。
   */
  vertical?: boolean;
  /**
   * コンテンツの繰り返し回数。シームレスなループのために調整が必要な場合があります。デフォルトは `2`。
   */
  repeat?: number;
};

/**
 * テキストや画像を水平・垂直方向にスクロールさせるためのアニメーションコンポーネント。
 */
export const Marquee = ({
  duration = 20,
  reverse = false,
  pauseOnHover = true,
  vertical = false,
  repeat = 2,
  className,
  children,
  style,
  ...props
}: MarqueeProps) => {
  const content = (
    <div
      className={classNames(styles.content, {
        [styles.reverse]: reverse,
        [styles.vertical]: vertical,
      })}
    >
      {children}
    </div>
  );

  return (
    <div
      className={classNames(styles.root, className)}
      style={
        {
          "--duration": `${duration}s`,
          "--pause-on-hover": pauseOnHover ? "paused" : "running",
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <React.Fragment key={i}>{content}</React.Fragment>
      ))}
    </div>
  );
};

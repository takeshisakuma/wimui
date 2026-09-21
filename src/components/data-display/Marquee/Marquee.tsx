// changeset-reminder の検証用（この PR はマージしない）
import React from "react";
import classNames from "classnames";
import styles from "./marquee.module.scss";

export type MarqueeProps = React.ComponentPropsWithoutRef<"div"> & {
  /** Animation speed (in seconds). Defaults to `20`. */
  duration?: number;
  /** Whether to run the animation in reverse. */
  reverse?: boolean;
  /**
   * Whether to pause the animation on hover. Keyboard focus inside the marquee
   * always pauses it, regardless of this option (WCAG 2.2.2).
   */
  pauseOnHover?: boolean;
  /** Whether to scroll vertically. */
  vertical?: boolean;
  /** Number of times the content is repeated. May need adjusting for a seamless loop. Defaults to `2`. */
  repeat?: number;
};

/**
 * Animation component that scrolls text or images horizontally or vertically.
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
  // 途切れずに流すため同じ中身を repeat 回描く。**2 枚目以降は見た目のための複製**
  // なので、支援技術と Tab 順から外す（T265・2026-09-21）。以前は複製にも何も付けて
  // おらず、スクリーンリーダーは同じ内容を repeat 回読み、中のリンクには Tab で
  // repeat 回止まっていた。
  const content = (copy: boolean) => (
    <div
      className={classNames(styles.content, {
        [styles.reverse]: reverse,
        [styles.vertical]: vertical,
      })}
      aria-hidden={copy || undefined}
      inert={copy || undefined}
    >
      {children}
    </div>
  );

  return (
    <div
      className={classNames("wim-marquee", styles.root, className)}
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
        <React.Fragment key={i}>{content(i > 0)}</React.Fragment>
      ))}
    </div>
  );
};

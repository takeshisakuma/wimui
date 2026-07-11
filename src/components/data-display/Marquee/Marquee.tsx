import React from "react";
import classNames from "classnames";
import styles from "./marquee.module.scss";

export type MarqueeProps = React.ComponentPropsWithoutRef<"div"> & {
  /** Animation speed (in seconds). Defaults to `20`. */
  duration?: number;
  /** Whether to run the animation in reverse. */
  reverse?: boolean;
  /** Whether to pause the animation on hover. */
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
        <React.Fragment key={i}>{content}</React.Fragment>
      ))}
    </div>
  );
};

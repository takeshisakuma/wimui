import React from "react";
import classNames from "classnames";
import styles from "./aspect-ratio.module.scss";

export type AspectRatioProps = React.ComponentPropsWithoutRef<"div"> & {
  /** Aspect ratio (e.g. 16 / 9, 1, 4 / 3) */
  ratio?: number;
  /** Child content */
  children: React.ReactNode;
};

/**
 * `AspectRatio` is a container that displays content while maintaining a given aspect ratio.
 */
export const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ ratio = 1, children, className, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames("wim-aspect-ratio", styles.root, className)}
        style={{ "--wim-aspect-ratio": ratio, ...style } as React.CSSProperties}
        {...props}
      >
        <div className={styles.inner}>{children}</div>
      </div>
    );
  },
);

AspectRatio.displayName = "AspectRatio";

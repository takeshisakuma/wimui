import React from "react";
import classNames from "classnames";
import styles from "./header.module.scss";

export interface HeaderProps extends React.ComponentPropsWithoutRef<"header"> {
  /** Fixed position at the top */
  fixed?: boolean;
  /** Sticky position at the top */
  sticky?: boolean;
  /** Border at the bottom */
  bordered?: boolean;
  /** Glassmorphism effect */
  glass?: boolean;
  /** Background color */
  background?: "primary" | "secondary" | "transparent";
}

export const Header = React.forwardRef<HTMLElement, HeaderProps>(
  (
    {
      className,
      children,
      fixed,
      sticky,
      bordered,
      glass,
      background = "primary",
      ...props
    },
    ref,
  ) => {
    return (
      <header
        ref={ref}
        className={classNames(
          styles.root,
          fixed && styles.fixed,
          sticky && styles.sticky,
          bordered && styles.bordered,
          glass && styles.glass,
          background && styles[`bg-${background}`],
          className,
        )}
        data-fixed={fixed}
        data-sticky={sticky}
        data-bordered={bordered}
        {...props}
      >
        <div className={styles.container}>{children}</div>
      </header>
    );
  },
);

Header.displayName = "Header";

export interface HeaderSectionProps extends React.ComponentPropsWithoutRef<"div"> {
  align?: "start" | "center" | "end";
}

export const HeaderSection = React.forwardRef<
  HTMLDivElement,
  HeaderSectionProps
>(({ className, children, align = "start", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={classNames(
        styles.section,
        align && styles[align],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});

HeaderSection.displayName = "Header.Section";

export default Object.assign(Header, {
  Section: HeaderSection,
});

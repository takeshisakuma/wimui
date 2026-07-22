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
  /** Expand content to full width (disable the centered max-width container) */
  fluid?: boolean;
  /** Background color */
  background?: "primary" | "secondary" | "transparent";
}

const HeaderRoot = React.forwardRef<HTMLElement, HeaderProps>(
  (
    {
      className,
      children,
      fixed,
      sticky,
      bordered,
      glass,
      fluid,
      background = "primary",
      ...props
    },
    ref,
  ) => {
    return (
      <header
        ref={ref}
        className={classNames("wim-header",
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
        <div className={classNames(styles.container, fluid && styles.fluid)}>
          {children}
        </div>
      </header>
    );
  },
);

HeaderRoot.displayName = "Header";

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

export const Header = Object.assign(HeaderRoot, {
  Section: HeaderSection,
});

export default Header;

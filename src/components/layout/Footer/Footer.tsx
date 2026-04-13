import React from "react";
import classNames from "classnames";
import styles from "./footer.module.scss";

export interface FooterProps extends React.ComponentPropsWithoutRef<"footer"> {
  /** Border at the top */
  bordered?: boolean;
  /** Background color */
  background?: "primary" | "secondary" | "dark";
}

const FooterRoot = React.forwardRef<HTMLElement, FooterProps>(
  (
    { className, children, bordered, background = "primary", ...props },
    ref,
  ) => {
    return (
      <footer
        ref={ref}
        className={classNames(
          styles.root,
          bordered && styles.bordered,
          background && styles[`bg-${background}`],
          className,
        )}
        data-bordered={bordered}
        {...props}
      >
        <div className={styles.container}>{children}</div>
      </footer>
    );
  },
);

FooterRoot.displayName = "Footer";

export interface FooterSectionProps extends React.ComponentPropsWithoutRef<"div"> {
  title?: string;
}

export const FooterSection = React.forwardRef<
  HTMLDivElement,
  FooterSectionProps
 >(({ className, children, title, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={classNames(styles.section, className)}
      {...props}
    >
      {title && <h4 className={styles.sectionTitle}>{title}</h4>}
      <div className={styles.sectionContent}>{children}</div>
    </div>
  );
});

FooterSection.displayName = "Footer.Section";

export type FooterBottomProps = React.ComponentPropsWithoutRef<"div">;

export const FooterBottom = React.forwardRef<HTMLDivElement, FooterBottomProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames(styles.bottom, className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

FooterBottom.displayName = "Footer.Bottom";

export const Footer = Object.assign(FooterRoot, {
  Section: FooterSection,
  Bottom: FooterBottom,
});

export default Footer;

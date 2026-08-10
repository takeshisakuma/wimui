import React from "react";
import classNames from "classnames";
import styles from "./footer.module.scss";

export interface FooterProps extends React.ComponentPropsWithoutRef<"footer"> {
  /** Border at the top */
  bordered?: boolean;
  /** Expand content to full width (disable the centered max-width container) */
  fluid?: boolean;
  /** Background color */
  background?: "surface" | "surface-variant" | "inverse";
}

const FooterRoot = React.forwardRef<HTMLElement, FooterProps>(
  (
    { className, children, bordered, fluid, background = "surface", ...props },
    ref,
  ) => {
    return (
      <footer
        ref={ref}
        className={classNames("wim-footer",
          styles.root,
          bordered && styles.bordered,
          background && styles[`bg-${background}`],
          className,
        )}
        data-bordered={bordered}
        {...props}
      >
        <div className={classNames(styles.container, fluid && styles.fluid)}>
          {children}
        </div>
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

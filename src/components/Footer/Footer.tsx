import React from "react";
import classNames from "classnames";
import "./footer.scss";

export interface FooterProps extends React.ComponentPropsWithoutRef<"footer"> {
    /** Border at the top */
    bordered?: boolean;
    /** Background color */
    background?: "primary" | "secondary" | "dark";
}

export const Footer = React.forwardRef<HTMLElement, FooterProps>(
    ({ className, children, bordered, background = "primary", ...props }, ref) => {
        return (
            <footer
                ref={ref}
                className={classNames(
                    "wim-footer",
                    bordered && "wim-footer--bordered",
                    background && `wim-footer--bg-${background}`,
                    className
                )}
                {...props}
            >
                <div className="wim-footer__container">
                    {children}
                </div>
            </footer>
        );
    }
);

Footer.displayName = "Footer";



export interface FooterSectionProps extends React.ComponentPropsWithoutRef<"div"> {
    title?: string;
}

export const FooterSection = React.forwardRef<HTMLDivElement, FooterSectionProps>(
    ({ className, children, title, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={classNames("wim-footer__section", className)}
                {...props}
            >
                {title && <h4 className="wim-footer__section-title">{title}</h4>}
                <div className="wim-footer__section-content">
                    {children}
                </div>
            </div>
        );
    }
);

FooterSection.displayName = "Footer.Section";



export type FooterBottomProps = React.ComponentPropsWithoutRef<"div">;

export const FooterBottom = React.forwardRef<HTMLDivElement, FooterBottomProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={classNames("wim-footer__bottom", className)}
                {...props}
            >
                {children}
            </div>
        );
    }
);

FooterBottom.displayName = "Footer.Bottom";



export default Object.assign(Footer, {
    Section: FooterSection,
    Bottom: FooterBottom,
});

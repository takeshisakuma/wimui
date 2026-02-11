import React from "react";
import PropTypes from "prop-types";
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
                className={[
                    "wim-footer",
                    bordered && "wim-footer--bordered",
                    background && `wim-footer--bg-${background}`,
                    className
                ].filter(Boolean).join(" ")}
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

Footer.propTypes = {
    bordered: PropTypes.bool,
    background: PropTypes.oneOf(["primary", "secondary", "dark"]),
    className: PropTypes.string,
    children: PropTypes.node,
};

export interface FooterSectionProps extends React.ComponentPropsWithoutRef<"div"> {
    title?: string;
}

export const FooterSection = React.forwardRef<HTMLDivElement, FooterSectionProps>(
    ({ className, children, title, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={["wim-footer__section", className].filter(Boolean).join(" ")}
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

FooterSection.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
};

export interface FooterBottomProps extends React.ComponentPropsWithoutRef<"div"> { }

export const FooterBottom = React.forwardRef<HTMLDivElement, FooterBottomProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={["wim-footer__bottom", className].filter(Boolean).join(" ")}
                {...props}
            >
                {children}
            </div>
        );
    }
);

FooterBottom.displayName = "Footer.Bottom";

FooterBottom.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

export default Object.assign(Footer, {
    Section: FooterSection,
    Bottom: FooterBottom,
});

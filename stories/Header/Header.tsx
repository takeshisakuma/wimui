import React from "react";
import PropTypes from "prop-types";
import "./header.scss";

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
    ({ className, children, fixed, sticky, bordered, glass, background = "primary", ...props }, ref) => {
        return (
            <header
                ref={ref}
                className={[
                    "wim-header",
                    fixed && "wim-header--fixed",
                    sticky && "wim-header--sticky",
                    bordered && "wim-header--bordered",
                    glass && "wim-header--glass",
                    background && `wim-header--bg-${background}`,
                    className
                ].filter(Boolean).join(" ")}
                {...props}
            >
                <div className="wim-header__container">
                    {children}
                </div>
            </header>
        );
    }
);

Header.displayName = "Header";

Header.propTypes = {
    fixed: PropTypes.bool,
    sticky: PropTypes.bool,
    bordered: PropTypes.bool,
    glass: PropTypes.bool,
    background: PropTypes.oneOf(["primary", "secondary", "transparent"]),
    className: PropTypes.string,
    children: PropTypes.node,
};

export interface HeaderSectionProps extends React.ComponentPropsWithoutRef<"div"> {
    align?: "start" | "center" | "end";
}

export const HeaderSection = React.forwardRef<HTMLDivElement, HeaderSectionProps>(
    ({ className, children, align = "start", ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={[
                    "wim-header__section",
                    `wim-header__section--${align}`,
                    className
                ].filter(Boolean).join(" ")}
                {...props}
            >
                {children}
            </div>
        );
    }
);

HeaderSection.displayName = "Header.Section";

HeaderSection.propTypes = {
    align: PropTypes.oneOf(["start", "center", "end"]),
    className: PropTypes.string,
    children: PropTypes.node,
};

export default Object.assign(Header, {
    Section: HeaderSection,
});

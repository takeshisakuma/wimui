import React from "react";
import PropTypes from "prop-types";
import "./navbar.scss";

export interface NavbarProps extends React.ComponentPropsWithoutRef<"nav"> {
    /** Fixed position at the top */
    fixed?: boolean;
    /** Sticky position at the top */
    sticky?: boolean;
    /** Transparent background */
    transparent?: boolean;
    /** Glassmorphism effect */
    glass?: boolean;
    /** Border at the bottom */
    bordered?: boolean;
}

export const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
    ({ className, children, fixed, sticky, transparent, glass, bordered, ...props }, ref) => {
        return (
            <nav
                ref={ref}
                className={[
                    "wim-navbar",
                    fixed && "wim-navbar--fixed",
                    sticky && "wim-navbar--sticky",
                    transparent && "wim-navbar--transparent",
                    glass && "wim-navbar--glass",
                    bordered && "wim-navbar--bordered",
                    className
                ].filter(Boolean).join(" ")}
                {...props}
            >
                <div className="wim-navbar__container">
                    {children}
                </div>
            </nav>
        );
    }
);

Navbar.displayName = "Navbar";

Navbar.propTypes = {
    fixed: PropTypes.bool,
    sticky: PropTypes.bool,
    transparent: PropTypes.bool,
    glass: PropTypes.bool,
    bordered: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node,
};

export interface NavbarBrandProps extends React.ComponentPropsWithoutRef<"div"> { }

export const NavbarBrand = React.forwardRef<HTMLDivElement, NavbarBrandProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={["wim-navbar__brand", className].filter(Boolean).join(" ")}
                {...props}
            >
                {children}
            </div>
        );
    }
);

NavbarBrand.displayName = "Navbar.Brand";

export interface NavbarContentProps extends React.ComponentPropsWithoutRef<"div"> {
    justify?: "start" | "end" | "center";
}

export const NavbarContent = React.forwardRef<HTMLDivElement, NavbarContentProps>(
    ({ className, children, justify = "end", ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={[
                    "wim-navbar__content",
                    `wim-navbar__content--${justify}`,
                    className
                ].filter(Boolean).join(" ")}
                {...props}
            >
                {children}
            </div>
        );
    }
);

NavbarContent.displayName = "Navbar.Content";

NavbarContent.propTypes = {
    justify: PropTypes.oneOf(["start", "end", "center"]),
    className: PropTypes.string,
    children: PropTypes.node,
};

export interface NavbarItemProps extends React.ComponentPropsWithoutRef<"div"> {
    active?: boolean;
}

export const NavbarItem = React.forwardRef<HTMLDivElement, NavbarItemProps>(
    ({ className, children, active, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={[
                    "wim-navbar__item",
                    active && "wim-navbar__item--active",
                    className
                ].filter(Boolean).join(" ")}
                {...props}
            >
                {children}
            </div>
        );
    }
);

NavbarItem.displayName = "Navbar.Item";

NavbarItem.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node,
};

export interface NavbarLinkProps extends React.ComponentPropsWithoutRef<"a"> {
    active?: boolean;
}

export const NavbarLink = React.forwardRef<HTMLAnchorElement, NavbarLinkProps>(
    ({ className, children, active, ...props }, ref) => {
        return (
            <a
                ref={ref}
                className={[
                    "wim-navbar__link",
                    active && "wim-navbar__link--active",
                    className
                ].filter(Boolean).join(" ")}
                {...props}
            >
                {children}
            </a>
        );
    }
);

NavbarLink.displayName = "Navbar.Link";

NavbarLink.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node,
};

export default Object.assign(Navbar, {
    Brand: NavbarBrand,
    Content: NavbarContent,
    Item: NavbarItem,
    Link: NavbarLink,
});

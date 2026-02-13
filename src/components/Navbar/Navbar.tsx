import React from "react";
import classNames from "classnames";
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
                className={classNames(
                    "wim-navbar",
                    fixed && "wim-navbar--fixed",
                    sticky && "wim-navbar--sticky",
                    transparent && "wim-navbar--transparent",
                    glass && "wim-navbar--glass",
                    bordered && "wim-navbar--bordered",
                    className
                )}
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



export interface NavbarBrandProps extends React.ComponentPropsWithoutRef<"div"> { }

export const NavbarBrand = React.forwardRef<HTMLDivElement, NavbarBrandProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={classNames("wim-navbar__brand", className)}
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
                className={classNames(
                    "wim-navbar__content",
                    `wim-navbar__content--${justify}`,
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

NavbarContent.displayName = "Navbar.Content";



export interface NavbarItemProps extends React.ComponentPropsWithoutRef<"div"> {
    active?: boolean;
}

export const NavbarItem = React.forwardRef<HTMLDivElement, NavbarItemProps>(
    ({ className, children, active, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={classNames(
                    "wim-navbar__item",
                    active && "wim-navbar__item--active",
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

NavbarItem.displayName = "Navbar.Item";



export interface NavbarLinkProps extends React.ComponentPropsWithoutRef<"a"> {
    active?: boolean;
}

export const NavbarLink = React.forwardRef<HTMLAnchorElement, NavbarLinkProps>(
    ({ className, children, active, ...props }, ref) => {
        return (
            <a
                ref={ref}
                className={classNames(
                    "wim-navbar__link",
                    active && "wim-navbar__link--active",
                    className
                )}
                {...props}
            >
                {children}
            </a>
        );
    }
);

NavbarLink.displayName = "Navbar.Link";



export default Object.assign(Navbar, {
    Brand: NavbarBrand,
    Content: NavbarContent,
    Item: NavbarItem,
    Link: NavbarLink,
});

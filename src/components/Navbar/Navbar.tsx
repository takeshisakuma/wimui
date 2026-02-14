import React, { createContext, useContext, useState } from "react";
import classNames from "classnames";
import { HamburgerMenu } from "../HamburgerMenu/HamburgerMenu";
import { Drawer, DrawerContent } from "../Drawer/Drawer";
import "./navbar.scss";

type NavbarContextType = {
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
};

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

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
    /** Initial state for mobile menu */
    defaultMenuOpen?: boolean;
    /** Controlled state for mobile menu */
    isMenuOpen?: boolean;
    /** Callback when menu state changes */
    onMenuOpenChange?: (isOpen: boolean) => void;
}

export const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
    ({ className, children, fixed, sticky, transparent, glass, bordered, defaultMenuOpen = false, isMenuOpen: controlledIsMenuOpen, onMenuOpenChange, ...props }, ref) => {
        const [internalIsMenuOpen, setInternalIsMenuOpen] = useState(defaultMenuOpen);

        const isMenuOpen = controlledIsMenuOpen ?? internalIsMenuOpen;
        const setIsMenuOpen = (isOpen: boolean) => {
            setInternalIsMenuOpen(isOpen);
            onMenuOpenChange?.(isOpen);
        };

        return (
            <NavbarContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
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
            </NavbarContext.Provider>
        );
    }
);

Navbar.displayName = "Navbar";

export type NavbarBrandProps = React.ComponentPropsWithoutRef<"div">;

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
    /** Hide content on mobile screens */
    hiddenOnMobile?: boolean;
}

export const NavbarContent = React.forwardRef<HTMLDivElement, NavbarContentProps>(
    ({ className, children, justify = "end", hiddenOnMobile, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={classNames(
                    "wim-navbar__content",
                    `wim-navbar__content--${justify}`,
                    hiddenOnMobile && "wim-navbar__content--hidden-mobile",
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

export interface NavbarToggleProps extends Omit<React.ComponentPropsWithoutRef<typeof HamburgerMenu>, "isOpen" | "onClick"> {
}

export const NavbarToggle = React.forwardRef<HTMLButtonElement, NavbarToggleProps>(
    ({ className, ...props }, ref) => {
        const context = useContext(NavbarContext);
        if (!context) {
            throw new Error("NavbarToggle must be used within a Navbar");
        }
        const { isMenuOpen, setIsMenuOpen } = context;

        return (
            <div className="wim-navbar__toggle">
                <HamburgerMenu
                    ref={ref}
                    isOpen={isMenuOpen}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={className}
                    {...props}
                />
            </div>
        );
    }
);

NavbarToggle.displayName = "Navbar.Toggle";

export interface NavbarMenuProps extends React.ComponentPropsWithoutRef<"div"> {
    position?: "right" | "left" | "top" | "bottom";
}

export const NavbarMenu = React.forwardRef<HTMLDivElement, NavbarMenuProps>(
    ({ className, children, position = "right", ...props }, ref) => {
        const context = useContext(NavbarContext);
        if (!context) {
            throw new Error("NavbarMenu must be used within a Navbar");
        }
        const { isMenuOpen, setIsMenuOpen } = context;

        return (
            <Drawer
                open={isMenuOpen}
                onOpenChange={setIsMenuOpen}
                side={position}
            >
                <DrawerContent className={classNames("wim-navbar__menu", className)}>
                    {/* DrawerContent does not forward ref, so we attach it to a div if needed, 
                        but to keep structure clean we just pass props to DrawerContent essentially. 
                        Since we can't fully forward props/ref to DrawerContent easily without wrapper,
                        we will render children directly. 
                        The className handles the styling.
                    */}
                    {children}
                </DrawerContent>
            </Drawer>
        );
    }
);

NavbarMenu.displayName = "Navbar.Menu";

export interface NavbarMenuItemProps extends React.ComponentPropsWithoutRef<"div"> {
    active?: boolean;
}

export const NavbarMenuItem = React.forwardRef<HTMLDivElement, NavbarMenuItemProps>(
    ({ className, children, active, ...props }, ref) => {
        const context = useContext(NavbarContext);
        const { setIsMenuOpen } = context || {};

        const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
            setIsMenuOpen?.(false);
            props.onClick?.(e);
        };

        return (
            <div
                ref={ref}
                className={classNames(
                    "wim-navbar__menu-item",
                    active && "wim-navbar__menu-item--active",
                    className
                )}
                onClick={handleClick}
                {...props}
            >
                {children}
            </div>
        );
    }
);

NavbarMenuItem.displayName = "Navbar.MenuItem";

export default Object.assign(Navbar, {
    Brand: NavbarBrand,
    Content: NavbarContent,
    Item: NavbarItem,
    Link: NavbarLink,
    Toggle: NavbarToggle,
    Menu: NavbarMenu,
    MenuItem: NavbarMenuItem,
});

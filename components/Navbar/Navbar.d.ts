import { default as React } from '../../../node_modules/react';
import { HamburgerMenu } from '../HamburgerMenu/HamburgerMenu';
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
export declare const Navbar: React.ForwardRefExoticComponent<NavbarProps & React.RefAttributes<HTMLElement>>;
export type NavbarBrandProps = React.ComponentPropsWithoutRef<"div">;
export declare const NavbarBrand: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export interface NavbarContentProps extends React.ComponentPropsWithoutRef<"div"> {
    justify?: "start" | "end" | "center";
    /** Hide content on mobile screens */
    hiddenOnMobile?: boolean;
}
export declare const NavbarContent: React.ForwardRefExoticComponent<NavbarContentProps & React.RefAttributes<HTMLDivElement>>;
export interface NavbarItemProps extends React.ComponentPropsWithoutRef<"div"> {
    active?: boolean;
}
export declare const NavbarItem: React.ForwardRefExoticComponent<NavbarItemProps & React.RefAttributes<HTMLDivElement>>;
export interface NavbarLinkProps extends React.ComponentPropsWithoutRef<"a"> {
    active?: boolean;
}
export declare const NavbarLink: React.ForwardRefExoticComponent<NavbarLinkProps & React.RefAttributes<HTMLAnchorElement>>;
export interface NavbarToggleProps extends Omit<React.ComponentPropsWithoutRef<typeof HamburgerMenu>, "isOpen" | "onClick"> {
}
export declare const NavbarToggle: React.ForwardRefExoticComponent<NavbarToggleProps & React.RefAttributes<HTMLButtonElement>>;
export interface NavbarMenuProps extends React.ComponentPropsWithoutRef<"div"> {
    position?: "right" | "left" | "top" | "bottom";
}
export declare const NavbarMenu: React.ForwardRefExoticComponent<NavbarMenuProps & React.RefAttributes<HTMLDivElement>>;
export interface NavbarMenuItemProps extends React.ComponentPropsWithoutRef<"div"> {
    active?: boolean;
}
export declare const NavbarMenuItem: React.ForwardRefExoticComponent<NavbarMenuItemProps & React.RefAttributes<HTMLDivElement>>;
declare const _default: React.ForwardRefExoticComponent<NavbarProps & React.RefAttributes<HTMLElement>> & {
    Brand: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Content: React.ForwardRefExoticComponent<NavbarContentProps & React.RefAttributes<HTMLDivElement>>;
    Item: React.ForwardRefExoticComponent<NavbarItemProps & React.RefAttributes<HTMLDivElement>>;
    Link: React.ForwardRefExoticComponent<NavbarLinkProps & React.RefAttributes<HTMLAnchorElement>>;
    Toggle: React.ForwardRefExoticComponent<NavbarToggleProps & React.RefAttributes<HTMLButtonElement>>;
    Menu: React.ForwardRefExoticComponent<NavbarMenuProps & React.RefAttributes<HTMLDivElement>>;
    MenuItem: React.ForwardRefExoticComponent<NavbarMenuItemProps & React.RefAttributes<HTMLDivElement>>;
};
export default _default;

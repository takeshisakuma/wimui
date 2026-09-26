import { default as React } from '../../../../node_modules/react';
import { HamburgerMenu } from '../../navigation/HamburgerMenu/HamburgerMenu';
export interface NavbarProps extends React.ComponentPropsWithoutRef<"nav"> {
    /** Whether the navbar is fixed to the viewport */
    fixed?: boolean;
    /** Whether the navbar sticks to the top while scrolling */
    sticky?: boolean;
    /** Whether the navbar background is transparent */
    transparent?: boolean;
    /** Whether to apply the frosted-glass effect */
    glass?: boolean;
    /** Whether to show a bottom border */
    bordered?: boolean;
    /** Expand content to full width (disable the centered max-width container) */
    fluid?: boolean;
    /** Initial open state of the mobile menu (uncontrolled) */
    defaultMenuOpen?: boolean;
    /** Open state of the mobile menu (controlled) */
    isMenuOpen?: boolean;
    /** Callback when the mobile menu open state changes */
    onMenuOpenChange?: (isOpen: boolean) => void;
}
export type NavbarBrandProps = React.ComponentPropsWithoutRef<"div">;
export declare const NavbarBrand: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export interface NavbarContentProps extends React.ComponentPropsWithoutRef<"div"> {
    justify?: "start" | "end" | "center";
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
export type NavbarToggleProps = Omit<React.ComponentPropsWithoutRef<typeof HamburgerMenu>, "open" | "onClick">;
export declare const NavbarToggle: React.ForwardRefExoticComponent<NavbarToggleProps & React.RefAttributes<HTMLButtonElement>>;
export interface NavbarMenuProps extends React.ComponentPropsWithoutRef<"div"> {
    position?: "right" | "left" | "top" | "bottom";
}
export declare const NavbarMenu: React.ForwardRefExoticComponent<NavbarMenuProps & React.RefAttributes<HTMLDivElement>>;
export interface NavbarMenuItemProps extends React.ComponentPropsWithoutRef<"div"> {
    active?: boolean;
}
export declare const NavbarMenuItem: React.ForwardRefExoticComponent<NavbarMenuItemProps & React.RefAttributes<HTMLDivElement>>;
export declare const Navbar: React.ForwardRefExoticComponent<NavbarProps & React.RefAttributes<HTMLElement>> & {
    Brand: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Content: React.ForwardRefExoticComponent<NavbarContentProps & React.RefAttributes<HTMLDivElement>>;
    Item: React.ForwardRefExoticComponent<NavbarItemProps & React.RefAttributes<HTMLDivElement>>;
    Link: React.ForwardRefExoticComponent<NavbarLinkProps & React.RefAttributes<HTMLAnchorElement>>;
    Toggle: React.ForwardRefExoticComponent<NavbarToggleProps & React.RefAttributes<HTMLButtonElement>>;
    Menu: React.ForwardRefExoticComponent<NavbarMenuProps & React.RefAttributes<HTMLDivElement>>;
    MenuItem: React.ForwardRefExoticComponent<NavbarMenuItemProps & React.RefAttributes<HTMLDivElement>>;
};
export default Navbar;

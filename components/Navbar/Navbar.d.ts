import { default as React } from '../../../node_modules/react';
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
export declare const Navbar: React.ForwardRefExoticComponent<NavbarProps & React.RefAttributes<HTMLElement>>;
export type NavbarBrandProps = React.ComponentPropsWithoutRef<"div">;
export declare const NavbarBrand: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export interface NavbarContentProps extends React.ComponentPropsWithoutRef<"div"> {
    justify?: "start" | "end" | "center";
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
declare const _default: React.ForwardRefExoticComponent<NavbarProps & React.RefAttributes<HTMLElement>> & {
    Brand: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Content: React.ForwardRefExoticComponent<NavbarContentProps & React.RefAttributes<HTMLDivElement>>;
    Item: React.ForwardRefExoticComponent<NavbarItemProps & React.RefAttributes<HTMLDivElement>>;
    Link: React.ForwardRefExoticComponent<NavbarLinkProps & React.RefAttributes<HTMLAnchorElement>>;
};
export default _default;

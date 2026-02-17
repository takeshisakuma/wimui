import { default as React } from '../../../node_modules/react';
export interface AppShellProps extends React.ComponentPropsWithoutRef<"div"> {
    /** Header component */
    header?: React.ReactNode;
    /** Sidebar component */
    sidebar?: React.ReactNode;
    /** Footer component */
    footer?: React.ReactNode;
    /** Navbar component (mobile bottom navigation) */
    navbar?: React.ReactNode;
    /** Add padding to main content */
    padding?: boolean;
    /** Center main content horizontally */
    centered?: boolean;
    /** Maximum width for centered content */
    maxWidth?: number | string;
}
export declare const AppShellRoot: React.ForwardRefExoticComponent<AppShellProps & React.RefAttributes<HTMLDivElement>>;
export interface AppShellMainProps extends React.ComponentPropsWithoutRef<"main"> {
    /** Add padding to content */
    padding?: boolean;
    /** Center content horizontally */
    centered?: boolean;
}
export declare const AppShellMain: React.ForwardRefExoticComponent<AppShellMainProps & React.RefAttributes<HTMLElement>>;
export type AppShellHeaderProps = React.ComponentPropsWithoutRef<"div">;
export declare const AppShellHeader: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export type AppShellSidebarProps = React.ComponentPropsWithoutRef<"div">;
export declare const AppShellSidebar: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export type AppShellFooterProps = React.ComponentPropsWithoutRef<"div">;
export declare const AppShellFooter: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export type AppShellNavbarProps = React.ComponentPropsWithoutRef<"div">;
export declare const AppShellNavbar: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const AppShellComponent: typeof AppShellRoot & {
    Main: typeof AppShellMain;
    Header: typeof AppShellHeader;
    Sidebar: typeof AppShellSidebar;
    Footer: typeof AppShellFooter;
    Navbar: typeof AppShellNavbar;
};
export { AppShellComponent as AppShell };
export default AppShellComponent;

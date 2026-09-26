import { default as React } from '../../../../node_modules/react';
export interface AppShellProps extends Omit<React.ComponentPropsWithoutRef<"div">, "size"> {
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
export interface AppShellMainProps extends Omit<React.ComponentPropsWithoutRef<"main">, "size"> {
    /** Add padding to content */
    padding?: boolean;
    /** Center content horizontally */
    centered?: boolean;
}
/**
 * Composition API でメインコンテンツ領域を定義するサブコンポーネント。
 * Props API の `AppShellRoot` 内蔵 `<main>` と同等の機能を提供します。
 */
export declare const AppShellMain: React.ForwardRefExoticComponent<AppShellMainProps & React.RefAttributes<HTMLElement>>;
export type AppShellBodyProps = React.ComponentPropsWithoutRef<"div">;
/**
 * サイドバーとメインコンテンツを横並びにするラッパー。
 * Composition API でサイドバーを使う場合に使用します。
 */
export declare const AppShellBody: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
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
    Body: typeof AppShellBody;
    Header: typeof AppShellHeader;
    Sidebar: typeof AppShellSidebar;
    Footer: typeof AppShellFooter;
    Navbar: typeof AppShellNavbar;
};
export { AppShellComponent as AppShell };
export default AppShellComponent;

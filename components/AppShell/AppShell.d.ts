import { default as React } from '../../../node_modules/react';
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
/**
 * アプリケーション全体のレイアウトを構成するルートコンポーネント。
 *
 * ## 使い方
 * ### 1. Composition API（推奨）
 * サブコンポーネント（`AppShell.Header`, `AppShell.Sidebar` など）を
 * `children` として渡す方法。柔軟なカスタマイズが可能。
 *
 * ```tsx
 * <AppShell>
 *   <AppShell.Header>...</AppShell.Header>
 *   <AppShell.Sidebar>...</AppShell.Sidebar>
 *   <AppShell.Main>...</AppShell.Main>
 * </AppShell>
 * ```
 *
 * ### 2. Props API（シンプルなケース向け）
 * `header`, `sidebar`, `footer`, `navbar` を props として渡す方法。
 * ただし、サイドバーを使う場合は Composition API を推奨。
 *
 * ```tsx
 * <AppShell header={<Header />} sidebar={<Sidebar />}>
 *   <main>...</main>
 * </AppShell>
 * ```
 *
 * @note Props API で `sidebar` を渡した場合、`--with-sidebar` クラスが自動付与されます。
 *       Composition API で `AppShell.Sidebar` を使う場合は、
 *       親 `AppShell` に `sidebar` prop として何かを渡すか、
 *       `AppShell.Body` を使って手動でレイアウトを構成してください。
 */
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

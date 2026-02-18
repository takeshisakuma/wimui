import React from "react";
import classNames from "classnames";
import "./appshell.scss";

// ─────────────────────────────────────────────
// AppShell Root
// ─────────────────────────────────────────────

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
export const AppShellRoot = React.forwardRef<HTMLDivElement, AppShellProps>(
    ({ className, children, header, sidebar, footer, navbar, padding = true, centered, maxWidth, ...props }, ref) => {
        const style = maxWidth
            ? ({
                "--wim-appshell-max-width": typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth,
            } as React.CSSProperties)
            : undefined;

        return (
            <div
                ref={ref}
                className={classNames(
                    "wim-appshell",
                    !!sidebar && "wim-appshell--with-sidebar",
                    className
                )}
                style={style}
                {...props}
            >
                {header && <div className="wim-appshell__header">{header}</div>}

                <div className="wim-appshell__body">
                    {sidebar && <div className="wim-appshell__sidebar">{sidebar}</div>}

                    <main
                        className={classNames(
                            "wim-appshell__main",
                            padding && "wim-appshell__main--padded",
                            centered && "wim-appshell__main--centered"
                        )}
                    >
                        {centered ? (
                            <div className="wim-appshell__content">{children}</div>
                        ) : (
                            children
                        )}
                    </main>
                </div>

                {navbar && <div className="wim-appshell__navbar">{navbar}</div>}
                {footer && <div className="wim-appshell__footer">{footer}</div>}
            </div>
        );
    }
);

AppShellRoot.displayName = "AppShell";

// ─────────────────────────────────────────────
// AppShell.Main
// ─────────────────────────────────────────────

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
export const AppShellMain = React.forwardRef<HTMLElement, AppShellMainProps>(
    ({ className, children, padding = true, centered, ...props }, ref) => {
        return (
            <main
                ref={ref}
                className={classNames(
                    "wim-appshell__main",
                    padding && "wim-appshell__main--padded",
                    centered && "wim-appshell__main--centered",
                    className
                )}
                {...props}
            >
                {centered ? (
                    <div className="wim-appshell__content">{children}</div>
                ) : (
                    children
                )}
            </main>
        );
    }
);

AppShellMain.displayName = "AppShell.Main";

// ─────────────────────────────────────────────
// AppShell.Body
// ─────────────────────────────────────────────

export type AppShellBodyProps = React.ComponentPropsWithoutRef<"div">;

/**
 * サイドバーとメインコンテンツを横並びにするラッパー。
 * Composition API でサイドバーを使う場合に使用します。
 */
export const AppShellBody = React.forwardRef<HTMLDivElement, AppShellBodyProps>(
    ({ className, children, ...props }, ref) => (
        <div ref={ref} className={classNames("wim-appshell__body", className)} {...props}>
            {children}
        </div>
    )
);
AppShellBody.displayName = "AppShell.Body";

// ─────────────────────────────────────────────
// AppShell.Header / Sidebar / Footer / Navbar
// ─────────────────────────────────────────────

export type AppShellHeaderProps = React.ComponentPropsWithoutRef<"div">;
export const AppShellHeader = React.forwardRef<HTMLDivElement, AppShellHeaderProps>(
    ({ className, children, ...props }, ref) => (
        <div ref={ref} className={classNames("wim-appshell__header", className)} {...props}>
            {children}
        </div>
    )
);
AppShellHeader.displayName = "AppShell.Header";

export type AppShellSidebarProps = React.ComponentPropsWithoutRef<"div">;
export const AppShellSidebar = React.forwardRef<HTMLDivElement, AppShellSidebarProps>(
    ({ className, children, ...props }, ref) => (
        <div ref={ref} className={classNames("wim-appshell__sidebar", className)} {...props}>
            {children}
        </div>
    )
);
AppShellSidebar.displayName = "AppShell.Sidebar";

export type AppShellFooterProps = React.ComponentPropsWithoutRef<"div">;
export const AppShellFooter = React.forwardRef<HTMLDivElement, AppShellFooterProps>(
    ({ className, children, ...props }, ref) => (
        <div ref={ref} className={classNames("wim-appshell__footer", className)} {...props}>
            {children}
        </div>
    )
);
AppShellFooter.displayName = "AppShell.Footer";

export type AppShellNavbarProps = React.ComponentPropsWithoutRef<"div">;
export const AppShellNavbar = React.forwardRef<HTMLDivElement, AppShellNavbarProps>(
    ({ className, children, ...props }, ref) => (
        <div ref={ref} className={classNames("wim-appshell__navbar", className)} {...props}>
            {children}
        </div>
    )
);
AppShellNavbar.displayName = "AppShell.Navbar";

// ─────────────────────────────────────────────
// Compound Component
// ─────────────────────────────────────────────

const AppShellComponent = AppShellRoot as typeof AppShellRoot & {
    Main: typeof AppShellMain;
    Body: typeof AppShellBody;
    Header: typeof AppShellHeader;
    Sidebar: typeof AppShellSidebar;
    Footer: typeof AppShellFooter;
    Navbar: typeof AppShellNavbar;
};

AppShellComponent.Main = AppShellMain;
AppShellComponent.Body = AppShellBody;
AppShellComponent.Header = AppShellHeader;
AppShellComponent.Sidebar = AppShellSidebar;
AppShellComponent.Footer = AppShellFooter;
AppShellComponent.Navbar = AppShellNavbar;

export { AppShellComponent as AppShell };
export default AppShellComponent;

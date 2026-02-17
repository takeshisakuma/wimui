import React from "react";
import classNames from "classnames";
import "./appshell.scss";

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
                    sidebar && "wim-appshell--with-sidebar",
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



export interface AppShellMainProps extends React.ComponentPropsWithoutRef<"main"> {
    /** Add padding to content */
    padding?: boolean;
    /** Center content horizontally */
    centered?: boolean;
}

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



const AppShellComponent = AppShellRoot as typeof AppShellRoot & {
    Main: typeof AppShellMain;
    Header: typeof AppShellHeader;
    Sidebar: typeof AppShellSidebar;
    Footer: typeof AppShellFooter;
    Navbar: typeof AppShellNavbar;
};

AppShellComponent.Main = AppShellMain;
AppShellComponent.Header = AppShellHeader;
AppShellComponent.Sidebar = AppShellSidebar;
AppShellComponent.Footer = AppShellFooter;
AppShellComponent.Navbar = AppShellNavbar;

export { AppShellComponent as AppShell };
export default AppShellComponent;

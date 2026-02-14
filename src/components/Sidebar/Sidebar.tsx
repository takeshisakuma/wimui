import React from "react";
import classNames from "classnames";
import "./sidebar.scss";

export interface SidebarProps extends React.ComponentPropsWithoutRef<"aside"> {
    /** Fixed position */
    fixed?: boolean;
    /** Collapsed state */
    collapsed?: boolean;
    /** Width when expanded */
    width?: number | string;
    /** Border at the right */
    bordered?: boolean;
    /** Enable responsive behavior (mobile drawer) */
    responsive?: boolean;
    /** Mobile drawer open state */
    mobileOpen?: boolean;
    /** Callback when overlay is clicked */
    onOverlayClick?: () => void;
}

const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
    ({ className, children, fixed, collapsed, width = 260, bordered = true, responsive, mobileOpen, onOverlayClick, ...props }, ref) => {
        const style = {
            "--wim-sidebar-width": typeof width === "number" ? `${width}px` : width,
        } as React.CSSProperties;

        return (
            <>
                {responsive && mobileOpen && (
                    <div
                        className="wim-sidebar-overlay"
                        onClick={onOverlayClick}
                        aria-hidden="true"
                    />
                )}
                <aside
                    ref={ref}
                    style={style}
                    className={classNames(
                        "wim-sidebar",
                        fixed && "wim-sidebar--fixed",
                        collapsed && "wim-sidebar--collapsed",
                        bordered && "wim-sidebar--bordered",
                        responsive && "wim-sidebar--responsive",
                        mobileOpen && "wim-sidebar--mobile-open",
                        className
                    )}
                    {...props}
                >
                    <div className="wim-sidebar__container">
                        {children}
                    </div>
                </aside>
            </>
        );
    }
);

Sidebar.displayName = "Sidebar";



export type SidebarHeaderProps = React.ComponentPropsWithoutRef<"div">;
export const SidebarHeader = React.forwardRef<HTMLDivElement, SidebarHeaderProps>(
    ({ className, children, ...props }, ref) => (
        <div ref={ref} className={classNames("wim-sidebar__header", className)} {...props}>
            {children}
        </div>
    )
);
SidebarHeader.displayName = "Sidebar.Header";

export type SidebarContentProps = React.ComponentPropsWithoutRef<"div">;
export const SidebarContent = React.forwardRef<HTMLDivElement, SidebarContentProps>(
    ({ className, children, ...props }, ref) => (
        <div ref={ref} className={classNames("wim-sidebar__content", className)} {...props}>
            {children}
        </div>
    )
);
SidebarContent.displayName = "Sidebar.Content";

export type SidebarFooterProps = React.ComponentPropsWithoutRef<"div">;
export const SidebarFooter = React.forwardRef<HTMLDivElement, SidebarFooterProps>(
    ({ className, children, ...props }, ref) => (
        <div ref={ref} className={classNames("wim-sidebar__footer", className)} {...props}>
            {children}
        </div>
    )
);
SidebarFooter.displayName = "Sidebar.Footer";

export interface SidebarItemProps extends React.ComponentPropsWithoutRef<"div"> {
    active?: boolean;
    disabled?: boolean;
    icon?: React.ReactNode;
}
export const SidebarItem = React.forwardRef<HTMLDivElement, SidebarItemProps>(
    ({ className, children, active, disabled, icon, ...props }, ref) => (
        <div
            ref={ref}
            className={classNames(
                "wim-sidebar__item",
                active && "wim-sidebar__item--active",
                disabled && "wim-sidebar__item--disabled",
                className
            )}
            {...props}
        >
            {icon && <span className="wim-sidebar__item-icon">{icon}</span>}
            <span className="wim-sidebar__item-text">{children}</span>
        </div>
    )
);
SidebarItem.displayName = "Sidebar.Item";



const SidebarComponent = Sidebar as typeof Sidebar & {
    Header: typeof SidebarHeader;
    Content: typeof SidebarContent;
    Footer: typeof SidebarFooter;
    Item: typeof SidebarItem;
};

SidebarComponent.Header = SidebarHeader;
SidebarComponent.Content = SidebarContent;
SidebarComponent.Footer = SidebarFooter;
SidebarComponent.Item = SidebarItem;

export { SidebarComponent as Sidebar };
export default SidebarComponent;

import React from "react";
import PropTypes from "prop-types";
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
}

export const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
    ({ className, children, fixed, collapsed, width = 260, bordered = true, ...props }, ref) => {
        const style = {
            "--wim-sidebar-width": typeof width === "number" ? `${width}px` : width,
        } as React.CSSProperties;

        return (
            <aside
                ref={ref}
                style={style}
                className={[
                    "wim-sidebar",
                    fixed && "wim-sidebar--fixed",
                    collapsed && "wim-sidebar--collapsed",
                    bordered && "wim-sidebar--bordered",
                    className
                ].filter(Boolean).join(" ")}
                {...props}
            >
                <div className="wim-sidebar__container">
                    {children}
                </div>
            </aside>
        );
    }
);

Sidebar.displayName = "Sidebar";

Sidebar.propTypes = {
    fixed: PropTypes.bool,
    collapsed: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    bordered: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node,
};

export interface SidebarHeaderProps extends React.ComponentPropsWithoutRef<"div"> { }
export const SidebarHeader = React.forwardRef<HTMLDivElement, SidebarHeaderProps>(
    ({ className, children, ...props }, ref) => (
        <div ref={ref} className={["wim-sidebar__header", className].filter(Boolean).join(" ")} {...props}>
            {children}
        </div>
    )
);
SidebarHeader.displayName = "Sidebar.Header";

export interface SidebarContentProps extends React.ComponentPropsWithoutRef<"div"> { }
export const SidebarContent = React.forwardRef<HTMLDivElement, SidebarContentProps>(
    ({ className, children, ...props }, ref) => (
        <div ref={ref} className={["wim-sidebar__content", className].filter(Boolean).join(" ")} {...props}>
            {children}
        </div>
    )
);
SidebarContent.displayName = "Sidebar.Content";

export interface SidebarFooterProps extends React.ComponentPropsWithoutRef<"div"> { }
export const SidebarFooter = React.forwardRef<HTMLDivElement, SidebarFooterProps>(
    ({ className, children, ...props }, ref) => (
        <div ref={ref} className={["wim-sidebar__footer", className].filter(Boolean).join(" ")} {...props}>
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
            className={[
                "wim-sidebar__item",
                active && "wim-sidebar__item--active",
                disabled && "wim-sidebar__item--disabled",
                className
            ].filter(Boolean).join(" ")}
            {...props}
        >
            {icon && <span className="wim-sidebar__item-icon">{icon}</span>}
            <span className="wim-sidebar__item-text">{children}</span>
        </div>
    )
);
SidebarItem.displayName = "Sidebar.Item";

SidebarItem.propTypes = {
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    icon: PropTypes.node,
    className: PropTypes.string,
    children: PropTypes.node,
};

export default Object.assign(Sidebar, {
    Header: SidebarHeader,
    Content: SidebarContent,
    Footer: SidebarFooter,
    Item: SidebarItem,
});

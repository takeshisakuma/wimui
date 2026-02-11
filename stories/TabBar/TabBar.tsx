import React from "react";
import PropTypes from "prop-types";
import "./tab-bar.scss";

export interface TabBarProps extends React.ComponentPropsWithoutRef<"nav"> {
    /** Fixed position at the bottom of the screen */
    fixed?: boolean;
    /** Show top border */
    bordered?: boolean;
    /** Glassmorphism effect */
    glass?: boolean;
}

export const TabBar = React.forwardRef<HTMLElement, TabBarProps>(
    ({ className, children, fixed = true, bordered = true, glass = false, ...props }, ref) => {
        return (
            <nav
                ref={ref}
                className={[
                    "wim-tab-bar",
                    fixed && "wim-tab-bar--fixed",
                    bordered && "wim-tab-bar--bordered",
                    glass && "wim-tab-bar--glass",
                    className
                ].filter(Boolean).join(" ")}
                {...props}
            >
                <div className="wim-tab-bar__container">
                    {children}
                </div>
            </nav>
        );
    }
);

TabBar.displayName = "TabBar";

TabBar.propTypes = {
    fixed: PropTypes.bool,
    bordered: PropTypes.bool,
    glass: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node,
};

export interface TabBarItemProps extends React.ComponentPropsWithoutRef<"button"> {
    /** Active state */
    active?: boolean;
    /** Icon element */
    icon?: React.ReactNode;
    /** Text label */
    label?: string;
    /** Badge content (optional) */
    badge?: React.ReactNode;
}

export const TabBarItem = React.forwardRef<HTMLButtonElement, TabBarItemProps>(
    ({ className, active, icon, label, badge, children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                type="button"
                className={[
                    "wim-tab-bar__item",
                    active && "wim-tab-bar__item--active",
                    className
                ].filter(Boolean).join(" ")}
                aria-pressed={active}
                {...props}
            >
                {badge && <span className="wim-tab-bar__badge">{badge}</span>}
                {icon && <span className="wim-tab-bar__icon">{icon}</span>}
                {label && <span className="wim-tab-bar__label">{label}</span>}
                {children}
            </button>
        );
    }
);

TabBarItem.displayName = "TabBar.Item";

TabBarItem.propTypes = {
    active: PropTypes.bool,
    icon: PropTypes.node,
    label: PropTypes.string,
    badge: PropTypes.node,
    className: PropTypes.string,
    children: PropTypes.node,
};

export default Object.assign(TabBar, {
    Item: TabBarItem,
});

import React, { useRef } from "react";
import classNames from "classnames";
import "./tab-navigation.scss";

export interface TabNavigationProps extends React.ComponentPropsWithoutRef<"nav"> {
    /** Visual style of the tabs */
    variant?: "underline" | "pill" | "contained";
    /** Alignment of the tabs */
    align?: "start" | "center" | "end" | "justify";
    /** Size of the tabs */
    size?: "small" | "medium" | "large";
}

const TabNavigation = React.forwardRef<HTMLElement, TabNavigationProps>(
    ({ className, children, variant = "underline", align = "start", size = "medium", ...props }, ref) => {
        const navRef = useRef<HTMLElement>(null);

        // Simple scroll into view logic for active item could be added here if needed

        return (
            <nav
                ref={ref || navRef}
                className={classNames(
                    "wim-tab-navigation",
                    `wim-tab-navigation--${variant}`,
                    `wim-tab-navigation--${align}`,
                    `wim-tab-navigation--${size}`,
                    className
                )}
                {...props}
            >
                <div className="wim-tab-navigation__list" role="tablist">
                    {children}
                </div>
            </nav>
        );
    }
);

TabNavigation.displayName = "TabNavigation";



export interface TabNavigationItemProps extends React.ComponentPropsWithoutRef<"a"> {
    /** Active state */
    active?: boolean;
    /** Disabled state */
    disabled?: boolean;
    /** Icon element */
    icon?: React.ReactNode;
}

export const TabNavigationItem = React.forwardRef<HTMLAnchorElement, TabNavigationItemProps>(
    ({ className, children, active, disabled, icon, href, onClick, ...props }, ref) => {

        const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
            if (disabled) {
                e.preventDefault();
                return;
            }
            if (onClick) {
                onClick(e);
            }
        };

        return (
            <a
                ref={ref}
                href={href}
                onClick={handleClick}
                className={classNames(
                    "wim-tab-navigation__item",
                    active && "wim-tab-navigation__item--active",
                    disabled && "wim-tab-navigation__item--disabled",
                    className
                )}
                role="tab"
                aria-selected={active}
                aria-disabled={disabled}
                tabIndex={disabled ? -1 : 0}
                {...props}
            >
                {icon && <span className="wim-tab-navigation__icon">{icon}</span>}
                {children}
            </a>
        );
    }
);

TabNavigationItem.displayName = "TabNavigation.Item";



const TabNavigationComponent = TabNavigation as typeof TabNavigation & {
    Item: typeof TabNavigationItem;
};

TabNavigationComponent.Item = TabNavigationItem;

export { TabNavigationComponent as TabNavigation };
export default TabNavigationComponent;

import React from "react";
import PropTypes from "prop-types";
import "./hamburger-menu.scss";

export interface HamburgerMenuProps extends React.ComponentPropsWithoutRef<"button"> {
    /** Check if the menu is open */
    isOpen?: boolean;
    /** Callback function when the menu is toggled */
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    /** Size of the hamburger menu */
    size?: "small" | "medium" | "large";
    /** Color of the bars */
    color?: string;
    /** Custom class name */
    className?: string;
}

export const HamburgerMenu = React.forwardRef<HTMLButtonElement, HamburgerMenuProps>(
    ({ isOpen = false, onClick, size = "medium", color, className, style, ...props }, ref) => {
        const sizeMap = {
            small: "sm",
            medium: "md",
            large: "lg",
        };

        const sizeClass = `wim-hamburger-menu--${sizeMap[size]}`;
        const openClass = isOpen ? "wim-hamburger-menu--open" : "";

        return (
            <button
                ref={ref}
                type="button"
                className={["wim-hamburger-menu", sizeClass, openClass, className]
                    .filter(Boolean)
                    .join(" ")}
                onClick={onClick}
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                style={{ ...style, ...(color ? { "--wim-hamburger-color": color } as React.CSSProperties : {}) }}
                {...props}
            >
                <div className="wim-hamburger-menu__box">
                    <div className="wim-hamburger-menu__inner" />
                </div>
            </button>
        );
    }
);

HamburgerMenu.displayName = "HamburgerMenu";

HamburgerMenu.propTypes = {
    isOpen: PropTypes.bool,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    color: PropTypes.string,
    className: PropTypes.string,
};

import { default as React } from '../../../node_modules/react';
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
export declare const HamburgerMenu: React.ForwardRefExoticComponent<HamburgerMenuProps & React.RefAttributes<HTMLButtonElement>>;

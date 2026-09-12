import { default as React } from '../../../../node_modules/react';
import { ComponentSizeBasic } from '../../../types/tokens';
export type HamburgerMenuVisibleBelow = "xs" | "sm" | "md" | "lg" | "xl";
export interface HamburgerMenuProps extends React.ComponentPropsWithoutRef<"button"> {
    /**
     * If true, merge button props onto the child element.
     */
    asChild?: boolean;
    /** Whether the menu is open */
    open?: boolean;
    /** Callback function when the menu is toggled */
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    /** Size of the hamburger menu */
    size?: ComponentSizeBasic;
    /** Color of the bars */
    color?: string;
    /** Show only below the given breakpoint (e.g. "md" matches Sidebar's mobile drawer range) */
    visibleBelow?: HamburgerMenuVisibleBelow;
    /** Custom class name */
    className?: string;
}
export declare const HamburgerMenu: React.ForwardRefExoticComponent<HamburgerMenuProps & React.RefAttributes<HTMLButtonElement>>;

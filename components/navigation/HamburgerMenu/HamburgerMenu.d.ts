import { default as React } from '../../../../node_modules/react';
import { ComponentSize } from '../../../types/tokens';
export interface HamburgerMenuProps extends React.ComponentPropsWithoutRef<"button"> {
    /** Whether the menu is open */
    open?: boolean;
    /** Callback function when the menu is toggled */
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    /** Size of the hamburger menu */
    size?: ComponentSize;
    /** Color of the bars */
    color?: string;
    /** Custom class name */
    className?: string;
}
export declare const HamburgerMenu: React.ForwardRefExoticComponent<HamburgerMenuProps & React.RefAttributes<HTMLButtonElement>>;

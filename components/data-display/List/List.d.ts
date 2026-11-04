import { default as React } from '../../../../node_modules/react';
import { Icon } from '../../media/Icon/Icon';
import { ComponentSizeBasic } from '../../../types/tokens';
export interface ListProps extends React.HTMLAttributes<HTMLElement> {
    /** Whether to render as a child element. */
    asChild?: boolean;
    /** Size of the list items */
    size?: ComponentSizeBasic;
    /** Spacing between items */
    spacing?: "tight" | "normal" | "loose";
    /** Whether to show borders between items */
    bordered?: boolean;
    /** Whether to take full width of parent */
    fullWidth?: boolean;
    /** Whether items highlight on hover */
    hoverable?: boolean;
}
export declare const List: React.ForwardRefExoticComponent<ListProps & React.RefAttributes<HTMLElement>>;
export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
    /** Whether to render as a child element. */
    asChild?: boolean;
    /** Content of the list item */
    children: React.ReactNode;
    /** Icon name to display */
    iconName?: React.ComponentProps<typeof Icon>["name"];
    /** Position of the icon relative to the content */
    iconPosition?: "left" | "right";
    /** Color of the icon */
    iconColor?: React.ComponentProps<typeof Icon>["color"];
    /** Whether the item is in the selected state */
    selected?: boolean;
}
export declare const ListItem: React.ForwardRefExoticComponent<ListItemProps & React.RefAttributes<HTMLLIElement>>;

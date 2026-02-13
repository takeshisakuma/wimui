import { default as React } from '../../../node_modules/react';
export interface TabBarProps extends React.ComponentPropsWithoutRef<"nav"> {
    /** Fixed position at the bottom of the screen */
    fixed?: boolean;
    /** Show top border */
    bordered?: boolean;
    /** Glassmorphism effect */
    glass?: boolean;
}
declare const TabBarInner: React.ForwardRefExoticComponent<TabBarProps & React.RefAttributes<HTMLElement>>;
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
export declare const TabBarItem: React.ForwardRefExoticComponent<TabBarItemProps & React.RefAttributes<HTMLButtonElement>>;
export declare const TabBar: typeof TabBarInner & {
    Item: typeof TabBarItem;
};
export default TabBar;

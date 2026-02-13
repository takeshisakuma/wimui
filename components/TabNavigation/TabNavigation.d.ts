import { default as React } from '../../../node_modules/react';
export interface TabNavigationProps extends React.ComponentPropsWithoutRef<"nav"> {
    /** Visual style of the tabs */
    variant?: "underline" | "pill" | "contained";
    /** Alignment of the tabs */
    align?: "start" | "center" | "end" | "justify";
    /** Size of the tabs */
    size?: "small" | "medium" | "large";
}
declare const TabNavigation: React.ForwardRefExoticComponent<TabNavigationProps & React.RefAttributes<HTMLElement>>;
export interface TabNavigationItemProps extends React.ComponentPropsWithoutRef<"a"> {
    /** Active state */
    active?: boolean;
    /** Disabled state */
    disabled?: boolean;
    /** Icon element */
    icon?: React.ReactNode;
}
export declare const TabNavigationItem: React.ForwardRefExoticComponent<TabNavigationItemProps & React.RefAttributes<HTMLAnchorElement>>;
declare const TabNavigationComponent: typeof TabNavigation & {
    Item: typeof TabNavigationItem;
};
export { TabNavigationComponent as TabNavigation };
export default TabNavigationComponent;

import { default as React } from '../../../node_modules/react';
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
declare const Sidebar: React.ForwardRefExoticComponent<SidebarProps & React.RefAttributes<HTMLElement>>;
export interface SidebarHeaderProps extends React.ComponentPropsWithoutRef<"div"> {
}
export declare const SidebarHeader: React.ForwardRefExoticComponent<SidebarHeaderProps & React.RefAttributes<HTMLDivElement>>;
export interface SidebarContentProps extends React.ComponentPropsWithoutRef<"div"> {
}
export declare const SidebarContent: React.ForwardRefExoticComponent<SidebarContentProps & React.RefAttributes<HTMLDivElement>>;
export interface SidebarFooterProps extends React.ComponentPropsWithoutRef<"div"> {
}
export declare const SidebarFooter: React.ForwardRefExoticComponent<SidebarFooterProps & React.RefAttributes<HTMLDivElement>>;
export interface SidebarItemProps extends React.ComponentPropsWithoutRef<"div"> {
    active?: boolean;
    disabled?: boolean;
    icon?: React.ReactNode;
}
export declare const SidebarItem: React.ForwardRefExoticComponent<SidebarItemProps & React.RefAttributes<HTMLDivElement>>;
declare const SidebarComponent: typeof Sidebar & {
    Header: typeof SidebarHeader;
    Content: typeof SidebarContent;
    Footer: typeof SidebarFooter;
    Item: typeof SidebarItem;
};
export { SidebarComponent as Sidebar };
export default SidebarComponent;

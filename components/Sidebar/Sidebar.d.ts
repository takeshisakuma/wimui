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
export type SidebarHeaderProps = React.ComponentPropsWithoutRef<"div">;
export declare const SidebarHeader: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export type SidebarContentProps = React.ComponentPropsWithoutRef<"div">;
export declare const SidebarContent: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export type SidebarFooterProps = React.ComponentPropsWithoutRef<"div">;
export declare const SidebarFooter: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
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

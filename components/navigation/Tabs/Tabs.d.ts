import { default as React } from '../../../../node_modules/react';
export interface TabsProps extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange"> {
    /**
     * If true, the tabs root will be rendered as its child, merging its props onto that child.
     */
    asChild?: boolean;
    /**
     * Value of the tab selected initially, for uncontrolled usage.
     */
    defaultValue?: string;
    /**
     * Controlled value of the selected tab. Use together with onChange.
     */
    value?: string;
    /**
     * Called with the value of the newly selected tab.
     */
    onChange?: (value: string) => void;
    /**
     * Orientation of the tab list, affecting layout and arrow-key navigation.
     * @default "horizontal"
     */
    orientation?: "horizontal" | "vertical";
}
declare const Tabs: React.ForwardRefExoticComponent<TabsProps & React.RefAttributes<HTMLDivElement>>;
export type TabsListProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * If true, the tab list will be rendered as its child, merging its props onto that child.
     */
    asChild?: boolean;
};
export declare const TabsList: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    /**
     * If true, the tab list will be rendered as its child, merging its props onto that child.
     */
    asChild?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
export interface TabsTriggerProps extends React.ComponentPropsWithoutRef<"button"> {
    /**
     * If true, the trigger will be rendered as its child, merging its props onto that child.
     */
    asChild?: boolean;
    value: string;
}
export declare const TabsTrigger: React.ForwardRefExoticComponent<TabsTriggerProps & React.RefAttributes<HTMLButtonElement>>;
export interface TabsContentProps extends React.ComponentPropsWithoutRef<"div"> {
    /**
     * If true, the panel will be rendered as its child, merging its props onto that child.
     */
    asChild?: boolean;
    value: string;
}
export declare const TabsContent: React.ForwardRefExoticComponent<TabsContentProps & React.RefAttributes<HTMLDivElement>>;
declare const TabsRoot: typeof Tabs & {
    List: typeof TabsList;
    Trigger: typeof TabsTrigger;
    Content: typeof TabsContent;
};
export { TabsRoot as Tabs };
export default TabsRoot;

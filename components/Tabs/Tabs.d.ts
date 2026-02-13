import { default as React } from '../../../node_modules/react';
export interface TabsProps extends React.ComponentPropsWithoutRef<"div"> {
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    orientation?: "horizontal" | "vertical";
}
declare const Tabs: ({ defaultValue, value: valueProp, onValueChange, orientation, className, children, ...props }: TabsProps) => import("react/jsx-runtime").JSX.Element;
export interface TabsListProps extends React.ComponentPropsWithoutRef<"div"> {
}
export declare const TabsList: ({ className, children, ...props }: TabsListProps) => import("react/jsx-runtime").JSX.Element;
export interface TabsTriggerProps extends React.ComponentPropsWithoutRef<"button"> {
    value: string;
}
export declare const TabsTrigger: ({ value, disabled, className, children, ...props }: TabsTriggerProps) => import("react/jsx-runtime").JSX.Element;
export interface TabsContentProps extends React.ComponentPropsWithoutRef<"div"> {
    value: string;
}
export declare const TabsContent: ({ value, className, children, ...props }: TabsContentProps) => import("react/jsx-runtime").JSX.Element | null;
declare const TabsRoot: typeof Tabs & {
    List: typeof TabsList;
    Trigger: typeof TabsTrigger;
    Content: typeof TabsContent;
};
export { TabsRoot as Tabs };
export default TabsRoot;

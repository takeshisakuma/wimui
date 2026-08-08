import { default as React } from '../../../../node_modules/react';
export interface DashboardWidget {
    id: string;
    title: string;
    description?: string;
    content: React.ReactNode;
    /** Column span (1–4). Default: 1. */
    span?: 1 | 2 | 3 | 4;
    /** Row span (1–3). Default: 1. */
    rowSpan?: 1 | 2 | 3;
}
export interface DashboardProps extends Omit<React.ComponentPropsWithoutRef<"div">, "onRemove"> {
    /** Widget definitions to render. */
    widgets?: DashboardWidget[];
    /** Whether the dashboard is in edit mode (controlled). */
    editable?: boolean;
    /** Initial edit mode state (uncontrolled). Default: false. */
    defaultEditable?: boolean;
    /** Called when edit mode changes. */
    onEditChange?: (editable: boolean) => void;
    /** Called when a widget is removed. */
    onRemove?: (widgetId: string) => void;
    /** Called when the "Add Widget" button is clicked. */
    onAdd?: () => void;
    /** Number of columns. Default: 3. */
    columns?: number;
    /** Gap between widgets. Default: "md". */
    gap?: "xs" | "sm" | "md" | "lg" | "xl";
    /** Show the edit toggle button in the header. Default: true. */
    showEditToggle?: boolean;
    /** Dashboard heading label. */
    label?: string;
}
export declare const Dashboard: React.ForwardRefExoticComponent<DashboardProps & React.RefAttributes<HTMLDivElement>>;
export interface DashboardWidgetProps extends React.ComponentPropsWithoutRef<"div"> {
    widget: DashboardWidget;
}
export declare const DashboardWidgetCard: {
    ({ widget, className, ...props }: DashboardWidgetProps): React.JSX.Element;
    displayName: string;
};
export type { DashboardWidgetProps as DashboardWidgetCardProps };

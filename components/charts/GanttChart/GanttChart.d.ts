import { default as React } from '../../../../node_modules/react';
export type GanttTask = {
    id: string;
    label: string;
    startDate: Date;
    endDate: Date;
    color?: string;
    progress?: number;
};
export type GanttViewMode = "day" | "week" | "month";
export type GanttChartLabels = {
    ariaChart?: string;
    ariaTaskBar?: (label: string, start: string, end: string) => string;
};
export type GanttChartProps = {
    /**
     * Tasks to render as bars in the chart.
     */
    tasks: GanttTask[];
    /**
     * Start of the visible date range. Defaults to the earliest task start date.
     */
    startDate?: Date;
    /**
     * End of the visible date range. Defaults to the latest task end date.
     */
    endDate?: Date;
    /**
     * Granularity of the time axis.
     * @default "day"
     */
    viewMode?: GanttViewMode;
    /**
     * Width of one time column in pixels. Defaults to a value suited to the view mode.
     */
    columnWidth?: number;
    /**
     * Height of one task row in pixels.
     * @default 40
     */
    rowHeight?: number;
    /**
     * Called when a task bar is clicked.
     */
    onTaskClick?: (task: GanttTask) => void;
    /**
     * Additional CSS class name for the container.
     */
    className?: string;
    /** Labels for manual translation overrides. */
    labels?: GanttChartLabels;
};
export declare const GanttChart: ({ tasks, startDate, endDate, viewMode, columnWidth, rowHeight, onTaskClick, className, labels, }: GanttChartProps) => React.ReactElement;

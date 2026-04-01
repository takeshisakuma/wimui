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
    tasks: GanttTask[];
    startDate?: Date;
    endDate?: Date;
    viewMode?: GanttViewMode;
    columnWidth?: number;
    rowHeight?: number;
    onTaskClick?: (task: GanttTask) => void;
    className?: string;
    /** 手動翻訳用のラベル */
    labels?: GanttChartLabels;
};
export declare const GanttChart: ({ tasks, startDate, endDate, viewMode, columnWidth, rowHeight, onTaskClick, className, labels, }: GanttChartProps) => React.ReactElement;

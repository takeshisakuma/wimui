import { default as React } from '../../../../node_modules/react';
export type CalendarHeatmapData = {
    date: string;
    count: number;
};
export type CalendarHeatmapProps = {
    /**
     * Activity data array.
     */
    data: CalendarHeatmapData[];
    /**
     * The year to display.
     * @default current year
     */
    year?: number;
    /**
     * Function to map count to a level (0-4).
     */
    getColorLevel?: (count: number) => 0 | 1 | 2 | 3 | 4;
    /**
     * Custom class name for the root element.
     */
    className?: string;
    /**
     * Custom tooltip formatter.
     */
    tooltipFormatter?: (date: string, count: number) => React.ReactNode;
    /**
     * Whether to render as a child component.
     */
    asChild?: boolean;
    /**
     * Content to render inside.
     */
    children?: React.ReactNode;
};
/**
 * CalendarHeatmap component (GitHub-style contribution graph).
 * Visualizes activity levels over a year.
 */
export declare const CalendarHeatmap: React.ForwardRefExoticComponent<CalendarHeatmapProps & React.RefAttributes<HTMLDivElement>>;

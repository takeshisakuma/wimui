import { default as React } from '../../../../node_modules/react';
import { IndicatorIntent } from '../../../types/tokens';
export interface TimelineProps {
    /** Timeline items */
    children: React.ReactNode;
    /** Alignment of the items relative to the line */
    align?: "left" | "right" | "alternate";
    /** Additional class names */
    className?: string;
    /** Whether to render as a child element. */
    asChild?: boolean;
}
export declare const Timeline: React.ForwardRefExoticComponent<TimelineProps & React.RefAttributes<HTMLDivElement>>;
export interface TimelineItemProps {
    /** Content of the timeline item */
    children: React.ReactNode;
    /** Additional class names */
    className?: string;
    /** Alignment relative to the line (usually inherited from Timeline) */
    align?: "left" | "right" | "alternate";
    /** Whether to render as a child element. */
    asChild?: boolean;
}
export declare const TimelineItem: React.ForwardRefExoticComponent<TimelineItemProps & React.RefAttributes<HTMLDivElement>>;
export interface TimelineSeparatorProps {
    children?: React.ReactNode;
    className?: string;
    asChild?: boolean;
}
export declare const TimelineSeparator: React.ForwardRefExoticComponent<TimelineSeparatorProps & React.RefAttributes<HTMLDivElement>>;
export interface TimelineConnectorProps {
    className?: string;
    asChild?: boolean;
}
export declare const TimelineConnector: React.ForwardRefExoticComponent<TimelineConnectorProps & React.RefAttributes<HTMLDivElement>>;
export interface TimelinePointProps {
    children?: React.ReactNode;
    /**
     * 意味の軸。`variant` という名前だったが、値は 4 つとも intent の色そのもので、
     * 音量（solid / outline / subtle）ではなかった（T114）。
     */
    intent?: IndicatorIntent;
    className?: string;
    asChild?: boolean;
}
export declare const TimelinePoint: React.ForwardRefExoticComponent<TimelinePointProps & React.RefAttributes<HTMLDivElement>>;
export interface TimelineContentProps {
    children: React.ReactNode;
    className?: string;
    asChild?: boolean;
}
export declare const TimelineContent: React.ForwardRefExoticComponent<TimelineContentProps & React.RefAttributes<HTMLDivElement>>;
export interface TimelineOppositeContentProps {
    children: React.ReactNode;
    className?: string;
    asChild?: boolean;
}
export declare const TimelineOppositeContent: React.ForwardRefExoticComponent<TimelineOppositeContentProps & React.RefAttributes<HTMLDivElement>>;

import { default as React } from '../../../node_modules/react';
export interface TimelineProps {
    children: React.ReactNode;
    align?: "left" | "right" | "alternate";
    className?: string;
}
export declare const Timeline: React.FC<TimelineProps>;
export interface TimelineItemProps {
    children: React.ReactNode;
    className?: string;
    align?: "left" | "right" | "alternate";
}
export declare const TimelineItem: React.FC<TimelineItemProps>;
export interface TimelineSeparatorProps {
    children?: React.ReactNode;
    className?: string;
}
export declare const TimelineSeparator: React.FC<TimelineSeparatorProps>;
export interface TimelineConnectorProps {
    className?: string;
}
export declare const TimelineConnector: React.FC<TimelineConnectorProps>;
export interface TimelinePointProps {
    children?: React.ReactNode;
    variant?: "primary" | "secondary" | "error" | "success";
    className?: string;
}
export declare const TimelinePoint: React.FC<TimelinePointProps>;
export interface TimelineContentProps {
    children: React.ReactNode;
    className?: string;
}
export declare const TimelineContent: React.FC<TimelineContentProps>;
export interface TimelineOppositeContentProps {
    children: React.ReactNode;
    className?: string;
}
export declare const TimelineOppositeContent: React.FC<TimelineOppositeContentProps>;

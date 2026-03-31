import { default as React } from '../../../../node_modules/react';
export interface TimelineProps {
    children: React.ReactNode;
    align?: "left" | "right" | "alternate";
    className?: string;
}
export declare const Timeline: ({ children, align, className, }: TimelineProps) => React.ReactElement;
export interface TimelineItemProps {
    children: React.ReactNode;
    className?: string;
    align?: "left" | "right" | "alternate";
}
export declare const TimelineItem: ({ children, className, align, }: TimelineItemProps) => React.ReactElement;
export interface TimelineSeparatorProps {
    children?: React.ReactNode;
    className?: string;
}
export declare const TimelineSeparator: ({ children, className, }: TimelineSeparatorProps) => React.ReactElement;
export interface TimelineConnectorProps {
    className?: string;
}
export declare const TimelineConnector: ({ className, }: TimelineConnectorProps) => React.ReactElement;
export interface TimelinePointProps {
    children?: React.ReactNode;
    variant?: "primary" | "secondary" | "error" | "success";
    className?: string;
}
export declare const TimelinePoint: ({ children, variant, className, }: TimelinePointProps) => React.ReactElement;
export interface TimelineContentProps {
    children: React.ReactNode;
    className?: string;
}
export declare const TimelineContent: ({ children, className, }: TimelineContentProps) => React.ReactElement;
export interface TimelineOppositeContentProps {
    children: React.ReactNode;
    className?: string;
}
export declare const TimelineOppositeContent: ({ children, className, }: TimelineOppositeContentProps) => React.ReactElement;

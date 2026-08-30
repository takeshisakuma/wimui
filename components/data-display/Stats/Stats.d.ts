import { default as React } from '../../../../node_modules/react';
import { Card } from '../../data-display/Card/Card';
export type StatsProps = React.ComponentPropsWithoutRef<typeof Card> & {
    /** Visual style variant of the card */
    variant?: React.ComponentProps<typeof Card>["variant"];
};
/**
 * `Stats` is a component for displaying statistics and metrics.
 */
export declare const Stats: {
    ({ variant, className, children, ...props }: StatsProps): React.JSX.Element;
    displayName: string;
    Label: {
        ({ className, children, ...props }: React.ComponentPropsWithoutRef<"div">): React.JSX.Element;
        displayName: string;
    };
    Value: {
        ({ className, children, ...props }: React.ComponentPropsWithoutRef<"div">): React.JSX.Element;
        displayName: string;
    };
    Description: {
        ({ className, children, ...props }: React.ComponentPropsWithoutRef<"div">): React.JSX.Element;
        displayName: string;
    };
    Trend: {
        ({ direction, className, children, ...props }: StatsTrendProps): React.JSX.Element;
        displayName: string;
    };
};
export declare const StatsLabel: {
    ({ className, children, ...props }: React.ComponentPropsWithoutRef<"div">): React.JSX.Element;
    displayName: string;
};
export declare const StatsValue: {
    ({ className, children, ...props }: React.ComponentPropsWithoutRef<"div">): React.JSX.Element;
    displayName: string;
};
export declare const StatsDescription: {
    ({ className, children, ...props }: React.ComponentPropsWithoutRef<"div">): React.JSX.Element;
    displayName: string;
};
export type StatsTrendProps = React.ComponentPropsWithoutRef<"div"> & {
    /** Trend direction, which controls the icon and color */
    direction?: "up" | "down" | "neutral";
};
export declare const StatsTrend: {
    ({ direction, className, children, ...props }: StatsTrendProps): React.JSX.Element;
    displayName: string;
};
export default Stats;

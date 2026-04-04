import { default as React } from '../../../../node_modules/react';
import { Card } from '../../data-display/Card/Card';
export type StatsProps = React.ComponentPropsWithoutRef<typeof Card>;
/**
 * `Stats` は統計情報やメトリクスを表示するためのコンポーネントです。
 */
export declare const Stats: {
    ({ variant, className, children, ...props }: StatsProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
    Label: {
        ({ className, children, ...props }: React.ComponentPropsWithoutRef<"div">): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Value: {
        ({ className, children, ...props }: React.ComponentPropsWithoutRef<"div">): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Description: {
        ({ className, children, ...props }: React.ComponentPropsWithoutRef<"div">): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
    Trend: {
        ({ direction, className, children, ...props }: StatsTrendProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
export declare const StatsLabel: {
    ({ className, children, ...props }: React.ComponentPropsWithoutRef<"div">): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const StatsValue: {
    ({ className, children, ...props }: React.ComponentPropsWithoutRef<"div">): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const StatsDescription: {
    ({ className, children, ...props }: React.ComponentPropsWithoutRef<"div">): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export type StatsTrendProps = React.ComponentPropsWithoutRef<"div"> & {
    direction?: "up" | "down" | "neutral";
};
export declare const StatsTrend: {
    ({ direction, className, children, ...props }: StatsTrendProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};

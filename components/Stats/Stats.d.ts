import { default as React } from '../../../node_modules/react';
export type StatsProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * バリアント
     */
    variant?: "default" | "outline" | "flat";
};
/**
 * `Stats` は統計情報やメトリクスを表示するためのコンポーネントです。
 */
export declare const Stats: {
    ({ variant, className, children, ...props }: StatsProps): import("react/jsx-runtime").JSX.Element;
    Label: ({ className, children, ...props }: React.ComponentPropsWithoutRef<"div">) => import("react/jsx-runtime").JSX.Element;
    Value: ({ className, children, ...props }: React.ComponentPropsWithoutRef<"div">) => import("react/jsx-runtime").JSX.Element;
    Description: ({ className, children, ...props }: React.ComponentPropsWithoutRef<"div">) => import("react/jsx-runtime").JSX.Element;
    Trend: ({ direction, className, children, ...props }: StatsTrendProps) => import("react/jsx-runtime").JSX.Element;
};
export declare const StatsLabel: ({ className, children, ...props }: React.ComponentPropsWithoutRef<"div">) => import("react/jsx-runtime").JSX.Element;
export declare const StatsValue: ({ className, children, ...props }: React.ComponentPropsWithoutRef<"div">) => import("react/jsx-runtime").JSX.Element;
export declare const StatsDescription: ({ className, children, ...props }: React.ComponentPropsWithoutRef<"div">) => import("react/jsx-runtime").JSX.Element;
export type StatsTrendProps = React.ComponentPropsWithoutRef<"div"> & {
    direction?: "up" | "down" | "neutral";
};
export declare const StatsTrend: ({ direction, className, children, ...props }: StatsTrendProps) => import("react/jsx-runtime").JSX.Element;

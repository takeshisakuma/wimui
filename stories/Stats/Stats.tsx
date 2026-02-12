import React from "react";
import classNames from "classnames";
import "./stats.scss";

export type StatsProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * バリアント
     */
    variant?: "default" | "outline" | "flat";
};

/**
 * `Stats` は統計情報やメトリクスを表示するためのコンポーネントです。
 */
export const Stats = ({
    variant = "default",
    className,
    children,
    ...props
}: StatsProps) => {
    return (
        <div className={classNames("wim-stats", `wim-stats--${variant}`, className)} {...props}>
            {children}
        </div>
    );
};

export const StatsLabel = ({
    className,
    children,
    ...props
}: React.ComponentPropsWithoutRef<"div">) => (
    <div className={classNames("wim-stats__label", className)} {...props}>
        {children}
    </div>
);

export const StatsValue = ({
    className,
    children,
    ...props
}: React.ComponentPropsWithoutRef<"div">) => (
    <div className={classNames("wim-stats__value", className)} {...props}>
        {children}
    </div>
);

export const StatsDescription = ({
    className,
    children,
    ...props
}: React.ComponentPropsWithoutRef<"div">) => (
    <div className={classNames("wim-stats__description", className)} {...props}>
        {children}
    </div>
);

export type StatsTrendProps = React.ComponentPropsWithoutRef<"div"> & {
    direction?: "up" | "down" | "neutral";
};

export const StatsTrend = ({
    direction = "up",
    className,
    children,
    ...props
}: StatsTrendProps) => {
    return (
        <div
            className={classNames(
                "wim-stats__trend",
                `wim-stats__trend--${direction}`,
                className
            )}
            {...props}
        >
            <span className="wim-stats__trend-icon">
                {direction === "up" && "↑"}
                {direction === "down" && "↓"}
                {direction === "neutral" && "→"}
            </span>
            <span className="wim-stats__trend-value">{children}</span>
        </div>
    );
};

Stats.Label = StatsLabel;
Stats.Value = StatsValue;
Stats.Description = StatsDescription;
Stats.Trend = StatsTrend;



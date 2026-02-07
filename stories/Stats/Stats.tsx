import React from "react";
import PropTypes from "prop-types";
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
    className = "",
    children,
    ...props
}: StatsProps) => {
    const classes = ["wim-stats", `wim-stats--${variant}`, className].filter(Boolean).join(" ");

    return (
        <div className={classes} {...props}>
            {children}
        </div>
    );
};

export const StatsLabel = ({
    className = "",
    children,
    ...props
}: React.ComponentPropsWithoutRef<"div">) => (
    <div className={["wim-stats__label", className].filter(Boolean).join(" ")} {...props}>
        {children}
    </div>
);

export const StatsValue = ({
    className = "",
    children,
    ...props
}: React.ComponentPropsWithoutRef<"div">) => (
    <div className={["wim-stats__value", className].filter(Boolean).join(" ")} {...props}>
        {children}
    </div>
);

export const StatsDescription = ({
    className = "",
    children,
    ...props
}: React.ComponentPropsWithoutRef<"div">) => (
    <div className={["wim-stats__description", className].filter(Boolean).join(" ")} {...props}>
        {children}
    </div>
);

export type StatsTrendProps = React.ComponentPropsWithoutRef<"div"> & {
    direction?: "up" | "down" | "neutral";
};

export const StatsTrend = ({
    direction = "up",
    className = "",
    children,
    ...props
}: StatsTrendProps) => {
    const trendClasses = [
        "wim-stats__trend",
        `wim-stats__trend--${direction}`,
        className
    ].filter(Boolean).join(" ");

    return (
        <div className={trendClasses} {...props}>
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

Stats.propTypes = {
    variant: PropTypes.oneOf(["default", "outline", "flat"]),
    className: PropTypes.string,
    children: PropTypes.node,
};

StatsLabel.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

StatsValue.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

StatsDescription.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

StatsTrend.propTypes = {
    direction: PropTypes.oneOf(["up", "down", "neutral"]),
    className: PropTypes.string,
    children: PropTypes.node,
};

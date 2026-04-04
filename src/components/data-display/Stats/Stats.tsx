import React from "react";
import classNames from "classnames";
import { Card } from "../../data-display/Card/Card";
import "./stats.scss";

export type StatsProps = React.ComponentPropsWithoutRef<typeof Card>;

/**
 * `Stats` は統計情報やメトリクスを表示するためのコンポーネントです。
 */
export const Stats = ({
  variant = "elevated",
  className,
  children,
  ...props
}: StatsProps) => {
  return (
    <Card
      variant={variant}
      className={classNames("wim-stats", className)}
      padding="none"
      {...props}
    >
      <div className="wim-stats__inner">
        {children}
      </div>
    </Card>
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
        className,
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

Stats.displayName = "Stats";
StatsLabel.displayName = "Stats.Label";
StatsValue.displayName = "Stats.Value";
StatsDescription.displayName = "Stats.Description";
StatsTrend.displayName = "Stats.Trend";

Stats.Label = StatsLabel;
Stats.Value = StatsValue;
Stats.Description = StatsDescription;
Stats.Trend = StatsTrend;

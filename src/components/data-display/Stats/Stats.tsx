import React from "react";
import classNames from "classnames";
import { Card } from "../../data-display/Card/Card";
import styles from "./stats.module.scss";

export type StatsProps = React.ComponentPropsWithoutRef<typeof Card> & {
  /** Visual style variant of the card */
  variant?: React.ComponentProps<typeof Card>["variant"];
};

/**
 * `Stats` is a component for displaying statistics and metrics.
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
      className={classNames("wim-stats", styles.root, className)}
      padding="none"
      {...props}
    >
      <div className={styles.inner}>
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
  <div className={classNames(styles.label, className)} {...props}>
    {children}
  </div>
);

export const StatsValue = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => (
  <div className={classNames(styles.value, className)} {...props}>
    {children}
  </div>
);

export const StatsDescription = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) => (
  <div className={classNames(styles.description, className)} {...props}>
    {children}
  </div>
);

export type StatsTrendProps = React.ComponentPropsWithoutRef<"div"> & {
  /** Trend direction, which controls the icon and color */
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
        styles.trend,
        styles[direction],
        className,
      )}
      {...props}
    >
      <span className={styles.trendIcon}>
        {direction === "up" && "↑"}
        {direction === "down" && "↓"}
        {direction === "neutral" && "→"}
      </span>
      <span className={styles.trendValue}>{children}</span>
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

export default Stats;

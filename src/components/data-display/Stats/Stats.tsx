import React from "react";
import classNames from "classnames";
import { Card } from "../../data-display/Card/Card";
import { Icon } from "../../media/Icon/Icon";
import { ArrowUpIcon, ArrowDownIcon, ArrowRightIcon } from "@/icon";
import styles from "./stats.module.scss";

const TREND_ICON = {
  up: ArrowUpIcon,
  down: ArrowDownIcon,
  neutral: ArrowRightIcon,
} as const;

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
      {/* **記号ではなくアイコンで描く。** ここは `"↑"` `"↓"` `"→"` の直書きだった
          （T78）。DESIGN.md が「絵文字・記号でアイコンを代用しない」と禁じている
          当のことを、出荷コンポーネントがやっていた。文字だと書体によって字形も
          光学的な重さも変わり、他のアイコンと揃わない。 */}
      <span className={styles.trendIcon} aria-hidden="true">
        <Icon component={TREND_ICON[direction]} size="sm" />
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

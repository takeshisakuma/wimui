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
  // `Card` と同じく既定は `outline`（T250 ②）。ここは Card へ委譲しているが
  // **既定値は自前で持っている**ので、Card だけ直しても Stats は elevated を
  // 明示的に渡し続ける。既定を変えるときは 2 か所を必ず一緒に見ること。
  variant = "outline",
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
  /**
   * Trend direction, which controls the arrow icon. When `intent` is not given it
   * also sets the color (`up` = success, `down` = danger, `neutral` = neutral).
   * @default "up"
   */
  direction?: "up" | "down" | "neutral";
  /**
   * Whether the change is good or bad, which controls the color independently of
   * the arrow. Set it for metrics where a rise is bad news, such as costs or error
   * rates: `direction="up" intent="danger"`. Defaults to the color implied by
   * `direction`.
   */
  intent?: "success" | "danger" | "neutral";
};

/** `intent` を省いたときの色。以前はこれが唯一の規則だった（向き＝良し悪し）。 */
const TREND_INTENT = { up: "success", down: "danger", neutral: "neutral" } as const;

export const StatsTrend = ({
  direction = "up",
  // 色は向きではなく良し悪しで決める（T250 ④・2026-09-21）。以前は `direction` が
  // 矢印と色を同時に決めていたので、「増えると悪い指標」（コスト・エラー率）の上昇が
  // 成功色で描かれた。合成ルール `colour_means_good_or_bad` が「Trend を使うな」と
  // 回避を指示していたのは、API がこの意味を表せなかったため。
  intent = TREND_INTENT[direction],
  className,
  children,
  ...props
}: StatsTrendProps) => {
  return (
    <div
      className={classNames(styles.trend, styles[intent], className)}
      data-direction={direction}
      data-intent={intent}
      {...props}
    >
      {/* **記号ではなくアイコンで描く。** ここは `"↑"` `"↓"` `"→"` の直書きだった
          （T78）。DESIGN.md が「絵文字・記号でアイコンを代用しない」と禁じている
          当のことを、出荷コンポーネントがやっていた。文字だと書体によって字形も
          光学的な重さも変わり、他のアイコンと揃わない。 */}
      <span aria-hidden="true">
        <Icon component={TREND_ICON[direction]} size="sm" />
      </span>
      <span>{children}</span>
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

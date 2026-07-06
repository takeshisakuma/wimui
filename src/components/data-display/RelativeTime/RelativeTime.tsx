import React from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import localStyles from "./relative-time.module.scss";

export type RelativeTimeInput = Date | string | number;

export type RelativeTimeProps = Omit<
  React.ComponentPropsWithoutRef<"time">,
  "dateTime"
> & {
  /**
   * The date to display, as a Date object, ISO 8601 string, or epoch milliseconds.
   */
  date: RelativeTimeInput;
  /**
   * Reference point used as "now". When set, live updates are disabled.
   * @default current time
   */
  baseDate?: RelativeTimeInput;
  /**
   * BCP 47 locale override (e.g. "en", "ja", "pt-BR").
   * @default current i18next language
   */
  locale?: string;
  /**
   * "auto" allows idiomatic phrases like "yesterday"; "always" always uses numbers ("1 day ago").
   * @default "auto"
   */
  numeric?: Intl.RelativeTimeFormatNumeric;
  /**
   * Length of the formatted message ("long" | "short" | "narrow").
   * @default "long"
   */
  format?: Intl.RelativeTimeFormatStyle;
  /**
   * Automatically re-render as time passes. Ignored when baseDate is set.
   * @default true
   */
  live?: boolean;
  /**
   * Content shown when the date cannot be parsed.
   */
  fallback?: React.ReactNode;
  /**
   * If true, the component will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
};

// MDN 準拠の単位分割表。上から順に「その単位で表現できる範囲」を判定する。
const DIVISIONS: { amount: number; unit: Intl.RelativeTimeFormatUnit }[] = [
  { amount: 60, unit: "second" },
  { amount: 60, unit: "minute" },
  { amount: 24, unit: "hour" },
  { amount: 7, unit: "day" },
  { amount: 4.34524, unit: "week" },
  { amount: 12, unit: "month" },
  { amount: Number.POSITIVE_INFINITY, unit: "year" },
];

const toTime = (value: RelativeTimeInput): number =>
  value instanceof Date ? value.getTime() : new Date(value).getTime();

// 表示中の粒度に応じた再描画間隔（ms）。秒表示は毎秒、分表示は15秒ごと、
// 時間表示は毎分、それ以上は1時間ごとに更新する。
const refreshDelay = (diffSeconds: number): number => {
  const abs = Math.abs(diffSeconds);
  if (abs < 60) return 1_000;
  if (abs < 3_600) return 15_000;
  if (abs < 86_400) return 60_000;
  return 3_600_000;
};

const formatRelative = (
  formatter: Intl.RelativeTimeFormat,
  diffSeconds: number,
): string => {
  let duration = diffSeconds;
  for (const division of DIVISIONS) {
    if (Math.abs(duration) < division.amount) {
      return formatter.format(Math.round(duration), division.unit);
    }
    duration /= division.amount;
  }
  return formatter.format(Math.round(duration), "year");
};

/**
 * RelativeTime displays a timestamp as a localized relative phrase
 * ("3 minutes ago", "yesterday") using Intl.RelativeTimeFormat, and keeps
 * itself up to date as time passes. It renders a semantic <time> element
 * with a machine-readable dateTime attribute and an absolute-time tooltip.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 * - Timers: Owns its own refresh timer (cleared on unmount). Set live={false}
 *   or provide baseDate to render a static snapshot.
 */
export const RelativeTime = React.forwardRef<HTMLTimeElement, RelativeTimeProps>(
  (
    {
      date,
      baseDate,
      locale,
      numeric = "auto",
      format = "long",
      live = true,
      fallback,
      asChild = false,
      className,
      children,
      title,
      ...props
    },
    ref,
  ) => {
    const { i18n } = useWimTranslation();
    const language = locale ?? i18n?.language ?? "en";
    const Root = asChild ? Slot : "time";

    const targetTime = toTime(date);
    const isValid = !Number.isNaN(targetTime);
    const isLive = live && baseDate === undefined && isValid;

    const [now, setNow] = React.useState(() => Date.now());
    const referenceTime =
      baseDate !== undefined ? toTime(baseDate) : isLive ? now : Date.now();

    React.useEffect(() => {
      if (!isLive) return undefined;
      const diffSeconds = (targetTime - Date.now()) / 1000;
      const id = window.setTimeout(
        () => setNow(Date.now()),
        refreshDelay(diffSeconds),
      );
      return () => window.clearTimeout(id);
    }, [isLive, targetTime, now]);

    const { relativeFormatter, absoluteFormatter } = React.useMemo(() => {
      const options: Intl.RelativeTimeFormatOptions = { numeric, style: format };
      try {
        return {
          relativeFormatter: new Intl.RelativeTimeFormat(language, options),
          absoluteFormatter: new Intl.DateTimeFormat(language, {
            dateStyle: "medium",
            timeStyle: "short",
          }),
        };
      } catch {
        // 不正なロケール指定時は英語にフォールバックする
        return {
          relativeFormatter: new Intl.RelativeTimeFormat("en", options),
          absoluteFormatter: new Intl.DateTimeFormat("en", {
            dateStyle: "medium",
            timeStyle: "short",
          }),
        };
      }
    }, [language, numeric, format]);

    if (!isValid) {
      return (
        <Root
          ref={ref}
          className={classNames(localStyles.root, className)}
          title={title}
          {...props}
        >
          <Slottable>{children}</Slottable>
          {fallback}
        </Root>
      );
    }

    const targetDate = new Date(targetTime);
    const diffSeconds = (targetTime - referenceTime) / 1000;

    return (
      <Root
        ref={ref}
        className={classNames(localStyles.root, className)}
        dateTime={targetDate.toISOString()}
        title={title ?? absoluteFormatter.format(targetDate)}
        {...props}
      >
        <Slottable>{children}</Slottable>
        {formatRelative(relativeFormatter, diffSeconds)}
      </Root>
    );
  },
);

RelativeTime.displayName = "RelativeTime";

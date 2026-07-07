import React from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import type { ComponentSizeBasic } from "../../../types/tokens";
import localStyles from "./countdown.module.scss";

export type CountdownInput = Date | string | number;

export type CountdownUnit = "day" | "hour" | "minute" | "second";

export type CountdownProps = Omit<
  React.ComponentPropsWithoutRef<"time">,
  "dateTime"
> & {
  /**
   * The moment the countdown ends, as a Date object, ISO 8601 string,
   * or epoch milliseconds.
   */
  target: CountdownInput;
  /**
   * Reference point used as "now". When set, the countdown is frozen at
   * that instant (useful for snapshots and tests).
   */
  baseDate?: CountdownInput;
  /**
   * "digital" renders a compact colon-separated clock (04:12:33);
   * "units" renders one labeled segment per unit (days / hours / min / sec).
   * @default "digital"
   */
  variant?: "digital" | "units";
  /**
   * Size of the numbers and labels.
   * @default "md"
   */
  size?: ComponentSizeBasic;
  /**
   * BCP 47 locale override for unit labels (e.g. "en", "ja", "pt-BR").
   * @default current i18next language
   */
  locale?: string;
  /**
   * Length of the unit labels in the "units" variant.
   * @default "short"
   */
  unitDisplay?: "long" | "short" | "narrow";
  /**
   * Pauses the countdown while true. It resumes from the real remaining
   * time (the target moment does not shift).
   * @default false
   */
  paused?: boolean;
  /**
   * Called once when the remaining time reaches zero (also on mount if the
   * target is already in the past). Not called when baseDate is set.
   */
  onComplete?: () => void;
  /**
   * Content shown instead of the zeroed digits once the countdown ends.
   */
  completedContent?: React.ReactNode;
  /**
   * Content shown when the target cannot be parsed.
   */
  fallback?: React.ReactNode;
  /**
   * If true, the component will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
};

type Segment = { unit: CountdownUnit; value: number };

const toTime = (value: CountdownInput): number =>
  value instanceof Date ? value.getTime() : new Date(value).getTime();

const pad = (value: number): string => String(value).padStart(2, "0");

// 残り秒数を日/時/分/秒に分解する。表示しない上位単位は下位へ繰り込む。
const splitUnits = (totalSeconds: number, foldDays: boolean): Segment[] => {
  const days = Math.floor(totalSeconds / 86_400);
  const hours = foldDays
    ? Math.floor(totalSeconds / 3_600)
    : Math.floor((totalSeconds % 86_400) / 3_600);
  const minutes = Math.floor((totalSeconds % 3_600) / 60);
  const seconds = totalSeconds % 60;

  const segments: Segment[] = [];
  if (!foldDays && days > 0) segments.push({ unit: "day", value: days });
  if (segments.length > 0 || hours > 0)
    segments.push({ unit: "hour", value: hours });
  segments.push({ unit: "minute", value: minutes });
  segments.push({ unit: "second", value: seconds });
  return segments;
};

/**
 * Countdown displays the time remaining until a target moment as a live
 * ticking clock, either as compact digits (04:12:33) or as labeled unit
 * segments for sale banners and maintenance notices. Unit labels are
 * localized through Intl.NumberFormat, so no locale data is bundled.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 * - Timers: Owns its own 1-second refresh timer (cleared on unmount).
 *   Provide baseDate to render a static snapshot, or paused to suspend it.
 */
export const Countdown = React.forwardRef<HTMLTimeElement, CountdownProps>(
  (
    {
      target,
      baseDate,
      variant = "digital",
      size = "md",
      locale,
      unitDisplay = "short",
      paused = false,
      onComplete,
      completedContent,
      fallback,
      asChild = false,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const { t, i18n } = useWimTranslation("data-display");
    const language = locale ?? i18n?.language ?? "en";
    const Root = asChild ? Slot : "time";

    const targetTime = toTime(target);
    const isValid = !Number.isNaN(targetTime);
    const isStatic = baseDate !== undefined;

    const [now, setNow] = React.useState(() => Date.now());
    const referenceTime = isStatic ? toTime(baseDate) : now;
    const remainingMs = isValid ? Math.max(0, targetTime - referenceTime) : 0;
    const isComplete = isValid && remainingMs <= 0;
    const isLive = !isStatic && !paused && isValid && !isComplete;

    // 一時停止解除時に、停止中に経過した時間を即座に表示へ反映する
    React.useEffect(() => {
      if (!paused && !isStatic) setNow(Date.now());
    }, [paused, isStatic]);

    React.useEffect(() => {
      if (!isLive) return undefined;
      // 秒境界に合わせて次の再描画を予約し、ドリフトによる秒飛ばしを防ぐ
      const delay = (targetTime - Date.now()) % 1_000 || 1_000;
      const id = window.setTimeout(() => setNow(Date.now()), delay);
      return () => window.clearTimeout(id);
    }, [isLive, targetTime, now]);

    const completeFiredRef = React.useRef(false);
    React.useEffect(() => {
      completeFiredRef.current = false;
    }, [targetTime]);
    React.useEffect(() => {
      if (!isValid || isStatic || !isComplete) return;
      if (completeFiredRef.current) return;
      completeFiredRef.current = true;
      onComplete?.();
    }, [isComplete, isStatic, isValid, onComplete]);

    // Intl.NumberFormat の unit スタイルでロケール対応の単位ラベルを得る。
    // 言語が変わるまで (unit, display) ごとにインスタンスを再利用する。
    const formatterCache = React.useMemo(() => {
      void language;
      return new Map<string, Intl.NumberFormat>();
    }, [language]);
    const getFormatter = (
      unit: CountdownUnit,
      display: "long" | "short" | "narrow",
    ): Intl.NumberFormat => {
      const key = `${unit}-${display}`;
      let formatter = formatterCache.get(key);
      if (!formatter) {
        const options: Intl.NumberFormatOptions = {
          style: "unit",
          unit,
          unitDisplay: display,
        };
        try {
          formatter = new Intl.NumberFormat(language, options);
        } catch {
          // 不正なロケール指定時は英語にフォールバックする
          formatter = new Intl.NumberFormat("en", options);
        }
        formatterCache.set(key, formatter);
      }
      return formatter;
    };

    const unitLabel = (segment: Segment): string =>
      getFormatter(segment.unit, unitDisplay)
        .formatToParts(segment.value)
        .filter((part) => part.type === "unit")
        .map((part) => part.value)
        .join("");

    if (!isValid) {
      return (
        <Root
          ref={ref}
          className={classNames(localStyles.root, className)}
          {...props}
        >
          <Slottable>{children}</Slottable>
          {fallback}
        </Root>
      );
    }

    const totalSeconds = Math.floor(remainingMs / 1_000);
    // digital は日を時へ繰り込み（52:10:33）、units は日を独立セグメントで表示する
    const segments = splitUnits(totalSeconds, variant === "digital");
    const showCompleted = isComplete && completedContent !== undefined;

    // スクリーンリーダー向けには常に「2日 4時間 12分 33秒」形式の長文で伝える
    const ariaTime = splitUnits(totalSeconds, false)
      .map((segment) => getFormatter(segment.unit, "long").format(segment.value))
      .join(" ");

    return (
      <Root
        ref={ref}
        role="timer"
        aria-label={
          showCompleted ? undefined : t("countdown.remaining", { time: ariaTime })
        }
        className={classNames(
          localStyles.root,
          localStyles[variant],
          localStyles[size],
          className,
        )}
        dateTime={new Date(targetTime).toISOString()}
        {...props}
      >
        <Slottable>{children}</Slottable>
        {showCompleted ? (
          completedContent
        ) : variant === "digital" ? (
          segments.map((segment, index) => (
            <React.Fragment key={segment.unit}>
              {index > 0 && (
                <span className={localStyles.separator} aria-hidden="true">
                  :
                </span>
              )}
              <span className={localStyles.value}>{pad(segment.value)}</span>
            </React.Fragment>
          ))
        ) : (
          segments.map((segment) => (
            <span key={segment.unit} className={localStyles.segment}>
              <span className={localStyles.value}>
                {segment.unit === "day"
                  ? String(segment.value)
                  : pad(segment.value)}
              </span>
              <span className={localStyles.label}>{unitLabel(segment)}</span>
            </span>
          ))
        )}
      </Root>
    );
  },
);

Countdown.displayName = "Countdown";

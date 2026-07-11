import React from "react";
import classNames from "classnames";
import { ComponentSizeBasic } from "../../../types/tokens";
import styles from "./usage-meter.module.scss";

/** Labels for internationalization. */
export type UsageMeterLabels = {
  /** Leading label (default "Tokens") */
  label?: string;
  /** Unit appended to the raw counts (default "tokens") */
  unit?: string;
  /** Accessible label describing the meter */
  ariaLabel?: string;
};

export interface UsageMeterProps extends React.ComponentPropsWithoutRef<"div"> {
  /** Number of tokens used so far */
  used: number;
  /** Maximum available tokens (e.g. the context window). Omit for a counter-only display. */
  max?: number;
  /** Size of the meter */
  size?: ComponentSizeBasic;
  /** Whether to render the progress bar (requires `max`) */
  showBar?: boolean;
  /** Whether to show the percentage instead of the raw count in the readout */
  showPercentage?: boolean;
  /** Fraction (0–1) at which the meter turns to the warning color */
  warnThreshold?: number;
  /** Fraction (0–1) at which the meter turns to the danger color */
  dangerThreshold?: number;
  /** Labels for internationalization */
  labels?: UsageMeterLabels;
  /** Additional class names */
  className?: string;
}

/** Format a number with thousands separators, locale-independent. */
const formatNumber = (n: number): string => n.toLocaleString("en-US");

/**
 * UsageMeter (also exported as TokenCounter) visualizes token consumption
 * against a budget such as a model's context window — a labeled bar plus a
 * numeric readout that shifts to warning and danger colors near the limit.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export const UsageMeter = React.forwardRef<HTMLDivElement, UsageMeterProps>(
  (
    {
      used,
      max,
      size = "md",
      showBar = true,
      showPercentage = false,
      warnThreshold = 0.75,
      dangerThreshold = 0.9,
      labels,
      className,
      ...props
    },
    ref,
  ) => {
    const { label = "Tokens", unit = "tokens", ariaLabel } = labels ?? {};

    const hasMax = typeof max === "number" && max > 0;
    const ratio = hasMax ? Math.min(used / max, 1) : 0;
    const percent = Math.round(ratio * 100);

    const level = ratio >= dangerThreshold ? "danger" : ratio >= warnThreshold ? "warn" : "ok";

    const readout = hasMax
      ? showPercentage
        ? `${percent}%`
        : `${formatNumber(used)} / ${formatNumber(max)}`
      : `${formatNumber(used)} ${unit}`;

    const resolvedAriaLabel =
      ariaLabel ?? (hasMax ? `${label}: ${used} of ${max}` : `${label}: ${used}`);

    const showTrack = showBar && hasMax;

    return (
      <div
        ref={ref}
        className={classNames("wim-usage-meter", styles.root, styles[size], styles[level], className)}
        role="meter"
        aria-valuenow={used}
        aria-valuemin={0}
        aria-valuemax={hasMax ? max : undefined}
        aria-label={resolvedAriaLabel}
        {...props}
      >
        <div className={styles.header}>
          <span className={styles.label}>{label}</span>
          <span className={styles.readout}>{readout}</span>
        </div>
        {showTrack && (
          <div className={styles.track} aria-hidden="true">
            <div
              className={styles.bar}
              style={{ ["--wim-usage-meter-fill" as string]: `${percent}%` }}
            />
          </div>
        )}
      </div>
    );
  },
);

UsageMeter.displayName = "UsageMeter";

/** Alias of {@link UsageMeter} for apps that frame usage as a token count. */
export const TokenCounter = UsageMeter;

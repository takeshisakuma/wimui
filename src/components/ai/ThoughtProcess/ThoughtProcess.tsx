import React, { useId } from "react";
import classNames from "classnames";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelinePoint,
  TimelineContent,
} from "../../data-display/Timeline/Timeline";
import { Icon } from "../../media/Icon/Icon";
import { CheckIcon, AlertCircleIcon, ChevronRightIcon } from "@/icon";
import styles from "./thought-process.module.scss";

export interface ThoughtStepProps {
  /** Content of this reasoning step */
  children: React.ReactNode;
  /** Current state of the step */
  status?: "pending" | "completed" | "error";
  /** Optional label shown above the content */
  label?: string;
  /** Hides the connector line below this step — use on the last step */
  isLast?: boolean;
}

export const ThoughtStep = ({
  children,
  status = "completed",
  label,
  isLast = false,
}: ThoughtStepProps) => {
  const pointContent =
    status === "pending" ? (
      <div className={styles.spinner} aria-hidden="true" />
    ) : status === "completed" ? (
      <Icon component={CheckIcon} size="xs" />
    ) : status === "error" ? (
      <Icon component={AlertCircleIcon} size="xs" />
    ) : null;

  const pointVariant =
    status === "completed" ? "success" : status === "error" ? "error" : "secondary";

  return (
    <TimelineItem
      className={classNames(styles.item, styles[status])}
      aria-busy={status === "pending" || undefined}
    >
      <TimelineSeparator>
        <TimelinePoint variant={pointVariant}>{pointContent}</TimelinePoint>
        {!isLast && <TimelineConnector className={styles.connector} />}
      </TimelineSeparator>
      <TimelineContent className={styles.content}>
        {label && <div className={styles.label}>{label}</div>}
        <div className={styles.text}>{children}</div>
      </TimelineContent>
    </TimelineItem>
  );
};

export interface ThoughtProcessProps {
  children: React.ReactNode;
  /** Header title */
  title?: string;
  /** Additional CSS class */
  className?: string;
  /** Whether the body can be collapsed */
  isCollapsible?: boolean;
  /** Initial expanded state (only relevant when isCollapsible is true) */
  defaultExpanded?: boolean;
}

/**
 * ThoughtProcess visualizes AI reasoning steps using the Timeline design language.
 * Supports collapsible panels with accessible aria-expanded/aria-controls.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export const ThoughtProcess = ({
  children,
  title = "Thinking Process",
  className,
  isCollapsible = true,
  defaultExpanded = true,
}: ThoughtProcessProps) => {
  const [isExpanded, setIsExpanded] = React.useState(defaultExpanded);
  const bodyId = useId();

  return (
    <div className={classNames(styles.root, className)}>
      {isCollapsible ? (
        <button
          type="button"
          className={styles.header}
          onClick={() => setIsExpanded((v) => !v)}
          aria-expanded={isExpanded}
          aria-controls={bodyId}
        >
          <Icon
            component={ChevronRightIcon}
            size="sm"
            className={classNames(styles.chevron, isExpanded && styles.expanded)}
            aria-hidden="true"
          />
          <span className={styles.title}>{title}</span>
        </button>
      ) : (
        <div className={styles.header} role="heading" aria-level={3}>
          <span className={styles.title}>{title}</span>
        </div>
      )}

      <div
        id={bodyId}
        className={classNames(styles.bodyWrapper, isExpanded && styles.open)}
        aria-hidden={!isExpanded}
      >
        <div className={styles.body}>
          <Timeline align="left">{children}</Timeline>
        </div>
      </div>
    </div>
  );
};

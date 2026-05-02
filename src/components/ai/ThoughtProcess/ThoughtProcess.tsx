import React from "react";
import classNames from "classnames";
import { 
  Timeline, 
  TimelineItem, 
  TimelineSeparator, 
  TimelineConnector, 
  TimelinePoint, 
  TimelineContent 
} from "../../data-display/Timeline/Timeline";
import { Icon } from "../../media/Icon/Icon";
import { CheckIcon, AlertCircleIcon } from "@/icon";
import styles from "./thought-process.module.scss";

export interface ThoughtStepProps {
  /** The content of the step */
  children: React.ReactNode;
  /** Status of the step */
  status?: "pending" | "completed" | "error";
  /** Optional label or title for the step */
  label?: string;
  /** Whether this is the last step (hides connector) */
  isLast?: boolean;
}

export const ThoughtStep = ({
  children,
  status = "completed",
  label,
  isLast = false,
}: ThoughtStepProps) => {
  const getPointContent = () => {
    if (status === "pending") {
      return <div className={styles.spinner} />;
    }
    if (status === "completed") {
      return <Icon component={CheckIcon} size="xs" />;
    }
    if (status === "error") {
      return <Icon component={AlertCircleIcon} size="xs" />;
    }
    return null;
  };

  const getVariant = () => {
    if (status === "completed") return "success";
    if (status === "error") return "error";
    return "secondary";
  };

  return (
    <TimelineItem className={classNames(styles.item, styles[status])}>
      <TimelineSeparator>
        <TimelinePoint variant={getVariant()}>
          {getPointContent()}
        </TimelinePoint>
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
  title?: string;
  className?: string;
  isCollapsible?: boolean;
  defaultExpanded?: boolean;
}

/**
 * ThoughtProcess visualizes AI's reasoning steps using the Timeline design language.
 */
export const ThoughtProcess = ({
  children,
  title = "Thinking Process",
  className,
  isCollapsible = true,
  defaultExpanded = true,
}: ThoughtProcessProps) => {
  const [isExpanded, setIsExpanded] = React.useState(defaultExpanded);

  return (
    <div className={classNames(styles.root, className)}>
      {isCollapsible ? (
        <button 
          className={styles.header} 
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
        >
          <span className={classNames(styles.chevron, isExpanded && styles.expanded)}>▶</span>
          <span className={styles.title}>{title}</span>
        </button>
      ) : (
        <div className={styles.header}>
          <span className={styles.title}>{title}</span>
        </div>
      )}
      
      {isExpanded && (
        <div className={styles.body}>
          <Timeline align="left">
            {children}
          </Timeline>
        </div>
      )}
    </div>
  );
};

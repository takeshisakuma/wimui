import React from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { Icon } from "../../media/Icon/Icon";
import { CheckCircleIcon, AlertCircleIcon, HourglassIcon } from "@/icon";
import styles from "./agent-status.module.scss";

export type AgentStatusValue = "idle" | "thinking" | "running" | "waiting" | "done" | "error";

export interface AgentStatusProps extends React.ComponentPropsWithoutRef<"div"> {
  /** Current state of the agent */
  status: AgentStatusValue;
  /** Optional description of what the agent is doing; falls back to the localized status label */
  message?: string;
  /** Size variant */
  size?: "sm" | "md" | "lg";
  /** Whether to show the text label next to the indicator */
  showLabel?: boolean;
  /** Additional CSS class */
  className?: string;
}

const ICONS: Partial<Record<AgentStatusValue, React.ComponentType<React.SVGProps<SVGSVGElement>>>> = {
  waiting: HourglassIcon,
  done: CheckCircleIcon,
  error: AlertCircleIcon,
};

/**
 * AgentStatus displays the real-time state of an AI agent as a compact
 * animated indicator — idle, thinking, running, waiting, done, or error.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export const AgentStatus = React.forwardRef<HTMLDivElement, AgentStatusProps>(
  ({ status, message, size = "md", showLabel = true, className, ...props }, ref) => {
    const { t } = useTranslation("form");
    const label = message ?? t(`agent_status.${status}`);
    const IconComponent = ICONS[status];
    const iconSize = size === "lg" ? "sm" : "xs";

    return (
      <div
        ref={ref}
        role="status"
        aria-live="polite"
        aria-label={label}
        className={classNames(styles.root, styles[status], styles[size], className)}
        {...props}
      >
        <span className={styles.indicator} aria-hidden="true">
          {IconComponent ? (
            <Icon component={IconComponent} size={iconSize} />
          ) : (
            <span className={styles.dot} />
          )}
        </span>
        {showLabel && (
          <span className={styles.label} aria-hidden="true">{label}</span>
        )}
      </div>
    );
  }
);

AgentStatus.displayName = "AgentStatus";

import React from "react";
import classNames from "classnames";
import { Icon } from "../../media/Icon/Icon";
import styles from "./stepper.module.scss";

export type StepperStatus = "wait" | "process" | "finish" | "error";

export interface Step {
  /** Title of the step */
  title: React.ReactNode;
  /** Description of the step */
  description?: React.ReactNode;
  /** Custom icon for the step */
  icon?: React.ReactNode;
  /** Explicit workflow status for this step. If omitted, computed from `current` index. */
  status?: StepperStatus;
  /** Whether the step is disabled */
  disabled?: boolean;
}

export interface StepperProps {
  /** Array of step configurations */
  steps: Step[];
  /** Index of the current active step (0-indexed) */
  current?: number;
  /** Direction of the stepper */
  direction?: "horizontal" | "vertical";
  /** Placement of the labels */
  labelPlacement?: "horizontal" | "vertical";
  /** Workflow status shown on the current active step (default: "process") */
  status?: StepperStatus;
  /** Additional class names */
  className?: string;
  /** Callback function when a step is clicked (if applicable) */
  onChange?: (current: number) => void;
}

export const Stepper = ({
  steps = [],
  current = 0,
  direction = "horizontal",
  labelPlacement = "horizontal",
  status = "process",
  className,
  onChange,
}: StepperProps) => {
  const getStepStatus = (
    index: number,
    stepStatus?: StepperStatus,
  ): StepperStatus => {
    if (stepStatus) return stepStatus;
    if (index < current) return "finish";
    if (index === current) return status;
    return "wait";
  };

  const renderIcon = (
    index: number,
    stepStatus: StepperStatus,
    icon?: React.ReactNode,
  ) => {
    if (icon) return icon;

    if (stepStatus === "finish") {
      return <Icon name="CheckIcon" size="sm" />;
    }
    if (stepStatus === "error") {
      return <Icon name="CloseIcon" size="sm" />;
    }
    return <span>{index + 1}</span>;
  };

  const handleContainerKeyDown = (e: React.KeyboardEvent) => {
    if (!onChange) return;

    const items = Array.from(
      e.currentTarget.querySelectorAll<HTMLElement>('[role="tab"]'),
    );
    const focusedEl = document.activeElement as HTMLElement;
    const focusedItemIdx = items.indexOf(focusedEl);
    if (focusedItemIdx === -1) return;

    const arrowKeys = ["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp", "Home", "End"];
    if (!arrowKeys.includes(e.key)) return;
    e.preventDefault();

    const navigableItems = items.filter((_, i) => !steps[i]?.disabled);
    const focusedNavIdx = navigableItems.indexOf(focusedEl);
    if (focusedNavIdx === -1) return;

    let nextNavIdx: number;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      nextNavIdx = (focusedNavIdx + 1) % navigableItems.length;
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      nextNavIdx = (focusedNavIdx - 1 + navigableItems.length) % navigableItems.length;
    } else if (e.key === "Home") {
      nextNavIdx = 0;
    } else {
      nextNavIdx = navigableItems.length - 1;
    }

    const nextItem = navigableItems[nextNavIdx];
    nextItem.focus();
    onChange(items.indexOf(nextItem));
  };

  return (
    <div className={styles.container}>
      <div
        className={classNames(
          styles.root,
          styles[direction],
          labelPlacement === "vertical" && styles.labelVertical,
          className,
        )}
        role={onChange ? "tablist" : undefined}
        aria-orientation={onChange ? direction : undefined}
        onKeyDown={handleContainerKeyDown}
      >
        {steps.map((step, index) => {
          const stepStatus = getStepStatus(index, step.status);
          const isClickable = !!onChange && !step.disabled;

          return (
            <div
              key={index}
              className={classNames(
                styles.item,
                styles[stepStatus],
                labelPlacement === "vertical" && styles.labelVertical,
                step.disabled && styles.disabled,
              )}
              onClick={() => isClickable && onChange(index)}
              style={{ cursor: isClickable ? "pointer" : "default" }}
              role={onChange ? "tab" : undefined}
              aria-selected={onChange ? index === current : undefined}
              aria-disabled={step.disabled ? "true" : undefined}
              data-testid="stepper-item"
              data-status={stepStatus}
              tabIndex={
                onChange
                  ? !step.disabled && index === current ? 0 : -1
                  : isClickable ? 0 : -1
              }
              onKeyDown={(e) => {
                if (isClickable && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault();
                  onChange(index);
                }
              }}
            >
              <div className={styles.line} />
              <div className={styles.iconContainer}>
                {renderIcon(index, stepStatus, step.icon)}
              </div>
              <div className={styles.content}>
                <span className={styles.title} data-testid="stepper-title">{step.title}</span>
                {step.description && (
                  <span className={styles.description}>
                    {step.description}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;

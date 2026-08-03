import React from "react";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { Icon } from "../../media/Icon/Icon";
import { Tooltip, TooltipTrigger, TooltipContent } from "../../overlay/Tooltip/Tooltip";
import { ThumbUpIcon, ThumbDownIcon, RefreshIcon } from "@/icon";
import styles from "./airesponse-feedback.module.scss";

export type AIFeedbackValue = "positive" | "negative";

export interface AIResponseFeedbackProps extends React.ComponentPropsWithoutRef<"div"> {
  /** Currently selected feedback value (controlled) */
  feedback?: AIFeedbackValue | null;
  /** Default feedback value (uncontrolled) */
  defaultFeedback?: AIFeedbackValue | null;
  /** Called when user clicks a feedback button. Passes null when deselected. */
  onFeedback?: (value: AIFeedbackValue | null) => void;
  /** Whether to show the regenerate button */
  showRegenerate?: boolean;
  /** Called when the regenerate button is clicked */
  onRegenerate?: () => void;
  /** Whether all buttons are disabled */
  disabled?: boolean;
}

/**
 * AIResponseFeedback renders thumbs-up/down and optional regenerate controls
 * for rating an AI-generated response.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export const AIResponseFeedback = React.forwardRef<HTMLDivElement, AIResponseFeedbackProps>(
  (
    {
      feedback: controlledFeedback,
      defaultFeedback = null,
      onFeedback,
      showRegenerate = false,
      onRegenerate,
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    const { t } = useWimTranslation("form");
    const isControlled = controlledFeedback !== undefined;
    const [internalFeedback, setInternalFeedback] = React.useState<AIFeedbackValue | null>(
      defaultFeedback
    );
    const current = isControlled ? (controlledFeedback ?? null) : internalFeedback;

    const handleFeedback = (value: AIFeedbackValue) => {
      if (disabled) return;
      const next = current === value ? null : value;
      if (!isControlled) setInternalFeedback(next);
      onFeedback?.(next);
    };

    return (
      <div
        ref={ref}
        role="group"
        aria-label={t("ai_feedback.group_label")}
        className={classNames("wim-ai-response-feedback", styles.root, className)}
        {...props}
      >
        {/* アイコンだけのボタンなので、`aria-label` の文言を目にも見せる。
            これが無いと**同じ情報が支援技術にだけ渡っている**状態になる
            （`CopyButton` が先に採っている形。T64）。 */}
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              className={classNames(styles.button, current === "positive" && styles.positive)}
              onClick={() => handleFeedback("positive")}
              aria-label={t("ai_feedback.positive_label")}
              aria-pressed={current === "positive"}
              disabled={disabled}
            >
              <Icon component={ThumbUpIcon} size="sm" />
            </button>
          </TooltipTrigger>
          <TooltipContent>{t("ai_feedback.positive_label")}</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type="button"
              className={classNames(styles.button, current === "negative" && styles.negativeActive)}
              onClick={() => handleFeedback("negative")}
              aria-label={t("ai_feedback.negative_label")}
              aria-pressed={current === "negative"}
              disabled={disabled}
            >
              <Icon component={ThumbDownIcon} size="sm" />
            </button>
          </TooltipTrigger>
          <TooltipContent>{t("ai_feedback.negative_label")}</TooltipContent>
        </Tooltip>
        {showRegenerate && (
          <>
            <div className={styles.divider} aria-hidden="true" />
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  className={styles.button}
                  onClick={onRegenerate}
                  aria-label={t("ai_feedback.regenerate_label")}
                  disabled={disabled}
                >
                  <Icon component={RefreshIcon} size="sm" />
                </button>
              </TooltipTrigger>
              <TooltipContent>{t("ai_feedback.regenerate_label")}</TooltipContent>
            </Tooltip>
          </>
        )}
      </div>
    );
  }
);

AIResponseFeedback.displayName = "AIResponseFeedback";

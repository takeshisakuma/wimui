import React from "react";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { CheckCircleIcon, AlertCircleIcon, SpinnerIcon } from "../../../icon";
import styles from "./autosave.module.scss";

export type AutosaveStatus = "idle" | "saving" | "saved" | "error";

export type AutosaveProps = React.ComponentPropsWithoutRef<"div"> & {
  /** Save status */
  status: AutosaveStatus;
  /** Time of the last save */
  savedAt?: Date;
  /** Error message (a default message is used when omitted) */
  errorMessage?: string;
};

/**
 * Indicator that shows the autosave status.
 */
export const Autosave = React.forwardRef<HTMLDivElement, AutosaveProps>(
  ({ status, savedAt, errorMessage, className, ...props }, ref) => {
    const { t } = useWimTranslation("common");

    if (status === "idle") return null;

    const label = (() => {
      switch (status) {
        case "saving":
          return t("autosave.saving");
        case "saved":
          return savedAt
            ? t("autosave.saved_at", {
                time: savedAt.toLocaleTimeString(undefined, {
                  hour: "2-digit",
                  minute: "2-digit",
                }),
              })
            : t("autosave.saved");
        case "error":
          return errorMessage ?? t("autosave.error");
      }
    })();

    return (
      <div
        ref={ref}
        role="status"
        aria-live="polite"
        aria-label={t("autosave.aria_label")}
        className={classNames(styles.root, styles[status], className)}
        {...props}
      >
        <span className={styles.icon} aria-hidden="true">
          {status === "saving" && <SpinnerIcon className={styles.spinner} />}
          {status === "saved" && <CheckCircleIcon />}
          {status === "error" && <AlertCircleIcon />}
        </span>
        <span className={styles.label}>{label}</span>
      </div>
    );
  },
);

Autosave.displayName = "Autosave";

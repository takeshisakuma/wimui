import React from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { CheckCircleIcon, AlertCircleIcon, SpinnerIcon } from "../../../icon";
import styles from "./autosave.module.scss";

export type AutosaveStatus = "idle" | "saving" | "saved" | "error";

export type AutosaveProps = React.ComponentPropsWithoutRef<"div"> & {
  /** 保存状態 */
  status: AutosaveStatus;
  /** 最終保存日時 */
  savedAt?: Date;
  /** エラーメッセージ（省略時はデフォルトメッセージを使用） */
  errorMessage?: string;
};

/**
 * 自動保存の状態を示すインジケーターコンポーネント。
 */
export const Autosave = React.forwardRef<HTMLDivElement, AutosaveProps>(
  ({ status, savedAt, errorMessage, className, ...props }, ref) => {
    const { t } = useTranslation("common");

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

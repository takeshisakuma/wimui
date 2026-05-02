import React from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import styles from "./password-strength.module.scss";

export type PasswordStrengthLevel = 0 | 1 | 2 | 3 | 4;

export interface PasswordStrengthProps extends React.ComponentPropsWithoutRef<"div"> {
  /**
   * パスワード文字列
   */
  password?: string;
  /**
   * 強さの判定基準（省略した場合はデフォルトの判定が使用されます）
   * 0: とても弱い, 1: 弱い, 2: 普通, 3: 強い, 4: とても強い
   */
  score?: PasswordStrengthLevel;
  /**
   * ラベルを表示するかどうか
   */
  showLabel?: boolean;
  /**
   * カスタムの強さ判定関数
   */
  calculateLevel?: (password: string) => PasswordStrengthLevel;
}

const defaultCalculateLevel = (password: string): PasswordStrengthLevel => {
  if (!password) return 0;
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  return score as PasswordStrengthLevel;
};

/**
 * パスワードの強度を視覚的に表示するコンポーネント。
 */
export const PasswordStrength = React.forwardRef<HTMLDivElement, PasswordStrengthProps>(
  ({ password = "", score, showLabel = true, calculateLevel = defaultCalculateLevel, className, ...props }, ref) => {
    const { t } = useTranslation("form");
    const currentScore = score !== undefined ? score : calculateLevel(password);

    const getLevelConfig = (lvl: number) => {
      switch (lvl) {
        case 0:
          return { intent: "error", label: t("password_strength.very_weak") };
        case 1:
          return { intent: "error", label: t("password_strength.weak") };
        case 2:
          return { intent: "warning", label: t("password_strength.fair") };
        case 3:
          return { intent: "info", label: t("password_strength.strong") };
        case 4:
          return { intent: "success", label: t("password_strength.very_strong") };
        default:
          return { intent: "error", label: "" };
      }
    };

    const config = getLevelConfig(currentScore);

    return (
      <div ref={ref} className={classNames(styles.root, className)} {...props}>
        <div className={styles.meter}>
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={classNames(styles.segment, {
                [styles.active]: step <= currentScore,
                [styles[config.intent]]: step <= currentScore,
              })}
            />
          ))}
        </div>
        {showLabel && (password || score !== undefined) && (
          <div className={classNames(styles.label, styles[config.intent])}>
            {config.label}
          </div>
        )}
      </div>
    );
  }
);

PasswordStrength.displayName = "PasswordStrength";

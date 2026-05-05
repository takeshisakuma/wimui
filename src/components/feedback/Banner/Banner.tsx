import React from "react";
import classNames from "classnames";
import { FeedbackIcon } from "../../_internal/FeedbackIcon";
import { FeedbackCloseButton } from "../../_internal/FeedbackCloseButton";
import { FeedbackIntent } from "../../../types/tokens";
import styles from "./banner.module.scss";

type BannerProps = {
  /**
   * バナーのタイトル
   */
  title?: React.ReactNode;
  /**
   * バナーの説明文
   */
  description?: React.ReactNode;
  /**
   * バナーのインテント（意味的状態）
   */
  intent?: FeedbackIntent;
  /**
   * アイコンを表示するかどうか、またはカスタムアイコン
   */
  icon?: boolean | React.ReactNode;
  /**
   * アクションボタン要素（例：Buttonコンポーネント）
   */
  extra?: React.ReactNode;
  /**
   * 閉じるボタンをクリックした時のコールバック。指定すると閉じるボタンが表示されます。
   */
  onClose?: () => void;
  /**
   * 追加のクラス名
   */
  className?: string;
  /**
   * 子要素
   */
  children?: React.ReactNode;
};

/**
 * 重要なメッセージやアクションをユーザーに提示するためのバナーコンポーネント。
 * 通常、ページの上部に表示されます。
 */
export const Banner = ({
  title,
  description,
  intent = "info",
  icon = true,
  extra,
  onClose,
  className,
  children,
  ...props
}: BannerProps) => {

  return (
    <div
      className={classNames(styles.root, styles[intent], className)}
      role="status"
      {...props}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          {icon !== false && (
            <div className={styles.icon}>
              <FeedbackIcon
                intent={intent}
                icon={typeof icon === "boolean" ? undefined : icon}
                size="sm"
              />
            </div>
          )}
          <div className={styles.text}>
            {title && <span className={styles.title}>{title}</span>}
            {title && (description || children) && (
              <span className={styles.separator}> - </span>
            )}
            {(description || children) && (
              <span className={styles.description}>
                {description ? description : children}
              </span>
            )}
          </div>
        </div>
        <div className={styles.actions}>
          {extra && <div className={styles.action}>{extra}</div>}
          <FeedbackCloseButton
             onClose={onClose}
             className={styles.close}
             size="sm"
          />
        </div>
      </div>
    </div>
  );
};

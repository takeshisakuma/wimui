import React from "react";
import classNames from "classnames";
import { FeedbackIcon } from "../../_internal/FeedbackIcon";
import { FeedbackCloseButton } from "../../_internal/FeedbackCloseButton";
import { FeedbackIntent } from "../../../types/tokens";
import styles from "./alert.module.scss";

type AlertProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * アラートのタイトル
   */
  title?: React.ReactNode;
  /**
   * アラートのタイトルのHTMLタグ
   * @default "h4"
   */
  titleTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /**
   * アラートの説明文
   */
  description?: React.ReactNode;
  /**
   * アラートのインテント（意味的状態）
   */
  intent?: FeedbackIntent;
  /**
   * カスタムアイコン。指定しない場合はバリアントに応じたデフォルトアイコンが表示されます。
   */
  icon?: React.ReactNode;
  /**
   * 閉じるボタンをクリックした時のコールバック。指定すると閉じるボタンが表示されます。
   */
  onClose?: () => void;
  /**
   * 追加のクラス名
   */
  className?: string;
  /**
   * 子要素（説明文として扱われます）
   */
  children?: React.ReactNode;
};

/**
 * ユーザーに重要な情報を伝えるためのアラートコンポーネント。
 */
export const Alert = ({
  title,
  titleTag: TitleTag = "h4",
  description,
  intent = "info",
  icon,
  onClose,
  className,
  children,
  ...props
}: AlertProps) => {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  return (
    <div
      className={classNames(styles.root, styles[intent], className)}
      role="alert"
      {...props}
    >
      <div className={styles.icon}>
        <FeedbackIcon intent={intent} icon={icon} size="sm" />
      </div>
      <div className={styles.content}>
        {title && <TitleTag className={styles.title}>{title}</TitleTag>}
        {(description || children) && (
          <div className={styles.description}>
            {description ? description : children}
          </div>
        )}
      </div>
      <FeedbackCloseButton
        onClose={onClose ? handleClose : undefined}
        className={styles.close}
        size="sm"
      />
    </div>
  );
};

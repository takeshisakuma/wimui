import React from "react";
import { StatusContent } from "../_internal/StatusContent";
import classNames from "classnames";
import "./emptyState.scss";

type EmptyStateProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * 表示するタイトル（翻訳キーも可）。
   */
  title: string;
  /**
   * 表示する説明文（翻訳キーも可）。
   */
  description?: string;
  /**
   * 表示するアイコン。
   */
  icon?: React.ReactNode;
  /**
   * アクションとして表示する要素（ボタンなど）。
   */
  action?: React.ReactNode;
  /**
   * デザインバリエーション。
   */
  variant?: "default" | "simple";
};

/**
 * データが空の場合や、検索結果がない場合などに表示するプレースホルダーコンポーネント。
 */
export const EmptyState = ({
  title,
  description,
  icon,
  action,
  variant = "default",
  className,
  ...props
}: EmptyStateProps) => {
  return (
    <StatusContent
      title={title}
      description={description}
      icon={icon}
      actions={action}
      className={classNames(
        "wim-empty-state",
        `wim-empty-state--${variant}`,
        className,
      )}
      {...props}
    />
  );
};

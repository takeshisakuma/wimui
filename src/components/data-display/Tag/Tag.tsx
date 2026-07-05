import React from "react";
import classNames from "classnames";
import { Icon } from "../../media/Icon/Icon";
import { IndicatorBase } from "../../_internal/IndicatorBase";
import { ComponentSizeBasic, IndicatorIntent, IndicatorVariant } from "../../../types/tokens";
import styles from "./tag.module.scss";
import { CloseIcon } from "@/icon";

export type TagProps = React.ComponentPropsWithoutRef<"span"> & {
  /**
   * If true, the tag will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
  /** 表示するコンテンツ */
  children?: React.ReactNode;
  /** 表示するコンテンツ (childrenの代替) */
  content?: React.ReactNode;
  /** インテント（意味的状態） */
  intent?: IndicatorIntent;
  /** バリアント */
  variant?: IndicatorVariant;
  /** サイズ */
  size?: ComponentSizeBasic;
  /** アイコン */
  icon?: React.ReactNode;
  /** 削除時のイベント。提供されると×ボタンが表示されます。 */
  onDelete?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** 無効状態 */
  disabled?: boolean;
  /** インタラクティブな状態を有効にするか */
  interactive?: boolean;
};

/**
 * カテゴリ分けや属性のラベルとして使用されるコンポーネント。
 * onClose を提供することで削除可能なタグとして機能します。
 */
export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ children, content, icon, onDelete, disabled, interactive = false, ...props }, ref) => {
    return (
      <IndicatorBase
        ref={ref}
        styles={styles}
        icon={icon}
        content={content}
        className={classNames(props.className, { [styles.disabled]: disabled })}
        interactive={interactive}
        {...props}
      >
        {children}
        {onDelete && (
          <button
            type="button"
            className={styles.closeButton}
            onClick={(e) => {
              e.stopPropagation();
              onDelete(e);
            }}
            aria-label="Close"
          >
            <Icon component={CloseIcon} size="sm" />
          </button>
        )}
      </IndicatorBase>
    );
  },
);

Tag.displayName = "Tag";

import React from "react";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { Icon } from "../../media/Icon/Icon";
import { mergeRefs } from "../../_internal/mergeRefs";
import { ComponentSize, IndicatorIntent, IndicatorVariant } from "../../../types/tokens";
import styles from "./chip.module.scss";
import { CloseIcon } from "@/icon";

export type ChipProps = React.HTMLAttributes<HTMLElement> & {
  /**
   * If true, the chip will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
  /** 表示するコンテンツ */
  children?: React.ReactNode;
  /** 表示するコンテンツ (childrenの代替) */
  content?: React.ReactNode;
  /** クリック時のイベント。提供されるとボタンとして動作します。 */
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLSpanElement>) => void;
  /** 削除時のイベント。提供されると×ボタンが表示されます。 */
  onDelete?: (e: React.SyntheticEvent) => void;
  /** アバター（画像や頭文字など） */
  avatar?: React.ReactNode;
  /** アイコン */
  icon?: React.ReactNode;
  /** 選択状態 */
  selected?: boolean;
  /** 無効状態 */
  disabled?: boolean;
  /** インテント（意味的状態） */
  intent?: IndicatorIntent;
  /** バリアント */
  variant?: IndicatorVariant;
  /** サイズ */
  size?: ComponentSize;
  /** 削除ボタンのアクセシビリティラベル */
  deleteAriaLabel?: string;
  /** 追加のクラス名 */
  className?: string;
};

/**
 * 選択、フィルタリング、または入力に使用されるインタラクティブなトークン。
 */
export const Chip = React.forwardRef<HTMLElement, ChipProps>(
  (
    {
      asChild = false,
      children,
      content,
      onClick,
      onDelete,
      avatar,
      icon,
      selected = false,
      disabled = false,
      intent = "primary",
      variant = "solid",
      size = "md",
      deleteAriaLabel,
      className,
      ...props
    },
    ref,
  ) => {
    const { t } = useWimTranslation("common");
    const resolvedDeleteAriaLabel = deleteAriaLabel ?? t("a11y.delete");
    const Component = asChild ? Slot : (onClick ? "button" : "span");
    const finalContent = content ?? children;
    
    return (
      <Component
        ref={mergeRefs(ref)}
        className={classNames(
          styles.root,
          styles[intent],
          styles[variant],
          styles[size],
          selected && styles.selected,
          onClick && !disabled && styles.clickable,
          disabled && styles.disabled,
          className,
        )}
        onClick={!disabled ? onClick : undefined}
        {...((!asChild && onClick) ? { disabled } : {})}
        type={asChild ? undefined : (onClick ? "button" : undefined)}
        {...(props as React.HTMLAttributes<HTMLElement>)}
      >
        {avatar && <span className={styles.avatar}>{avatar}</span>}
        {!avatar && icon && <span className={styles.icon}>{icon}</span>}
        <span className={styles.label}>
          <Slottable>{finalContent}</Slottable>
        </span>
        {onDelete && !disabled && (
          <button
            type="button"
            className={styles.delete}
            data-chip-delete
            onClick={(e) => {
              e.stopPropagation();
              onDelete(e);
            }}
            aria-label={resolvedDeleteAriaLabel}
          >
            <Icon component={CloseIcon} size="sm" />
          </button>
        )}
      </Component>
    );
  },
);

Chip.displayName = "Chip";

import React from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { Icon } from "../../media/Icon/Icon";
import { ComponentSize, WimIntent, IndicatorVariant } from "../../../types/tokens";
import styles from "./chip.module.scss";

export type ChipProps = React.HTMLAttributes<HTMLElement> & {
  /**
   * If true, the chip will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
  /** 表示するコンテンツ */
  children?: React.ReactNode;
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
  /** ステータス */
  intent?: WimIntent;
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
    const { t } = useTranslation("common");
    const resolvedDeleteAriaLabel = deleteAriaLabel ?? t("a11y.delete");
    const Component = asChild ? Slot : (onClick ? "button" : "span");
    
    return (
      <Component
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        disabled={asChild ? undefined : (disabled as any)}
        type={asChild ? undefined : (onClick ? "button" : undefined)}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(props as any)}
      >
        {avatar && <span className={styles.avatar}>{avatar}</span>}
        {!avatar && icon && <span className={styles.icon}>{icon}</span>}
        <span className={styles.label}>
          <Slottable>{children}</Slottable>
        </span>
        {onDelete && !disabled && (
          <span
            className={styles.delete}
            data-chip-delete
            onClick={(e) => {
              e.stopPropagation();
              onDelete(e);
            }}
            role="button"
            aria-label={resolvedDeleteAriaLabel}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                e.stopPropagation();
                onDelete(e);
              }
            }}
          >
            <Icon name="CloseIcon" size="sm" />
          </span>
        )}
      </Component>
    );
  },
);

Chip.displayName = "Chip";

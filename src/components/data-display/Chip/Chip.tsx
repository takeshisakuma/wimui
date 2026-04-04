import React from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Icon } from "../../media/Icon/Icon";
import { ComponentSize, WimIntent, IndicatorVariant } from "../../../types/tokens";
import "./chip.scss";
export type ChipProps = {
  /** 表示するコンテンツ */
  children?: React.ReactNode;
  /** クリック時のイベント。提供されるとボタンとして動作します。 */
  onClick?: (e: React.MouseEvent) => void;
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
  /** その他のprops */
  [key: string]: unknown;
};

/**
 * 選択、フィルタリング、または入力に使用されるインタラクティブなトークン。
 */
export const Chip = ({
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
}: ChipProps) => {
  const { t } = useTranslation("common");
  const resolvedDeleteAriaLabel = deleteAriaLabel ?? t("a11y.delete");
  const Component = onClick ? "button" : "span";
  const commonProps = {
    className: classNames(
      "wim-chip",
      `wim-chip--${ intent }`,
      `wim-chip--${variant}`,
      `wim-chip--${size}`,
      selected && "wim-chip--selected",
      onClick && !disabled && "wim-chip--clickable",
      disabled && "wim-chip--disabled",
      className,
    ),
    onClick: !disabled ? onClick : undefined,
    disabled: disabled,
    type: onClick ? ("button" as const) : undefined,
    ...props,
  };

  return (
    <Component {...commonProps}>
      {avatar && <span className="wim-chip__avatar">{avatar}</span>}
      {!avatar && icon && <span className="wim-chip__icon">{icon}</span>}
      <span className="wim-chip__label">
        {children}
      </span>
      {onDelete && !disabled && (
        <span
          className="wim-chip__delete"
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
};


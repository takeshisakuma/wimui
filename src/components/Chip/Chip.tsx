import React from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { Icon } from "../Icon/Icon";
import { ComponentSize, IndicatorStatus } from "../../types/tokens";
import "./chip.scss";
import { warnDeprecated } from "../../utilities/dev-utils";

export type ChipProps = {
  /** 表示するコンテンツ (labelより優先されます) */
  children?: React.ReactNode;
  /** @deprecated Use children instead */
  label?: string | React.ReactNode;
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
  status?: IndicatorStatus;
  /** バリアント */
  variant?: "solid" | "outline" | "subtle";
  /** サイズ */
  size?: ComponentSize;
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
  label,
  onClick,
  onDelete,
  avatar,
  icon,
  selected = false,
  disabled = false,
  status = "primary",
  variant = "solid",
  size = "medium",
  className,
  ...props
}: ChipProps) => {
  const { t } = useTranslation();
  if (label !== undefined) {
    warnDeprecated("Chip", "label", "Use `children` instead.");
  }
  const displayLabel = children ?? label;



  const Component = onClick ? "button" : "span";
  const commonProps = {
    className: classNames(
      "wim-chip",
      `wim-chip--${status}`,
      `wim-chip--${variant}`,
      `wim-chip--${size === "small" ? "sm" : size === "large" ? "lg" : "md"}`,
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
        {typeof displayLabel === "string" ? t(displayLabel) : displayLabel}
      </span>
      {onDelete && !disabled && (
        <span
          className="wim-chip__delete"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(e);
          }}
          role="button"
          aria-label={t("a11y_delete")}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              e.stopPropagation();
              onDelete(e);
            }
          }}
        >
          <Icon name="CloseIcon" size="small" />
        </span>
      )}
    </Component>
  );
};


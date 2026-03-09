import React from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { Icon } from "../../Icon/Icon";
import "./input-base.scss";

export type InputBaseIcon = {
  name: React.ComponentProps<typeof Icon>["name"];
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  color?: React.ComponentProps<typeof Icon>["color"];
  ariaLabel?: string;
  className?: string;
};

export type InputBaseProps = {
  children: React.ReactNode;
  state?: "default" | "error" | "disabled";
  variant?: "outline" | "ghost";
  fullWidth?: boolean;
  width?: "xs" | "sm" | "md" | "lg" | "xl" | string | number;
  className?: string;
  disabled?: boolean;
  leftIcon?: React.ComponentProps<typeof Icon>["name"];
  leftIconColor?: React.ComponentProps<typeof Icon>["color"];
  onLeftIconClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  rightIcons?: InputBaseIcon[];
  /** Whether to show a clear button when value is present */
  allowClear?: boolean;
  hasValue?: boolean;
  onClear?: () => void;
};

/**
 * フォーム入力コンポーネント（Input, SearchInput, Selectbox等）の外殻となる共用語コンポーネント。
 * prefix/suffix（アイコン）や clearable（クリアボタン）の配置とレイアウトを統一します。
 */
export const InputBase = ({
  children,
  state = "default",
  variant = "outline",
  fullWidth = false,
  width,
  className,
  disabled,
  leftIcon,
  leftIconColor,
  onLeftIconClick,
  rightIcons = [],
  allowClear,
  hasValue,
  onClear,
}: InputBaseProps) => {
  const { t } = useTranslation();

  const isSemanticWidth =
    typeof width === "string" && ["xs", "sm", "md", "lg", "xl"].includes(width);

  const isDisabled = disabled || state === "disabled";
  const effectiveState = isDisabled ? "disabled" : state;
  const effectiveHasCustomWidth = width !== undefined && !isSemanticWidth && !fullWidth;
  const effectiveSemanticWidth = isSemanticWidth && !fullWidth ? width : undefined;

  const getIconColor = (
    customColor?: React.ComponentProps<typeof Icon>["color"],
  ) => {
    if (customColor) return customColor;
    if (isDisabled) return "disabled";
    if (state === "error") return "destructive";
    return "secondary";
  };

  const finalRightIcons = [...rightIcons];
  if (allowClear && hasValue && !isDisabled) {
    finalRightIcons.push({
      name: "CloseIcon",
      onClick: (e) => {
        e.stopPropagation();
        onClear?.();
      },
      ariaLabel: t("a11y_clear_input"),
    });
  }

  return (
    <div
      className={classNames(
        "wim-input-base",
        `wim-input-base--${effectiveState}`,
        `wim-input--variant-${variant}`,
        fullWidth && "wim-input--full-width",
        effectiveHasCustomWidth && "wim-input--has-custom-width",
        effectiveSemanticWidth && `wim-input--width-${effectiveSemanticWidth}`,
        leftIcon && "wim-input--has-left-icon",
        finalRightIcons.length > 0 && "wim-input--has-right-icon",
        finalRightIcons.length >= 2 && "wim-input--has-multiple-right-icons",
        className,
      )}

      style={
        effectiveHasCustomWidth
          ? ({
              "--wim-input-width":
                typeof width === "number" ? `${width}px` : width,
            } as React.CSSProperties)
          : undefined
      }
    >
      {leftIcon && (
        <div
          className={classNames(
            "wim-input-icon",
            "wim-input-icon--left",
            onLeftIconClick && "wim-input-icon--clickable",
          )}
        >
          {onLeftIconClick ? (
            <button
              type="button"
              onClick={onLeftIconClick}
              className="wim-input-icon-button"
              aria-label={t("a11y_left_icon_action")}
            >
              <Icon
                name={leftIcon}
                size="medium"
                color={getIconColor(leftIconColor)}
              />
            </button>
          ) : (
            <Icon
              name={leftIcon}
              size="medium"
              color={getIconColor(leftIconColor)}
            />
          )}
        </div>
      )}
      {children}
      {finalRightIcons.length > 0 && (
        <div
          className={classNames(
            "wim-input-icons",
            "wim-input-icons--right",
          )}
        >
          {finalRightIcons.map((icon, index) => (
            <div
              key={`${icon.name}-${index}`}
              className={classNames(
                "wim-input-icon-item",
                icon.onClick && "wim-input-icon-item--clickable",
                icon.className,
              )}
            >
              {icon.onClick ? (
                <button
                  type="button"
                  onClick={icon.onClick}
                  className="wim-input-icon-button"
                  aria-label={icon.ariaLabel || t("a11y_right_icon_action")}
                >
                  <Icon
                    name={icon.name}
                    size="medium"
                    color={getIconColor(icon.color)}
                  />
                </button>
              ) : (
                <Icon
                  name={icon.name}
                  size="medium"
                  color={getIconColor(icon.color)}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

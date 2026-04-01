import React from "react";
import classNames from "classnames";
import { Icon } from "../../media/Icon/Icon";
import { WimIntent } from "../../../types/tokens";
import "./input-base.scss";

export type InputBaseIcon = {
  name: React.ComponentProps<typeof Icon>["name"];
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  color?: React.ComponentProps<typeof Icon>["color"];
  ariaLabel?: string;
  className?: string;
  /** Whether the icon should be rotated 180deg */
  rotated?: boolean;
};

export type InputBaseProps = {
  children: React.ReactNode;
  intent?: WimIntent;
  variant?: "outline" | "ghost";
  fullWidth?: boolean;
  width?: "xs" | "sm" | "md" | "lg" | "xl" | string | number;
  className?: string;
  disabled?: boolean;
  leftIcon?: React.ComponentProps<typeof Icon>["name"];
  leftIconColor?: React.ComponentProps<typeof Icon>["color"];
  onLeftIconClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  leftIconAriaLabel?: string;
  rightIcons?: InputBaseIcon[];
  /** Whether to show a clear button when value is present */
  allowClear?: boolean;
  hasValue?: boolean;
  onClear?: () => void;
  clearAriaLabel?: string;
};

/**
 * フォーム入力コンポーネント（Input, SearchInput, Selectbox等）の外殻となる共用語コンポーネント。
 * prefix/suffix（アイコン）や clearable（クリアボタン）の配置とレイアウトを統一します。
 */
export const InputBase = ({
  children,
  intent = "default",
  variant = "outline",
  fullWidth = false,
  width,
  className,
  disabled,
  leftIcon,
  leftIconColor,
  onLeftIconClick,
  leftIconAriaLabel = "Action",
  rightIcons = [],
  allowClear,
  hasValue,
  onClear,
  clearAriaLabel = "Clear input",
}: InputBaseProps) => {
  const isSemanticWidth =
    typeof width === "string" && ["xs", "sm", "md", "lg", "xl"].includes(width);

  const isDisabled = disabled;
  const effectiveIntent = isDisabled ? "disabled" : intent;

  const disabledChildren = isDisabled
    ? React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { disabled: true } as React.HTMLAttributes<HTMLElement>)
          : child,
      )
    : children;
  const effectiveHasCustomWidth = width !== undefined && !isSemanticWidth && !fullWidth;
  const effectiveSemanticWidth = isSemanticWidth && !fullWidth ? width : undefined;

  const getIconColor = (
    customColor?: React.ComponentProps<typeof Icon>["color"],
  ) => {
    if (customColor) return customColor;
    if (isDisabled) return "disabled";
    if (intent === "error") return "destructive";
    if (intent === "warning") return "caution";
    if (intent === "success") return "positive";
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
      ariaLabel: clearAriaLabel,
    });
  }

  return (
    <div
      className={classNames(
        "wim-input-base",
        `wim-input-base--${effectiveIntent}`,
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
              aria-label={leftIconAriaLabel}
            >
              <Icon
                name={leftIcon}
                size="md"
                color={getIconColor(leftIconColor)}
              />
            </button>
          ) : (
            <Icon
              name={leftIcon}
              size="md"
              color={getIconColor(leftIconColor)}
            />
          )}
        </div>
      )}
      {disabledChildren}
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
                icon.rotated && "wim-input-icon-item--rotated",
                icon.className,
              )}
            >
              {icon.onClick ? (
                <button
                  type="button"
                  onClick={icon.onClick}
                  className="wim-input-icon-button"
                  aria-label={icon.ariaLabel || "Action"}
                >
                  <Icon
                    name={icon.name}
                    size="md"
                    color={getIconColor(icon.color)}
                  />
                </button>
              ) : (
                <Icon
                  name={icon.name}
                  size="md"
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

import React from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Icon } from "../../media/Icon/Icon";
import { WimIntent } from "../../../types/tokens";
import styles from "./input-base.module.scss";

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
  leftIconAriaLabel,
  rightIcons = [],
  allowClear,
  hasValue,
  onClear,
  clearAriaLabel,
}: InputBaseProps) => {
  const { t } = useTranslation("common");
  const resolvedLeftIconAriaLabel = leftIconAriaLabel ?? t("a11y.left_icon_action");
  const resolvedClearAriaLabel = clearAriaLabel ?? t("a11y.clear_input");
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
      ariaLabel: resolvedClearAriaLabel,
    });
  }

  const widthClassName = effectiveSemanticWidth 
    ? styles[`width${effectiveSemanticWidth.charAt(0).toUpperCase()}${effectiveSemanticWidth.slice(1)}`]
    : undefined;

  return (
    <div
      className={classNames(
        styles.root,
        styles[effectiveIntent],
        styles[variant],
        fullWidth && styles.fullWidth,
        effectiveHasCustomWidth && styles.hasCustomWidth,
        widthClassName,
        leftIcon && styles.hasLeftIcon,
        finalRightIcons.length > 0 && styles.hasRightIcon,
        finalRightIcons.length >= 2 && styles.hasMultipleRightIcons,
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
            styles.icon,
            styles.left,
            onLeftIconClick && styles.clickable,
          )}
        >
          {onLeftIconClick ? (
            <button
              type="button"
              onClick={onLeftIconClick}
              className={styles.iconButton}
              aria-label={resolvedLeftIconAriaLabel}
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
            styles.icons,
            styles.right,
          )}
        >
          {finalRightIcons.map((icon, index) => (
            <div
              key={`${icon.name}-${index}`}
              className={classNames(
                styles.iconItem,
                icon.onClick && styles.clickable,
                icon.rotated && styles.rotated,
                icon.className,
              )}
            >
              {icon.onClick ? (
                <button
                  type="button"
                  onClick={icon.onClick}
                  className={styles.iconButton}
                  aria-label={icon.ariaLabel ?? t("a11y.right_icon_action")}
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

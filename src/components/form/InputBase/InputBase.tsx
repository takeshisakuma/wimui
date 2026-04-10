import React from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Icon } from "../../media/Icon/Icon";
import { WimIntent } from "../../../types/tokens";
import localStyles from "./input-base.module.scss";

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
  /** Custom styles for internal parts */
  styles?: {
    root?: string;
    inner?: string;
    icon?: string;
    icons?: string;
    iconItem?: string;
    iconButton?: string;
  };
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
  styles: stylesProp,
}: InputBaseProps) => {
  const { t } = useTranslation("common");
  const resolvedLeftIconAriaLabel = leftIconAriaLabel ?? t("a11y.left_icon_action");
  const resolvedClearAriaLabel = clearAriaLabel ?? t("a11y.clear_input");
  const isSemanticWidth =
    typeof width === "string" && ["xs", "sm", "md", "lg", "xl"].includes(width);

  const isDisabled = disabled;
  const effectiveIntent = isDisabled ? "disabled" : intent;

  const childrenWithClasses = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    
    return React.cloneElement(child, {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      disabled: isDisabled ? true : (child.props as any).disabled,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      className: classNames((child.props as any).className, localStyles.inner, stylesProp?.inner),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any);
  });
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
    ? localStyles[`width${effectiveSemanticWidth.charAt(0).toUpperCase()}${effectiveSemanticWidth.slice(1)}`]
    : undefined;

  return (
    <div
      className={classNames(
        localStyles.root,
        localStyles[effectiveIntent],
        localStyles[variant],
        fullWidth && localStyles.fullWidth,
        effectiveHasCustomWidth && localStyles.hasCustomWidth,
        widthClassName,
        leftIcon && localStyles.hasLeftIcon,
        finalRightIcons.length > 0 && localStyles.hasRightIcon,
        finalRightIcons.length >= 2 && localStyles.hasMultipleRightIcons,
        className,
        stylesProp?.root,
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
            localStyles.icon,
            localStyles.left,
            onLeftIconClick && localStyles.clickable,
            stylesProp?.icon,
          )}
        >
          {onLeftIconClick ? (
            <button
              type="button"
              onClick={onLeftIconClick}
              className={classNames(localStyles.iconButton, stylesProp?.iconButton)}
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
      {childrenWithClasses}
      {finalRightIcons.length > 0 && (
        <div
          className={classNames(
            localStyles.icons,
            localStyles.right,
            stylesProp?.icons,
          )}
        >
          {finalRightIcons.map((icon, index) => (
            <div
              key={`${icon.name}-${index}`}
              className={classNames(
                localStyles.iconItem,
                icon.onClick && localStyles.clickable,
                icon.rotated && localStyles.rotated,
                icon.className,
                stylesProp?.iconItem,
              )}
            >
              {icon.onClick ? (
                <button
                  type="button"
                  onClick={icon.onClick}
                  className={classNames(localStyles.iconButton, stylesProp?.iconButton)}
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

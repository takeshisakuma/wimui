import React from "react";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import classNames from "classnames";
import { Icon } from "../../media/Icon/Icon";
import { WimIntent, FieldIntent, FieldWidth, FieldVariant } from "../../../types/tokens";
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
  /** Inner form control element(s) wrapped by the shell */
  children: React.ReactNode;
  /** Semantic intent of the field (e.g. error state) */
  intent?: FieldIntent | WimIntent;
  /** Visual style variant of the field */
  variant?: FieldVariant;
  /** Whether to take full width of parent */
  fullWidth?: boolean;
  /** Fixed width of the field (width token, CSS value, or number in px) */
  width?: FieldWidth | string | number;
  /** Additional class names */
  className?: string;
  /** Whether the field is disabled */
  disabled?: boolean;
  /** Icon name to display on the left side */
  leftIcon?: React.ComponentProps<typeof Icon>["name"];
  /** Color of the left icon */
  leftIconColor?: React.ComponentProps<typeof Icon>["color"];
  /** Callback when the left icon is clicked (renders the icon as a button) */
  onLeftIconClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Aria label for the left icon button */
  leftIconAriaLabel?: string;
  /** Icons to display on the right side */
  rightIcons?: InputBaseIcon[];
  /** Whether to show a clear button when value is present */
  allowClear?: boolean;
  /** Whether the field currently has a value (controls clear button visibility) */
  hasValue?: boolean;
  /** Callback when the clear button is clicked */
  onClear?: () => void;
  /** Aria label for the clear button */
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
  disabled: isDisabled,
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
  const { t } = useWimTranslation("common");
  const resolvedLeftIconAriaLabel = leftIconAriaLabel ?? t("a11y.left_icon_action");
  const resolvedClearAriaLabel = clearAriaLabel ?? t("a11y.clear_input");
  const isSemanticWidth =
    typeof width === "string" && ["xs", "sm", "md", "lg", "xl"].includes(width);

  const childrenWithClasses = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    
    return React.cloneElement(child as React.ReactElement<Record<string, unknown>>, {
      disabled: isDisabled ? true : (child.props as Record<string, unknown>).disabled,
      className: classNames((child.props as Record<string, unknown>).className as string, localStyles.inner, stylesProp?.inner),
    });
  });
  const effectiveHasCustomWidth = width !== undefined && !isSemanticWidth && !fullWidth;
  const effectiveSemanticWidth = isSemanticWidth && !fullWidth ? width : undefined;

  const getIconColor = (
    customColor?: React.ComponentProps<typeof Icon>["color"],
  ) => {
    if (isDisabled) return "disabled";
    if (customColor) return customColor;
    if (intent === "danger") return "danger";
    if (intent === "warning") return "warning";
    if (intent === "success") return "success";
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
      className={classNames("wim-input-base", 
        localStyles.root,
        intent && localStyles[intent],
        isDisabled && localStyles.disabled,
        localStyles[variant],
        fullWidth && localStyles.fullWidth,
        effectiveHasCustomWidth && localStyles.hasCustomWidth,
        widthClassName,
        leftIcon && localStyles.hasLeftIcon,
        (finalRightIcons.length > 0 || allowClear) && localStyles.hasRightIcon,
        (finalRightIcons.length >= 2 || (rightIcons.length >= 1 && allowClear)) && localStyles.hasMultipleRightIcons,
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

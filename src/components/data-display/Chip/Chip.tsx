import React from "react";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { Icon } from "../../media/Icon/Icon";
import { mergeRefs } from "../../_internal/mergeRefs";
import { ComponentSizeBasic, IndicatorIntent, IndicatorVariant } from "../../../types/tokens";
import styles from "./chip.module.scss";
import { CloseIcon } from "@/icon";

export type ChipProps = React.HTMLAttributes<HTMLElement> & {
  /**
   * If true, the chip will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
  /** Content to display */
  children?: React.ReactNode;
  /** Content to display (alternative to children) */
  content?: React.ReactNode;
  /** Click event. When provided, the chip behaves as a button. */
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLSpanElement>) => void;
  /** Delete event. When provided, a × button is shown. */
  onDelete?: (e: React.SyntheticEvent) => void;
  /** Avatar (e.g. an image or initials) */
  avatar?: React.ReactNode;
  /** Icon */
  icon?: React.ReactNode;
  /** Whether the chip is selected */
  selected?: boolean;
  /** Whether the chip is disabled */
  disabled?: boolean;
  /** Intent (semantic state) */
  intent?: IndicatorIntent;
  /** Visual style variant */
  variant?: IndicatorVariant;
  /** Size */
  size?: ComponentSizeBasic;
  /** Accessible label for the delete button */
  deleteAriaLabel?: string;
  /** Additional class names */
  className?: string;
};

/**
 * Interactive token used for selection, filtering, or input.
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

import React, { ReactNode } from "react";
import classNames from "classnames";
import { ComponentSize } from "../../../types/tokens";
import "./interactiveArea.scss";

export type InteractiveAreaProps = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "title" | "description"
> & {
  /**
   * Area title
   */
  title?: ReactNode;
  /**
   * Area description
   */
  description?: ReactNode;
  /**
   * Icon to display
   */
  icon?: ReactNode;
  /**
   * Action elements (buttons, etc.)
   */
  actions?: ReactNode;
  /**
   * Border variant
   */
  variant?: "dashed" | "solid" | "none";
  /**
   * Background variant
   */
  bgVariant?: "default" | "transparent" | "muted";
  /**
   * Size variation
   */
  size?: ComponentSize;
  /**
   * Whether the area is currently in a dragging state (for dropzone)
   */
  isDragging?: boolean;
  /**
   * Whether the area is clickable
   */
  isClickable?: boolean;
  /**
   * Whether the area is disabled
   */
  disabled?: boolean;
};

/**
 * A base component for creating interactive surfaces like Dropzones, EmptyStates, etc.
 */
export const InteractiveArea = React.forwardRef<HTMLDivElement, InteractiveAreaProps>(
  (
    {
      title,
      description,
      icon,
      actions,
      variant = "dashed",
      bgVariant = "default",
      size = "md",
      isDragging = false,
      isClickable = false,
      disabled = false,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={classNames(
          "wim-interactive-area",
          `wim-interactive-area--${variant}`,
          `wim-interactive-area--${bgVariant}`,
          `wim-interactive-area--${size}`,
          isDragging && "wim-interactive-area--dragging",
          isClickable && !disabled && "wim-interactive-area--clickable",
          disabled && "wim-interactive-area--disabled",
          className,
        )}
        role={isClickable && !disabled ? "button" : undefined}
        tabIndex={isClickable && !disabled ? 0 : undefined}
        aria-disabled={disabled || undefined}
        onKeyDown={(e) => {
          if (isClickable && !disabled && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            e.currentTarget.click();
          }
          props.onKeyDown?.(e);
        }}
        {...props}
        onClick={(e) => {
          if (disabled) {
            e.preventDefault();
            return;
          }
          props.onClick?.(e);
        }}
      >
        <div className="wim-interactive-area__inner">
          {icon && <div className="wim-interactive-area__icon">{icon}</div>}
          {title && <div className="wim-interactive-area__title">{title}</div>}
          {description && (
            <div className="wim-interactive-area__description">{description}</div>
          )}
          {children && (
            <div className="wim-interactive-area__content">{children}</div>
          )}
          {actions && <div className="wim-interactive-area__actions">{actions}</div>}
        </div>
      </div>
    );
  },
);

InteractiveArea.displayName = "InteractiveArea";

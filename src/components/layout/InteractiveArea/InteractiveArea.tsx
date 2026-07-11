import React, { ReactNode } from "react";
import classNames from "classnames";
import { ComponentSizeBasic } from "../../../types/tokens";
import localStyles from "./interactive-area.module.scss";

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
  size?: ComponentSizeBasic;
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
  /**
   * Custom styles for internal parts
   */
  styles?: {
    inner?: string;
    icon?: string;
    title?: string;
    description?: string;
    content?: string;
    actions?: string;
  };
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
      styles: stylesProp,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={classNames("wim-interactive-area", 
          localStyles.root,
          localStyles[variant],
          localStyles[bgVariant],
          localStyles[size],
          isDragging && localStyles.dragging,
          isClickable && !disabled && localStyles.clickable,
          disabled && localStyles.disabled,
          className,
        )}
        data-variant={variant}
        data-bg-variant={bgVariant}
        data-size={size}
        data-disabled={disabled}
        data-dragging={isDragging}
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
        <div className={classNames(localStyles.inner, stylesProp?.inner)}>
          {icon && (
            <div className={classNames(localStyles.icon, stylesProp?.icon)}>
              {icon}
            </div>
          )}
          {title && (
            <div className={classNames(localStyles.title, stylesProp?.title)}>
              {title}
            </div>
          )}
          {description && (
            <div
              className={classNames(
                localStyles.description,
                stylesProp?.description,
              )}
            >
              {description}
            </div>
          )}
          {children && (
            <div className={classNames(localStyles.content, stylesProp?.content)}>
              {children}
            </div>
          )}
          {actions && (
            <div className={classNames(localStyles.actions, stylesProp?.actions)}>
              {actions}
            </div>
          )}
        </div>
      </div>
    );
  },
);

InteractiveArea.displayName = "InteractiveArea";

import React, { useState } from "react";
import classNames from "classnames";
import localStyles from "./speed-dial.module.scss";
import { FloatButton } from "../../form/FloatButton/FloatButton";
import { IconName } from "../../../icon";

export interface SpeedDialAction {
  icon: IconName;
  label: string;
  onClick?: () => void;
  className?: string;
  intent?: "default" | "danger" | "success";
}

export type SpeedDialProps = React.ComponentPropsWithoutRef<"div"> & {
  /** Actions to display when SpeedDial is open */
  actions: SpeedDialAction[];
  /** Icon name for the main button when closed */
  icon?: IconName;
  /** Icon name for the main button when open */
  activeIcon?: IconName;
  /** Direction in which actions expand */
  direction?: "up" | "down" | "left" | "right";
  /** Trigger mode to open the SpeedDial */
  trigger?: "hover" | "click";
  /** Controlled open state */
  open?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
};

/**
 * SpeedDial component displays a floating action button that expands to show multiple actions.
 * 
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export const SpeedDial = React.forwardRef<HTMLDivElement, SpeedDialProps>(
  (
    {
      actions,
      icon = "PlusIcon",
      activeIcon = "CloseIcon",
      direction = "up",
      trigger = "hover",
      open: controlledOpen,
      onOpenChange,
      className,
      ...props
    },
    ref
  ) => {
    const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
    const open = controlledOpen ?? uncontrolledOpen;

    const handleOpenChange = (nextOpen: boolean) => {
      setUncontrolledOpen(nextOpen);
      onOpenChange?.(nextOpen);
    };

    const handleMouseEnter = () => {
      if (trigger === "hover") handleOpenChange(true);
    };

    const handleMouseLeave = () => {
      if (trigger === "hover") handleOpenChange(false);
    };

    const handleClick = () => {
      if (trigger === "click") handleOpenChange(!open);
    };

    return (
      <div
        ref={ref}
        className={classNames("wim-speed-dial", 
          localStyles.root,
          localStyles[direction],
          open && localStyles.open,
          className
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <div className={localStyles.actions}>
          {actions.map((action, index) => (
            <div
              key={index}
              className={localStyles.actionWrapper}
              style={{
                transitionDelay: open ? `${index * 50}ms` : "0ms",
              }}
            >
              <FloatButton
                iconName={action.icon}
                label={action.label}
                size="sm"
                className={classNames(localStyles.action, action.className)}
                onClick={() => {
                  action.onClick?.();
                  if (trigger === "click") handleOpenChange(false);
                }}
                position="inline"
              />
            </div>
          ))}
        </div>
        <FloatButton
          iconName={open ? activeIcon : icon}
          onClick={handleClick}
          className={localStyles.trigger}
          position="inline"
          aria-expanded={open}
          aria-haspopup="true"
        />
      </div>
    );
  }
);

SpeedDial.displayName = "SpeedDial";

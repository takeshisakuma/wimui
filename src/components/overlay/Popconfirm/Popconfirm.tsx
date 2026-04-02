import React, { ReactNode } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
} from "../../overlay/Popover/Popover";
import { Button } from "../../form/Button/Button";
import { FeedbackIcon } from "../../_internal/FeedbackIcon";
import "./popconfirm.scss";

export type PopconfirmProps = {
  /**
   * The title of the confirmation box
   */
  title: ReactNode;
  /**
   * The description of the confirmation box
   */
  description?: ReactNode;
  /**
   * Callback when the user clicks the confirm button
   */
  onConfirm?: () => void;
  /**
   * Callback when the user clicks the cancel button
   */
  onCancel?: () => void;
  /**
   * Text of the confirm button
   */
  okText?: ReactNode;
  /**
   * Text of the cancel button
   */
  cancelText?: ReactNode;
  /**
   * Color role of the confirm button
   */
  okType?: "default" | "destructive" | "positive";
  /**
   * The target element which the Popconfirm will be attached to
   */
  children: ReactNode;
  /**
   * Customize the icon
   */
  icon?: ReactNode;
  /**
   * Whether to show the popconfirm
   */
  disabled?: boolean;
};

export const Popconfirm = ({
  title,
  description,
  onConfirm,
  onCancel,
  okText = "OK",
  cancelText = "Cancel",
  okType = "default",
  children,
  icon,
  disabled = false,
}: PopconfirmProps) => {
  const titleId = React.useId();
  const descriptionId = React.useId();

  if (disabled) {
    if (React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<{ disabled?: boolean }>, {
        disabled: true,
      });
    }
    return <>{children}</>;
  }

  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent
        className="wim-popconfirm-content"
        aria-labelledby={titleId}
        aria-describedby={description ? descriptionId : undefined}
      >
        <div className="wim-popconfirm-inner">
          <div className="wim-popconfirm-message">
            <span className="wim-popconfirm-icon">
              <FeedbackIcon
                intent="warning"
                icon={icon}
                size="sm"
                color="caution"
              />
            </span>
            <div id={titleId} className="wim-popconfirm-title">
              {title}
            </div>
          </div>
          {description && (
            <div id={descriptionId} className="wim-popconfirm-description">
              {description}
            </div>
          )}
          <div className="wim-popconfirm-actions">
            <PopoverClose asChild>
              <Button
                size="sm"
                onClick={onCancel}
                variant="ghost"
              >{cancelText}</Button>
            </PopoverClose>
            <PopoverClose asChild>
              <Button
                size="sm"
                onClick={onConfirm}
                variant="filled"
                intent={okType}
              >{okText}</Button>
            </PopoverClose>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

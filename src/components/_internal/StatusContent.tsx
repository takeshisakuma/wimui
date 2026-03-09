import React, { ReactNode } from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import "./statusContent.scss";

export type StatusContentProps = {
  /**
   * Status-based icon or custom icon
   */
  icon?: ReactNode;
  /**
   * Main title
   */
  title?: ReactNode;
  /**
   * Supporting description or subtitle
   */
  description?: ReactNode;
  /**
   * Action buttons or links
   */
  actions?: ReactNode;
  /**
   * Additional content children
   */
  children?: ReactNode;
  /**
   * Custom class name for wrapping div
   */
  className?: string;
  /**
   * Prefix for BEM classes
   */
  prefixCls?: string;
};

/**
 * Internal component to unify layout for Result and EmptyState
 */
export const StatusContent = ({
  icon,
  title,
  description,
  actions,
  children,
  className,
  prefixCls = "wim-status-content",
}: StatusContentProps) => {
  const { t } = useTranslation();

  const renderText = (text: ReactNode) => {
    return typeof text === "string" ? t(text) : text;
  };

  return (
    <div className={classNames(prefixCls, className)}>
      {icon && <div className={`${prefixCls}__icon`}>{icon}</div>}
      {title && (
        <div className={`${prefixCls}__title`}>{renderText(title)}</div>
      )}
      {description && (
        <div className={`${prefixCls}__description`}>
          {renderText(description)}
        </div>
      )}
      {children && <div className={`${prefixCls}__body`}>{children}</div>}
      {actions && <div className={`${prefixCls}__actions`}>{actions}</div>}
    </div>
  );
};

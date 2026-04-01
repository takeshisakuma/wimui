import React, { useState, useEffect, useCallback } from "react";
import classNames from "classnames";
import "./float-button.scss";
import { Icon } from "../../media/Icon/Icon";
import { ComponentSize } from "../../../types/tokens";

export interface FloatButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon name from the library */
  iconName?:
    | "CircleIcon"
    | "SquareIcon"
    | "LoadingIcon"
    | "ExternalLinkIcon"
    | "ArrowUpIcon"
    | string;
  /** Variant of the button */
  variant?: "default" | "primary";
  /** Shape of the button */
  shape?: "circle" | "square";
  /** Size of the button */
  size?: ComponentSize;
  /** Label text for extended FAB */
  label?: React.ReactNode;
  /** Whether to shrink the extended FAB (hide label) */
  shrink?: boolean;
  /** Position of the button */
  position?:
    | "bottom-right"
    | "bottom-left"
    | "bottom-center"
    | "top-right"
    | "top-left"
    | "static";
  /** Description for tooltip */
  description?: React.ReactNode;
  /** Badge content (number or dot) */
  badge?: number | boolean;
  /** If true, the button will scroll to the top of the page when clicked */
  backTop?: boolean;
  /** Visibility threshold for backTop (in pixels) */
  visibilityHeight?: number;
  /** Additional class names */
  className?: string;
  /** Style attribute */
  style?: React.CSSProperties;
  /** Aria label for accessibility */
  "aria-label"?: string;
}

export const FloatButton = ({
  iconName = "CircleIcon",
  variant = "default",
  shape = "circle",
  size = "md",
  label,
  shrink = false,
  position = "bottom-right",
  description,
  badge,
  backTop = false,
  visibilityHeight = 400,
  className,
  style,
  onClick,
  "aria-label": ariaLabel,
  ...props
}: FloatButtonProps) => {
  const [visible, setVisible] = useState(() => {
    if (!backTop) return true;
    if (typeof window !== "undefined") {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      return scrollTop > visibilityHeight;
    }
    return false;
  });

  const handleScroll = useCallback(() => {
    if (backTop) {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setVisible(scrollTop > visibilityHeight);
    }
  }, [backTop, visibilityHeight]);

  useEffect(() => {
    if (backTop) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [backTop, handleScroll]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (backTop) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    onClick?.(e);
  };

  if (!visible && backTop) return null;

  return (
    <button
      type="button"
      className={classNames(
        "wim-float-button",
        `wim-float-button--${variant}`,
        `wim-float-button--${shape}`,
        `wim-float-button--${size}`,
        `wim-float-button--${position}`,
        !!label && "wim-float-button--extended",
        !!shrink && "wim-float-button--shrink",
        className,
      )}
      style={style}
      onClick={handleClick}
      title={typeof description === "string" ? description : undefined}
      aria-label={ariaLabel || (typeof label === "string" ? label : iconName)}
      {...props}
    >
      <span className="wim-float-button__inner">
        <Icon
          name={(backTop ? "ChevronDownIcon" : iconName) as React.ComponentProps<typeof Icon>["name"]}
          size={size}
          className={classNames(backTop && "wim-float-button__icon--backtop")}
        />
        {label && (
          <span className="wim-float-button__label-wrapper">
            <span className="wim-float-button__label">{label}</span>
          </span>
        )}
        {badge && (
          <span
            className={classNames(
              badge === true
                ? "wim-float-button__badge--dot"
                : "wim-float-button__badge",
            )}
          >
            {typeof badge === "number" ? badge : ""}
          </span>
        )}
      </span>
      {description && (
        <span className="wim-float-button__description">{description}</span>
      )}
    </button>
  );
};

export default FloatButton;

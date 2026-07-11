import React from "react";
import classNames from "classnames";
import { Icon } from "../../media/Icon/Icon";
import { IndicatorBase } from "../../_internal/IndicatorBase";
import { ComponentSizeBasic, IndicatorIntent, IndicatorVariant } from "../../../types/tokens";
import styles from "./tag.module.scss";
import { CloseIcon } from "@/icon";

export type TagProps = React.ComponentPropsWithoutRef<"span"> & {
  /**
   * If true, the tag will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
  /** Content to display */
  children?: React.ReactNode;
  /** Content to display (alternative to children) */
  content?: React.ReactNode;
  /** Intent (semantic state) */
  intent?: IndicatorIntent;
  /** Visual style variant */
  variant?: IndicatorVariant;
  /** Size */
  size?: ComponentSizeBasic;
  /** Icon */
  icon?: React.ReactNode;
  /** Delete event. When provided, a × button is shown. */
  onDelete?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Whether the tag is disabled */
  disabled?: boolean;
  /** Whether to enable the interactive state */
  interactive?: boolean;
};

/**
 * Component used as a label for categorization or attributes.
 * Providing onDelete makes it a removable tag.
 */
export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ children, content, icon, onDelete, disabled, interactive = false, ...props }, ref) => {
    return (
      <IndicatorBase
        ref={ref}
        styles={styles}
        icon={icon}
        content={content}
        className={classNames("wim-tag", props.className, { [styles.disabled]: disabled })}
        interactive={interactive}
        {...props}
      >
        {children}
        {onDelete && (
          <button
            type="button"
            className={styles.closeButton}
            onClick={(e) => {
              e.stopPropagation();
              onDelete(e);
            }}
            aria-label="Close"
          >
            <Icon component={CloseIcon} size="sm" />
          </button>
        )}
      </IndicatorBase>
    );
  },
);

Tag.displayName = "Tag";

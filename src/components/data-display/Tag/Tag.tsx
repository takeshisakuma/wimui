import React from "react";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { Icon } from "../../media/Icon/Icon";
import { IndicatorBase } from "../../_internal/IndicatorBase";
import { ComponentSizeBasic, IndicatorIntent, IndicatorVariant } from "../../../types/tokens";
import styles from "./tag.module.scss";
import { CloseIcon } from "@/icon";

export type TagProps = React.ComponentPropsWithoutRef<"span"> & {
  /**
   * If true, the tag will be rendered as its child, merging its props onto that child.
   * Cannot be combined with `onDelete` — the delete control is a second element, and
   * `asChild` requires a single React element child (T99).
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
  /** Delete event. When provided, a × button is shown. Incompatible with `asChild`. */
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
  (
    {
      asChild = false,
      children,
      content,
      icon,
      onDelete,
      disabled,
      interactive = false,
      className,
      ...props
    },
    ref,
  ) => {
    const { t } = useWimTranslation("common");

    if (asChild && onDelete) {
      throw new Error(
        "[wimui] Tag: `asChild` cannot be combined with `onDelete`. " +
          "Use a removable Tag without asChild, or put the delete control on the slotted child yourself.",
      );
    }

    // IndicatorBase の Slottable は単一要素だけを受け取る。
    // 以前は `{children}{onDelete && <button/>}` を渡していたため、onDelete が無くても
    // 子が配列になり asChild が必ず落ちていた（T99）。
    const label = content ?? children;

    return (
      <IndicatorBase
        ref={ref}
        asChild={asChild}
        styles={styles}
        icon={icon}
        className={classNames("wim-tag", className, { [styles.disabled]: disabled })}
        interactive={interactive}
        {...props}
      >
        {onDelete ? (
          <>
            {label}
            <button
              type="button"
              className={styles.closeButton}
              onClick={(e) => {
                e.stopPropagation();
                onDelete(e);
              }}
              aria-label={t("a11y.close")}
            >
              <Icon component={CloseIcon} size="sm" />
            </button>
          </>
        ) : (
          label
        )}
      </IndicatorBase>
    );
  },
);

Tag.displayName = "Tag";

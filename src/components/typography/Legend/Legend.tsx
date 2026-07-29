import React from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { FieldLabelContent } from "../../_internal/FieldLabelContent";
import styles from "./legend.module.scss";

// FieldLabelContentProps を継承せず並べているのは、`label` だけ optional に
// したいため（継承のうえで必須→任意へ緩めることは TS が許さず、`Omit<>` で
// 包むと docgen が解決できずに props 表から 5 件消える。実測で確認）。
export interface LegendProps extends React.HTMLAttributes<HTMLLegendElement> {
  /**
   * The group name. Optional — a Legend can also be written with children only
   * (`<Legend>Group title</Legend>`), which is what you want when the group name
   * is a heading: `<legend>` may contain heading content directly, while the
   * `label` slot wraps its value in a `<span>` (phrasing content, so a heading
   * inside it is invalid).
   */
  label?: React.ReactNode;
  /**
   * Whether the group is mandatory. If true, displays a required badge.
   */
  required?: boolean;
  /**
   * Custom text or element for the required badge.
   * Defaults to the localized `form.required` string.
   */
  requiredLabel?: React.ReactNode;
  /**
   * Whether to display an optional badge when `required` is false.
   * @default false
   */
  showOptional?: boolean;
  /**
   * Custom text or element for the optional badge.
   * Defaults to the localized `form.optional` string.
   */
  optionalLabel?: React.ReactNode;
  /**
   * Additional CSS class name for the container.
   */
  className?: string;
  /**
   * If true, the Legend will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
}

export const Legend = React.forwardRef<HTMLLegendElement, LegendProps>(
  (
    {
      asChild = false,
      label,
      required,
      requiredLabel,
      showOptional,
      optionalLabel,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : "legend";
    // ラベルもバッジも無いなら何も挟まない。空の <div><span></span></div> が
    // 残ると children が block で分断され、見出しを直接置く用途で邪魔になる。
    const hasLabelContent =
      label !== undefined && label !== null && label !== false
        ? true
        : Boolean(required || showOptional);

    return (
      <Component
        className={classNames("wim-legend", styles.root, className)}
        ref={ref}
        {...props}
      >
        {hasLabelContent && (
          <FieldLabelContent
            label={label}
            required={required}
            requiredLabel={requiredLabel}
            showOptional={showOptional}
            optionalLabel={optionalLabel}
          />
        )}
        <Slottable>{children}</Slottable>
      </Component>
    );
  },
);

Legend.displayName = "Legend";

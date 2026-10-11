import React from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { Label } from "../../typography/Label/Label";
import { FieldError } from "../../form/FieldError/FieldError";
import localStyles from "./field-template.module.scss";

export interface FieldTemplateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether to render as a child element. */
  asChild?: boolean;
  /** Label text of the field */
  label?: React.ReactNode;
  /** Error message */
  error?: string;
  /** Main content of the field */
  children: React.ReactNode;
  /** Whether to show the required indicator */
  required?: boolean;
  /**
   * Layout direction of label and field
   * @default "vertical"
   */
  layout?: "vertical" | "horizontal";
  /** ID of the label element for accessibility */
  labelId?: string;
  /** ID of the element the label points to */
  htmlFor?: string;
  /** ID of the error message element */
  errorId?: string;
  /**
   * Custom styles for internal parts
   */
  styles?: {
    root?: string;
    labelWrapper?: string;
    label?: string;
    content?: string;
    error?: string;
  };
}

/**
 * Internal component managing the common layout of form components (label, error display, placement).
 */
export const FieldTemplate = React.forwardRef<HTMLDivElement, FieldTemplateProps>(
  ({ asChild = false, label, error, children, required, layout = "vertical", labelId, htmlFor, errorId, className, styles: stylesProp, ...props }, ref) => {
    const Component = asChild ? Slot : "div";

    // ラベルと、中身の枠（content）。`field` には、入力欄にあたるものが入る。
    const renderBody = (field: React.ReactNode) => (
      <>
        {label && (
          <div className={classNames(localStyles.labelWrapper, stylesProp?.labelWrapper)}>
            <Label label={label} required={required} id={labelId} htmlFor={htmlFor} className={classNames(localStyles.label, stylesProp?.label)} />
          </div>
        )}

        <div className={classNames(localStyles.content, stylesProp?.content)}>
          {field}
          {error && <FieldError id={errorId} content={error} className={classNames(localStyles.danger, stylesProp?.error)} />}
        </div>
      </>
    );

    return (
      <Component
        className={classNames("wim-field-template", localStyles.root, localStyles[layout], className, stylesProp?.root)}
        ref={ref}
        {...props}
      >
        {/* asChild のときは、利用者の要素を根にして、その子（入力欄）を中身の枠に入れる（T337）。
            以前は `Slottable` を content の中に置いていた ── Slot は直下の `Slottable` しか探さないので、
            ラベルがあると子が 2 つになって例外になり、無いと content の `div` が根になっていた。 */}
        {asChild ? (
          <Slottable child={children}>{(field) => renderBody(field)}</Slottable>
        ) : (
          renderBody(children)
        )}
      </Component>
    );
  },
);

FieldTemplate.displayName = "FieldTemplate";

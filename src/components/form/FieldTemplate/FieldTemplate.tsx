import React from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { Label } from "../../typography/Label/Label";
import { FieldError } from "../../form/FieldError/FieldError";
import localStyles from "./field-template.module.scss";

export interface FieldTemplateProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
  /**
   * 繝輔ぅ繝ｼ繝ｫ繝峨・繝ｩ繝吶Ν繝・く繧ｹ繝・
   */
  label?: React.ReactNode;
  /**
   * 繧ｨ繝ｩ繝ｼ繝｡繝・そ繝ｼ繧ｸ
   */
  error?: string;
  /**
   * 繝輔ぅ繝ｼ繝ｫ繝峨・繝｡繧､繝ｳ繧ｳ繝ｳ繝・Φ繝・
   */
  children: React.ReactNode;
  /**
   * 蠢・郁｡ｨ遉ｺ縺ｫ縺吶ｋ縺九←縺・°
   */
  required?: boolean;
  /**
   * 繝ｬ繧､繧｢繧ｦ繝域婿蜷・
   * @default "vertical"
   */
  layout?: "vertical" | "horizontal";
  /**
   * 繧｢繧ｯ繧ｻ繧ｷ繝薙Μ繝・ぅ逕ｨ縺ｮ繝ｩ繝吶ΝID
   */
  labelId?: string;
  /**
   * 繧ｨ繝ｩ繝ｼ陦ｨ遉ｺ逕ｨ縺ｮID
   */
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
 * 繝輔か繝ｼ繝邉ｻ繧ｳ繝ｳ繝昴・繝阪Φ繝医・蜈ｱ騾壹Ξ繧､繧｢繧ｦ繝茨ｼ医Λ繝吶Ν縲√お繝ｩ繝ｼ陦ｨ遉ｺ縲・・鄂ｮ・峨ｒ邂｡逅・☆繧句・驛ｨ繧ｳ繝ｳ繝昴・繝阪Φ繝医・
 */
export const FieldTemplate = React.forwardRef<HTMLDivElement, FieldTemplateProps>(
  ({ asChild = false, label, error, children, required, layout = "vertical", labelId, errorId, className, styles: stylesProp, ...props }, ref) => {
    const Component = asChild ? Slot : "div";

    return (
      <Component
        className={classNames(localStyles.root, localStyles[layout], className, stylesProp?.root)}
        ref={ref}
        {...props}
      >
        {label && (
          <div className={classNames(localStyles.labelWrapper, stylesProp?.labelWrapper)}>
            <Label label={label} required={required} id={labelId} className={classNames(localStyles.label, stylesProp?.label)} />
          </div>
        )}
        <div className={classNames(localStyles.content, stylesProp?.content)}>
          <Slottable>{children}</Slottable>
          {error && <FieldError id={errorId} content={error} className={classNames(localStyles.error, stylesProp?.error)} />}
        </div>
      </Component>
    );
  },
);

FieldTemplate.displayName = "FieldTemplate";


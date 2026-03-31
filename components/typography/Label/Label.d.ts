import { default as React } from '../../../../node_modules/react';
import { FieldLabelContentProps } from '../../_internal/FieldLabelContent';
type LabelProps = React.ComponentPropsWithoutRef<"label"> & FieldLabelContentProps;
/**
 * フォーム項目のラベルを表示するコンポーネント。
 */
export declare const Label: ({ label, required, showOptional, className, children, htmlFor, ...props }: LabelProps) => import("react/jsx-runtime").JSX.Element;
export {};

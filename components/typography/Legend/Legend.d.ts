import { default as React } from '../../../../node_modules/react';
import { FieldLabelContentProps } from '../../_internal/FieldLabelContent';
type LegendProps = React.ComponentPropsWithoutRef<"legend"> & FieldLabelContentProps;
/**
 * Fieldset のタイトルを表示するコンポーネント。
 */
export declare const Legend: ({ label, required, showOptional, className, children, ...props }: LegendProps) => import("react/jsx-runtime").JSX.Element;
export {};

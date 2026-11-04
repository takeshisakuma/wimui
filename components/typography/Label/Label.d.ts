import { default as React } from '../../../../node_modules/react';
import { FieldLabelContentProps } from '../../_internal/FieldLabelContent';
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>, FieldLabelContentProps {
    /**
     * If true, the Label will be rendered as its child, merging its props onto that child.
     */
    asChild?: boolean;
}
export declare const Label: React.ForwardRefExoticComponent<LabelProps & React.RefAttributes<HTMLLabelElement>>;

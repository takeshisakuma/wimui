import { default as React } from '../../../node_modules/react';
export type FieldLabelContentProps = {
    label: React.ReactNode;
    required?: boolean;
    requiredLabel?: React.ReactNode;
    showOptional?: boolean;
    optionalLabel?: React.ReactNode;
    className?: string;
};
export declare const FieldLabelContent: ({ label, required, requiredLabel, showOptional, optionalLabel, className, }: FieldLabelContentProps) => import("react/jsx-runtime").JSX.Element;

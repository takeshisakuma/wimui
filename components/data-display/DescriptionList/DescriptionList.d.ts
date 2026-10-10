import { default as React } from '../../../../node_modules/react';
import { ComponentSizeBasic } from '../../../types/tokens';
type DescriptionListProps = {
    /** DescriptionListItem elements */
    children: React.ReactNode;
    /** Additional class names */
    className?: string;
    /** Layout of terms and descriptions */
    layout?: "horizontal" | "vertical" | "compact";
    /** Size of the text */
    size?: ComponentSizeBasic;
    /** Whether to show borders (alias of bordered) */
    border?: boolean;
    /** Whether to show borders */
    bordered?: boolean;
};
export declare const DescriptionList: ({ children, className, layout, size, border, bordered, ...props }: DescriptionListProps) => React.JSX.Element;
type DescriptionListItemProps = {
    /** A DescriptionListTerm and its DescriptionListDetails */
    children: React.ReactNode;
    /** Additional class names */
    className?: string;
};
export declare const DescriptionListItem: ({ children, className, ...props }: DescriptionListItemProps) => React.JSX.Element;
type DescriptionListTermProps = {
    children: React.ReactNode;
    className?: string;
};
export declare const DescriptionListTerm: ({ children, className, ...props }: DescriptionListTermProps) => React.JSX.Element;
type DescriptionListDetailsProps = {
    children: React.ReactNode;
    className?: string;
};
export declare const DescriptionListDetails: ({ children, className, ...props }: DescriptionListDetailsProps) => React.JSX.Element;
export {};

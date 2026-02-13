import { default as React } from '../../../node_modules/react';
type DescriptionListProps = {
    children: React.ReactNode;
    className?: string;
    layout?: "horizontal" | "vertical" | "compact";
    size?: "small" | "medium" | "large";
    border?: boolean;
};
export declare const DescriptionList: ({ children, className, layout, size, border, ...props }: DescriptionListProps) => import("react/jsx-runtime").JSX.Element;
type DescriptionListItemProps = {
    children: React.ReactNode;
    className?: string;
};
export declare const DescriptionListItem: ({ children, className, ...props }: DescriptionListItemProps) => import("react/jsx-runtime").JSX.Element;
type DescriptionListTermProps = {
    children: React.ReactNode;
    className?: string;
};
export declare const DescriptionListTerm: ({ children, className, ...props }: DescriptionListTermProps) => import("react/jsx-runtime").JSX.Element;
type DescriptionListDetailsProps = {
    children: React.ReactNode;
    className?: string;
};
export declare const DescriptionListDetails: ({ children, className, ...props }: DescriptionListDetailsProps) => import("react/jsx-runtime").JSX.Element;
export {};

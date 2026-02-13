import { default as React } from '../../../node_modules/react';
import { Icon } from '../Icon/Icon';
type BreadcrumbItem = {
    label: string;
    href?: string;
    iconName?: React.ComponentProps<typeof Icon>["name"];
};
type BreadcrumbProps = {
    items: BreadcrumbItem[];
    separator?: React.ReactNode;
    size?: "small" | "medium" | "large";
    className?: string;
};
export declare const Breadcrumb: ({ items, separator, size, className, }: BreadcrumbProps) => import("react/jsx-runtime").JSX.Element;
export {};

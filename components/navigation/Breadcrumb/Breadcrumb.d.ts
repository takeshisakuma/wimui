import { default as React } from '../../../../node_modules/react';
import { Icon } from '../../media/Icon/Icon';
import { ComponentSize } from '../../../types/tokens';
type BreadcrumbItem = {
    label: React.ReactNode;
    href?: string;
    iconName?: React.ComponentProps<typeof Icon>["name"];
};
type BreadcrumbProps = {
    items: BreadcrumbItem[];
    separator?: React.ReactNode;
    size?: ComponentSize;
    className?: string;
    ariaLabel?: string;
};
export declare const Breadcrumb: ({ items, separator, size, className, ariaLabel, }: BreadcrumbProps) => import("react/jsx-runtime").JSX.Element;
export {};

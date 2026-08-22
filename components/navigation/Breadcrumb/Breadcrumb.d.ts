import { default as React } from '../../../../node_modules/react';
import { Icon } from '../../media/Icon/Icon';
import { ComponentSizeBasic } from '../../../types/tokens';
type BreadcrumbItem = {
    label: React.ReactNode;
    href?: string;
    iconName?: React.ComponentProps<typeof Icon>["name"];
};
type BreadcrumbProps = {
    /**
     * Items to display, from the root to the current page.
     */
    items: BreadcrumbItem[];
    /**
     * Separator displayed between items. Defaults to a chevron icon.
     */
    separator?: React.ReactNode;
    /**
     * Size of the breadcrumb.
     * @default "md"
     */
    size?: ComponentSizeBasic;
    /**
     * Additional CSS class name for the container.
     */
    className?: string;
    /**
     * Accessible label of the navigation landmark. Defaults to a localized "breadcrumb" label.
     */
    ariaLabel?: string;
    /**
     * If true, the breadcrumb will be rendered as its child, merging its props onto that child.
     */
    asChild?: boolean;
};
export declare const Breadcrumb: React.ForwardRefExoticComponent<BreadcrumbProps & React.RefAttributes<HTMLElement>>;
export {};

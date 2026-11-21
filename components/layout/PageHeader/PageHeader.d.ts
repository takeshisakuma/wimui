import { default as React } from '../../../../node_modules/react';
export type PageHeaderProps = Omit<React.ComponentPropsWithoutRef<"div">, "title"> & {
    /**
     * The page title. Always rendered as the page's `h1` at one fixed size; a
     * long title wraps instead of being cut.
     */
    title: React.ReactNode;
    /** Breadcrumb shown above the title (usually a `Breadcrumb`). */
    breadcrumb?: React.ReactNode;
    /** A short status next to the title, such as a `Badge`. */
    status?: React.ReactNode;
    /** One or two lines under the title that say what is on the page. */
    description?: React.ReactNode;
    /**
     * Page actions, such as `Button`s. They sit to the right of the title and
     * move to their own line under it when the header is too narrow.
     */
    actions?: React.ReactNode;
    /** Navigation between the page's views, such as `TabNavigation`, at the bottom. */
    tabs?: React.ReactNode;
};
/**
 * PageHeader is the head of a page: breadcrumb, title, status, description,
 * actions and tabs in a fixed order and spacing. Use one per page.
 *
 * Composition Contract:
 * - Managed by: App consumption (one per page, inside the main region)
 * - Landmark: None. The root is a `div`, not `header`, so it never becomes a
 *   second banner next to the app's `Header`
 * - Scroll lock: No
 */
export declare const PageHeader: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref">, "title"> & {
    /**
     * The page title. Always rendered as the page's `h1` at one fixed size; a
     * long title wraps instead of being cut.
     */
    title: React.ReactNode;
    /** Breadcrumb shown above the title (usually a `Breadcrumb`). */
    breadcrumb?: React.ReactNode;
    /** A short status next to the title, such as a `Badge`. */
    status?: React.ReactNode;
    /** One or two lines under the title that say what is on the page. */
    description?: React.ReactNode;
    /**
     * Page actions, such as `Button`s. They sit to the right of the title and
     * move to their own line under it when the header is too narrow.
     */
    actions?: React.ReactNode;
    /** Navigation between the page's views, such as `TabNavigation`, at the bottom. */
    tabs?: React.ReactNode;
} & React.RefAttributes<HTMLDivElement>>;

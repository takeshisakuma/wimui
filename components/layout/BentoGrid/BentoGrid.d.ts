import { default as React } from '../../../../node_modules/react';
type BentoGridProps = React.ComponentPropsWithoutRef<"div"> & {
    /** Grid items (typically BentoGrid.Item elements) */
    children?: React.ReactNode;
    /** Fixed height of each grid row (`grid-auto-rows`). Any CSS length; defaults to `18rem`. Lower it when tiles hold compact content so they don't read as mostly-empty panels. */
    rowHeight?: string;
};
export declare const BentoGrid: {
    ({ className, children, rowHeight, style, ...props }: BentoGridProps): React.JSX.Element;
    displayName: string;
};
export type BentoGridItemProps = React.ComponentPropsWithoutRef<"div"> & {
    title?: React.ReactNode;
    description?: React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
};
export declare const BentoGridItem: {
    ({ className, title, description, header, icon, ...props }: BentoGridItemProps): React.JSX.Element;
    displayName: string;
};
export {};

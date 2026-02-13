import { default as React } from '../../../node_modules/react';
type BentoGridProps = React.ComponentPropsWithoutRef<"div"> & {
    children?: React.ReactNode;
};
export declare const BentoGrid: {
    ({ className, children, ...props }: BentoGridProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export type BentoGridItemProps = React.ComponentPropsWithoutRef<"div"> & {
    title?: React.ReactNode;
    description?: React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
};
export declare const BentoGridItem: {
    ({ className, title, description, header, icon, ...props }: BentoGridItemProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};

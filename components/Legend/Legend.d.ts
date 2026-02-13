import { default as React } from '../../../node_modules/react';
type LegendProps = React.ComponentPropsWithoutRef<"legend"> & {
    children: React.ReactNode;
    className?: string;
};
/**
 * Fieldset のタイトルを表示するコンポーネント。
 */
export declare const Legend: ({ children, className, ...props }: LegendProps) => import("react/jsx-runtime").JSX.Element;
export {};

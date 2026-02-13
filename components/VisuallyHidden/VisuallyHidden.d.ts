import { default as React } from '../../../node_modules/react';
export type VisuallyHiddenProps = React.ComponentPropsWithoutRef<"span"> & {
    /**
     * 表示されないが、スクリーンリーダーには読み上げられるコンテンツ。
     */
    children: React.ReactNode;
};
/**
 * 視覚的には非表示にしつつ、スクリーンリーダーなどのアシスティブテクノロジーにはコンテンツを維持するためのアクセシビリティ用コンポーネント。
 */
export declare const VisuallyHidden: ({ children, className, ...props }: VisuallyHiddenProps) => import("react/jsx-runtime").JSX.Element;

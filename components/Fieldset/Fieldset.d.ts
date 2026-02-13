import { default as React } from '../../../node_modules/react';
type FieldsetProps = React.ComponentPropsWithoutRef<"fieldset"> & {
    children: React.ReactNode;
    disabled?: boolean;
    variant?: "default" | "full-width";
    className?: string;
};
/**
 * 関連するフォーム要素をグループ化するコンポーネント。
 */
export declare const Fieldset: ({ children, disabled, variant, className, ...props }: FieldsetProps) => import("react/jsx-runtime").JSX.Element;
export {};

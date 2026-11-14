import { default as React } from '../../../../node_modules/react';
type InputGroupProps = {
    /** Inputs, buttons, and add-ons to combine into one unit */
    children: React.ReactNode;
    /** Whether to take full width of parent */
    fullWidth?: boolean;
    /** Additional class names */
    className?: string;
};
/**
 * Component that combines multiple inputs, buttons, and text into a single unit.
 */
export declare const InputGroup: ({ children, fullWidth, className, }: InputGroupProps) => React.JSX.Element;
type InputGroupTextProps = {
    children: React.ReactNode;
    className?: string;
};
/**
 * InputGroup内でテキストやアイコンを表示するためのアドオンコンポーネント。
 */
export declare const InputGroupText: ({ children, className, }: InputGroupTextProps) => React.JSX.Element;
export {};

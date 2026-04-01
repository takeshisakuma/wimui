import { ComponentSize } from '../../../types/tokens';
type CopyButtonProps = {
    value: string;
    size?: ComponentSize;
    className?: string;
    "aria-label"?: string;
    copyLabel?: string;
    copiedLabel?: string;
};
export declare const CopyButton: ({ value, size, className, "aria-label": ariaLabel, copyLabel, copiedLabel, }: CopyButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};

import { default as React } from '../../../node_modules/react';
export type SignaturePadProps = {
    /** Width of the canvas */
    width?: number;
    /** Height of the canvas */
    height?: number;
    /** Color of the pen */
    penColor?: string;
    /** Width of the pen stroke */
    penWidth?: number;
    /** Callback when signature changes or is cleared */
    onChange?: (dataUrl: string | null) => void;
    /** Custom label for the clear button */
    clearLabel?: string;
    /** Whether the component is disabled */
    disabled?: boolean;
    /** CSS class name */
    className?: string;
    /** Inline styles */
    style?: React.CSSProperties;
};
/**
 * マウスやタッチ操作で手書きの署名を入力するためのコンポーネント。
 */
export declare const SignaturePad: ({ width, height, penColor, penWidth, onChange, clearLabel, disabled, className, style, }: SignaturePadProps) => import("react/jsx-runtime").JSX.Element;

import { default as React } from '../../../../node_modules/react';
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
    clearLabel?: React.ReactNode;
    /** Whether the component is disabled */
    disabled?: boolean;
    /** CSS class name */
    className?: string;
    /** Inline styles */
    style?: React.CSSProperties;
    /** Field label */
    label?: React.ReactNode;
    /** Error message */
    error?: string;
    /** Whether to show the required indicator */
    required?: boolean;
    /** Layout direction of label and field */
    layout?: "vertical" | "horizontal";
    /** Aria label for the canvas */
    canvasAriaLabel?: string;
    /** Accessible name for the canvas when no visible `label` is provided. Takes precedence over `canvasAriaLabel`. */
    "aria-label"?: string;
    /** ID of the element that labels the canvas when no visible `label` is provided. */
    "aria-labelledby"?: string;
};
/**
 * Component for entering a handwritten signature with mouse or touch.
 */
export declare const SignaturePad: ({ width, height, penColor, penWidth, onChange, clearLabel, disabled, className, style, label, error, required, layout, canvasAriaLabel, "aria-label": ariaLabelAttr, "aria-labelledby": ariaLabelledBy, }: SignaturePadProps) => React.JSX.Element;

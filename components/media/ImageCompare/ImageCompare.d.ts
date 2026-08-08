import { default as React } from '../../../../node_modules/react';
import { MediaRadius } from '../../../types/tokens';
/** Labels for internationalization. */
export type ImageCompareLabels = {
    /** Accessible label for the drag handle */
    handleAriaLabel?: string;
};
export interface ImageCompareProps extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange"> {
    /** Source URL of the "before" image (revealed on the leading side) */
    before: string;
    /** Source URL of the "after" image (revealed on the trailing side) */
    after: string;
    /** Alternative text for the before image */
    beforeAlt?: string;
    /** Alternative text for the after image */
    afterAlt?: string;
    /** Badge label overlaid on the before side */
    beforeLabel?: React.ReactNode;
    /** Badge label overlaid on the after side */
    afterLabel?: React.ReactNode;
    /** Initial divider position as a percentage 0–100 (uncontrolled) */
    defaultPosition?: number;
    /** Divider position as a percentage 0–100 (controlled) */
    position?: number;
    /** Callback when the divider position changes */
    onPositionChange?: (position: number) => void;
    /** Direction the divider slides along */
    orientation?: "horizontal" | "vertical";
    /** Width of the component */
    width?: string | number;
    /** Height of the component */
    height?: string | number;
    /** Corner radius size */
    radius?: MediaRadius;
    /** Labels for internationalization */
    labels?: ImageCompareLabels;
    /** Additional class names */
    className?: string;
}
/**
 * ImageCompare overlays two images and reveals them with a draggable divider —
 * a before/after slider for comparing edits, restorations, or AI-generated
 * results against their source.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export declare const ImageCompare: React.ForwardRefExoticComponent<ImageCompareProps & React.RefAttributes<HTMLDivElement>>;

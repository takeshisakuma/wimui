import { default as React } from '../../../../node_modules/react';
export interface ImageCropperProps extends React.ComponentPropsWithoutRef<"div"> {
    /** URL or data URL of the image to crop */
    src?: string;
    /** Aspect ratio (width / height); 1 produces a square */
    aspectRatio?: number;
    /** Whether to display a circular crop area (for profile images) */
    circular?: boolean;
    /** Callback when the crop result is finalized */
    onCrop?: (dataUrl: string) => void;
    /** Whether to show the rotation button */
    showRotation?: boolean;
    /** Whether to show the zoom slider */
    showZoom?: boolean;
    /** Whether to show the apply button */
    showApplyButton?: boolean;
    /** Label of the apply button */
    applyLabel?: string;
    /** Callback when the crop is applied (after confirming in the dialog) */
    onApply?: (dataUrl: string) => void;
}
/**
 * Component for cropping and rotating an image.
 * Suitable for setting user profile images.
 */
export declare const ImageCropper: React.ForwardRefExoticComponent<ImageCropperProps & React.RefAttributes<HTMLDivElement>>;

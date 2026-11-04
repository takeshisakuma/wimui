import { default as React } from '../../../../node_modules/react';
import { ImageCropDetail, ImageCropOutputType } from './cropImage';
export type { ImageCropDetail, ImageCropOutputType };
export interface ImageCropperProps extends React.ComponentPropsWithoutRef<"div"> {
    /** URL or data URL of the image to crop */
    src?: string;
    /** Aspect ratio (width / height); 1 produces a square */
    aspectRatio?: number;
    /** Whether to display a circular crop area (for profile images) */
    circular?: boolean;
    /**
     * Called with the cropped image as a data URL once the crop is confirmed. The second argument
     * describes the crop (offset, zoom, rotation, frame and output size) so it can be redone elsewhere.
     */
    onCrop?: (dataUrl: string, detail: ImageCropDetail) => void;
    /** Whether to show the rotation button */
    showRotation?: boolean;
    /** Whether to show the zoom slider */
    showZoom?: boolean;
    /** Whether to show the apply button */
    showApplyButton?: boolean;
    /** Label of the apply button */
    applyLabel?: string;
    /** Called with the cropped image and the crop detail when the crop is applied (after confirming in the dialog) */
    onApply?: (dataUrl: string, detail: ImageCropDetail) => void;
    /**
     * Called instead of onCrop and onApply when the image cannot be produced, with the crop detail.
     * The usual cause is an image from another origin drawn without CORS approval: the browser then
     * refuses to read the canvas. Set crossOrigin and serve the image with CORS headers, or crop on
     * the server from the detail.
     */
    onCropError?: (error: Error, detail: ImageCropDetail) => void;
    /**
     * Upper bound, in px, for the longer side of the output image. The crop is taken at the
     * resolution of the source image; without a bound a large photo produces a large data URL.
     */
    maxOutputSize?: number;
    /**
     * Image format of the output. "image/png" keeps transparency where the image does not cover the frame.
     * @default "image/png"
     */
    outputType?: ImageCropOutputType;
    /**
     * Quality from 0 to 1 for "image/jpeg" and "image/webp". Ignored for "image/png".
     * @default 0.92
     */
    outputQuality?: number;
    /**
     * CORS mode used to load the image. Needed to crop an image served from another origin;
     * the server must send matching CORS headers or the image will not load at all.
     */
    crossOrigin?: "anonymous" | "use-credentials";
}
/**
 * Component for cropping and rotating an image.
 * Suitable for setting user profile images.
 */
export declare const ImageCropper: React.ForwardRefExoticComponent<ImageCropperProps & React.RefAttributes<HTMLDivElement>>;

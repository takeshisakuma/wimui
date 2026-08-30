import { default as React } from '../../../../node_modules/react';
export type Breakpoints = {
    base?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
};
export type CarouselLabels = {
    slideLabel?: (number: number) => string;
    prevSlide?: string;
    nextSlide?: string;
    goToSlide?: (number: number) => string;
};
export type CarouselProps = {
    /** Content of the carousel */
    children?: React.ReactNode;
    /** Whether to auto-play */
    autoPlay?: boolean;
    /** Auto-play interval (in milliseconds) */
    interval?: number;
    /** Whether to show the indicators */
    showIndicators?: boolean;
    /** Whether to show the previous/next buttons */
    showControls?: boolean;
    /** Whether to loop infinitely (seamless transitions) */
    loop?: boolean;
    /** Number of slides to show at once. A number or an object per breakpoint. */
    slidesToShow?: number | Breakpoints;
    /** Aspect ratio (e.g. '16/9', '4/3', '1/1'). */
    aspectRatio?: string;
    /** How the image fits. Effective when aspectRatio is set. (default: 'cover') */
    objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
    /** Labels for manual translation. */
    labels?: CarouselLabels;
    /** Additional class names */
    className?: string;
    /**
     * Whether to use the Radix Slot pattern
     */
    asChild?: boolean;
};
/**
 * `Carousel` は複数のコンテンツをスライドさせて表示するコンポーネントです。
 */
export declare const Carousel: React.ForwardRefExoticComponent<CarouselProps & React.RefAttributes<HTMLDivElement>>;

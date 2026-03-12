import { default as React } from '../../../node_modules/react';
export type IndicatorOrientation = "horizontal" | "vertical";
export interface UseIndicatorOptions {
    /** The CSS selector for the active element (e.g. ".active") */
    activeSelector: string;
    /** Orientation of the indicator */
    orientation?: IndicatorOrientation;
    /** Optional variant indicator to trigger re-calculation */
    variant?: string;
    /** Extra dependence for re-calculating */
    dependence?: any;
}
/**
 * A hook to manage the position and size of a sliding indicator (slider)
 * that follows an active element within a container.
 */
export declare const useIndicator: ({ activeSelector, orientation, variant, dependence, }: UseIndicatorOptions) => {
    containerRef: React.RefObject<any>;
    sliderStyle: React.CSSProperties;
    isReady: boolean;
    updateIndicator: () => void;
};

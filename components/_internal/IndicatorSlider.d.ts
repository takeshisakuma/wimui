import { default as React } from '../../../node_modules/react';
import { IndicatorOrientation } from './useIndicator';
export type IndicatorSliderProps = {
    activeSelector: string;
    orientation?: IndicatorOrientation;
    className?: string;
    style?: React.CSSProperties;
    variant?: string;
    dependence?: any;
};
/**
 * A shared internal component to manage a sliding indicator that follows an active element.
 * Used by Tabs, SegmentedControl, and TabNavigation.
 */
export declare const IndicatorSlider: ({ activeSelector, orientation, className, style, variant, dependence, }: IndicatorSliderProps) => import("react/jsx-runtime").JSX.Element;

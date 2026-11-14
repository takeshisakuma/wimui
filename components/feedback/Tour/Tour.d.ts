import { default as React } from '../../../../node_modules/react';
type TourStep = {
    target: string;
    title: string;
    description: string;
    placement?: "top" | "bottom" | "left" | "right";
};
type TourProps = {
    /**
     * Steps of the tour. Each step targets an element via a CSS selector.
     */
    steps: TourStep[];
    /**
     * Whether the tour is shown.
     */
    open: boolean;
    /**
     * Called when the tour is dismissed before completion.
     */
    onClose: () => void;
    /**
     * Called when the last step is completed.
     */
    onFinish?: () => void;
};
export declare const Tour: ({ steps, open, onClose, onFinish }: TourProps) => React.JSX.Element | null;
export {};

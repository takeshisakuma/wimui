import { default as React } from '../../../node_modules/react';
export type StepperStatus = "wait" | "process" | "finish" | "error";
export interface Step {
    /** Title of the step */
    title: React.ReactNode;
    /** Description of the step */
    description?: React.ReactNode;
    /** Custom icon for the step */
    icon?: React.ReactNode;
    /** Status of the step. If not provided, it will be calculated based on currentStep. */
    status?: StepperStatus;
    /** Whether the step is disabled */
    disabled?: boolean;
}
export interface StepperProps {
    /** Array of step configurations */
    steps: Step[];
    /** Index of the current active step (0-indexed) */
    current?: number;
    /** Direction of the stepper */
    direction?: "horizontal" | "vertical";
    /** Placement of the labels */
    labelPlacement?: "horizontal" | "vertical";
    /** Status of the current step */
    status?: StepperStatus;
    /** Additional class names */
    className?: string;
    /** Callback function when a step is clicked (if applicable) */
    onChange?: (current: number) => void;
}
export declare const Stepper: ({ steps, current, direction, labelPlacement, status, className, onChange, }: StepperProps) => import("react/jsx-runtime").JSX.Element;
export default Stepper;

import { default as React } from '../../../../node_modules/react';
export type StepperIntent = "wait" | "process" | "finish" | "error";
export interface Step {
    /** Title of the step */
    title: React.ReactNode;
    /** Description of the step */
    description?: React.ReactNode;
    /** Custom icon for the step */
    icon?: React.ReactNode;
    /** Explicit workflow intent for this step. If omitted, computed from `current` index. */
    intent?: StepperIntent;
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
    /** Workflow intent shown on the current active step (default: "process") */
    intent?: StepperIntent;
    /** Additional class names */
    className?: string;
    /** Accessibility label for the navigation */
    ariaLabel?: string;
    /** Callback function when a step is clicked (if applicable) */
    onChange?: (current: number) => void;
    /** Whether to use the Radix Slot pattern */
    asChild?: boolean;
}
export declare const Stepper: React.ForwardRefExoticComponent<StepperProps & React.RefAttributes<HTMLDivElement>>;
export default Stepper;

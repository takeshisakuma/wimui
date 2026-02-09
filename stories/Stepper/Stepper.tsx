import React from "react";
import PropTypes from "prop-types";
import { Icon } from "../Icon/Icon";
import "./stepper.scss";

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

export const Stepper = ({
    steps = [],
    current = 0,
    direction = "horizontal",
    labelPlacement = "horizontal",
    status = "process",
    className,
    onChange,
}: StepperProps) => {
    const getStepStatus = (index: number, stepStatus?: StepperStatus): StepperStatus => {
        if (stepStatus) return stepStatus;
        if (index < current) return "finish";
        if (index === current) return status;
        return "wait";
    };

    const renderIcon = (index: number, stepStatus: StepperStatus, icon?: React.ReactNode) => {
        if (icon) return icon;

        if (stepStatus === "finish") {
            return <Icon name="CheckIcon" size="small" />;
        }
        if (stepStatus === "error") {
            return <Icon name="CloseIcon" size="small" />;
        }
        return <span>{index + 1}</span>;
    };

    return (
        <div
            className={[
                "wim-stepper",
                `wim-stepper--${direction}`,
                className,
            ]
                .filter(Boolean)
                .join(" ")}
        >
            {steps.map((step, index) => {
                const stepStatus = getStepStatus(index, step.status);
                const isClickable = !!onChange && !step.disabled;

                return (
                    <div
                        key={index}
                        className={[
                            "wim-stepper__item",
                            `wim-stepper__item--${stepStatus}`,
                            labelPlacement === "vertical" ? "wim-stepper__item--label-vertical" : "",
                            step.disabled ? "wim-stepper__item--disabled" : "",
                        ]
                            .filter(Boolean)
                            .join(" ")}
                        onClick={() => isClickable && onChange(index)}
                        style={{ cursor: isClickable ? "pointer" : "default" }}
                    >
                        <div className="wim-stepper__line" />
                        <div className="wim-stepper__icon-container">
                            {renderIcon(index, stepStatus, step.icon)}
                        </div>
                        <div className="wim-stepper__content">
                            <span className="wim-stepper__title">{step.title}</span>
                            {step.description && (
                                <span className="wim-stepper__description">
                                    {step.description}
                                </span>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

Stepper.propTypes = {
    steps: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.node.isRequired,
            description: PropTypes.node,
            icon: PropTypes.node,
            status: PropTypes.oneOf(["wait", "process", "finish", "error"]),
            disabled: PropTypes.bool,
        })
    ).isRequired,
    current: PropTypes.number,
    direction: PropTypes.oneOf(["horizontal", "vertical"]),
    labelPlacement: PropTypes.oneOf(["horizontal", "vertical"]),
    status: PropTypes.oneOf(["wait", "process", "finish", "error"]),
    className: PropTypes.string,
    onChange: PropTypes.func,
};

export default Stepper;

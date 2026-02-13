import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { Portal } from "../Portal/Portal";
import { Button } from "../Button/Button";
import "./tour.scss";

type TourStep = {
    target: string; // CSS selector
    title: string;
    description: string;
    placement?: "top" | "bottom" | "left" | "right";
};

type TourProps = {
    steps: TourStep[];
    open: boolean;
    onClose: () => void;
    onFinish?: () => void;
};

export const Tour = ({ steps, open, onClose, onFinish }: TourProps) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [targetRect, setTargetRect] = useState<DOMRect | null>(null);
    const step = steps[currentStep];

    useEffect(() => {
        if (open && step) {
            const updateRect = () => {
                const element = document.querySelector(step.target);
                if (element) {
                    setTargetRect(element.getBoundingClientRect());
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                    });
                } else {
                    setTargetRect(null);
                }
            };

            updateRect();
            // Delay slightly to account for scrolling finish or other transitions
            const timer = setTimeout(updateRect, 100);
            return () => clearTimeout(timer);
        } else {
            setTargetRect(null);
        }
    }, [open, currentStep, step]);

    useEffect(() => {
        const handleResize = () => {
            if (open && step) {
                const element = document.querySelector(step.target);
                if (element) {
                    setTargetRect(element.getBoundingClientRect());
                }
            }
        };
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleResize);
        };
    }, [open, step]);

    if (!open || !step) return null;

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            onFinish ? onFinish() : onClose();
            setCurrentStep(0);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const bubbleStyle: React.CSSProperties = {};
    if (targetRect) {
        const gap = 12;
        const bubbleWidth = 300;
        const margin = 16;

        // Calculate base center position
        let left = targetRect.left + targetRect.width / 2;

        // Clamp left position to keep bubble within viewport
        const minLeft = bubbleWidth / 2 + margin;
        const maxLeft = window.innerWidth - bubbleWidth / 2 - margin;
        left = Math.max(minLeft, Math.min(maxLeft, left));

        switch (step.placement || "bottom") {
            case "top":
                bubbleStyle.top = targetRect.top - gap;
                bubbleStyle.left = left;
                bubbleStyle.transform = "translate(-50%, -100%)";
                break;
            case "bottom":
                bubbleStyle.top = targetRect.bottom + gap;
                bubbleStyle.left = left;
                bubbleStyle.transform = "translateX(-50%)";
                break;
            case "left":
                // For left/right, we might still need logic if they clip, 
                // but let's prioritize the reported issue (bottom/top center clipping)
                bubbleStyle.left = targetRect.left - gap;
                bubbleStyle.top = targetRect.top + targetRect.height / 2;
                bubbleStyle.transform = "translate(-100%, -50%)";
                break;
            case "right":
                bubbleStyle.left = targetRect.right + gap;
                bubbleStyle.top = targetRect.top + targetRect.height / 2;
                bubbleStyle.transform = "translateY(-50%)";
                break;
        }
    }

    return (
        <Portal>
            <div className="wim-tour-mask" onClick={onClose} />
            {targetRect && (
                <div
                    className="wim-tour-highlight"
                    style={{
                        top: targetRect.top - 4,
                        left: targetRect.left - 4,
                        width: targetRect.width + 8,
                        height: targetRect.height + 8,
                    }}
                />
            )}
            <div
                className={classNames("wim-tour-bubble", `wim-tour-bubble--${step.placement || "bottom"}`)}
                style={bubbleStyle}
            >
                <div className="wim-tour-bubble-inner">
                    <h3 className="wim-tour-title">{step.title}</h3>
                    <p className="wim-tour-description">{step.description}</p>
                    <div className="wim-tour-footer">
                        <span className="wim-tour-progress">
                            {currentStep + 1} / {steps.length}
                        </span>
                        <div className="wim-tour-buttons">
                            {currentStep > 0 && (
                                <Button
                                    size="small"
                                    priority="secondary"
                                    label="Back"
                                    onClick={handleBack}
                                />
                            )}
                            <Button
                                size="small"
                                priority="primary"
                                label={
                                    currentStep === steps.length - 1
                                        ? "Finish"
                                        : "Next"
                                }
                                onClick={handleNext}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    );
};



import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import classNames from "classnames";
import "./transition.scss";

export interface TransitionProps {
    /** Whether the component should be shown or hidden */
    show: boolean;
    /** The content to be transitioned */
    children: React.ReactNode;
    /** Transition classes applied when entering */
    enter?: string;
    /** Startup classes for the entry transition */
    enterFrom?: string;
    /** Ending classes for the entry transition */
    enterTo?: string;
    /** Transition classes applied when leaving */
    leave?: string;
    /** Startup classes for the leave transition */
    leaveFrom?: string;
    /** Ending classes for the leave transition */
    leaveTo?: string;
    /** Whether to unmount the children when hidden */
    unmount?: boolean;
    /** Additional class names for the wrapper */
    className?: string;
}

/**
 * A component that handles simple CSS transitions for its children.
 * It manages applying classes at the right moments (enter, enterFrom, enterTo, etc.).
 */
export const Transition = ({
    show,
    children,
    enter = "",
    enterFrom = "",
    enterTo = "",
    leave = "",
    leaveFrom = "",
    leaveTo = "",
    unmount = true,
    className,
}: TransitionProps) => {
    const [shouldRender, setShouldRender] = useState(show);
    const [state, setState] = useState<"idle" | "entering" | "leaving">("idle");
    const [activeClasses, setActiveClasses] = useState("");
    const elementRef = useRef<HTMLDivElement>(null);
    const isInitialRender = useRef(true);

    useLayoutEffect(() => {
        if (isInitialRender.current) {
            isInitialRender.current = false;
            return;
        }

        if (show) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setShouldRender(true);
            setState("entering");
            setActiveClasses(classNames(enter, enterFrom));

            // Force reflow
            void elementRef.current?.offsetHeight;

            const frame = requestAnimationFrame(() => {
                setActiveClasses(classNames(enter, enterTo));
            });

            return () => cancelAnimationFrame(frame);
        } else {
            setState("leaving");
            setActiveClasses(classNames(leave, leaveFrom));

            // Force reflow
            void elementRef.current?.offsetHeight;

            const frame = requestAnimationFrame(() => {
                setActiveClasses(classNames(leave, leaveTo));
            });

            return () => cancelAnimationFrame(frame);
        }
    }, [show, enter, enterFrom, enterTo, leave, leaveFrom, leaveTo]);

    const handleTransitionEnd = (e: React.TransitionEvent) => {
        if (e.target !== elementRef.current) return;

        if (state === "entering") {
            setState("idle");
            setActiveClasses("");
        } else if (state === "leaving") {
            setState("idle");
            setActiveClasses("");
            if (unmount) {
                setShouldRender(false);
            }
        }
    };

    if (!shouldRender && unmount) return null;

    return (
        <div
            ref={elementRef}
            className={classNames(className, activeClasses, {
                "wim-transition-hidden": !show && state === "idle" && !unmount
            })}
            onTransitionEnd={handleTransitionEnd}
        >
            {children}
        </div>
    );
};

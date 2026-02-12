import React, { useState, useEffect, useRef, useCallback } from "react";
import classNames from "classnames";
import "./affix.scss";

export interface AffixProps {
    /** Office distance from the top of the window (in pixels) */
    offsetTop?: number;
    /** Office distance from the bottom of the window (in pixels) */
    offsetBottom?: number;
    /** Callback when the affix state changes */
    onChange?: (lastAffixed: boolean) => void;
    /** Target container that will be scrolled */
    target?: () => HTMLElement | Window | null;
    /** Children to be rendered inside the affix */
    children: React.ReactNode;
    /** Additional class names */
    className?: string;
    /** Style attribute */
    style?: React.CSSProperties;
}

interface AffixState {
    affixStyle?: React.CSSProperties;
    placeholderStyle?: React.CSSProperties;
    isAffixed: boolean;
}

export const Affix = ({
    offsetTop,
    offsetBottom,
    onChange,
    target = () => window,
    children,
    className,
    style,
}: AffixProps) => {
    const [state, setState] = useState<AffixState>({
        isAffixed: false,
    });
    const placeholderRef = useRef<HTMLDivElement>(null);
    const fixedRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<number | null>(null);
    const affixedRef = useRef<boolean>(false);

    const updatePosition = useCallback(() => {
        if (!placeholderRef.current) return;

        const targetElement = target();
        if (!targetElement) return;

        const placeholderRect = placeholderRef.current.getBoundingClientRect();
        const targetRect = (targetElement === window || targetElement instanceof Window)
            ? { top: 0, bottom: window.innerHeight }
            : (targetElement as HTMLElement).getBoundingClientRect();

        let newIsAffixed = false;
        let newAffixStyle: React.CSSProperties | undefined;
        let newPlaceholderStyle: React.CSSProperties | undefined;

        if (offsetTop !== undefined) {
            if (placeholderRect.top < targetRect.top + offsetTop) {
                newIsAffixed = true;
                newAffixStyle = {
                    position: "fixed",
                    top: targetRect.top + offsetTop,
                    width: placeholderRect.width,
                    height: placeholderRect.height,
                    zIndex: 1000,
                };
                newPlaceholderStyle = {
                    width: placeholderRect.width,
                    height: placeholderRect.height,
                };
            }
        } else if (offsetBottom !== undefined) {
            if (placeholderRect.bottom > targetRect.bottom - offsetBottom) {
                newIsAffixed = true;
                newAffixStyle = {
                    position: "fixed",
                    bottom: (window.innerHeight - targetRect.bottom) + offsetBottom,
                    width: placeholderRect.width,
                    height: placeholderRect.height,
                    zIndex: 1000,
                };
                newPlaceholderStyle = {
                    width: placeholderRect.width,
                    height: placeholderRect.height,
                };
            }
        }

        if (newIsAffixed !== affixedRef.current) {
            affixedRef.current = newIsAffixed;
            onChange?.(newIsAffixed);
        }

        setState((prevState) => {
            // Only update state if values actually changed to prevent unnecessary re-renders
            if (
                prevState.isAffixed === newIsAffixed &&
                JSON.stringify(prevState.affixStyle) === JSON.stringify(newAffixStyle) &&
                JSON.stringify(prevState.placeholderStyle) === JSON.stringify(newPlaceholderStyle)
            ) {
                return prevState;
            }
            return {
                isAffixed: newIsAffixed,
                affixStyle: newAffixStyle,
                placeholderStyle: newPlaceholderStyle,
            };
        });
    }, [offsetTop, offsetBottom, target, onChange]);

    useEffect(() => {
        const targetElement = target();
        if (!targetElement) return;

        const handleScroll = () => {
            if (timeoutRef.current) {
                window.cancelAnimationFrame(timeoutRef.current);
            }
            timeoutRef.current = window.requestAnimationFrame(updatePosition);
        };

        targetElement.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        // Initial check
        updatePosition();

        return () => {
            targetElement.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
            if (timeoutRef.current) {
                window.cancelAnimationFrame(timeoutRef.current);
            }
        };
    }, [target, updatePosition]);

    return (
        <div ref={placeholderRef} style={{ ...state.placeholderStyle, ...style }} className={classNames(className)}>
            <div
                ref={fixedRef}
                className={classNames(state.isAffixed && "wim-affix--affixed")}
                style={state.affixStyle}
            >
                {children}
            </div>
        </div>
    );
};



export default Affix;

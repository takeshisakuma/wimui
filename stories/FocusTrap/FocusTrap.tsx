import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./focusTrap.scss";

export type FocusTrapProps = {
    /**
     * トラップされるコンテンツ。
     */
    children: React.ReactNode;
    /**
     * トラップが有効かどうか。
     */
    active?: boolean;
    /**
     * マウント時に最初の要素にフォーカスするかどうか。
     */
    autoFocus?: boolean;
    /**
     * 追加のクラス名。
     */
    className?: string;
};

/**
 * フォーカスを特定の領域内に閉じ込めるためのユーティリティコンポーネント。
 * ダイアログやモーダルなどで使用します。
 */
export const FocusTrap = ({
    children,
    active = true,
    autoFocus = true,
    className = "",
}: FocusTrapProps) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const previouslyFocusedElement = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (!active) return;

        previouslyFocusedElement.current = document.activeElement as HTMLElement;

        const root = rootRef.current;
        if (!root) return;

        const getFocusableElements = () => {
            return Array.from(
                root.querySelectorAll<HTMLElement>(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                )
            ).filter((el) => {
                const style = window.getComputedStyle(el);
                return (
                    style.display !== "none" &&
                    style.visibility !== "hidden" &&
                    !(el as any).disabled
                );
            });
        };

        if (autoFocus) {
            const focusableElements = getFocusableElements();
            if (focusableElements.length > 0) {
                focusableElements[0].focus();
            }
        }

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key !== "Tab") return;

            const focusableElements = getFocusableElements();
            if (focusableElements.length === 0) {
                e.preventDefault();
                return;
            }

            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (e.shiftKey) {
                // Shift + Tab
                if (document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                }
            } else {
                // Tab
                if (document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            if (previouslyFocusedElement.current) {
                previouslyFocusedElement.current.focus();
            }
        };
    }, [active, autoFocus]);

    return (
        <div ref={rootRef} className={`wim-focus-trap ${className}`}>
            {children}
        </div>
    );
};

FocusTrap.propTypes = {
    /**
     * トラップされるコンテンツ。
     */
    children: PropTypes.node.isRequired,
    /**
     * トラップが有効かどうか。
     */
    active: PropTypes.bool,
    /**
     * マウント時に最初の要素にフォーカスするかどうか。
     */
    autoFocus: PropTypes.bool,
    /**
     * 追加のクラス名。
     */
    className: PropTypes.string,
};

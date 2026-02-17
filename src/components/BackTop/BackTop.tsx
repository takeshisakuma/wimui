import React, { useState, useEffect, useCallback, useRef } from "react";
import classNames from "classnames";
import { Icon } from "../Icon/Icon";
import "./backtop.scss";

export interface BackTopProps {
    /** Target container that will be scrolled */
    target?: () => HTMLElement | Window | Document | null;
    /** Scroll height after which the button becomes visible */
    visibilityHeight?: number;
    /** Callback when clicked */
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    /** Children to be rendered inside the button */
    children?: React.ReactNode;
    /** Additional class names */
    className?: string;
    /** Style attribute */
    style?: React.CSSProperties;
}

export const BackTop = ({
    target = () => window,
    visibilityHeight = 400,
    onClick,
    children,
    className,
    style,
}: BackTopProps) => {
    const [visible, setVisible] = useState(false);
    const scrollEventRef = useRef<any>(null);

    const getScrollTop = useCallback((targetElement: HTMLElement | Window | Document) => {
        if (targetElement === window || targetElement instanceof Window) {
            return window.pageYOffset || document.documentElement.scrollTop;
        }
        if (targetElement instanceof Document) {
            return document.documentElement.scrollTop;
        }
        return (targetElement as HTMLElement).scrollTop;
    }, []);

    const handleScroll = useCallback(() => {
        const targetElement = target();
        if (!targetElement) return;

        const scrollTop = getScrollTop(targetElement);
        setVisible(scrollTop > visibilityHeight);
    }, [target, visibilityHeight, getScrollTop]);

    useEffect(() => {
        const targetElement = target();
        if (!targetElement) return;

        handleScroll(); // Initial check

        targetElement.addEventListener("scroll", handleScroll);
        return () => {
            targetElement.removeEventListener("scroll", handleScroll);
        };
    }, [target, handleScroll]);

    const scrollToTop = (e: React.MouseEvent<HTMLDivElement>) => {
        const targetElement = target();
        if (!targetElement) return;

        if (targetElement === window || targetElement instanceof Window) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } else if (targetElement instanceof Document) {
            document.documentElement.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } else {
            (targetElement as HTMLElement).scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }

        onClick?.(e);
    };

    const defaultElement = (
        <div className="wim-back-top__content">
            <Icon name="ChevronUpIcon" className="wim-back-top__icon" />
        </div>
    );

    return (
        <div
            className={classNames(
                "wim-back-top",
                !visible && "wim-back-top--hidden",
                className
            )}
            style={style}
            onClick={scrollToTop}
        >
            {children || defaultElement}
        </div>
    );
};

export default BackTop;

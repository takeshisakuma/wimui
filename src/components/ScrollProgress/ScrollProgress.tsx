import React, { useEffect, useState } from "react";
import classNames from "classnames";
import "./scrollprogress.scss";

export type ScrollProgressProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * 進捗バーの色。
     */
    color?: "primary" | "secondary" | "success" | "warning" | "error";
    /**
     * スクロールを検知するターゲット要素。デフォルトは `window`。
     */
    target?: React.RefObject<HTMLElement | null>;
};

/**
 * 読み込みの進捗やスクロール位置を視覚的に表示するためのコンポーネント。
 */
export const ScrollProgress = ({
    color = "primary",
    target,
    className,
    ...props
}: ScrollProgressProps) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            let currentProgress = 0;
            if (target && target.current) {
                const element = target.current;
                const totalHeight = element.scrollHeight - element.clientHeight;
                if (totalHeight > 0) {
                    currentProgress = (element.scrollTop / totalHeight) * 100;
                }
            } else {
                const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
                if (totalHeight > 0) {
                    currentProgress = (window.scrollY / totalHeight) * 100;
                }
            }
            setProgress(currentProgress);
        };

        const scrollTarget = target && target.current ? target.current : window;
        scrollTarget.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial calc

        return () => {
            scrollTarget.removeEventListener("scroll", handleScroll);
        };
    }, [target]);

    return (
        <div
            className={classNames(
                "wim-scroll-progress",
                `wim-scroll-progress--${color}`,
                className
            )}
            role="progressbar"
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
            {...props}
        >
            <div
                className="wim-scroll-progress__bar"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};

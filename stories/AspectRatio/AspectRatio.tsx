import React from "react";
import PropTypes from "prop-types";
import "./aspect-ratio.scss";

export type AspectRatioProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * アスペクト比 (例: 16 / 9, 1, 4 / 3)
     */
    ratio?: number;
    /**
     * 子要素
     */
    children: React.ReactNode;
};

/**
 * `AspectRatio` は、指定したアスペクト比を維持しながらコンテンツを表示するためのコンテナです。
 */
export const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
    ({ ratio = 1, children, className, style, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={["wim-aspect-ratio", className].filter(Boolean).join(" ")}
                style={{ "--wim-aspect-ratio": ratio, ...style } as React.CSSProperties}
                {...props}
            >
                <div className="wim-aspect-ratio__inner">{children}</div>
            </div>
        );
    }
);

AspectRatio.displayName = "AspectRatio";

AspectRatio.propTypes = {
    ratio: PropTypes.number,
    children: PropTypes.node.isRequired,
};

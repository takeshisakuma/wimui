import React from "react";
import classNames from "classnames";
import { Spinner } from "../Spinner/Spinner";
import { Loader } from "../Loader/Loader";
import "./loadingoverlay.scss";

export type LoadingOverlayProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * オーバーレイの表示/非表示を制御します。
     */
    visible?: boolean;
    /**
     * ローディングインジケーターのタイプ。
     */
    loaderType?: "spinner" | "bars" | "dots" | "pulse";
    /**
     * ローディングインジケーターのサイズ。
     */
    loaderSize?: "sm" | "md" | "lg" | "xl";
    /**
     * ローディングインジケーターの色。
     */
    loaderColor?: "primary" | "secondary" | "success" | "warning" | "error" | "neutral" | "currentColor";
    /**
     * オーバーレイの背景スタイル。
     */
    backdropVariant?: "light" | "dark";
    /**
     * 背景のぼかし効果の強さ。
     */
    blur?: "none" | "sm" | "md" | "lg";
    /**
     * ローディングメッセージ。
     */
    message?: string;
    /**
     * position: fixed を使用するかどうか（画面全体をカバー）。
     */
    fixed?: boolean;
    /**
     * z-index の値。
     */
    zIndex?: number;
    /**
     * カスタムローディングコンテンツ。
     */
    children?: React.ReactNode;
};

/**
 * 画面全体または特定の要素をオーバーレイし、ローディング状態を表示するコンポーネント。
 */
export const LoadingOverlay = ({
    visible = false,
    loaderType = "spinner",
    loaderSize = "lg",
    loaderColor = "primary",
    backdropVariant = "dark",
    blur = "sm",
    message,
    fixed = false,
    zIndex,
    children,
    className,
    style,
    ...props
}: LoadingOverlayProps) => {
    if (!visible) {
        return null;
    }

    const renderLoader = () => {
        if (children) {
            return children;
        }

        if (loaderType === "spinner") {
            return <Spinner size={loaderSize} color={loaderColor} />;
        }

        return (
            <Loader
                variant={loaderType as "bars" | "dots" | "pulse"}
                size={loaderSize}
                color={loaderColor}
            />
        );
    };

    return (
        <div
            className={classNames(
                "wim-loading-overlay",
                fixed && "wim-loading-overlay--fixed",
                className
            )}
            style={{
                ...style,
                ...(zIndex !== undefined && { zIndex }),
            }}
            role="status"
            aria-live="polite"
            aria-busy="true"
            {...props}
        >
            <div
                className={classNames(
                    "wim-loading-overlay__backdrop",
                    `wim-loading-overlay__backdrop--${backdropVariant}`,
                    `wim-loading-overlay__backdrop--blur-${blur}`
                )}
            />
            <div className="wim-loading-overlay__content">
                {renderLoader()}
                {message && (
                    <div className="wim-loading-overlay__message">{message}</div>
                )}
            </div>
        </div>
    );
};

export default LoadingOverlay;

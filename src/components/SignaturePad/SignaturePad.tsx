import React, { useRef, useState, useEffect, useCallback } from "react";
import classNames from "classnames";
import { Button } from "../Button/Button";
import "./signature-pad.scss";

export type SignaturePadProps = {
    /** Width of the canvas */
    width?: number;
    /** Height of the canvas */
    height?: number;
    /** Color of the pen */
    penColor?: string;
    /** Width of the pen stroke */
    penWidth?: number;
    /** Callback when signature changes or is cleared */
    onChange?: (dataUrl: string | null) => void;
    /** Custom label for the clear button */
    clearLabel?: string;
    /** Whether the component is disabled */
    disabled?: boolean;
    /** CSS class name */
    className?: string;
    /** Inline styles */
    style?: React.CSSProperties;
};

/**
 * マウスやタッチ操作で手書きの署名を入力するためのコンポーネント。
 */
export const SignaturePad = ({
    width = 400,
    height = 200,
    penColor = "#000000",
    penWidth = 2,
    onChange,
    clearLabel = "Clear",
    disabled = false,
    className,
    style,
}: SignaturePadProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [isEmpty, setIsEmpty] = useState(true);

    const getCoordinates = (event: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent): { x: number; y: number } | null => {
        if (!canvasRef.current) return null;
        const rect = canvasRef.current.getBoundingClientRect();

        let clientX, clientY;
        if ('touches' in event) {
            if (event.touches.length === 0) return null;
            clientX = event.touches[0].clientX;
            clientY = event.touches[0].clientY;
        } else {
            clientX = (event as MouseEvent).clientX;
            clientY = (event as MouseEvent).clientY;
        }

        return {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
    };

    const startDrawing = (event: React.MouseEvent | React.TouchEvent) => {
        if (disabled) return;
        setIsDrawing(true);
        const coords = getCoordinates(event);
        if (!coords || !canvasRef.current) return;

        const ctx = canvasRef.current.getContext("2d");
        if (ctx) {
            ctx.beginPath();
            ctx.moveTo(coords.x, coords.y);
            ctx.strokeStyle = penColor;
            ctx.lineWidth = penWidth;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
        }
    };

    const draw = (event: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
        if (!isDrawing || disabled) return;
        const coords = getCoordinates(event);
        if (!coords || !canvasRef.current) return;

        const ctx = canvasRef.current.getContext("2d");
        if (ctx) {
            ctx.lineTo(coords.x, coords.y);
            ctx.stroke();
            setIsEmpty(false);
        }
    };

    const stopDrawing = () => {
        if (!isDrawing) return;
        setIsDrawing(false);
        if (onChange && canvasRef.current) {
            onChange(isEmpty ? null : canvasRef.current.toDataURL());
        }
    };

    const clear = () => {
        if (disabled || !canvasRef.current) return;
        const ctx = canvasRef.current.getContext("2d");
        if (ctx) {
            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            setIsEmpty(true);
            if (onChange) onChange(null);
        }
    };

    useEffect(() => {
        // Global mouseup to stop drawing even if mouse leaves canvas
        window.addEventListener("mouseup", stopDrawing);
        return () => window.removeEventListener("mouseup", stopDrawing);
    }, [isDrawing]);

    return (
        <div
            className={classNames("wim-signature-pad", disabled && "wim-signature-pad--disabled", className)}
            style={style}
        >
            <div className="wim-signature-pad__canvas-container" style={{ width, height }}>
                <canvas
                    ref={canvasRef}
                    width={width}
                    height={height}
                    className="wim-signature-pad__canvas"
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={draw} // Smooth line when leaving
                    onTouchStart={startDrawing}
                    onTouchMove={draw}
                    onTouchEnd={stopDrawing}
                />
            </div>
            <div className="wim-signature-pad__footer">
                <Button
                    priority="secondary"
                    size="small"
                    onClick={clear}
                    disabled={disabled || isEmpty}
                >
                    {clearLabel}
                </Button>
            </div>
        </div>
    );
};

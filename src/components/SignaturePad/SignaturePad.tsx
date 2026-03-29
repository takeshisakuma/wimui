import React, { useRef, useState, useEffect, useId, useCallback } from "react";
import classNames from "classnames";
import { Button } from "../Button/Button";
import { useTranslation } from "react-i18next";
import { FieldTemplate } from "../_internal/FieldTemplate/FieldTemplate";
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
  label?: string;
  error?: string;
  required?: boolean;
  layout?: "vertical" | "horizontal";
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
  clearLabel,
  disabled = false,
  className,
  style,
  label,
  error,
  required,
  layout = "vertical",
}: SignaturePadProps) => {
  const { t } = useTranslation(["components"]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const generatedId = useId();
  const id = `wim-signature-pad-${generatedId}`;
  const labelId = label ? `${id}-label` : undefined;
  const errorId = error ? `${id}-error` : undefined;

  const actualClearLabel = clearLabel ?? t("signature.clear");

  const getCoordinates = (
    event: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent,
  ): { x: number; y: number } | null => {
    if (!canvasRef.current) return null;
    const rect = canvasRef.current.getBoundingClientRect();

    let clientX, clientY;
    if ("touches" in event) {
      if (event.touches.length === 0) return null;
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    } else {
      clientX = (event as MouseEvent).clientX;
      clientY = (event as MouseEvent).clientY;
    }

    const scaleX = rect.width ? canvasRef.current.width / rect.width : 1;
    const scaleY = rect.height ? canvasRef.current.height / rect.height : 1;

    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY,
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

  const draw = (
    event: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent,
  ) => {
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

  const stopDrawing = useCallback(() => {
    if (!isDrawing) return;
    setIsDrawing(false);
    if (onChange && canvasRef.current) {
      onChange(isEmpty ? null : canvasRef.current.toDataURL());
    }
  }, [isDrawing, onChange, isEmpty]);

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
  }, [isDrawing, stopDrawing]);

  return (
    <FieldTemplate
      label={label}
      error={error}
      required={required}
      layout={layout}
      labelId={labelId}
      errorId={errorId}
      className={classNames("wim-signature-pad-container", className)}
    >
      <div
        className={classNames(
          "wim-signature-pad",
          disabled && "wim-signature-pad--disabled",
        )}
        style={style}
      >
        <div
          className="wim-signature-pad__canvas-container"
          style={{
            width,
            maxWidth: "100%",
            aspectRatio: `${width} / ${height}`,
            height: "auto",
          }}
        >
          <canvas
            ref={canvasRef}
            width={width}
            height={height}
            className="wim-signature-pad__canvas"
            style={{ width: "100%", height: "100%", display: "block" }}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={draw} // Smooth line when leaving
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
            aria-labelledby={label ? labelId : undefined}
            role="img"
            aria-label={label ? undefined : t("signature.canvas_label")}
          />
        </div>
        <div className="wim-signature-pad__footer">
          <Button
            priority="secondary"
            size="small"
            onClick={clear}
            disabled={disabled || isEmpty}
          >
            {actualClearLabel}
          </Button>
        </div>
      </div>
    </FieldTemplate>
  );
};

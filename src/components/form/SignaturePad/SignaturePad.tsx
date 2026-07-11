import React, { useRef, useState, useEffect, useId, useCallback, useLayoutEffect } from "react";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import classNames from "classnames";
import { Button } from "../../form/Button/Button";
import { FieldTemplate } from "../FieldTemplate";
import styles from "./signature-pad.module.scss";

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
  clearLabel?: React.ReactNode;
  /** Whether the component is disabled */
  disabled?: boolean;
  /** CSS class name */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** Field label */
  label?: React.ReactNode;
  /** Error message */
  error?: string;
  /** Whether to show the required indicator */
  required?: boolean;
  /** Layout direction of label and field */
  layout?: "vertical" | "horizontal";
  /** Aria label for the canvas */
  canvasAriaLabel?: string;
};

/**
 * Component for entering a handwritten signature with mouse or touch.
 */
export const SignaturePad = ({
  width = 400,
  height = 200,
  penColor = "var(--wim-color-text-primary)",
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
  canvasAriaLabel,
}: SignaturePadProps) => {
  const { t } = useWimTranslation(["common", "components"]);
  const resolvedClearLabel = clearLabel ?? t("signature.clear", { ns: "components", defaultValue: t("button.clear") });
  const resolvedCanvasAriaLabel = canvasAriaLabel ?? t("a11y.signature_canvas");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Use ref instead of state — avoids re-renders during drawing that would re-run effects
  const isDrawingRef = useRef(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const generatedId = useId();
  const id = `wim-signature-pad-${generatedId}`;
  const labelId = label ? `${id}-label` : undefined;
  const errorId = error ? `${id}-error` : undefined;

  // Resolve CSS variables if needed
  const getResolvedColor = useCallback((color: string): string => {
    if (color.startsWith("var(") && canvasRef.current) {
      const varName = color.match(/var\((--[^)]+)\)/)?.[1];
      if (varName) {
        return getComputedStyle(canvasRef.current).getPropertyValue(varName).trim() || "#000";
      }
    }
    return color;
  }, []);

  // Initialize canvas with high DPI support.
  // Depends only on width/height — assigning canvas.width/height clears the canvas,
  // so pen style props must NOT be included here.
  useLayoutEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const ratio = window.devicePixelRatio || 1;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    ctx.scale(ratio, ratio);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
  }, [width, height]);

  const getCoordinates = useCallback((
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

    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const scaleX = width / rect.width;
    const scaleY = height / rect.height;

    return {
      x: x * scaleX,
      y: y * scaleY,
    };
  }, [width, height]);

  const startDrawing = (event: React.MouseEvent | React.TouchEvent) => {
    if (disabled) return;

    const coords = getCoordinates(event);
    if (!coords || !canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");
    if (ctx) {
      isDrawingRef.current = true;
      ctx.beginPath();
      ctx.moveTo(coords.x, coords.y);
      ctx.strokeStyle = getResolvedColor(penColor);
      ctx.lineWidth = penWidth;
    }
  };

  // Plain function attached directly to canvas — React updates the binding each render,
  // so there is no stale-closure risk.
  const draw = (
    event: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent,
  ) => {
    if (!isDrawingRef.current || disabled || !canvasRef.current) return;
    const coords = getCoordinates(event);
    if (!coords) return;

    const ctx = canvasRef.current.getContext("2d");
    if (ctx) {
      ctx.lineTo(coords.x, coords.y);
      ctx.stroke();
      setIsEmpty(false);
    }
  };

  const stopDrawing = () => {
    if (!isDrawingRef.current) return;
    isDrawingRef.current = false;
    if (onChange && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const isCanvasEmpty = !ctx || ctx.getImageData(0, 0, canvas.width, canvas.height).data.every(
        (v, i) => i % 4 !== 3 || v === 0,
      );
      onChange(isCanvasEmpty ? null : canvas.toDataURL());
    }
  };

  // Keep a ref so the window mouseup listener always calls the latest stopDrawing
  const stopRef = useRef(stopDrawing);
  useLayoutEffect(() => {
    stopRef.current = stopDrawing;
  });

  // Window mouseup catches releases that occur outside the canvas element
  useEffect(() => {
    const handleMouseUp = () => stopRef.current();
    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, []);

  // Guard: only clear when the button itself received pointerdown.
  // Prevents accidental clears when a drawing gesture ends over the button.
  const clearIntentRef = useRef(false);

  const clear = () => {
    if (!clearIntentRef.current) return;
    clearIntentRef.current = false;
    if (disabled || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setIsEmpty(true);
      if (onChange) onChange(null);
    }
  };

  return (
    <FieldTemplate
      label={label}
      error={error}
      required={required}
      layout={layout}
      labelId={labelId}
      errorId={errorId}
      className={className}
    >
      <div
        className={classNames("wim-signature-pad", 
          styles.root,
          disabled && styles.disabled,
          error && styles.error,
        )}
        style={style}
      >
        <div
          className={styles.canvasContainer}
          style={{
            width,
            maxWidth: "100%",
            aspectRatio: `${width} / ${height}`,
            height: "auto",
          }}
        >
          <canvas
            ref={canvasRef}
            data-testid="signature-canvas"
            className={styles.canvas}
            style={{ width: "100%", height: "100%", display: "block" }}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
            aria-labelledby={label ? labelId : undefined}
            aria-describedby={errorId}
            role="img"
            aria-label={label ? undefined : resolvedCanvasAriaLabel}
          />
        </div>
        <div className={styles.footer}>
          <Button
            variant="outline"
            size="sm"
            data-testid="signature-clear"
            onMouseDown={() => {
              clearIntentRef.current = true;
            }}
            onClick={clear}
            disabled={disabled || isEmpty}
          >
            {resolvedClearLabel}
          </Button>
        </div>
      </div>
    </FieldTemplate>
  );
};

import { useCallback } from "react";

/**
 * 値をminとmaxの範囲内に収めます。
 */
export const clamp = (val: number, min: number, max: number) =>
  Math.max(min, Math.min(val, max));

/**
 * スライダーの共通ロジックを提供するカスタムフック。
 */
export const useSliderCommon = (min: number, max: number, step: number) => {
  const alignToStep = useCallback(
    (val: number) => {
      const steps = Math.round((val - min) / step);
      return clamp(min + steps * step, min, max);
    },
    [min, max, step]
  );

  const calculateValue = useCallback(
    (clientX: number, trackElement: HTMLDivElement | null) => {
      if (!trackElement) return min;
      const rect = trackElement.getBoundingClientRect();
      const percentage = clamp((clientX - rect.left) / rect.width, 0, 1);
      const rawValue = min + percentage * (max - min);
      return alignToStep(rawValue);
    },
    [alignToStep, max, min]
  );

  return {
    clamp,
    alignToStep,
    calculateValue,
  };
};

/**
 * 値をminとmaxの範囲内に収めます。
 */
export declare const clamp: (val: number, min: number, max: number) => number;
/**
 * スライダーの共通ロジックを提供するカスタムフック。
 */
export declare const useSliderCommon: (min: number, max: number, step: number) => {
    clamp: (val: number, min: number, max: number) => number;
    alignToStep: (val: number) => number;
    calculateValue: (clientX: number, trackElement: HTMLDivElement | null) => number;
};

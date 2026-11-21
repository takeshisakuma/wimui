/**
 * 値をminとmaxの範囲内に収めます。
 */
export declare const clamp: (val: number, min: number, max: number) => number;
/**
 * PageUp / PageDown で 1 回に動く幅（T410）。範囲の 10 分の 1 を step の倍数に丸め、step より小さくしない。
 * 固定の 10 にすると、0〜1 の範囲では 1 回で端まで飛び、step 50 の範囲では目盛りからずれる。
 */
export declare const largeStepOf: (min: number, max: number, step: number) => number;
/**
 * スライダーの共通ロジックを提供するカスタムフック。
 */
export declare const useSliderCommon: (min: number, max: number, step: number) => {
    clamp: (val: number, min: number, max: number) => number;
    alignToStep: (val: number) => number;
    calculateValue: (clientX: number, trackElement: HTMLDivElement | null) => number;
};

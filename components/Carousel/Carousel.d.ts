import { default as React } from '../../../node_modules/react';
export type Breakpoints = {
    base?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
};
export type CarouselProps = {
    /**
     * カルーセル内のコンテンツ
     */
    children?: React.ReactNode;
    /**
     * 自動再生するかどうか
     */
    autoPlay?: boolean;
    /**
     * 自動再生の間隔（ミリ秒）
     */
    interval?: number;
    /**
     * インジケーターを表示するかどうか
     */
    showIndicators?: boolean;
    /**
     * 前後ボタンを表示するかどうか
     */
    showControls?: boolean;
    /**
     * 無限ループするかどうか（シームレスな切り替え）
     */
    loop?: boolean;
    /**
     * 一度に表示するスライド数。数値またはブレークポイントごとのオブジェクトを指定可能。
     */
    slidesToShow?: number | Breakpoints;
    /**
     * 追加のクラス名
     */
    className?: string;
};
/**
 * `Carousel` は複数のコンテンツをスライドさせて表示するコンポーネントです。
 */
export declare const Carousel: ({ children, autoPlay, interval, showIndicators, showControls, loop, slidesToShow, className, }: CarouselProps) => import("react/jsx-runtime").JSX.Element | null;

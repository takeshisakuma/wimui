import { default as React } from '../../node_modules/react';
export interface UseMediaLoaderOptions {
    /** 読み込み設定。"lazy" の場合に Intersection Observer が有効化されます */
    loading?: "eager" | "lazy";
    /** キャッシュ回避などのための `src` */
    src?: string;
    /** デモ用：読み込み完了を意図的に遅らせるミリ秒 */
    demoDelay?: number;
    /** 交差判定のオフセット（画面に入る何px前で読み込みを開始するか） */
    rootMargin?: string;
}
/**
 * 共通のメディアローダーフック
 * Lazy Loading, Skeleton, Fade-in のロジックを一元管理します。
 */
export declare const useMediaLoader: (options?: UseMediaLoaderOptions) => {
    /** 監視対象のコンテナにセットするref */
    containerRef: React.RefObject<HTMLDivElement | null>;
    /** コンテンツを表示して良い状態か（フェードインのトリガーなどに使用） */
    isLoaded: boolean;
    /** ネットワークリクエストを開始して良い状態か */
    isIntersecting: boolean;
    /** メディア自体のロード完了を通知する関数 */
    notifyLoaded: () => void;
    /** 現在スケルトン（読み込み中）を表示すべきか */
    shouldShowSkeleton: boolean;
};

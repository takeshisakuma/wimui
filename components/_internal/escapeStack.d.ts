/**
 * `active` の間、Escape で閉じる層として重なりに積む。積んだ層のうち一番上だけが `onEscape` を受ける。
 */
export declare function useEscapeLayer(active: boolean, onEscape: (event: KeyboardEvent) => void): void;

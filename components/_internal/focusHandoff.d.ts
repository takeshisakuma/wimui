import { default as React } from '../../../node_modules/react';
/**
 * フォーカスを持ったまま `root` が消えるとき、文書の順でその外の直前の停止点へ渡す
 * （前に無ければ、残っている最初の停止点）。T392 の閉じるボタンと同じ。
 * 画面は動かさない。`root` の中にフォーカスが無いときは、呼ぶ側が何もしない。
 */
export declare function moveFocusOutside(root: Element): void;
/** `root` が外れるとき、その中にフォーカスが残っていれば外へ渡す。 */
export declare function useFocusHandoff(ref: React.RefObject<Element | null>): void;

import { default as React } from '../../../node_modules/react';
export type InlineFloatingSide = "top" | "bottom";
/**
 * 面を、引き金の下と上のどちらに開くか。
 *
 * 既定は下。下に収まらず、上のほうが広いときだけ上へ返す ── どちらにも収まらないときは、広いほう。
 */
export declare const computeInlineSide: (input: {
    referenceTop: number;
    referenceBottom: number;
    floatingHeight: number;
    viewportHeight: number;
}) => InlineFloatingSide;
/**
 * 面を、横に何 px 寄せるか。`left` / `right` は、**寄せる前の**面の位置（画面の左端から）。
 *
 * **はみ出しているときだけ動かす。** 画面に収まっている面は、端から 10px 以内でも触らない ──
 * 余白なしで端まで置いた入力欄（狭い画面の全幅の Select など）の面を、引き金からずらさないため。
 * はみ出していたら、端から 10px 内側へ寄せる。寄せた結果、反対側がはみ出すなら（面が画面より
 * 広い）、反対側の端で止める。
 */
export declare const computeInlineShift: (left: number, right: number, viewportWidth: number) => number;
export interface InlineFloatingOptions {
    /** 面が開いているか。閉じているあいだは測らない。 */
    open: boolean;
}
/**
 * 引き金の隣に描く面（Select のリストなど）の、向きと横のずれを決める（T342）。
 *
 * ポータルへ出す部品（Tooltip / Popover / Dropdown）は `useFloatingElement`（floating-ui）が位置を
 * 計算するが、こちらは**面の位置を CSS が決めたままにする**。返すのは「どちら側に開くか」と「横に
 * 何 px ずらすか」だけで、部品はそれを `data-side` と CSS 変数で受ける。
 *
 * こうする理由は 3 つ:
 * - 面をポータルへ出さない（ユーザー判断）。Tab の順と、面の中のフォーカスの扱いを変えない
 * - 既定の向きの見た目を 1px も動かさない。位置を inline style で上書きすると、いまの CSS の間隔
 *   （トークン・密度に追従する）と揃わなくなる
 * - floating-ui を読まない。入力系がこれを読むと、フォーム画面の束が 22 kB の予算に対して 29.9 kB に
 *   なった（+7.9 kB。2026-10-11 に実測）。向きと横のずれは、矩形を 2 つ測れば決まる
 *
 * 見るのは画面（ビューポート）だけ。スクロールしない入れ物（`overflow: hidden`）による切り取りは
 * 見ない ── 面をポータルへ出さない以上、向きを変えても切り取りは解けないので。
 */
export declare const useInlineFloating: ({ open }: InlineFloatingOptions) => {
    /** 引き金（位置の基準）に渡す ref。 */
    setReference: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
    /** 面に渡す ref。 */
    setFloating: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
    /** 面に付ける属性と CSS 変数。 */
    floatingProps: {
        "data-side": InlineFloatingSide;
        style: React.CSSProperties | undefined;
    };
};

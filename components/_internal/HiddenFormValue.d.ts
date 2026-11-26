import { default as React } from '../../../node_modules/react';
/**
 * 要素を囲んでいるフォームの `reset` で、`onReset` を呼ぶ（T427）。
 *
 * 隠した input の値は React が持っているので、フォームの reset だけでは見た目も値も戻らない
 * （Slider / RangeSlider は、`form.reset()` のあとも動かしたままの位置に残っていた）。部品は、
 * 制御していないときだけ既定の値へ戻す。制御しているときの値は利用者が持つ。
 */
export declare function useFormReset(elementRef: React.RefObject<Element | null>, onReset: () => void, enabled?: boolean): void;
/**
 * 素の `<form>` の送信に、部品の値を渡す隠した input（T427）。
 *
 * 選択の一覧・星・タグなど、素の入力欄を持たない部品は、`name` を渡しても送信の値（`FormData`）に
 * 何も入らなかった。React 19 のフォームの action・サーバーアクション・素の HTML のフォームでは、
 * その値だけが黙って落ちていた。Slider / RangeSlider と同じく、隠した `<input type="hidden">` を置く。
 *
 * - `name` が無ければ何も描かない（制御して値を持つ使い方には要らない）
 * - 複数の値は、同じ `name` の input を並べる（素の `<select multiple>` と同じ形。`FormData.getAll`）
 * - 空の配列は何も送らない（選ばれていない複数選択と同じ）。空文字の 1 つの値は `""` を送る（空の入力欄と同じ）
 * - `disabled` の部品の値は送らない（素の無効の入力欄と同じ）
 * - 囲んでいるフォームの `reset` で `onReset` を呼ぶ（上の `useFormReset`）
 *
 * `required` はブラウザの検証に乗らない（隠した input は検証の対象外）。エラーは各部品の `error` で出す。
 *
 * Composition Contract:
 * - Managed by: 呼び出す部品（値・既定の値・制御かどうか）
 * - Scroll lock: No
 */
export interface HiddenFormValueProps {
    name?: string;
    value: string | number | readonly (string | number)[] | null | undefined;
    disabled?: boolean;
    /** 囲んでいるフォームが reset されたとき。制御していない部品は、既定の値へ戻す */
    onReset?: () => void;
}
export declare function HiddenFormValue({ name, value, disabled, onReset }: HiddenFormValueProps): React.JSX.Element | null;

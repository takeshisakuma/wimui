/**
 * 「アクセシブル名を必ず持つ」を型で強制するためのユーティリティ。
 *
 * `role="progressbar"` のように**名前が無いと WCAG 違反になる role** を常に
 * 付けるコンポーネントで使う。`Progress` は長らく `aria-label={label}` の
 * `label` が任意という形で出荷されており、**名前の無い progressbar を作れる**
 * 状態だった（axe の `aria-progressbar-name`、impact: serious）。
 *
 * にもかかわらず a11y スイートは一度も鳴っていない。全ストーリーがたまたま
 * `label` を渡していたからで、**ガードが見ていたのは API ではなく
 * 「ストーリーの書き方」だった**（T53。2026-08-01 に `ProgressRing` で
 * label 無しのストーリーを書いた瞬間 serious が 2 ノード出て発覚した）。
 *
 * 名前の出所は 3 つあり、どれも正当:
 *   - `label`            … コンポーネントが可視ラベルとして描き、名前にも使う
 *   - `aria-label`       … 可視ラベルは別にある / 不要だが名前は要る
 *   - `aria-labelledby`  … 既存の見出しや文言を名前として指す
 *
 * `label` だけを必須にすると、可視ラベルを二重に出す羽目になる使い方
 * （実際に `Patterns/Form` が `aria-label` で書いている）が壊れる。
 * そこで**いずれか 1 つ**を要求する。
 */

/** 名前の出所として認めるプロパティ。 */
type NameSource = {
  label?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
};

/**
 * `Base` に「名前の出所を少なくとも 1 つ持つこと」を課す。
 *
 * ユニオンなので、どれか 1 つでも渡っていれば通り、1 つも無ければ
 * **呼び出し側がコンパイルエラーになる**。
 */
export type WithAccessibleName<Base> = Omit<Base, keyof NameSource> &
  (
    | { label: string; "aria-label"?: string; "aria-labelledby"?: string }
    | { label?: string; "aria-label": string; "aria-labelledby"?: string }
    | { label?: string; "aria-label"?: string; "aria-labelledby": string }
  );

/**
 * 実際に描くときの `aria-label`。`label` を可視ラベルとして描くコンポーネントは、
 * それをそのまま名前に使う。呼び出し側が `aria-label` / `aria-labelledby` を
 * 明示したときは**そちらを優先**する（重複した名前を作らない）。
 */
export function resolveAriaLabel(
  label: string | undefined,
  ariaLabel: string | undefined,
): string | undefined {
  return ariaLabel ?? label;
}

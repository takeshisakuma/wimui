/**
 * 並んだ項目の上で、矢印キーと Home / End が「次にどこへ行くか」を決める（T366）。
 *
 * Tabs / TabNavigation / Toolbar / Stepper / SegmentedControl / ToggleGroup が、それぞれ
 * 同じ計算を書いていた。ずれていたのは 3 点だけ ── 効く矢印の向き・無効の項目を飛ばすか・
 * 端で折り返すか。ここでは計算だけを持ち、フォーカスを動かす・選択を変える、は各部品に残す
 * （部品ごとに、項目の持ち方も、動いたあとにすることも違うため）。
 *
 * 無効の項目は飛ばす。飛ばさないと、Tabs では矢印で無効のタブが選ばれ、フォーカスだけが
 * 元のタブに残っていた（無効のボタンにはフォーカスが乗らない。T366 で見つけた）。
 *
 * Composition Contract:
 * - Managed by: 呼び出す部品（キーの処理・preventDefault・フォーカス・選択）
 * - Scroll lock: No
 */

/** どの矢印で動くか。`both` は上下左右のどれでも（向きを持たない並び）。 */
export type RovingOrientation = "horizontal" | "vertical" | "both";

export interface RovingIndexOptions {
  /** `KeyboardEvent.key` */
  key: string;
  /** 今の位置。並びの外（-1）なら、次へは先頭・前へは末尾 */
  current: number;
  /** 項目の数 */
  count: number;
  /** @default "both" */
  orientation?: RovingOrientation;
  /** 端で反対の端へ折り返すか。@default true */
  wrap?: boolean;
  /** その位置の項目が無効か。無効の項目には止まらない */
  isDisabled?: (index: number) => boolean;
}

const isNext = (key: string) => key === "ArrowRight" || key === "ArrowDown";

/** この並びで扱うキーか（扱うなら、呼び出し側は `preventDefault` してよい） */
export const isRovingKey = (key: string, orientation: RovingOrientation = "both"): boolean =>
  key === "Home" ||
  key === "End" ||
  (orientation !== "vertical" && (key === "ArrowRight" || key === "ArrowLeft")) ||
  (orientation !== "horizontal" && (key === "ArrowDown" || key === "ArrowUp"));

/**
 * 次の位置を返す。扱わないキー、または止まれる項目が 1 つも無いときは `null`。
 * 折り返さない並びで端にいるときは、今の位置をそのまま返す。
 */
export const getRovingIndex = ({
  key,
  current,
  count,
  orientation = "both",
  wrap = true,
  isDisabled = () => false,
}: RovingIndexOptions): number | null => {
  if (count <= 0 || !isRovingKey(key, orientation)) return null;

  // Home / End は端から内へ、矢印は今の位置から外へ。どちらも 1 つずつ進み、無効の項目には止まらない
  const edge = key === "Home" || key === "End";
  const step = key === "Home" || (!edge && isNext(key)) ? 1 : -1;
  const inside = current >= 0 && current < count;
  let i = edge || !inside ? (step === 1 ? -1 : count) : current;
  for (let n = 0; n < count; n++) {
    i += step;
    if (i < 0 || i >= count) {
      if (edge || !wrap) return inside && !edge ? current : null;
      i = (i + count) % count;
    }
    if (!isDisabled(i)) return i;
  }
  return null;
};

/**
 * 1 次元シンボル体系のエンコーダ。**描画から切り離してある**のは、バーの並びが
 * 規格で決まっていて単体で検証できるものだからで、`Barcode.tsx` 側は
 * 「1 と 0 の列をどう塗るか」だけを持つ。
 *
 * 対応は Code 128 と EAN-13 の 2 つ。前者は物流・チケット・社内 SKU、後者は
 * 小売の商品コードで、この 2 つで「バーコードを出したい」の大半が埋まる。
 * 体系を増やすのは後方互換なので、要求が出てから足せばよい。
 */
export type BarcodeFormat = "code128" | "ean13";
/**
 * EAN-13 の正規の印字レイアウト（T233）。
 *
 * 数字をバーの下へまとめて置くのは**近いけれど別の物**で、店頭の商品と見比べると
 * 違って見える。正規の印字では **ガードバーが数字の帯の底まで伸び**、**先頭桁が
 * シンボルの左外**に出て、残りが左右半分それぞれの下に 6 桁ずつ付く。
 *
 * **スキャナが読むのはバーだけなので、モジュール列は 1 文字も変えない。**
 * ここに出すのは「どこに何を印字するか」だけで、位置はすべてモジュール座標
 * （シンボルの先頭を 0 とする添字）で返す ── 画素は器の幅で変わるが、
 * モジュールの割り付けは体系が決めていて変わらないため。
 */
export type Ean13PrintLayout = {
    /** 下へ伸ばすガードバーのモジュール範囲 `[開始, 終了)`。左・中央・右の 3 組。 */
    guards: ReadonlyArray<readonly [number, number]>;
    /** シンボルの左外に置く 1 桁目。 */
    lead: string;
    /** 左半分の 6 桁と、その下に敷くモジュール範囲。 */
    left: {
        text: string;
        from: number;
        to: number;
    };
    /** 右半分の 6 桁と、その下に敷くモジュール範囲。 */
    right: {
        text: string;
        from: number;
        to: number;
    };
};
export type EncodedBarcode = {
    /** 1 = bar, 0 = space. One character per module. */
    modules: string;
    /** Human-readable interpretation printed under the bars. */
    text: string;
    /**
     * How the digits are printed, for the formats that specify it. Code 128 does
     * not, so it stays undefined and the value is printed under the bars as one
     * run of text.
     */
    print?: Ean13PrintLayout;
};
/** Test seam: the raw pattern table, so its invariants can be measured. */
export declare const code128Patterns: () => readonly string[];
/** 右から重み 1,3,1,3… を掛けて 10 の補数を取る（GS1 のモジュラス 10）。 */
export declare const ean13CheckDigit: (first12: string) => number;
/**
 * Encodes `value` into a module string, or returns `null` when the value cannot
 * be represented in `format` — an unencodable value must not be drawn, because a
 * barcode that scans to the wrong thing is worse than one that is missing.
 */
export declare const encodeBarcode: (value: string, format: BarcodeFormat) => EncodedBarcode | null;
/** Consecutive runs of the same module, as `[isBar, width]` pairs. */
export declare const toRuns: (modules: string) => Array<[boolean, number]>;

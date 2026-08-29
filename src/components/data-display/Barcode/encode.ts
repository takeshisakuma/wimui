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
  left: { text: string; from: number; to: number };
  /** 右半分の 6 桁と、その下に敷くモジュール範囲。 */
  right: { text: string; from: number; to: number };
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

/**
 * Code 128 の 106 個のパターン（値 0〜102 ＋ START A/B/C ＝ 103〜105。STOP だけは
 * 形が違うので下に分けてある）。1 文字が 1 エレメントの幅で、バーから始まって
 * バー/スペース を交互に読む。どのパターンも 6 エレメント・合計 11 モジュールで、
 * **バーの幅の合計は必ず偶数**になる（スキャナが 1 文字ごとに掛ける検査）。
 * この 3 つは `Barcode.test.tsx` が全 106 件について確かめている。
 */
const CODE128_PATTERNS = [
  "212222", "222122", "222221", "121223", "121322", "131222", "122213", "122312",
  "132212", "221213", "221312", "231212", "112232", "122132", "122231", "113222",
  "123122", "123221", "223211", "221132", "221231", "213212", "223112", "312131",
  "311222", "321122", "321221", "312212", "322112", "322211", "212123", "212321",
  "232121", "111323", "131123", "131321", "112313", "132113", "132311", "211313",
  "231113", "231311", "112133", "112331", "132131", "113123", "113321", "133121",
  "313121", "211331", "231131", "213113", "213311", "213131", "311123", "311321",
  "331121", "312113", "312311", "332111", "314111", "221411", "431111", "111224",
  "111422", "121124", "121421", "141122", "141221", "112214", "112412", "122114",
  "122411", "142112", "142211", "241211", "221114", "413111", "241112", "134111",
  "111242", "121142", "121241", "114212", "124112", "124211", "411212", "421112",
  "421211", "212141", "214121", "412121", "111143", "111341", "131141", "114113",
  "114311", "411113", "411311", "113141", "114131", "311141", "411131", "211412",
  "211214", "211232",
];

/** STOP だけが 7 エレメント（末尾に 2 モジュールのバーが付く）で 13 モジュール。 */
const CODE128_STOP = "2331112";

const START_B = 104;
const START_C = 105;
const CODE128_MODULO = 103;

/** エレメント幅の列を、バー始まりの 1/0 の列へ展開する。 */
const widthsToModules = (widths: string): string => {
  let out = "";
  for (let i = 0; i < widths.length; i += 1) {
    out += (i % 2 === 0 ? "1" : "0").repeat(Number(widths[i]));
  }
  return out;
};

/** Test seam: the raw pattern table, so its invariants can be measured. */
export const code128Patterns = (): readonly string[] => CODE128_PATTERNS;

const encodeCode128 = (value: string): EncodedBarcode | null => {
  if (value.length === 0) return null;

  const codes: number[] = [];

  // 全部が数字で偶数桁なら Code C（1 コードで 2 桁）。同じ内容が約半分の幅で済む。
  if (/^\d+$/.test(value) && value.length % 2 === 0) {
    codes.push(START_C);
    for (let i = 0; i < value.length; i += 2) {
      codes.push(Number(value.slice(i, i + 2)));
    }
  } else {
    // Code B は ASCII 32〜126。制御文字と非 ASCII は載せられない。
    if (!/^[\x20-\x7e]+$/.test(value)) return null;
    codes.push(START_B);
    for (const char of value) {
      codes.push(char.charCodeAt(0) - 32);
    }
  }

  // チェックキャラクタ: START の重みが 1、以降は位置そのものが重み。
  const checksum =
    codes.reduce((sum, code, index) => sum + code * (index === 0 ? 1 : index), 0) % CODE128_MODULO;
  codes.push(checksum);

  const modules = codes.map((code) => widthsToModules(CODE128_PATTERNS[code])).join("");
  return { modules: modules + widthsToModules(CODE128_STOP), text: value };
};

const EAN_L = [
  "0001101", "0011001", "0010011", "0111101", "0100011",
  "0110001", "0101111", "0111011", "0110111", "0001011",
];
const EAN_G = [
  "0100111", "0110011", "0011011", "0100001", "0011101",
  "0111001", "0000101", "0010001", "0001001", "0010111",
];
const EAN_R = [
  "1110010", "1100110", "1101100", "1000010", "1011100",
  "1001110", "1010000", "1000100", "1001000", "1110100",
];

/**
 * 先頭の桁は自分のバーを持たない。**左 6 桁を L と G のどちらで刻むか**という
 * 並びとして符号化されており、そのおかげで 13 桁が 12 桁分の幅に収まる。
 */
const EAN13_PARITY = [
  "LLLLLL", "LLGLGG", "LLGGLG", "LLGGGL", "LGLLGG",
  "LGGLLG", "LGGGLL", "LGLGLG", "LGLGGL", "LGGLGL",
];

/** EAN-13 は 1 桁を 7 モジュールで表す（L / G / R のどの表でも同じ）。 */
const EAN_DIGIT_MODULES = 7;
const EAN_GUARD = "101";
const EAN_CENTER = "01010";

/** 右から重み 1,3,1,3… を掛けて 10 の補数を取る（GS1 のモジュラス 10）。 */
export const ean13CheckDigit = (first12: string): number => {
  let sum = 0;
  for (let i = 0; i < 12; i += 1) {
    sum += Number(first12[i]) * (i % 2 === 0 ? 1 : 3);
  }
  return (10 - (sum % 10)) % 10;
};

const encodeEan13 = (value: string): EncodedBarcode | null => {
  if (!/^\d{12,13}$/.test(value)) return null;

  const first12 = value.slice(0, 12);
  const check = ean13CheckDigit(first12);
  // 13 桁で渡されたときは検算する。合わない番号を黙って描くと、読めるのに
  // 商品が引けないバーコードになる（一番見つけにくい壊れ方）。
  if (value.length === 13 && Number(value[12]) !== check) return null;

  const digits = `${first12}${check}`;
  const parity = EAN13_PARITY[Number(digits[0])];

  let left = "";
  for (let i = 0; i < 6; i += 1) {
    const digit = Number(digits[i + 1]);
    left += parity[i] === "L" ? EAN_L[digit] : EAN_G[digit];
  }

  let right = "";
  for (let i = 7; i < 13; i += 1) {
    right += EAN_R[Number(digits[i])];
  }

  // 印字の位置は体系が決めた割り付けから引く（数え間違いを持ち込まないよう、
  // 3 / 45 / 50 / 92 と書かずに guard と 1 桁 7 モジュールから組み立てる）。
  const guard = EAN_GUARD.length;
  const center = EAN_CENTER.length;
  const half = 6 * EAN_DIGIT_MODULES;
  const leftFrom = guard;
  const leftTo = leftFrom + half;
  const rightFrom = leftTo + center;
  const rightTo = rightFrom + half;

  return {
    modules: `${EAN_GUARD}${left}${EAN_CENTER}${right}${EAN_GUARD}`,
    text: digits,
    print: {
      guards: [
        [0, guard],
        [leftTo, rightFrom],
        [rightTo, rightTo + guard],
      ],
      lead: digits[0],
      left: { text: digits.slice(1, 7), from: leftFrom, to: leftTo },
      right: { text: digits.slice(7), from: rightFrom, to: rightTo },
    },
  };
};

/**
 * Encodes `value` into a module string, or returns `null` when the value cannot
 * be represented in `format` — an unencodable value must not be drawn, because a
 * barcode that scans to the wrong thing is worse than one that is missing.
 */
export const encodeBarcode = (value: string, format: BarcodeFormat): EncodedBarcode | null =>
  format === "ean13" ? encodeEan13(value) : encodeCode128(value);

/** Consecutive runs of the same module, as `[isBar, width]` pairs. */
export const toRuns = (modules: string): Array<[boolean, number]> => {
  const runs: Array<[boolean, number]> = [];
  for (const module of modules) {
    const isBar = module === "1";
    const last = runs[runs.length - 1];
    if (last && last[0] === isBar) last[1] += 1;
    else runs.push([isBar, 1]);
  }
  return runs;
};

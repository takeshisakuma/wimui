import { describe, it, expect } from "vitest";
import { computeInlineSide, computeInlineShift } from "./useInlineFloating";

// 引き金の隣に描く面の、向きと横のずれ（T342）。ブラウザでの動きは `vrt/inline-floating.e2e.spec.ts` が
// 見る。ここは、計算の境目だけを見る。
describe("computeInlineSide", () => {
  const viewportHeight = 720;

  it("下に収まるなら、下へ開く", () => {
    expect(computeInlineSide({ referenceTop: 100, referenceBottom: 140, floatingHeight: 200, viewportHeight })).toBe("bottom");
  });

  it("下に収まらず、上のほうが広いなら、上へ開く", () => {
    // 引き金が画面の下端（下の余地 0・上の余地 680）
    expect(computeInlineSide({ referenceTop: 680, referenceBottom: 720, floatingHeight: 200, viewportHeight })).toBe("top");
  });

  it("下に収まらなくても、下のほうが広いなら、下のまま（どちらにも収まらないときは、広いほう）", () => {
    // 面が画面より高い。下の余地 500・上の余地 180
    expect(computeInlineSide({ referenceTop: 180, referenceBottom: 220, floatingHeight: 900, viewportHeight })).toBe("bottom");
  });

  it("間隔のぶんまで入れて、ちょうど収まるなら、下のまま", () => {
    // 下の余地 208 ＝ 面の高さ 200 ＋ 見込む間隔 8
    expect(computeInlineSide({ referenceTop: 472, referenceBottom: 512, floatingHeight: 200, viewportHeight })).toBe("bottom");
    // 1px 足りないと、上へ
    expect(computeInlineSide({ referenceTop: 473, referenceBottom: 513, floatingHeight: 200, viewportHeight })).toBe("top");
  });
});

describe("computeInlineShift", () => {
  const viewportWidth = 1280;

  it("画面に収まっている面は、動かさない（端に接していても）", () => {
    expect(computeInlineShift(100, 400, viewportWidth)).toBe(0);
    // 余白なしで端まで置いた入力欄の面。端から 10px 以内でも、はみ出していなければ触らない
    expect(computeInlineShift(0, 1280, viewportWidth)).toBe(0);
    expect(computeInlineShift(1100, 1280, viewportWidth)).toBe(0);
  });

  it("右へはみ出す面は、右端から 10px 内側へ寄せる", () => {
    // 実測の PhoneInput: 面の右端が 1420（140px はみ出す）→ 1270 へ
    expect(computeInlineShift(1164, 1420, viewportWidth)).toBe(-150);
  });

  it("左へはみ出す面は、左端から 10px 内側へ寄せる", () => {
    expect(computeInlineShift(-30, 226, viewportWidth)).toBe(40);
  });

  it("画面より広い面は、反対側の端で止める（寄せすぎて、反対側をはみ出させない）", () => {
    // 幅 400 の画面に、幅 450 の面。右へはみ出しているが、左端より左へは寄せない
    expect(computeInlineShift(20, 470, 400)).toBe(-20);
    // 左へはみ出しているが、右端より右へは寄せない
    expect(computeInlineShift(-60, 390, 400)).toBe(10);
  });
});

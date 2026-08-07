import { describe, it, expect } from "vitest";
import { classify, STRONG_CHANNEL_DELTA } from "./vrt-diff-classify.js";
import fixture from "./fixtures/vrt-diff-metrics.json";

/**
 * 判定を**実データ**で固定する（T81）。
 *
 * 画像そのものではなく、実際のベースライン更新 3 組から測った数値を資産にしている。
 * 3 組とも「どれが実変更か」が独立に分かっているもので、**片方に過適合していない
 * ことを確かめられる**のがこの構成の目的:
 *
 *   #257 … アイコンの字形差し替え（起票の元になった 90 枚）
 *   #277 … 列幅が上限として効くようになった（レイアウトが動く）
 *   #278 … Alert のアイコンが 1 行目に揃った（レイアウトが動く）
 *
 * 生成手順は `scripts/fixtures/README.md`。
 */
describe("vrt-diff-classify", () => {
  const all = fixture.datasets.flatMap((d) =>
    d.images.map((i) => ({ ...i, dataset: d.id })),
  );

  // 起票時に「拾えること」が受け入れ条件として名指しされていたストーリー。
  const NAMED_BY_TICKET = [
    "sidebar--",
    "appshell--with-sidebar",
    "speeddial--custom-icons",
    "inputbase--multiple-right-icons",
    "baselistitem--with-right-section",
    "colorinput--custom-states",
    "patterns-page--maintenance-page",
  ];

  // 既知の限界。**拾えないことを明示的に固定する** ── 黙って見落とすのと、
  // 見落とすと分かったうえで通すのは別。dark は前景と背景の差が 64 に届かない。
  const KNOWN_MISSES = ["dark-components-internal-portal--custom-container"];

  // フィクスチャは `strongPct` を**測り終えた値**として持っているので、画素側の
  // 定数を変えても数字は追随しない。**変えたのに測り直していない状態**を、この
  // 突き合わせで落とす（変異テストで、これが無いと C の変異が素通りした）。
  it("フィクスチャは今の STRONG_CHANNEL_DELTA で測られている", () => {
    expect(fixture.measuredWithStrongChannelDelta).toBe(STRONG_CHANNEL_DELTA);
  });

  it("記録された 3 組すべてを読み込んでいる", () => {
    // 母数を出す。0 件で緑になる事故を防ぐ（T84 / T89 と同じ）。
    expect(fixture.datasets.map((d) => d.images.length)).toEqual([90, 103, 110]);
    expect(all.filter((i) => i.real)).toHaveLength(48);
  });

  it("ノイズを 1 枚も実変更と呼ばない", () => {
    const wrong = all
      .filter((i) => !i.real && classify(i) !== "noise")
      .map((i) => `${i.dataset} ${i.name} (${classify(i)})`);
    expect(wrong).toEqual([]);
  });

  it("実変更を noise と呼ばない（既知の限界を除く）", () => {
    const missed = all
      .filter((i) => i.real && classify(i) === "noise")
      .map((i) => i.name);
    expect(missed).toEqual(KNOWN_MISSES);
  });

  it("起票時に名指しされたストーリーをすべて拾う", () => {
    const named = all.filter(
      (i) => i.dataset === "#257" && NAMED_BY_TICKET.some((k) => i.name.includes(k)),
    );
    expect(named.length).toBeGreaterThan(0);
    expect(named.filter((i) => classify(i) === "noise")).toEqual([]);
  });

  it("差分が 0〜2 画素しかないものは noise のまま", () => {
    // 起票時の「鳴ってはいけない経路」。#257 の約 70 枚がこれにあたる。
    const tiny = all.filter((i) => !i.real && i.area < 0.001);
    expect(tiny.length).toBeGreaterThan(0);
    expect(tiny.every((i) => classify(i) === "noise")).toBe(true);
  });

  it("要素が動いただけの変更を moved として拾う（shift は 0 なのに）", () => {
    // T81 の核心。旧規則はこの 30 枚を 30 枚とも noise と報告していた。
    const moves = all.filter(
      (i) => i.real && (i.dataset === "#277" || i.dataset === "#278"),
    );
    expect(moves.length).toBe(30);
    expect(moves.every((i) => i.shift < 41)).toBe(true); // repaint では拾えない
    const found = moves.filter((i) => classify(i) !== "noise");
    expect(found).toHaveLength(30 - KNOWN_MISSES.length);
  });

  it("集中度では分けられなかった反例を noise のままにする", () => {
    // 589px が 51x16 に fill 72% で固まっているが、両リビジョンを切り出すと
    // 同じ「0:00 / 0:01」。文字が別のラスタライズで描き直されただけ。
    const audio = all.find((i) => i.name === "dark-components-media-audio--default");
    expect(audio).toBeDefined();
    expect(classify(audio)).toBe("noise");
  });

  it("従来の 2 軸はそのまま効く", () => {
    expect(classify({ shift: 60, area: 0.01, strongPct: 0 })).toBe("repaint");
    expect(classify({ shift: 0, area: 5, strongPct: 0 })).toBe("glyph");
    expect(classify({ shift: 0, area: 0.01, strongPct: 0 })).toBe("noise");
  });
});

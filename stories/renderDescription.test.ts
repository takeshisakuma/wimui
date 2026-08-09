import { describe, it, expect } from "vitest";

import { renderDescription } from "./renderDescription";

// この関数を書いている途中で 2 つ壊した。どちらも「動いているように見える」形で
// 通り抜けたので、対照ごとテストに残す。props 表は VRT にも host-matrix にも
// 写らない（VRT は `type === "story"` だけ、host-matrix はコンポーネントの
// computed style 比較）ため、ここが唯一の網になる。
describe("renderDescription", () => {
  it("山括弧を文字として出す（タグとして食われない）", () => {
    // `Video.tracks` の実文。dangerouslySetInnerHTML に素で渡すと `<track>` が
    // 要素になって本文から消える。docgen の説明 2459 件のうち 17 件が該当する。
    expect(renderDescription("passed as <track> elements")).toBe("passed as &lt;track&gt; elements");
  });

  it("バックティックを <code> にする", () => {
    expect(renderDescription("Set `preset` to `none`.")).toBe("Set <code>preset</code> to <code>none</code>.");
  });

  it("コード内の山括弧もエスケープしたまま <code> に入れる", () => {
    expect(renderDescription("keep `<li role=\"none\">` here")).toBe(
      "keep <code>&lt;li role=&quot;none&quot;&gt;</code> here",
    );
  });

  it("空行は段落の区切りとして残し、単なる改行は空白にする", () => {
    expect(renderDescription("first\nline\n\nsecond")).toBe("first line<br /><br />second");
  });

  it("フェンス付きコードブロックの改行を保つ", () => {
    const out = renderDescription("before\n\n```tsx\nconst a = 1;\nconst b = 2;\n```\n\nafter");
    expect(out).toContain("<pre><code>const a = 1;\nconst b = 2;</code></pre>");
    // インラインのバックティック変換にフェンスを食わせない
    expect(out).not.toContain("@@WIM_BLOCK_");
    expect(out).not.toContain("<code>tsx");
  });

  it("空白で挟んだ数字を差し戻しの番兵と取り違えない", () => {
    // 番兵を ` n ` にしていたときは、ここが `undefined` になっていた。
    expect(renderDescription("Defaults to 3 items")).toBe("Defaults to 3 items");
  });

  it("Markdown の強調は解釈しない（audit-mdx が源流で止める前提）", () => {
    expect(renderDescription("a **bold** word")).toBe("a **bold** word");
  });
});

import fs from "node:fs";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Barcode } from "./Barcode";
import { encodeBarcode, ean13CheckDigit, code128Patterns, toRuns } from "./encode";
import { resetBarcodeWarnings } from "./warn-unencodable-value";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

/*
 * ここに置いた 3 本のモジュール列は、jsbarcode 3.12.3 を対照にした検証を
 * 通ったときの出力そのもの（Code 128 は値 0〜102 の全パターンと、B / C 両方の
 * ランダム 300 件で一致を確認した）。対照は依存に入れないので、**一致していた
 * 時点の実物**をここに凍結して、あとからの改変を検出する。
 */
const GOLDEN = {
  "code128:WIMUI":
    "110100100001110100011011000100010101110110001101110111011000100010100110000101100011101011",
  "code128:1234": "110100111001011001110010001011000100100111101100011101011",
  "ean13:4901777018686":
    "10100010110100111001100101110110010001001000101010111001011001101001000101000010010001010000101",
};

describe("encodeBarcode", () => {
  it("reproduces the module strings verified against an external encoder", () => {
    expect(encodeBarcode("WIMUI", "code128")?.modules).toBe(GOLDEN["code128:WIMUI"]);
    expect(encodeBarcode("1234", "code128")?.modules).toBe(GOLDEN["code128:1234"]);
    expect(encodeBarcode("4901777018686", "ean13")?.modules).toBe(GOLDEN["ean13:4901777018686"]);
  });

  // スキャナが 1 文字ごとに掛ける検査。表を打ち間違えると、対照を外した後は
  // ここだけが気づける。
  it("keeps the three structural invariants of the Code 128 table", () => {
    const patterns = code128Patterns();
    expect(patterns).toHaveLength(106);
    for (const pattern of patterns) {
      expect(pattern).toHaveLength(6);
      const widths = [...pattern].map(Number);
      expect(widths.reduce((a, b) => a + b, 0)).toBe(11);
      // バー（0・2・4 番目）の幅の合計は必ず偶数
      expect((widths[0] + widths[2] + widths[4]) % 2).toBe(0);
    }
    expect(new Set(patterns).size).toBe(patterns.length);
  });

  it("switches to Code C for even-length digits, which halves the symbol", () => {
    // 8 桁: C なら start+4+check+stop、B なら start+8+check+stop
    const asC = encodeBarcode("12345678", "code128")!.modules.length;
    const asB = encodeBarcode("123456789", "code128")!.modules.length;
    expect(asC).toBe(6 * 11 + 13);
    expect(asB).toBe(11 * 11 + 13);
  });

  it("calculates the EAN-13 check digit and appends it", () => {
    expect(ean13CheckDigit("490177701868")).toBe(6);
    expect(encodeBarcode("490177701868", "ean13")?.text).toBe("4901777018686");
    // 12 桁と、正しい 13 桁は同じシンボルになる
    expect(encodeBarcode("490177701868", "ean13")?.modules).toBe(
      encodeBarcode("4901777018686", "ean13")?.modules,
    );
  });

  it("refuses values it cannot represent instead of drawing an approximation", () => {
    expect(encodeBarcode("4901777018680", "ean13")).toBeNull(); // チェックディジット違い
    expect(encodeBarcode("49017770186", "ean13")).toBeNull(); // 11 桁
    expect(encodeBarcode("49017770186A", "ean13")).toBeNull(); // 数字でない
    expect(encodeBarcode("", "code128")).toBeNull();
    expect(encodeBarcode("バーコード", "code128")).toBeNull(); // 非 ASCII
    expect(encodeBarcode("a\tb", "code128")).toBeNull(); // 制御文字
  });

  it("always starts and ends the symbol with a bar", () => {
    for (const [value, format] of [
      ["WIMUI", "code128"],
      ["1234", "code128"],
      ["4901777018686", "ean13"],
    ] as const) {
      const modules = encodeBarcode(value, format)!.modules;
      expect(modules.startsWith("1")).toBe(true);
      expect(modules.endsWith("1")).toBe(true);
    }
  });

  it("collapses modules into runs without losing width", () => {
    expect(toRuns("110010")).toEqual([
      [true, 2],
      [false, 2],
      [true, 1],
      [false, 1],
    ]);
  });
});

describe("Barcode", () => {
  beforeEach(() => {
    resetBarcodeWarnings();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("names the symbol with the value a scanner would read", () => {
    render(<Barcode value="WIMUI" />);
    expect(screen.getByRole("img")).toHaveAttribute("aria-label", "Barcode WIMUI");
  });

  it("prefers an explicit label over the value", () => {
    render(<Barcode value="WIMUI" label="Order number" />);
    expect(screen.getByRole("img")).toHaveAttribute("aria-label", "Order number");
  });

  it("prints the value under the bars, and hides it when asked", () => {
    const { rerender } = render(<Barcode value="WIMUI" />);
    expect(screen.getByText("WIMUI")).toBeInTheDocument();
    rerender(<Barcode value="WIMUI" showValue={false} />);
    expect(screen.queryByText("WIMUI")).toBeNull();
    // 見た目から消しても、名前は値を持ったまま
    expect(screen.getByRole("img")).toHaveAttribute("aria-label", "Barcode WIMUI");
  });

  describe("EAN-13 の正規の印字レイアウト（T233）", () => {
    // **仕様の数値をそのまま書く。** 実装の定数から計算して突き合わせると、
    // 数え方ごと間違えていても一致してしまう（生成と検証が同じ道を通る）。
    // EAN-13 は 95 モジュール: ガード 0-2 / 左 6 桁 3-44 / 中央 45-49 /
    // 右 6 桁 50-91 / ガード 92-94。
    const layout = encodeBarcode("4901777018686", "ean13")!.print!;

    it("puts the guard bars where the symbology says", () => {
      expect(layout.guards).toEqual([
        [0, 3],
        [45, 50],
        [92, 95],
      ]);
    });

    it("splits the digits into 1 + 6 + 6", () => {
      expect(layout.lead).toBe("4");
      expect(layout.left.text).toBe("901777");
      expect(layout.right.text).toBe("018686");
      expect(layout.lead + layout.left.text + layout.right.text).toBe("4901777018686");
    });

    it("lays each group over its own half", () => {
      expect(layout.left).toMatchObject({ from: 3, to: 45 });
      expect(layout.right).toMatchObject({ from: 50, to: 92 });
    });

    it("covers the whole symbol without gaps or overlaps", () => {
      const spans = [
        [layout.guards[0][0], layout.guards[0][1]],
        [layout.left.from, layout.left.to],
        [layout.guards[1][0], layout.guards[1][1]],
        [layout.right.from, layout.right.to],
        [layout.guards[2][0], layout.guards[2][1]],
      ];
      for (let i = 1; i < spans.length; i += 1) {
        expect(spans[i][0]).toBe(spans[i - 1][1]);
      }
      expect(spans[0][0]).toBe(0);
      expect(spans[spans.length - 1][1]).toBe(
        encodeBarcode("4901777018686", "ean13")!.modules.length,
      );
    });

    // Code 128 は印字の割り付けを持たない体系。持っているふりをしない。
    it("is absent for Code 128", () => {
      expect(encodeBarcode("WIMUI", "code128")!.print).toBeUndefined();
    });
  });

  /** 印字された数字を、描かれている順に読み取る。 */
  const printedDigits = (container: HTMLElement) =>
    Array.from(container.querySelectorAll("svg text"))
      .map((t) => t.textContent ?? "")
      .join("");

  it("prints the calculated check digit for a 12-digit EAN-13", () => {
    const { container } = render(<Barcode value="490177701868" format="ean13" />);
    // 1 桁ずつ別の <text> に分かれる（T233）ので、描画順に繋いで確かめる。
    // **順序ごと見る**ことになるので、以前の「1 本の文字列」より強い検査になる。
    expect(printedDigits(container)).toBe("4901777018686");
  });

  /**
   * **印字の色は axe では守れない。実測で確かめた（T233）。**
   *
   * 印字は `aria-hidden` の SVG の中にある 1 文字の `<text>` で、axe は
   * `Element content is too short to determine if it is actual text content` として
   * **incomplete** に落とす。スペックには「短い文字を伸ばして測り直し、本物なら
   * violations へ格上げする」仕組み（T108）があるが、**この形には効かない** ──
   * `fill` を `#e8e8e8`（白地に対して約 1.1:1）にして a11y スイートを回しても
   * **10 件すべて緑**のままだった。凍結してあれば読めない印字が素通りする。
   *
   * そこで色そのものを縛る: **印字はバーと同じ固定色**で塗られていること。
   * バーの色は「暗いバー・明るい地」というスキャナ側の前提そのものなので、
   * そこに揃っている限り印字も読める。ソースの字面を見るのは、実行時には
   * CSS Modules がプロキシされて実際の色が取れないため（測れない道具で
   * 測ったふりをしない）。
   */
  describe("印字の色（axe が測れない分をここで縛る）", () => {
    const scss = fs.readFileSync(
      "src/components/data-display/Barcode/barcode.module.scss",
      "utf8",
    );

    /** `selector` のブロックの中で最初に現れる `fill` / `color` の値。 */
    const paintOf = (selector: string): string => {
      const at = scss.indexOf(selector);
      expect(at, `${selector} が SCSS に無い`).toBeGreaterThan(-1);
      const block = scss.slice(at, at + 400);
      const match = block.match(/(?:fill|color):\s*([^;]+);/);
      expect(match, `${selector} に fill / color が無い`).not.toBeNull();
      return match![1].trim();
    };

    it("paints the printed digits with the same fixed colour as the bars", () => {
      expect(paintOf(".printedDigit")).toBe(paintOf(".symbol"));
    });

    it("paints the Code 128 value with that colour too", () => {
      expect(paintOf(".value")).toBe(paintOf(".symbol"));
    });

    // 「暗いバー・明るい地」はスキャナ側の前提。テーマで反転する色を使わない。
    it("uses a colour that does not follow the theme", () => {
      expect(paintOf(".symbol")).toBe("var(--wim-color-surface-void)");
    });
  });

  describe("EAN-13 を正規の印字レイアウトで描く（T233）", () => {
    const setup = (props = {}) =>
      render(
        <Barcode value="4901777018686" format="ean13" moduleWidth={2} height={64} {...props} />,
      );

    it("extends the guard bars below the data bars", () => {
      const { container } = setup();
      const rects = Array.from(container.querySelectorAll("rect"));
      const guards = rects.filter((r) => r.getAttribute("data-guard") === "true");
      const data = rects.filter((r) => r.getAttribute("data-guard") !== "true");

      // ガードは左・中央・右で、バーの本数は 2 + 2 + 2 = 6。
      expect(guards).toHaveLength(6);
      const guardHeight = Number(guards[0].getAttribute("height"));
      const dataHeight = Number(data[0].getAttribute("height"));
      expect(guardHeight).toBe(64);
      expect(dataHeight).toBeLessThan(guardHeight);
      // すべてのガードが同じ高さ、すべてのデータバーも同じ高さ。
      expect(new Set(guards.map((r) => r.getAttribute("height"))).size).toBe(1);
      expect(new Set(data.map((r) => r.getAttribute("height"))).size).toBe(1);
    });

    it("puts the lead digit outside the symbol, in the quiet zone", () => {
      const { container } = setup();
      const texts = Array.from(container.querySelectorAll("svg text"));
      const lead = texts[0];
      expect(lead.textContent).toBe("4");
      // 静止空白は 11 モジュール ＝ 22px。シンボルの先頭より左に収まる。
      expect(Number(lead.getAttribute("x"))).toBeLessThan(11 * 2);
      expect(lead.getAttribute("text-anchor")).toBe("end");
    });

    // 数字は自分のバーの真下に来る。まとめて字送りで散らすと 1 桁ずれる。
    it("centres each digit under its own seven modules", () => {
      const { container } = setup();
      const texts = Array.from(container.querySelectorAll("svg text")).slice(1);
      expect(texts).toHaveLength(12);

      const xs = texts.map((t) => Number(t.getAttribute("x")));
      // 左半分は モジュール 3 から、1 桁 7 モジュール、中心は +3.5。静止空白 11 を足す。
      const expectedLeft = [0, 1, 2, 3, 4, 5].map((i) => (11 + 3 + i * 7 + 3.5) * 2);
      // 右半分は モジュール 50 から。
      const expectedRight = [0, 1, 2, 3, 4, 5].map((i) => (11 + 50 + i * 7 + 3.5) * 2);
      expect(xs).toEqual([...expectedLeft, ...expectedRight]);
    });

    it("uses a square coordinate space so the digits are not stretched", () => {
      const { container } = setup();
      const svg = container.querySelector("svg")!;
      // 95 モジュール + 静止空白 22 = 117、× moduleWidth 2 = 234。
      expect(svg.getAttribute("viewBox")).toBe("0 0 234 64");
      expect(svg.getAttribute("preserveAspectRatio")).toBeNull();
    });

    it("prints nothing and keeps every bar full height when showValue is off", () => {
      const { container } = setup({ showValue: false });
      expect(container.querySelectorAll("svg text")).toHaveLength(0);
      const heights = new Set(
        Array.from(container.querySelectorAll("rect")).map((r) => r.getAttribute("height")),
      );
      expect(heights).toEqual(new Set(["64"]));
    });

    // Code 128 は割り付けを持たない体系なので、これまでどおり下に 1 本で置く。
    it("leaves Code 128 printing the value under the bars", () => {
      const { container } = render(<Barcode value="WIMUI" format="code128" />);
      expect(container.querySelectorAll("svg text")).toHaveLength(0);
      expect(screen.getByText("WIMUI")).toBeInTheDocument();
    });
  });

  // 「暗いバー・明るい地」はスキャナ側の前提なので、テーマではなく構造で保つ。
  it("draws one rect per bar run, inside a quiet zone on both sides", () => {
    const { container } = render(<Barcode value="WIMUI" moduleWidth={2} height={64} />);
    const modules = encodeBarcode("WIMUI", "code128")!.modules;
    const bars = toRuns(modules).filter(([isBar]) => isBar);
    const rects = container.querySelectorAll("rect");
    expect(rects).toHaveLength(bars.length);

    const svg = container.querySelector("svg")!;
    // 90 モジュール + 左右 11 ずつ = 112、× moduleWidth
    expect(svg.getAttribute("viewBox")).toBe(`0 0 ${modules.length + 22} 64`);
    expect(svg.getAttribute("width")).toBe(String((modules.length + 22) * 2));
    // 最初のバーは静止空白のぶん右から始まる
    expect(rects[0].getAttribute("x")).toBe("11");
  });

  it("keeps the bars out of the accessibility tree, since the name carries the value", () => {
    const { container } = render(<Barcode value="WIMUI" />);
    expect(container.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
  });

  it("draws nothing and says so when the value cannot be encoded", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    const { container } = render(<Barcode value="4901777018680" format="ean13" />);

    expect(container.querySelector("svg")).toBeNull();
    expect(container.querySelector("[data-invalid]")).not.toBeNull();
    expect(screen.getByText("This value cannot be encoded as EAN-13.")).toBeInTheDocument();
    // 何を渡したのかは画面に残す（呼び出し元を探せるように）
    expect(screen.getByText("4901777018680")).toBeInTheDocument();
    expect(warn).toHaveBeenCalledTimes(1);
    expect(warn.mock.calls[0][0]).toContain("EAN-13");
  });

  it("warns once per value, not once per render", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    const { rerender } = render(<Barcode value="4901777018680" format="ean13" />);
    rerender(<Barcode value="4901777018680" format="ean13" />);
    expect(warn).toHaveBeenCalledTimes(1);
  });
});

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

  it("prints the calculated check digit for a 12-digit EAN-13", () => {
    render(<Barcode value="490177701868" format="ean13" />);
    expect(screen.getByText("4901777018686")).toBeInTheDocument();
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

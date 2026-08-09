import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, afterEach } from "vitest";
import { RangeCalendar } from "./RangeCalendar";
import { setWimLocale, getWimLocale } from "@/i18n/instance";

describe("RangeCalendar", () => {
  it("renders calendar grid", () => {
    render(<RangeCalendar />);
    expect(screen.getByText("Sun")).toBeInTheDocument();
    expect(screen.getByText("Sat")).toBeInTheDocument();
  });

  it("selects a range when dates are clicked", () => {
    const handleChange = vi.fn();
    render(<RangeCalendar onChange={handleChange} />);

    // Find all day cells. Day cells now have role="gridcell"
    const days = screen.getAllByRole("gridcell");

    // Click first day
    fireEvent.click(days[10]);
    expect(handleChange).toHaveBeenCalledWith([expect.any(Date), null]);

    // Click another day
    fireEvent.click(days[15]);
    expect(handleChange).toHaveBeenCalledWith([
      expect.any(Date),
      expect.any(Date),
    ]);
  });

  it("handles disabled state", () => {
    render(<RangeCalendar disabled />);
    const buttons = screen.getAllByRole("button");
    buttons.forEach((btn) => expect(btn).toBeDisabled());
  });

  it("renders with controlled value", () => {
    const start = new Date(2024, 0, 10);
    const end = new Date(2024, 0, 20);
    render(<RangeCalendar value={[start, end]} />);
    expect(screen.getByText("Sun")).toBeInTheDocument();
  });

  it("renders with defaultValue", () => {
    const start = new Date(2024, 0, 5);
    const end = new Date(2024, 0, 15);
    render(<RangeCalendar defaultValue={[start, end]} />);
    expect(screen.getByText("Sun")).toBeInTheDocument();
  });

  // T107: 曜日ヘッダは `["日","月",…]` のローカル定数で、**UI の言語に関係なく
  // 日本語が出ていた**。上の 3 件は `getByText("日")` を期待値にしており、
  // **欠陥のほうが正しい挙動として固定されていた**（だから誰も気付かなかった）。
  //
  // 受け入れ条件は「locale を変えると曜日が追従すること」なので、そこを直接見る。
  // 内蔵リソースは en / ja / pt の 3 言語だが、`Intl` から導いているので
  // **辞書に無い言語でも正しく出る**（de を混ぜてあるのはそれを示すため）。
  describe("曜日ヘッダは locale に追従する（T107）", () => {
    const original = getWimLocale();
    afterEach(() => setWimLocale(original));

    it.each([
      ["en", "Sun", "Sat"],
      ["ja", "日", "土"],
      ["pt", "dom.", "sáb."],
      ["de", "So", "Sa"],
    ])("locale=%s なら %s / %s", (locale, sunday, saturday) => {
      setWimLocale(locale);
      render(<RangeCalendar />);
      expect(screen.getByText(sunday)).toBeInTheDocument();
      expect(screen.getByText(saturday)).toBeInTheDocument();
    });
  });
});

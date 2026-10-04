import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import { setWimLocale, getWimLocale } from "@/i18n/instance";
import { QueryBuilder, type QueryGroup } from "./form/QueryBuilder/QueryBuilder";
import { PhoneInput } from "./form/PhoneInput/PhoneInput";
import { Carousel } from "./data-display/Carousel/Carousel";
import { ThreadList } from "./ai/ThreadList/ThreadList";
import { ModelSelector } from "./ai/ModelSelector/ModelSelector";
import { ThemeToggle } from "./form/ThemeToggle/ThemeToggle";
import { RangeSlider } from "./form/RangeSlider/RangeSlider";
import { Transfer } from "./form/Transfer/Transfer";
import { ImageCompare } from "./media/ImageCompare/ImageCompare";

// 英語の直書きだった既定の文言が、表示言語（setWimLocale）に従うこと。
// 以前は `check-src-hardcoded.js` のラチェットで 26 件を凍結していた（QueryBuilder の演算子・
// PhoneInput の国名・Carousel の既定のラベル）。部品ごとのテストは英語しか見ていない。
// GanttChart は入れていない: charts に翻訳を読ませると `wimui/charts` が +9 kB になるので、英語のまま残した。
describe("runtime strings follow the active locale", () => {
  const original = getWimLocale();
  afterEach(() => setWimLocale(original));

  const group: QueryGroup = {
    id: "root",
    combinator: "and",
    not: false,
    rules: [{ id: "r1", field: "age", operator: ">=", value: "18" }],
  };

  it("QueryBuilder: operator labels", async () => {
    setWimLocale("ja");
    await act(async () => {
      render(<QueryBuilder fields={[{ name: "age", label: "Age", type: "number" }]} query={group} onChange={() => {}} />);
    });
    expect(screen.getByText("以上")).toBeInTheDocument();
    expect(screen.queryByText("Greater than or equal")).toBeNull();
  });

  it("QueryBuilder: `operators` overrides still win over the translation", async () => {
    setWimLocale("ja");
    await act(async () => {
      render(
        <QueryBuilder
          fields={[{ name: "age", label: "Age", type: "number" }]}
          query={group}
          onChange={() => {}}
          labels={{ operators: { greater_than_or_equal: "≥ (custom)" } }}
        />,
      );
    });
    expect(screen.getByText("≥ (custom)")).toBeInTheDocument();
  });

  it("PhoneInput: country names, and typeahead matches the displayed name", () => {
    setWimLocale("ja");
    render(<PhoneInput />);
    const trigger = screen.getByRole("combobox");
    fireEvent.click(trigger);
    expect(screen.getByRole("option", { name: /日本/ })).toBeInTheDocument();
    expect(screen.queryByText("Japan")).toBeNull();

    fireEvent.keyDown(trigger, { key: "韓" });
    const active = document.getElementById(trigger.getAttribute("aria-activedescendant") ?? "");
    expect(active).toHaveTextContent("韓国");
  });

  it("Carousel: default control labels", () => {
    setWimLocale("pt");
    render(
      <Carousel>
        <div>one</div>
        <div>two</div>
      </Carousel>,
    );
    expect(screen.getByRole("button", { name: "Slide anterior" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Próximo slide" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Ir para o slide 2" })).toBeInTheDocument();
  });

  it("Carousel: `labels` overrides still win over the translation", () => {
    setWimLocale("pt");
    render(
      <Carousel labels={{ nextSlide: "Avançar" }}>
        <div>one</div>
        <div>two</div>
      </Carousel>,
    );
    expect(screen.getByRole("button", { name: "Avançar" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Slide anterior" })).toBeInTheDocument();
  });

  // T312: 12 部品の既定の文言（#832 の検査は空白を含む文字列しか拾わず、数えられていなかった）
  it("Carousel: role descriptions", () => {
    setWimLocale("ja");
    const { container } = render(
      <Carousel>
        <div>one</div>
        <div>two</div>
      </Carousel>,
    );
    expect(container.querySelector('[aria-roledescription="カルーセル"]')).not.toBeNull();
    expect(container.querySelector('[aria-roledescription="スライド"]')).not.toBeNull();
    expect(container.querySelector('[aria-roledescription="carousel"]')).toBeNull();
  });

  it("ThreadList: empty state, new thread and list name", () => {
    setWimLocale("ja");
    render(<ThreadList threads={[]} onNewThread={() => {}} />);
    expect(screen.getByRole("navigation", { name: "会話の履歴" })).toBeInTheDocument();
    expect(screen.getByText("会話はまだありません")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "新しい会話" })).toBeInTheDocument();
  });

  it("ThreadList: `labels` overrides still win over the translation", () => {
    setWimLocale("ja");
    render(<ThreadList threads={[]} labels={{ empty: "Nothing here" }} />);
    expect(screen.getByText("Nothing here")).toBeInTheDocument();
  });

  it("ModelSelector: trigger name and placeholder", () => {
    setWimLocale("pt");
    render(<ModelSelector models={[{ id: "a", name: "Model A" }]} />);
    expect(screen.getByRole("combobox", { name: "Selecione um modelo" })).toBeInTheDocument();
  });

  it("ThemeToggle: mode names", () => {
    setWimLocale("ja");
    render(<ThemeToggle />);
    expect(screen.queryByText("System")).toBeNull();
    expect(document.body.innerHTML).not.toContain("Toggle theme");
    expect(document.body.innerHTML).toMatch(/テーマを切り替え|システム|ライト|ダーク/);
  });

  it("RangeSlider: thumb names, with and without a label", () => {
    setWimLocale("ja");
    const { unmount } = render(<RangeSlider />);
    expect(screen.getByRole("slider", { name: "開始" })).toBeInTheDocument();
    expect(screen.getByRole("slider", { name: "終了" })).toBeInTheDocument();
    unmount();
    render(<RangeSlider label="価格" />);
    expect(screen.getAllByRole("slider")[0]).toHaveAttribute("aria-label", "価格（開始）");
    expect(screen.getAllByRole("slider")[1]).toHaveAttribute("aria-label", "価格（終了）");
  });

  it("Transfer: default list titles and the empty text", () => {
    setWimLocale("ja");
    render(<Transfer dataSource={[]} targetKeys={[]} onChange={() => {}} />);
    expect(screen.getByText("選択可能")).toBeInTheDocument();
    expect(screen.getByText("選択済み")).toBeInTheDocument();
    expect(screen.getAllByText("データがありません").length).toBeGreaterThan(0);
    expect(screen.queryByText("Source")).toBeNull();
  });

  it("ImageCompare: handle name", () => {
    setWimLocale("pt");
    render(<ImageCompare before="a.png" after="b.png" />);
    expect(screen.getByRole("slider", { name: "Arraste para comparar" })).toBeInTheDocument();
  });
});

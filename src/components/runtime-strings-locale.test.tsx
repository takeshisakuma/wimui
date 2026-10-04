import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import { setWimLocale, getWimLocale } from "@/i18n/instance";
import { QueryBuilder, type QueryGroup } from "./form/QueryBuilder/QueryBuilder";
import { PhoneInput } from "./form/PhoneInput/PhoneInput";
import { Carousel } from "./data-display/Carousel/Carousel";

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
});

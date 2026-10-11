/**
 * 名前と説明の属性の、測り残しで出た 4 部品（T340 / T341 の続き）。
 *
 * 2026-10-11 の定期点検は、当て推量の props で描けた 257 部品だけを見ていて、57 部品が描けずに
 * 残っていた。正しい props と文脈で描き直したら、4 部品で `aria-label` が読まれる要素に届かなかった。
 *
 * - BottomSheetContent: 受ける口が無い（`BottomSheetTitle` を置かないシートは、名前を付けられなかった）
 * - ModelSelector: 包みの `div` に付く（引き金の combobox は、内蔵の名前のまま）
 * - SplitButton: ロールの無い包みに付く
 * - Anchor: 受ける口が無い
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BottomSheet, BottomSheetContent, BottomSheetTitle } from "../overlay/BottomSheet/BottomSheet";
import { ModelSelector } from "../ai/ModelSelector/ModelSelector";
import { SplitButton } from "../form/SplitButton/SplitButton";
import { Anchor } from "../navigation/Anchor/Anchor";

vi.mock("react-i18next", async () => ({
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

const Outside = ({ children }: { children: React.ReactNode }) => (
  <>
    <h2 id="ext-label">Shipping options</h2>
    <p id="ext-desc">Applies to this order only.</p>
    {children}
  </>
);

describe("BottomSheetContent", () => {
  it("aria-label を渡すと、タイトルの無いシートに名前が付く", () => {
    render(
      <BottomSheet defaultOpen>
        <BottomSheetContent aria-label="Filters">body</BottomSheetContent>
      </BottomSheet>,
    );
    // 対照: 以前は受ける口が無く、名前の無い dialog が出ていた
    expect(screen.getByRole("dialog", { name: "Filters" })).toBeInTheDocument();
  });

  it("aria-labelledby と aria-describedby を渡すと、外の見出しと説明文が名前と説明になる", () => {
    render(
      <Outside>
        <BottomSheet defaultOpen>
          <BottomSheetContent aria-labelledby="ext-label" aria-describedby="ext-desc">
            body
          </BottomSheetContent>
        </BottomSheet>
      </Outside>,
    );
    const dialog = screen.getByRole("dialog", { name: "Shipping options" });
    expect((dialog.getAttribute("aria-describedby") ?? "").split(" ")).toContain("ext-desc");
  });

  it("何も渡さなければ、自分のタイトルが名前になる（これまでどおり）", () => {
    render(
      <BottomSheet defaultOpen>
        <BottomSheetContent>
          <BottomSheetTitle>Own title</BottomSheetTitle>
        </BottomSheetContent>
      </BottomSheet>,
    );
    expect(screen.getByRole("dialog", { name: "Own title" })).toBeInTheDocument();
  });
});

describe("ModelSelector", () => {
  const models = [{ id: "a", name: "Model A" }];

  it("名前と説明が、包みではなく引き金（combobox）に付く", () => {
    const { container } = render(
      <Outside>
        <ModelSelector models={models} aria-labelledby="ext-label" aria-describedby="ext-desc" />
      </Outside>,
    );
    const trigger = screen.getByRole("combobox", { name: "Shipping options" });
    expect(trigger).toHaveAccessibleDescription("Applies to this order only.");
    const wrapper = container.querySelector(".wim-model-selector");
    expect(wrapper).not.toHaveAttribute("aria-labelledby");
    expect(wrapper).not.toHaveAttribute("aria-describedby");
  });

  it("標準の aria-label が、labels.triggerAriaLabel に勝つ", () => {
    render(<ModelSelector models={models} labels={{ triggerAriaLabel: "Old way" }} aria-label="Standard wins" />);
    expect(screen.getByRole("combobox", { name: "Standard wins" })).toBeInTheDocument();
  });

  it("labels.triggerAriaLabel だけを渡したときは、これまでどおりその名前になる", () => {
    render(<ModelSelector models={models} labels={{ triggerAriaLabel: "Old way" }} />);
    expect(screen.getByRole("combobox", { name: "Old way" })).toBeInTheDocument();
  });
});

describe("SplitButton", () => {
  const actions = [{ label: "Save as draft", onSelect: () => {} }];

  it("名前を渡すと、根が group になり、名前がそこに付く。2 つのボタンは自分の名前のまま", () => {
    render(
      <SplitButton actions={actions} toggleLabel="More save options" aria-label="Save actions">
        Save
      </SplitButton>,
    );
    expect(screen.getByRole("group", { name: "Save actions" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "More save options" })).toBeInTheDocument();
  });

  it("名前を渡さなければ、根にロールを付けない（これまでどおり）", () => {
    const { container } = render(
      <SplitButton actions={actions} toggleLabel="More save options">
        Save
      </SplitButton>,
    );
    expect(container.querySelector(".wim-split-button")).not.toHaveAttribute("role");
  });
});

describe("Anchor", () => {
  const items = [{ key: "1", href: "#s1", title: "Section 1" }];

  it("aria-label を渡すと、navigation のランドマークになり、名前が付く", () => {
    render(<Anchor items={items} aria-label="On this page" />);
    // 対照: 以前は受ける口が無く、渡しても出力のどこにも出なかった
    expect(screen.getByRole("navigation", { name: "On this page" })).toBeInTheDocument();
  });

  it("aria-labelledby を渡すと、外の見出しが名前になる", () => {
    render(
      <Outside>
        <Anchor items={items} aria-labelledby="ext-label" />
      </Outside>,
    );
    expect(screen.getByRole("navigation", { name: "Shipping options" })).toBeInTheDocument();
  });

  it("名前を渡さなければ、ロールを付けない（名前の無い navigation を増やさない）", () => {
    const { container } = render(<Anchor items={items} />);
    expect(container.querySelector(".wim-anchor")).not.toHaveAttribute("role");
  });
});

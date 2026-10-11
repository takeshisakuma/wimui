/**
 * 名前が意味を持つロールの根で、標準の `aria-label` / `aria-labelledby` を受けること（T341）。
 *
 * 2026-10-11 の定期点検 7-4 で、名前を付ける口の形が部品ごとに違うと分かった ── camelCase の
 * `ariaLabel`、`labels` の中、`title` や `label`、口が見当たらないもの。JSX では、ハイフンを含む属性は
 * 型の検査を受けないので、`aria-label` を渡しても型エラーにならず、黙って捨てられていた。
 *
 * 決めたこと（ユーザー判断）: 標準の属性を全部の対象で受ける。既にある口は残す。両方あるときは、
 * **標準の属性が勝つ**。見えるラベルを持つ部品だけは、見えるラベルが勝つ（T328 と同じ）。
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { DataGrid } from "../data-display/DataGrid/DataGrid";
import { TreeView, TreeViewItem } from "../data-display/TreeView/TreeView";
import { FAQSection } from "../data-display/FAQSection/FAQSection";
import { Pagination } from "../navigation/Pagination/Pagination";
import { CommandPaletteList } from "../navigation/CommandPalette/CommandPalette";
import { SignaturePad } from "../form/SignaturePad/SignaturePad";
import { SourceCitation } from "../ai/SourceCitation/SourceCitation";
import { Notification } from "../feedback/Notification/Notification";
import { Toast } from "../feedback/Toast/Toast";
import { Menu, MenuItem } from "../overlay/Menu/Menu";

vi.mock("react-i18next", async () => ({
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

const Outside = ({ children }: { children: React.ReactNode }) => (
  <>
    <h2 id="ext-label">Quarterly report</h2>
    {children}
  </>
);

type Props = Record<string, unknown>;
// [名前, ロール, 描き方, 既にある口で名前を付ける props（無ければ null）]
type Case = [string, string, (p: Props) => React.ReactElement, Props | null];

const cases: Case[] = [
  ["DataGrid", "grid", (p) => <DataGrid columns={[{ key: "name", title: "Name" }]} data={[{ id: 1, name: "Alice" }]} {...p} />, { ariaLabel: "Old way" }],
  [
    "TreeView",
    "tree",
    (p) => (
      <TreeView {...p}>
        <TreeViewItem value="1" label="Root" />
      </TreeView>
    ),
    { labels: { treeAriaLabel: "Old way" } },
  ],
  ["Pagination", "navigation", (p) => <Pagination total={50} {...p} />, { labels: { navAriaLabel: "Old way" } }],
  ["SignaturePad", "img", (p) => <SignaturePad {...p} />, { canvasAriaLabel: "Old way" }],
  ["SourceCitation", "group", (p) => <SourceCitation title="Old way" {...p} />, {}],
  ["FAQSection", "region", (p) => <FAQSection items={[{ question: "Q", answer: "A" }]} {...p} />, null],
  ["Notification", "alert", (p) => <Notification title="Saved" {...p} />, null],
  ["Toast", "status", (p) => <Toast title="Saved" duration={0} {...p} />, null],
  [
    "Menu",
    "menu",
    (p) => (
      <Menu {...p}>
        <MenuItem>Item</MenuItem>
      </Menu>
    ),
    null,
  ],
  ["CommandPaletteList", "listbox", (p) => <CommandPaletteList {...p}>{null}</CommandPaletteList>, null],
];

describe("標準の属性で、ロールの根に名前を付けられる（T341）", () => {
  describe.each(cases)("%s", (_name, role, make, oldWay) => {
    it("aria-label を渡すと、それが名前になる", () => {
      render(make({ "aria-label": "Sales by region" }));
      // 対照: 以前は、渡しても出力のどこにも出なかった
      expect(screen.getByRole(role, { name: "Sales by region" })).toBeInTheDocument();
    });

    it("aria-labelledby を渡すと、外の見出しが名前になる（aria-label は並べない）", () => {
      render(<Outside>{make({ "aria-labelledby": "ext-label", "aria-label": "Ignored" })}</Outside>);
      const el = screen.getByRole(role, { name: "Quarterly report" });
      expect(el).not.toHaveAttribute("aria-label");
    });

    if (oldWay) {
      it("既にある口と両方渡したときは、標準の属性が勝つ", () => {
        render(make({ ...oldWay, "aria-label": "Standard wins" }));
        expect(screen.getByRole(role, { name: "Standard wins" })).toBeInTheDocument();
      });

      it("既にある口だけを渡したときは、これまでどおりその名前になる", () => {
        render(make(oldWay));
        expect(screen.getByRole(role, { name: "Old way" })).toBeInTheDocument();
      });
    }
  });

  it("SignaturePad: 見えるラベルがあるときは、渡した aria-label より、見えるラベルが名前になる", () => {
    render(<SignaturePad label="Signature" aria-label="Ignored" />);
    const canvas = screen.getByRole("img", { name: /Signature/ });
    expect(canvas).not.toHaveAttribute("aria-label");
  });

  it("CommandPaletteList: 何も渡さなくても、listbox に名前が付く", () => {
    render(<CommandPaletteList>{null}</CommandPaletteList>);
    // 対照: 以前は、名前なしの listbox が出ていた（名前が要るロール）
    expect(screen.getByRole("listbox")).toHaveAccessibleName();
  });

  it("FAQSection: 名前を渡さなければ、section に名前の属性を付けない（これまでどおり）", () => {
    const { container } = render(<FAQSection items={[{ question: "Q", answer: "A" }]} />);
    const section = container.querySelector(".wim-faq-section");
    expect(section).not.toBeNull();
    expect(section).not.toHaveAttribute("aria-label");
    expect(section).not.toHaveAttribute("aria-labelledby");
  });
});

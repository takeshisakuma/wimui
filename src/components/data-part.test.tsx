import React from "react";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, waitFor, cleanup } from "@testing-library/react";
import { AILabel } from "./ai/AILabel/AILabel";
import { Calendar } from "./data-display/Calendar/Calendar";
import { KanbanBoard } from "./data-display/Kanban/Kanban";
import { Select } from "./form/Select/Select";

vi.mock("react-i18next", async () => ({
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

/**
 * 部位名（data-part）が、ソースに書いてあるだけでなく DOM に届くことを確かめる（T384）。
 * `check:part-api` はソースの文字列を読むので、Slot や Transition が属性を落としても気づけない。
 * ここでは部品を描き、開く・切り替えるなどして全部位を出し、スナップショットの一覧と突き合わせる。
 */
const snapshot: { parts: Record<string, string[]> } = JSON.parse(
  fs.readFileSync(path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../part-api-snapshot.json"), "utf8"),
);

const seenParts = (container: ParentNode, into: Set<string>) => {
  container.querySelectorAll<HTMLElement>("[data-part]").forEach((el) => into.add(el.dataset.part!));
};

/** 部品ごとに、全部位を出すまでの手順。描いた DOM から見えた部位名を返す */
const RECIPES: Record<string, () => Promise<Set<string>>> = {
  AILabel: async () => {
    const seen = new Set<string>();
    render(<AILabel>From the receipt photo.</AILabel>);
    fireEvent.click(screen.getByRole("button"));
    seenParts(document, seen);
    return seen;
  },
  Calendar: async () => {
    const seen = new Set<string>();
    render(<Calendar defaultValue={new Date(2024, 0, 15)} />);
    seenParts(document, seen);
    fireEvent.click(document.querySelector('[data-part="title-button"]')!);
    seenParts(document, seen);
    fireEvent.click(document.querySelector('[data-part="title-button"]')!);
    seenParts(document, seen);
    return seen;
  },
  Select: async () => {
    const seen = new Set<string>();
    render(
      <Select
        grouped
        searchable
        searchPlaceholder="Search"
        options={[{ label: "Fruit", options: [{ label: "Apple", value: "a" }, { type: "separator" }, { label: "Pear", value: "p" }] }]}
      />,
    );
    fireEvent.click(screen.getByRole("combobox"));
    await waitFor(() => expect(screen.getByRole("listbox")).toBeInTheDocument());
    seenParts(document, seen);
    fireEvent.change(screen.getByLabelText("Search"), { target: { value: "zzz" } });
    seenParts(document, seen);
    return seen;
  },
  Kanban: async () => {
    const seen = new Set<string>();
    render(
      <KanbanBoard columns={[{ id: "todo", title: "To Do", items: [] }, { id: "done", title: "Done", items: [] }]}>
        <KanbanBoard.Column id="todo" title="To Do" cardCount={1}>
          <KanbanBoard.Card id="card-1">Card 1</KanbanBoard.Card>
        </KanbanBoard.Column>
        <KanbanBoard.Column id="done" title="Done" cardCount={0} />
      </KanbanBoard>,
    );
    seenParts(document, seen);
    fireEvent.click(document.querySelector('[data-part="move-button"]')!);
    seenParts(document, seen);
    return seen;
  },
};

describe("data-part（部位名）", () => {
  it("スナップショットにある部品は、すべて手順を持つ", () => {
    expect(Object.keys(snapshot.parts).sort()).toEqual(Object.keys(RECIPES).sort());
  });

  for (const [name, recipe] of Object.entries(RECIPES)) {
    it(`${name} の部位はすべて DOM に出る`, async () => {
      const seen = await recipe();
      cleanup();
      expect([...seen].sort()).toEqual([...(snapshot.parts[name] ?? [])].sort());
    });
  }
});

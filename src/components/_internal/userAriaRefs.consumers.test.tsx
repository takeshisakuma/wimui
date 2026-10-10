/**
 * 利用者が渡した `aria-labelledby` / `aria-describedby` / `aria-label` が、出力から消えないこと（T328）。
 *
 * 2026-10-10 の定期点検で、ラベルやエラーを prop で渡さずに、外の見出しや説明文を参照で
 * 結び付けようとすると、渡した属性が出ない部品が 8 つあった。原因は共通で、`{...props}` の
 * あとに `aria-labelledby={label ? labelId : undefined}` のように固定で書いていたため、
 * 利用者の値が `undefined` で上書きされていた。部品ごとではなく、原因ごとに 1 か所で見る。
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { CheckboxGroup } from "../form/CheckboxGroup/CheckboxGroup";
import { SwitchGroup } from "../form/SwitchGroup/SwitchGroup";
import { RadioGroup } from "../form/RadioGroup/RadioGroup";
import { CounterTextarea } from "../form/CounterTextarea/CounterTextarea";
import { ToggleGroup } from "../form/ToggleGroup/ToggleGroup";
import { TagInput } from "../form/TagInput/TagInput";
import { KanbanBoard } from "../data-display/Kanban/Kanban";
import { Drawer, DrawerContent, DrawerTitle } from "../overlay/Drawer/Drawer";
import { Dialog, DialogContent, DialogTitle } from "../overlay/Dialog/Dialog";

vi.mock("react-i18next", async () => ({
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

const options = [
  { value: "a", label: "A" },
  { value: "b", label: "B" },
];

/** 外に置いた見出しと説明文。参照が「解決して読まれる」ことまで見る。 */
const Outside = ({ children }: { children: React.ReactNode }) => (
  <>
    <h2 id="ext-label">Notification channels</h2>
    <p id="ext-desc">Pick at least one.</p>
    {children}
  </>
);
const refs = { "aria-labelledby": "ext-label", "aria-describedby": "ext-desc" };

describe("利用者が渡した参照を捨てない（T328）", () => {
  const groups: [string, string, (p: Record<string, unknown>) => React.ReactElement][] = [
    ["CheckboxGroup", "group", (p) => <CheckboxGroup options={options} {...p} />],
    ["SwitchGroup", "group", (p) => <SwitchGroup options={options} {...p} />],
    ["RadioGroup", "radiogroup", (p) => <RadioGroup options={options} {...p} />],
    ["ToggleGroup", "radiogroup", (p) => <ToggleGroup options={options} {...p} />],
  ];

  describe.each(groups)("%s", (_name, role, make) => {
    it("label も error も無いとき、外の見出しと説明文が名前と説明になる", () => {
      render(<Outside>{make(refs)}</Outside>);
      const group = screen.getByRole(role, { name: "Notification channels" });
      expect(group).toHaveAccessibleDescription("Pick at least one.");
    });

    it("label があるときは、部品のラベルが名前のまま", () => {
      render(<Outside>{make({ ...refs, label: "Channels" })}</Outside>);
      expect(screen.getByRole(role, { name: /Channels/ })).toBeInTheDocument();
    });

    it("error があるときは、利用者の説明とエラーの両方が説明に並ぶ", () => {
      render(<Outside>{make({ ...refs, error: "Required" })}</Outside>);
      const group = screen.getByRole(role, { name: "Notification channels" });
      const ids = (group.getAttribute("aria-describedby") ?? "").split(" ");
      expect(ids).toContain("ext-desc");
      expect(ids).toHaveLength(2);
    });
  });

  it("CounterTextarea: 外の見出しと説明文が、入力欄の名前と説明になる", () => {
    render(
      <Outside>
        <CounterTextarea maxLength={10} {...refs} />
      </Outside>,
    );
    const box = screen.getByRole("textbox", { name: "Notification channels" });
    expect(box).toHaveAccessibleDescription("Pick at least one.");
  });

  describe("TagInput", () => {
    it("外の見出しと説明文が、入力欄の名前と説明になる（内蔵の名前で上書きしない）", () => {
      render(
        <Outside>
          <TagInput {...refs} />
        </Outside>,
      );
      const box = screen.getByRole("textbox", { name: "Notification channels" });
      expect(box).toHaveAccessibleDescription("Pick at least one.");
      expect(box).not.toHaveAttribute("aria-label");
    });

    it("aria-label を渡すと、それが入力欄の名前になる", () => {
      render(<TagInput aria-label="Recipients" />);
      expect(screen.getByRole("textbox", { name: "Recipients" })).toBeInTheDocument();
    });

    it("何も渡さなければ、内蔵の名前が付く（これまでどおり）", () => {
      render(<TagInput />);
      expect(screen.getByRole("textbox").getAttribute("aria-label")).toBeTruthy();
    });

    it("根に渡した属性が、根に出る", () => {
      const { container } = render(<TagInput data-probe="x" />);
      expect(container.querySelector(".wim-tag-input")).toHaveAttribute("data-probe", "x");
    });
  });

  describe("Kanban", () => {
    const columns = [{ id: "todo", title: "To Do", items: [] }];

    it("aria-label を渡すと、盤の名前になる", () => {
      render(<KanbanBoard columns={columns} aria-label="Sprint 12" />);
      expect(screen.getByRole("region", { name: "Sprint 12" })).toBeInTheDocument();
    });

    it("aria-labelledby を渡すと、外の見出しが盤の名前になる", () => {
      render(
        <Outside>
          <KanbanBoard columns={columns} aria-labelledby="ext-label" />
        </Outside>,
      );
      expect(screen.getByRole("region", { name: "Notification channels" })).toBeInTheDocument();
    });

    it("何も渡さなければ、内蔵の名前が付く（これまでどおり）", () => {
      render(<KanbanBoard columns={columns} />);
      expect(screen.getByRole("region")).toHaveAttribute("aria-label");
    });
  });

  describe.each([
    ["Dialog", Dialog, DialogContent, DialogTitle],
    ["Drawer", Drawer, DrawerContent, DrawerTitle],
  ] as const)("%s", (_name, Root, Content, Title) => {
    it("Content に渡した aria-labelledby が、自分のタイトルの id で上書きされない", () => {
      render(
        <Outside>
          <Root defaultOpen>
            <Content {...refs}>body</Content>
          </Root>
        </Outside>,
      );
      const dialog = screen.getByRole("dialog", { name: "Notification channels" });
      expect((dialog.getAttribute("aria-describedby") ?? "").split(" ")).toContain("ext-desc");
    });

    it("何も渡さなければ、自分のタイトルが名前になる（これまでどおり）", () => {
      render(
        <Root defaultOpen>
          <Content>
            <Title>Own title</Title>
          </Content>
        </Root>,
      );
      expect(screen.getByRole("dialog", { name: "Own title" })).toBeInTheDocument();
    });
  });

  it("Drawer: Content に渡した role を捨てない", () => {
    render(
      <Drawer defaultOpen>
        <DrawerContent role="alertdialog" aria-label="Unsaved changes">
          body
        </DrawerContent>
      </Drawer>,
    );
    expect(screen.getByRole("alertdialog", { name: "Unsaved changes" })).toBeInTheDocument();
  });
});

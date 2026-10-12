/**
 * 利用者が渡した `aria-label` / `aria-labelledby` / `aria-describedby` が、読まれる要素に届くこと（T340）。
 *
 * T329（`userAriaRefs.wrappers.consumers.test.tsx`）と同じ測定を、入力系の 36 部品の外へ広げた分。
 * 2026-10-11 の定期点検 7-4 で、11 部品が外れた。形は 3 つ。
 *
 * - **包みに落ちる**: PromptInput / ThemeToggle（アイコンの形）/ ImageCompare / ImageCropper / Terminal
 * - **一部が消える**（受ける口が無い属性がある）: CopyButton / BackTop / VirtualList
 * - **口が無い**（3 つとも出ない）: Dropzone / FileUpload / QueryBuilder
 *
 * 行き先の決め方は T329 と同じ。名前は、部品のラベルが無いときだけ通す。参照（`aria-labelledby`）が
 * あるときは、内蔵の `aria-label` を並べない（参照が勝つので、残しても読まれない）。
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { PromptInput } from "../ai/PromptInput/PromptInput";
import { Terminal } from "../ai/Terminal/Terminal";
import { ThemeToggle } from "../form/ThemeToggle/ThemeToggle";
import { ImageCropper } from "../form/ImageCropper/ImageCropper";
import { CopyButton } from "../form/CopyButton/CopyButton";
import { Dropzone } from "../form/Dropzone/Dropzone";
import { FileUpload } from "../form/FileUpload/FileUpload";
import { QueryBuilder } from "../form/QueryBuilder/QueryBuilder";
import { ImageCompare } from "../media/ImageCompare/ImageCompare";
import { BackTop } from "../navigation/BackTop/BackTop";
import { VirtualList } from "../data-display/VirtualList/VirtualList";

vi.mock("react-i18next", async () => ({
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

/** 外に置いた見出しと説明文。参照が「解決して読まれる」ことまで見る。 */
const Outside = ({ children }: { children: React.ReactNode }) => (
  <>
    <h2 id="ext-label">Release notes</h2>
    <p id="ext-desc">Visible to the whole team.</p>
    {children}
  </>
);
const refs = { "aria-labelledby": "ext-label", "aria-describedby": "ext-desc" };

/** 包みに、名前と説明の属性が残っていないこと（残っていても読まれないので、届いたように見えるだけ）。 */
const expectWrapperClean = (wrapper: Element | null) => {
  expect(wrapper).not.toBeNull();
  expect(wrapper).not.toHaveAttribute("aria-describedby");
  expect(wrapper).not.toHaveAttribute("aria-labelledby");
  expect(wrapper).not.toHaveAttribute("aria-label");
};

describe("利用者が渡した参照が、読まれる要素に届く（T340・入力系の外）", () => {
  // 操作要素が 1 つで、内蔵の名前を持つ部品。[名前, ロール, 包みのクラス（無ければ null）, 描き方]
  type Case = [string, string, string | null, (p: Record<string, unknown>) => React.ReactElement];
  const single: Case[] = [
    ["PromptInput", "textbox", ".wim-prompt-input", (p) => <PromptInput {...p} />],
    ["ImageCompare", "slider", ".wim-image-compare", (p) => <ImageCompare before="a.png" after="b.png" {...p} />],
    ["CopyButton", "button", null, (p) => <CopyButton value="text" {...p} />],
    ["BackTop", "button", null, (p) => <BackTop {...p} />],
    ["Dropzone", "button", null, (p) => <Dropzone {...p} />],
    ["FileUpload", "button", null, (p) => <FileUpload {...p} />],
    ["QueryBuilder", "region", null, (p) => <QueryBuilder fields={[{ name: "title", label: "Title", type: "string" }]} {...p} />],
    ["Terminal", "log", ".wim-terminal", (p) => <Terminal lines={[]} title="Build output" {...p} />],
  ];

  describe.each(single)("%s", (_name, role, wrapperSelector, make) => {
    it("外の見出しと説明文が、操作要素の名前と説明になる", () => {
      const { container } = render(<Outside>{make(refs)}</Outside>);
      const el = screen.getByRole(role, { name: "Release notes" });
      expect(el).toHaveAccessibleDescription(/Visible to the whole team\./);
      // 参照が名前になるときは、内蔵の名前（aria-label）を並べない。CopyButton だけは残す ── 外すと、
      // Button がアイコン名を名前として付けるので（名前は、参照が勝つので変わらない）。
      if (_name !== "CopyButton") expect(el).not.toHaveAttribute("aria-label");
      if (wrapperSelector) expectWrapperClean(container.querySelector(wrapperSelector));
    });

    it("aria-label を渡すと、それが操作要素の名前になる", () => {
      render(make({ "aria-label": "Changelog" }));
      expect(screen.getByRole(role, { name: "Changelog" })).toBeInTheDocument();
    });

    it("何も渡さなければ、内蔵の名前のまま（これまでどおり）", () => {
      render(make({}));
      const el = screen.getAllByRole(role)[0];
      expect(el).toHaveAccessibleName();
      // FileUpload だけは、部品が説明を 1 つ持つ（選んだファイルの名前。ボタンに着いたときに読まれる）。
      if (_name === "FileUpload") expect(el).toHaveAccessibleDescription(/No file selected/i);
      else expect(el).not.toHaveAttribute("aria-describedby");
    });
  });

  describe("ThemeToggle", () => {
    it("アイコンの形: 名前と説明が、包みではなくボタンに付く。いまのモードは名前に残る", () => {
      const { container } = render(
        <Outside>
          <ThemeToggle defaultValue="light" {...refs} />
        </Outside>,
      );
      const button = screen.getByRole("button");
      // 対照: 利用者の名前だけにすると、いまのモードが読まれなくなる
      expect(button).toHaveAccessibleName(/^Release notes .+/);
      expect(button).toHaveAccessibleDescription("Visible to the whole team.");
      expectWrapperClean(container.querySelector(".wim-theme-toggle"));
    });

    it("アイコンの形: aria-label を渡すと、内蔵の名前の代わりになり、モードが後ろに付く", () => {
      render(<ThemeToggle defaultValue="light" aria-label="Appearance" />);
      expect(screen.getByRole("button")).toHaveAccessibleName(/^Appearance \(.+\)$/);
    });

    it("分割の形: 名前と説明が group に付く（これまでどおり）", () => {
      render(
        <Outside>
          <ThemeToggle variant="segmented" {...refs} />
        </Outside>,
      );
      expect(screen.getByRole("group", { name: "Release notes" })).toHaveAccessibleDescription("Visible to the whole team.");
    });
  });

  describe("ImageCropper", () => {
    it("名前を渡すと、根が group になり、名前と説明がそこに付く。中の操作は内蔵の名前のまま", () => {
      render(
        <Outside>
          <ImageCropper src="a.png" {...refs} />
        </Outside>,
      );
      const group = screen.getByRole("group", { name: "Release notes" });
      expect(group).toHaveAccessibleDescription("Visible to the whole team.");
      // 対照: 位置を動かす領域の名前まで利用者のものにすると、何をする領域かが読まれなくなる
      expect(screen.getByRole("application")).not.toHaveAccessibleName("Release notes");
      expect(screen.getByRole("application")).toHaveAccessibleName();
    });

    it("名前を渡さなければ、根にロールを付けない（これまでどおり）", () => {
      const { container } = render(<ImageCropper src="a.png" />);
      expect(container.querySelector(".wim-image-cropper")).not.toHaveAttribute("role");
    });
  });

  describe("VirtualList", () => {
    const list = (p: Record<string, unknown>) => (
      <VirtualList items={[{ id: 1 }]} itemHeight={40} height={120} renderItem={() => <span>row</span>} {...p} />
    );

    it("説明の参照が、リストに付く（名前の参照は、これまでどおり）", () => {
      render(<Outside>{list(refs)}</Outside>);
      // 対照: 以前は、説明を受ける口が無く、渡しても出なかった
      expect(screen.getByRole("list", { name: "Release notes" })).toHaveAccessibleDescription("Visible to the whole team.");
    });
  });

  describe("部品のラベルやエラーがあるとき", () => {
    it("Dropzone / FileUpload: label があるときは、部品のラベルが名前のまま。説明はエラーと並ぶ", () => {
      for (const C of [Dropzone, FileUpload]) {
        const { unmount } = render(
          <Outside>
            <C label="Attachments" error="Too large" aria-label="Ignored" aria-describedby="ext-desc" />
          </Outside>,
        );
        const button = screen.getByRole("button", { name: /Attachments/ });
        expect(button).not.toHaveAttribute("aria-label");
        const ids = (button.getAttribute("aria-describedby") ?? "").split(" ");
        expect(ids).toContain("ext-desc");
        expect(ids.length).toBeGreaterThanOrEqual(2);
        unmount();
      }
    });

    it("PromptInput: label があるときは、部品のラベルが名前のまま。説明はエラーと並ぶ", () => {
      render(
        <Outside>
          <PromptInput label="Message" error="Required" aria-label="Ignored" aria-describedby="ext-desc" />
        </Outside>,
      );
      const box = screen.getByRole("textbox", { name: /Message/ });
      expect(box).not.toHaveAttribute("aria-label");
      const ids = (box.getAttribute("aria-describedby") ?? "").split(" ");
      expect(ids).toContain("ext-desc");
      expect(ids).toHaveLength(2);
    });

    it("QueryBuilder: 標準の aria-label が、labels.regionAriaLabel に勝つ", () => {
      render(
        <QueryBuilder
          fields={[{ name: "title", label: "Title", type: "string" }]}
          labels={{ regionAriaLabel: "From labels" }}
          aria-label="From the standard attribute"
        />,
      );
      expect(screen.getByRole("region", { name: "From the standard attribute" })).toBeInTheDocument();
    });

    it("Terminal: aria-label が、title に勝つ。渡さなければ title が名前", () => {
      const { unmount } = render(<Terminal lines={[]} title="Build output" aria-label="Deploy log" />);
      expect(screen.getByRole("log", { name: "Deploy log" })).toBeInTheDocument();
      unmount();
      render(<Terminal lines={[]} title="Build output" />);
      expect(screen.getByRole("log", { name: "Build output" })).toBeInTheDocument();
    });
  });
});

/**
 * Dropdown と Menubar の、引き金と面に渡した `id` / `aria-labelledby`（T346）。
 *
 * どちらも、props を広げたあとに内部の `id` と `aria-labelledby` を置いていたので、渡した値が、
 * エラーも警告も無く、内部の値に置き換わっていた。
 */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "../overlay/Dropdown/Dropdown";
import { Menubar } from "../navigation/Menubar/Menubar";

vi.mock("react-i18next", async () => ({
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("Dropdown", () => {
  const renderDropdown = (triggerProps: Record<string, string>, menuProps: Record<string, string>) => {
    render(
      <>
        <h2 id="ext-heading">Row actions</h2>
        <Dropdown>
          <DropdownTrigger {...triggerProps}>Open</DropdownTrigger>
          <DropdownMenu {...menuProps}>
            <DropdownItem>Edit</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </>,
    );
    const trigger = screen.getByRole("button", { name: "Open" });
    fireEvent.click(trigger);
    return { trigger, menu: screen.getByRole("menu") };
  };

  it("引き金に渡した id が付き、メニューの名前の参照も、その id を指す", () => {
    const { trigger, menu } = renderDropdown({ id: "row-7-actions" }, {});
    // 対照: 以前は wim-dropdown-trigger-… に置き換わっていた
    expect(trigger).toHaveAttribute("id", "row-7-actions");
    expect(menu).toHaveAttribute("aria-labelledby", "row-7-actions");
    expect(menu).toHaveAccessibleName("Open");
  });

  it("メニューに渡した id が付き、引き金の aria-controls も、その id を指す", () => {
    const { trigger, menu } = renderDropdown({}, { id: "row-7-menu" });
    expect(menu).toHaveAttribute("id", "row-7-menu");
    expect(trigger).toHaveAttribute("aria-controls", "row-7-menu");
  });

  it("メニューに渡した aria-labelledby が、引き金の名前より優先される", () => {
    const { menu } = renderDropdown({}, { "aria-labelledby": "ext-heading" });
    expect(menu).toHaveAccessibleName("Row actions");
  });

  it("何も渡さなければ、内部の id で対応する（これまでどおり）", () => {
    const { trigger, menu } = renderDropdown({}, {});
    expect(trigger.id).toMatch(/^wim-dropdown-trigger-/);
    expect(menu.id).toMatch(/^wim-dropdown-menu-/);
    expect(menu).toHaveAttribute("aria-labelledby", trigger.id);
    expect(trigger).toHaveAttribute("aria-controls", menu.id);
  });
});

describe("Menubar", () => {
  const renderMenubar = (triggerProps: Record<string, string>, contentProps: Record<string, string>) => {
    render(
      <>
        <h2 id="ext-heading">File commands</h2>
        <Menubar>
          <Menubar.Menu value="file">
            <Menubar.Trigger {...triggerProps}>File</Menubar.Trigger>
            <Menubar.Content {...contentProps}>
              <Menubar.Item>New</Menubar.Item>
            </Menubar.Content>
          </Menubar.Menu>
        </Menubar>
      </>,
    );
    const trigger = screen.getByRole("menuitem", { name: "File" });
    fireEvent.click(trigger);
    return { trigger, menu: screen.getByRole("menu") };
  };

  it("引き金に渡した id が付き、面の名前の参照も、その id を指す", () => {
    const { trigger, menu } = renderMenubar({ id: "file-trigger" }, {});
    expect(trigger).toHaveAttribute("id", "file-trigger");
    expect(menu).toHaveAttribute("aria-labelledby", "file-trigger");
    expect(menu).toHaveAccessibleName("File");
  });

  it("面に渡した id が付き、引き金の aria-controls も、その id を指す", () => {
    const { trigger, menu } = renderMenubar({}, { id: "file-menu" });
    expect(menu).toHaveAttribute("id", "file-menu");
    expect(trigger).toHaveAttribute("aria-controls", "file-menu");
  });

  it("面に渡した aria-labelledby が、引き金の名前より優先される", () => {
    const { menu } = renderMenubar({}, { "aria-labelledby": "ext-heading" });
    expect(menu).toHaveAccessibleName("File commands");
  });

  it("何も渡さなければ、内部の id で対応する（これまでどおり）", () => {
    const { trigger, menu } = renderMenubar({}, {});
    expect(trigger.id).toMatch(/^wim-menubar-trigger-/);
    expect(menu).toHaveAttribute("aria-labelledby", trigger.id);
    expect(trigger).toHaveAttribute("aria-controls", menu.id);
  });
});

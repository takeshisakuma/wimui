import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Menubar } from "./Menubar";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("Menubar", () => {
  it("exposes role=menubar with top-level menuitems", () => {
    render(
      <Menubar aria-label="Application">
        <Menubar.Menu value="file">
          <Menubar.Trigger>File</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item>New</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
      </Menubar>,
    );
    expect(screen.getByRole("menubar", { name: "Application" })).toBeInTheDocument();
    expect(screen.getByRole("menuitem", { name: "File" })).toBeInTheDocument();
  });

  it("opens a menu on trigger click and closes on item select", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(
      <Menubar>
        <Menubar.Menu value="file">
          <Menubar.Trigger>File</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item onSelect={onSelect}>New</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
      </Menubar>,
    );

    await user.click(screen.getByRole("menuitem", { name: "File" }));
    expect(screen.getByRole("menu")).toBeInTheDocument();
    await user.click(screen.getByRole("menuitem", { name: "New" }));
    expect(onSelect).toHaveBeenCalledTimes(1);
    await waitFor(() => {
      expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    });
  });

  // メニューの中にフォーカスがあるまま閉じると、面ごと消えてフォーカスが body へ落ちる（T307）。
  const renderTwoMenus = () =>
    render(
      <Menubar aria-label="Application">
        <Menubar.Menu value="file">
          <Menubar.Trigger>File</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item>New</Menubar.Item>
            <Menubar.Item>Open</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
        <Menubar.Menu value="edit">
          <Menubar.Trigger>Edit</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item>Undo</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
      </Menubar>,
    );

  it("returns focus to the trigger when an item is chosen with the keyboard", async () => {
    const user = userEvent.setup();
    renderTwoMenus();
    const file = screen.getByRole("menuitem", { name: "File" });
    file.focus();
    await user.keyboard("{Enter}");
    await waitFor(() => expect(screen.getByRole("menuitem", { name: "New" })).toHaveFocus());
    await user.keyboard("{Enter}");
    await waitFor(() => expect(screen.queryByRole("menuitem", { name: "New" })).not.toBeInTheDocument());
    expect(file).toHaveFocus();
  });

  it("closes the open menu on Tab and moves on from the trigger", async () => {
    const user = userEvent.setup();
    renderTwoMenus();
    const file = screen.getByRole("menuitem", { name: "File" });
    file.focus();
    await user.keyboard("{Enter}");
    await waitFor(() => expect(screen.getByRole("menuitem", { name: "New" })).toHaveFocus());
    await user.tab();
    await waitFor(() => expect(screen.queryByRole("menuitem", { name: "New" })).not.toBeInTheDocument());
    expect(file).toHaveAttribute("aria-expanded", "false");
    // 引き金へ戻ってから既定の動作が走るので、引き金の次（隣の項目）へ進む
    expect(screen.getByRole("menuitem", { name: "Edit" })).toHaveFocus();
  });

  it("supports asChild on the root", () => {
    render(
      <Menubar asChild aria-label="App">
        <nav data-testid="nav">
          <Menubar.Menu value="edit">
            <Menubar.Trigger>Edit</Menubar.Trigger>
            <Menubar.Content>
              <Menubar.Item>Copy</Menubar.Item>
            </Menubar.Content>
          </Menubar.Menu>
        </nav>
      </Menubar>,
    );
    expect(screen.getByTestId("nav")).toHaveAttribute("role", "menubar");
  });
});

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

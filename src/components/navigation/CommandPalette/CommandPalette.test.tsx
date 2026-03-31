import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import React from "react";
import {
  CommandPalette,
  CommandPaletteTrigger,
  CommandPaletteContent,
  CommandPaletteInput,
  CommandPaletteList,
  CommandPaletteItem,
  CommandPaletteEmpty,
  CommandPaletteGroup,
} from "./CommandPalette";

describe("CommandPalette", () => {
  beforeEach(() => {
    window.HTMLElement.prototype.scrollIntoView = vi.fn();
  });

  it("opens and closes", async () => {
    render(
      <CommandPalette>
        <CommandPaletteTrigger>Open Palette</CommandPaletteTrigger>
        <CommandPaletteContent>
          <CommandPaletteInput />
          <CommandPaletteList>
            <CommandPaletteItem>Item 1</CommandPaletteItem>
          </CommandPaletteList>
        </CommandPaletteContent>
      </CommandPalette>,
    );

    expect(screen.queryByPlaceholderText("Search commands...")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Open Palette"));

    expect(screen.getByPlaceholderText("Search commands...")).toBeInTheDocument();
    expect(screen.getByText("Item 1")).toBeInTheDocument();

    fireEvent.keyDown(window, { key: "Escape" });

    await waitFor(() => {
      expect(screen.queryByPlaceholderText("Search commands...")).not.toBeInTheDocument();
    });
  });

  it("opens with Ctrl+K or Meta+K", () => {
    render(
      <CommandPalette>
        <CommandPaletteContent>
          <CommandPaletteInput />
          <CommandPaletteList>
            <CommandPaletteItem>Item 1</CommandPaletteItem>
          </CommandPaletteList>
        </CommandPaletteContent>
      </CommandPalette>,
    );

    fireEvent.keyDown(window, { key: "k", ctrlKey: true });
    expect(screen.getByPlaceholderText("Search commands...")).toBeInTheDocument();

    fireEvent.keyDown(window, { key: "Escape" });

    fireEvent.keyDown(window, { key: "k", metaKey: true });
    expect(screen.getByPlaceholderText("Search commands...")).toBeInTheDocument();
  });

  it("handles controlled mode", () => {
    const onOpenChange = vi.fn();
    const { rerender } = render(
      <CommandPalette open={false} onOpenChange={onOpenChange}>
        <CommandPaletteContent>
          <CommandPaletteInput />
        </CommandPaletteContent>
      </CommandPalette>,
    );

    expect(screen.queryByPlaceholderText("Search commands...")).not.toBeInTheDocument();

    rerender(
      <CommandPalette open={true} onOpenChange={onOpenChange}>
        <CommandPaletteContent>
          <CommandPaletteInput />
        </CommandPaletteContent>
      </CommandPalette>,
    );
    expect(screen.getByPlaceholderText("Search commands...")).toBeInTheDocument();

    fireEvent.keyDown(window, { key: "Escape" });
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("navigates with keyboard ArrowDown and ArrowUp", () => {
    render(
      <CommandPalette open={true}>
        <CommandPaletteContent>
          <CommandPaletteInput />
          <CommandPaletteList>
            <CommandPaletteItem>Item 1</CommandPaletteItem>
            <CommandPaletteItem>Item 2</CommandPaletteItem>
            <CommandPaletteItem>Item 3</CommandPaletteItem>
          </CommandPaletteList>
        </CommandPaletteContent>
      </CommandPalette>,
    );

    const container = document.querySelector(".wim-command-palette-content")!;

    expect(screen.getByText("Item 1").closest(".wim-base-list-item")).toHaveAttribute("aria-selected", "true");

    fireEvent.keyDown(container, { key: "ArrowDown" });
    expect(screen.getByText("Item 2").closest(".wim-base-list-item")).toHaveAttribute("aria-selected", "true");

    fireEvent.keyDown(container, { key: "ArrowDown" });
    expect(screen.getByText("Item 3").closest(".wim-base-list-item")).toHaveAttribute("aria-selected", "true");

    fireEvent.keyDown(container, { key: "ArrowDown" });
    expect(screen.getByText("Item 1").closest(".wim-base-list-item")).toHaveAttribute("aria-selected", "true");

    fireEvent.keyDown(container, { key: "ArrowUp" });
    expect(screen.getByText("Item 3").closest(".wim-base-list-item")).toHaveAttribute("aria-selected", "true");
  });

  it("moves focus to Home and End", () => {
    render(
      <CommandPalette open={true}>
        <CommandPaletteContent>
          <CommandPaletteList>
            <CommandPaletteItem>Item 1</CommandPaletteItem>
            <CommandPaletteItem>Item 2</CommandPaletteItem>
            <CommandPaletteItem>Item 3</CommandPaletteItem>
          </CommandPaletteList>
        </CommandPaletteContent>
      </CommandPalette>,
    );

    const container = document.querySelector(".wim-command-palette-content")!;

    fireEvent.keyDown(container, { key: "End" });
    expect(screen.getByText("Item 3").closest(".wim-base-list-item")).toHaveAttribute("aria-selected", "true");

    fireEvent.keyDown(container, { key: "Home" });
    expect(screen.getByText("Item 1").closest(".wim-base-list-item")).toHaveAttribute("aria-selected", "true");
  });

  it("selects item with Enter key", () => {
    const handleSelect = vi.fn();
    render(
      <CommandPalette open={true}>
        <CommandPaletteContent>
          <CommandPaletteList>
            <CommandPaletteItem onSelect={handleSelect}>Item 1</CommandPaletteItem>
          </CommandPaletteList>
        </CommandPaletteContent>
      </CommandPalette>,
    );

    const container = document.querySelector(".wim-command-palette-content")!;
    fireEvent.keyDown(container, { key: "Enter" });

    expect(handleSelect).toHaveBeenCalled();
  });

  it("does not select disabled items", () => {
    const handleSelect = vi.fn();
    render(
      <CommandPalette open={true}>
        <CommandPaletteContent>
          <CommandPaletteList>
            <CommandPaletteItem disabled onSelect={handleSelect}>Item 1</CommandPaletteItem>
          </CommandPaletteList>
        </CommandPaletteContent>
      </CommandPalette>,
    );

    fireEvent.click(screen.getByText("Item 1"));
    expect(handleSelect).not.toHaveBeenCalled();
  });

  it("renders trigger asChild correctly", () => {
    const handleTriggerClick = vi.fn();
    render(
      <CommandPalette>
        <CommandPaletteTrigger asChild>
          <button onClick={handleTriggerClick}>Custom Trigger</button>
        </CommandPaletteTrigger>
        <CommandPaletteContent>
          <CommandPaletteInput />
        </CommandPaletteContent>
      </CommandPalette>,
    );

    fireEvent.click(screen.getByText("Custom Trigger"));
    expect(handleTriggerClick).toHaveBeenCalled();
    expect(screen.getByPlaceholderText("Search commands...")).toBeInTheDocument();
  });

  it("closes when clicking on overlay", async () => {
    render(
      <CommandPalette>
        <CommandPaletteTrigger>Open</CommandPaletteTrigger>
        <CommandPaletteContent>
          <div data-testid="child">content</div>
        </CommandPaletteContent>
      </CommandPalette>,
    );

    fireEvent.click(screen.getByText("Open"));
    expect(screen.getByTestId("child")).toBeInTheDocument();

    const overlay = document.querySelector(".wim-command-palette-overlay")!;
    
    fireEvent.click(screen.getByTestId("child"));
    expect(screen.queryByTestId("child")).toBeInTheDocument();

    fireEvent.click(overlay);
    await waitFor(() => {
      expect(screen.queryByTestId("child")).not.toBeInTheDocument();
    });
  });

  it("shows empty state when no items found", async () => {
    render(
      <CommandPalette open={true}>
        <CommandPaletteContent>
          <CommandPaletteInput />
          <CommandPaletteList>
            {null}
          </CommandPaletteList>
          <CommandPaletteEmpty>Nothing found</CommandPaletteEmpty>
        </CommandPaletteContent>
      </CommandPalette>,
    );

    await waitFor(() => {
      expect(screen.getByText("Nothing found")).toBeInTheDocument();
    });
  });

  it("handles mouse move to reset keyboard navigation state", () => {
    render(
      <CommandPalette open={true}>
        <CommandPaletteContent>
          <CommandPaletteList>
            <CommandPaletteItem>Item 1</CommandPaletteItem>
          </CommandPaletteList>
        </CommandPaletteContent>
      </CommandPalette>,
    );

    const content = document.querySelector(".wim-command-palette-content")!;
    
    fireEvent.keyDown(content, { key: "ArrowDown" });
    expect(content).toHaveAttribute("data-keyboard-nav", "true");

    fireEvent.mouseMove(content, { clientX: 0, clientY: 0 });
    fireEvent.mouseMove(content, { clientX: 20, clientY: 20 });
    
    expect(content).toHaveAttribute("data-keyboard-nav", "false");
  });

  it("throws error when using subcomponents outside provider", () => {
    // Suppress console.error for this test
    const originalError = console.error;
    console.error = vi.fn();
    
    expect(() => render(<CommandPaletteContent>test</CommandPaletteContent>)).toThrow(
      "CommandPalette sub-components must be used within a CommandPalette",
    );
    
    console.error = originalError;
  });

  it("renders group with heading", () => {
    render(
      <CommandPalette open={true}>
        <CommandPaletteContent>
          <CommandPaletteGroup heading="Fruit">
            <CommandPaletteItem>Apple</CommandPaletteItem>
          </CommandPaletteGroup>
        </CommandPaletteContent>
      </CommandPalette>,
    );
    expect(screen.getByText("Fruit")).toBeInTheDocument();
  });

  it("renders input with rightSection", () => {
    render(
      <CommandPalette open={true}>
        <CommandPaletteContent>
          <CommandPaletteInput rightSection={<span data-testid="right">Esc</span>} />
        </CommandPaletteContent>
      </CommandPalette>,
    );
    expect(screen.getByTestId("right")).toBeInTheDocument();
  });

  it("renders item with rightSection shortcut and icon", () => {
    render(
      <CommandPalette open={true}>
        <CommandPaletteContent>
          <CommandPaletteList>
            <CommandPaletteItem shortcut={["Cmd", "K"]} icon={<span data-testid="icon" />}>
              Advanced Item
            </CommandPaletteItem>
          </CommandPaletteList>
        </CommandPaletteContent>
      </CommandPalette>,
    );
    expect(screen.getByTestId("icon")).toBeInTheDocument();
    expect(screen.getByText("Cmd")).toBeInTheDocument();
    expect(screen.getByText("K")).toBeInTheDocument();
  });

  it("changes input value correctly", () => {
    const handleChange = vi.fn();
    render(
      <CommandPalette open={true}>
        <CommandPaletteContent>
          <CommandPaletteInput onChange={handleChange} />
        </CommandPaletteContent>
      </CommandPalette>,
    );
    
    const input = screen.getByPlaceholderText("Search commands...");
    fireEvent.change(input, { target: { value: "test search" } });
    
    expect(handleChange).toHaveBeenCalledWith("test search");
    expect(input).toHaveValue("test search");
  });
});

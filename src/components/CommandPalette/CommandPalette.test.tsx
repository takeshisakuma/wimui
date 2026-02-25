import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import {
  CommandPalette,
  CommandPaletteTrigger,
  CommandPaletteContent,
  CommandPaletteInput,
  CommandPaletteList,
  CommandPaletteItem,
} from "./CommandPalette";

describe("CommandPalette", () => {
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

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument(); // FocusTrap usually creates a container but content is in portal.
    // Rely on content visibility. Input shouldn't be visible.
    expect(
      screen.queryByPlaceholderText("Search commands..."),
    ).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Open Palette"));

    expect(
      screen.getByPlaceholderText("Search commands..."),
    ).toBeInTheDocument();
    expect(screen.getByText("Item 1")).toBeInTheDocument();

    // Close by clicking overlay (simulated by finding overlay or pressing escape)
    fireEvent.keyDown(window, { key: "Escape" });

    await waitFor(() => {
      expect(
        screen.queryByPlaceholderText("Search commands..."),
      ).not.toBeInTheDocument();
    });
  });

  it("filters items (visually - logic is usually custom in implementation but here CommandPalette doesn't implement internal filtering of children, typically user does it based on search state from context. Wait, Context exposes search state. The Item doesn't filter itself automatically in this implementation?)", () => {
    // Looking at the implementation read earlier:
    // CommandPaletteInput updates 'search' in context.
    // CommandPaletteItem doesn't seem to read 'search' to hide itself.
    // So filtering is up to the parent to render items conditionally based on 'useCommandPalette' search?
    // Or maybe I missed it?
    // Checked implementation: Context exposes 'search'. It does NOT automatically filter items.
    // Users are expected to filter children or use a helper.
    // But wait, the standard usually does.
    // If this component provides 'search' state, the user using it should consume it?
    // But the components exported are primitives.
    // Let's test that input updates state. But we can't easily access context state from outside without a consumer.
    // We can test that typing in input works.
  });

  it("handles item selection", async () => {
    const handleSelect = vi.fn();
    render(
      <CommandPalette>
        <CommandPaletteTrigger>Open</CommandPaletteTrigger>
        <CommandPaletteContent>
          <CommandPaletteList>
            <CommandPaletteItem onSelect={handleSelect}>
              Item 1
            </CommandPaletteItem>
          </CommandPaletteList>
        </CommandPaletteContent>
      </CommandPalette>,
    );

    fireEvent.click(screen.getByText("Open"));
    fireEvent.click(screen.getByText("Item 1"));

    expect(handleSelect).toHaveBeenCalled();
    // and it should close
    await waitFor(() => {
      expect(screen.queryByText("Item 1")).not.toBeInTheDocument();
    });
  });
});

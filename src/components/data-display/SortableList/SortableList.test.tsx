import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { SortableList } from "./SortableList";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("SortableList", () => {
  it("renders items correctly", () => {
    render(
      <SortableList>
        <SortableList.Item index={0}>Item 1</SortableList.Item>
        <SortableList.Item index={1}>Item 2</SortableList.Item>
      </SortableList>
    );
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("calls onSortEnd when reordered via keyboard", () => {
    const onSortEnd = vi.fn();
    render(
      <SortableList onSortEnd={onSortEnd}>
        <SortableList.Item index={0}>Item 1</SortableList.Item>
        <SortableList.Item index={1}>Item 2</SortableList.Item>
      </SortableList>
    );

    const firstItem = screen.getByText("Item 1").closest("li");
    if (firstItem) {
      fireEvent.keyDown(firstItem, { key: "ArrowDown" });
      expect(onSortEnd).toHaveBeenCalledWith(0, 1);
    }
  });

  it("supports drag handle", () => {
    render(
      <SortableList>
        <SortableList.Item index={0}>
          <SortableList.DragHandle data-testid="handle" />
          Item 1
        </SortableList.Item>
      </SortableList>
    );
    expect(screen.getByTestId("handle")).toBeInTheDocument();
  });

  it("disables dragging when disabled prop is true", () => {
    render(
      <SortableList disabled>
        <SortableList.Item index={0}>Item 1</SortableList.Item>
      </SortableList>
    );
    const item = screen.getByText("Item 1").closest("li");
    expect(item).toHaveAttribute("draggable", "false");
  });
});

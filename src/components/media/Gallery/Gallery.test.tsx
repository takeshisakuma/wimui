import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Gallery } from "./Gallery";
import type { GalleryItem } from "./Gallery";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string, opts?: Record<string, unknown>) => {
    if (opts && "count" in opts) return `${opts.count} items selected`;
    if (opts && "title" in opts) return `${key}:${opts.title}`;
    return key;
  }}),
}));

const sampleItems: GalleryItem[] = [
  { id: "1", src: "/img1.jpg", alt: "Image 1", title: "Photo 1" },
  { id: "2", src: "/img2.jpg", alt: "Image 2", title: "Photo 2" },
  { id: "3", src: "/img3.jpg", alt: "Image 3", title: "Photo 3" },
];

describe("Gallery", () => {
  it("renders all items", () => {
    render(<Gallery items={sampleItems} />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(3);
  });

  it("renders image alt text", () => {
    render(<Gallery items={sampleItems} />);
    expect(screen.getByAltText("Image 1")).toBeInTheDocument();
  });

  it("renders item titles in captions", () => {
    render(<Gallery items={sampleItems} />);
    expect(screen.getByText("Photo 1")).toBeInTheDocument();
  });

  it("does not show toolbar when nothing is selected", () => {
    render(<Gallery items={sampleItems} selectable />);
    expect(screen.queryByRole("toolbar")).not.toBeInTheDocument();
  });

  it("shows a checkbox on every item when selectable, including unchecked", () => {
    render(<Gallery items={sampleItems} selectable />);
    expect(screen.getAllByRole("checkbox")).toHaveLength(3);
    expect(screen.getAllByRole("checkbox").every((el) => !(el as HTMLInputElement).checked)).toBe(
      true,
    );
  });

  it("shows toolbar when an item is selected", () => {
    render(
      <Gallery
        items={sampleItems}
        selectable
        selected={["1"]}
        onSelectionChange={vi.fn()}
      />,
    );
    expect(screen.getByRole("toolbar")).toBeInTheDocument();
  });

  it("does not select when the photo is clicked in selectable mode", () => {
    const onSelectionChange = vi.fn();
    const onItemClick = vi.fn();
    render(
      <Gallery
        items={sampleItems}
        selectable
        onSelectionChange={onSelectionChange}
        onItemClick={onItemClick}
      />,
    );
    const cells = screen.getAllByRole("gridcell");
    fireEvent.click(cells[0]);
    expect(onItemClick).toHaveBeenCalledWith(sampleItems[0], 0);
    expect(onSelectionChange).not.toHaveBeenCalled();
  });

  it("selects from the checkbox and does not fire onItemClick", () => {
    const onSelectionChange = vi.fn();
    const onItemClick = vi.fn();
    render(
      <Gallery
        items={sampleItems}
        selectable
        onSelectionChange={onSelectionChange}
        onItemClick={onItemClick}
      />,
    );
    fireEvent.click(screen.getAllByRole("checkbox")[0]);
    expect(onSelectionChange).toHaveBeenCalledWith(["1"]);
    expect(onItemClick).not.toHaveBeenCalled();
  });

  it("calls onItemClick when an item is clicked in non-selectable mode", () => {
    const onItemClick = vi.fn();
    render(<Gallery items={sampleItems} onItemClick={onItemClick} />);
    const cells = screen.getAllByRole("gridcell");
    fireEvent.click(cells[0]);
    expect(onItemClick).toHaveBeenCalledWith(sampleItems[0], 0);
  });

  it("clears selection when Escape is pressed", () => {
    const onSelectionChange = vi.fn();
    render(
      <Gallery
        items={sampleItems}
        selectable
        selected={["1", "2"]}
        onSelectionChange={onSelectionChange}
      />,
    );
    const grid = screen.getByRole("grid");
    fireEvent.keyDown(grid, { key: "Escape" });
    expect(onSelectionChange).toHaveBeenCalledWith([]);
  });

  it("selects all items with Ctrl+A", () => {
    const onSelectionChange = vi.fn();
    render(
      <Gallery
        items={sampleItems}
        selectable
        onSelectionChange={onSelectionChange}
      />,
    );
    const grid = screen.getByRole("grid");
    fireEvent.keyDown(grid, { key: "a", ctrlKey: true });
    expect(onSelectionChange).toHaveBeenCalledWith(["1", "2", "3"]);
  });

  it("renders renderActions in toolbar", () => {
    render(
      <Gallery
        items={sampleItems}
        selectable
        selected={["1"]}
        onSelectionChange={vi.fn()}
        renderActions={() => <button>Delete</button>}
      />,
    );
    expect(screen.getByText("Delete")).toBeInTheDocument();
  });

  it("supports controlled selected prop", () => {
    render(
      <Gallery
        items={sampleItems}
        selectable
        selected={["2"]}
        onSelectionChange={vi.fn()}
      />,
    );
    const cells = screen.getAllByRole("gridcell");
    expect(cells[1]).toHaveAttribute("aria-selected", "true");
    expect(cells[0]).toHaveAttribute("aria-selected", "false");
  });

  it("moves focus with arrow keys", () => {
    render(<Gallery items={sampleItems} columns={3} />);
    const cells = screen.getAllByRole("gridcell");
    
    cells[0].focus();
    expect(document.activeElement).toBe(cells[0]);

    fireEvent.keyDown(cells[0], { key: "ArrowRight" });
    expect(document.activeElement).toBe(cells[1]);

    fireEvent.keyDown(cells[1], { key: "ArrowLeft" });
    expect(document.activeElement).toBe(cells[0]);

    fireEvent.keyDown(cells[0], { key: "ArrowDown" });
    expect(document.activeElement).toBe(cells[2]);

    fireEvent.keyDown(cells[2], { key: "ArrowUp" });
    expect(document.activeElement).toBe(cells[0]);
  });

  it("selects a range of items with Shift+Click on the checkbox", () => {
    const onSelectionChange = vi.fn();
    render(
      <Gallery
        items={sampleItems}
        selectable
        onSelectionChange={onSelectionChange}
      />,
    );
    const checkboxes = screen.getAllByRole("checkbox");

    fireEvent.click(checkboxes[0]);
    expect(onSelectionChange).toHaveBeenLastCalledWith(["1"]);

    fireEvent.click(checkboxes[2], { shiftKey: true });
    expect(onSelectionChange).toHaveBeenLastCalledWith(["1", "2", "3"]);
  });

  it("toggles selection with Space and fires onItemClick with Enter when selectable", () => {
    const onSelectionChange = vi.fn();
    const onItemClick = vi.fn();
    render(
      <Gallery
        items={sampleItems}
        selectable
        onSelectionChange={onSelectionChange}
        onItemClick={onItemClick}
      />,
    );
    const cells = screen.getAllByRole("gridcell");
    fireEvent.keyDown(cells[0], { key: " " });
    expect(onSelectionChange).toHaveBeenCalledWith(["1"]);
    expect(onItemClick).not.toHaveBeenCalled();

    fireEvent.keyDown(cells[0], { key: "Enter" });
    expect(onItemClick).toHaveBeenCalledWith(sampleItems[0], 0);
  });
});

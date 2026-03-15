import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Transfer, TransferItem } from "./Transfer";

const dataSource: TransferItem[] = [
  { key: "1", title: "Content 1" },
  { key: "2", title: "Content 2" },
  { key: "3", title: "Content 3", disabled: true },
  { key: "4", title: "Content 4" },
];

describe("Transfer", () => {
  it("renders source and target lists", () => {
    render(<Transfer dataSource={dataSource} targetKeys={["1"]} />);
    expect(screen.getByText("Content 1")).toBeDefined();
    expect(screen.getByText("Content 2")).toBeDefined();
    expect(screen.getByText("Content 3")).toBeDefined();
    expect(screen.getByText("Content 4")).toBeDefined();
  });

  it("selects items", () => {
    render(<Transfer dataSource={dataSource} />);
    // Item checkboxes are aria-hidden; click the option row directly
    fireEvent.click(screen.getAllByRole("option")[0]); // Content 1
    expect(screen.getAllByRole("option")[0]).toHaveAttribute("aria-selected", "true");
  });

  it("moves items to right", () => {
    const onChange = vi.fn();
    render(<Transfer dataSource={dataSource} onChange={onChange} />);

    // Select "Content 1" by clicking the option row
    fireEvent.click(screen.getAllByRole("option")[0]);

    // Find Right arrow button and click
    const moveRightBtn = screen.getAllByRole("button")[0];
    fireEvent.click(moveRightBtn);

    expect(onChange).toHaveBeenCalledWith(["1"], "toRight", ["1"]);
  });

  it("moves items to left", () => {
    const onChange = vi.fn();
    render(
      <Transfer
        dataSource={dataSource}
        targetKeys={["1"]}
        onChange={onChange}
      />,
    );

    // Select "Content 1" in target list — it's the only option in the target listbox
    const listboxes = screen.getAllByRole("listbox");
    const targetOptions = screen
      .getAllByRole("option")
      .filter((o) => listboxes[1].contains(o));
    fireEvent.click(targetOptions[0]); // Content 1

    // Find Left arrow button and click
    const moveLeftBtn = screen.getAllByRole("button")[1];
    fireEvent.click(moveLeftBtn);

    expect(onChange).toHaveBeenCalledWith([], "toLeft", ["1"]);
  });

  it("selects all items in a list", () => {
    render(<Transfer dataSource={dataSource} />);
    const headerCheckbox = screen.getAllByRole("checkbox")[0];
    fireEvent.click(headerCheckbox);

    // Content 3 is disabled, so 3 items should be selected
    expect(screen.getByText("3/4")).toBeDefined();
  });

  describe("ARIA roles", () => {
    it("renders listboxes with correct roles", () => {
      render(<Transfer dataSource={dataSource} />);
      const listboxes = screen.getAllByRole("listbox");
      expect(listboxes).toHaveLength(2);
      listboxes.forEach((lb) => {
        expect(lb).toHaveAttribute("aria-multiselectable", "true");
      });
    });

    it("renders options with correct roles and aria-selected", () => {
      render(<Transfer dataSource={dataSource} />);
      const options = screen.getAllByRole("option");
      expect(options).toHaveLength(4);
      options.forEach((opt) => {
        expect(opt).toHaveAttribute("aria-selected", "false");
      });
    });

    it("reflects aria-selected after clicking an item", () => {
      render(<Transfer dataSource={dataSource} />);
      const options = screen.getAllByRole("option");
      fireEvent.click(options[0]); // Content 1
      expect(options[0]).toHaveAttribute("aria-selected", "true");
    });
  });

  describe("keyboard navigation", () => {
    it("ArrowDown moves focus to first item when nothing focused", () => {
      render(<Transfer dataSource={dataSource} />);
      const [sourceListbox] = screen.getAllByRole("listbox");
      fireEvent.keyDown(sourceListbox, { key: "ArrowDown" });
      const options = screen.getAllByRole("option").filter((o) =>
        sourceListbox.contains(o),
      );
      expect(sourceListbox.getAttribute("aria-activedescendant")).toBe(options[0].id);
    });

    it("ArrowDown navigates to next item", () => {
      render(<Transfer dataSource={dataSource} />);
      const [sourceListbox] = screen.getAllByRole("listbox");
      fireEvent.keyDown(sourceListbox, { key: "ArrowDown" }); // → Content 1
      fireEvent.keyDown(sourceListbox, { key: "ArrowDown" }); // → Content 2
      const options = screen.getAllByRole("option").filter((o) =>
        sourceListbox.contains(o),
      );
      // Content 2 should be the active descendant
      const activeId = sourceListbox.getAttribute("aria-activedescendant");
      expect(activeId).toBe(options[1].id);
    });

    it("ArrowDown skips disabled items", () => {
      render(<Transfer dataSource={dataSource} />);
      const [sourceListbox] = screen.getAllByRole("listbox");
      fireEvent.keyDown(sourceListbox, { key: "ArrowDown" }); // → Content 1
      fireEvent.keyDown(sourceListbox, { key: "ArrowDown" }); // → Content 2
      fireEvent.keyDown(sourceListbox, { key: "ArrowDown" }); // → Content 4 (skips disabled 3)
      const options = screen.getAllByRole("option").filter((o) =>
        sourceListbox.contains(o),
      );
      const activeId = sourceListbox.getAttribute("aria-activedescendant");
      expect(activeId).toBe(options[3].id); // Content 4
    });

    it("ArrowUp moves focus to last item when nothing focused", () => {
      render(<Transfer dataSource={dataSource} />);
      const [sourceListbox] = screen.getAllByRole("listbox");
      fireEvent.keyDown(sourceListbox, { key: "ArrowUp" });
      const options = screen.getAllByRole("option").filter((o) =>
        sourceListbox.contains(o),
      );
      // Last non-disabled item is Content 4 (index 3)
      const activeId = sourceListbox.getAttribute("aria-activedescendant");
      expect(activeId).toBe(options[3].id);
    });

    it("Home moves focus to first non-disabled item", () => {
      render(<Transfer dataSource={dataSource} />);
      const [sourceListbox] = screen.getAllByRole("listbox");
      fireEvent.keyDown(sourceListbox, { key: "ArrowDown" }); // → Content 1
      fireEvent.keyDown(sourceListbox, { key: "ArrowDown" }); // → Content 2
      fireEvent.keyDown(sourceListbox, { key: "Home" });
      const options = screen.getAllByRole("option").filter((o) =>
        sourceListbox.contains(o),
      );
      const activeId = sourceListbox.getAttribute("aria-activedescendant");
      expect(activeId).toBe(options[0].id);
    });

    it("End moves focus to last non-disabled item", () => {
      render(<Transfer dataSource={dataSource} />);
      const [sourceListbox] = screen.getAllByRole("listbox");
      fireEvent.keyDown(sourceListbox, { key: "End" });
      const options = screen.getAllByRole("option").filter((o) =>
        sourceListbox.contains(o),
      );
      const activeId = sourceListbox.getAttribute("aria-activedescendant");
      expect(activeId).toBe(options[3].id); // Content 4
    });

    it("Space toggles selection of focused item", () => {
      render(<Transfer dataSource={dataSource} />);
      const [sourceListbox] = screen.getAllByRole("listbox");
      fireEvent.keyDown(sourceListbox, { key: "ArrowDown" }); // → Content 1
      fireEvent.keyDown(sourceListbox, { key: " " }); // select
      const options = screen.getAllByRole("option").filter((o) =>
        sourceListbox.contains(o),
      );
      expect(options[0]).toHaveAttribute("aria-selected", "true");

      fireEvent.keyDown(sourceListbox, { key: " " }); // deselect
      expect(options[0]).toHaveAttribute("aria-selected", "false");
    });

    it("Enter moves selected source items to target", () => {
      const onChange = vi.fn();
      render(<Transfer dataSource={dataSource} onChange={onChange} />);
      const [sourceListbox] = screen.getAllByRole("listbox");
      fireEvent.keyDown(sourceListbox, { key: "ArrowDown" }); // focus Content 1
      fireEvent.keyDown(sourceListbox, { key: " " }); // select Content 1
      fireEvent.keyDown(sourceListbox, { key: "Enter" }); // move to right
      expect(onChange).toHaveBeenCalledWith(["1"], "toRight", ["1"]);
    });

    it("Enter moves selected target items to source", () => {
      const onChange = vi.fn();
      render(
        <Transfer dataSource={dataSource} targetKeys={["1"]} onChange={onChange} />,
      );
      const listboxes = screen.getAllByRole("listbox");
      const targetListbox = listboxes[1];
      fireEvent.keyDown(targetListbox, { key: "ArrowDown" }); // focus Content 1
      fireEvent.keyDown(targetListbox, { key: " " }); // select Content 1
      fireEvent.keyDown(targetListbox, { key: "Enter" }); // move to left
      expect(onChange).toHaveBeenCalledWith([], "toLeft", ["1"]);
    });

    it("mouse click updates focused key and toggles selection", () => {
      render(<Transfer dataSource={dataSource} />);
      const [sourceListbox] = screen.getAllByRole("listbox");
      const options = screen.getAllByRole("option").filter((o) =>
        sourceListbox.contains(o),
      );
      fireEvent.click(options[1]); // Content 2
      expect(sourceListbox.getAttribute("aria-activedescendant")).toBe(
        options[1].id,
      );
      expect(options[1]).toHaveAttribute("aria-selected", "true");
    });

    it("ArrowDown wraps from last to first", () => {
      render(<Transfer dataSource={dataSource} />);
      const [sourceListbox] = screen.getAllByRole("listbox");
      fireEvent.keyDown(sourceListbox, { key: "End" }); // → Content 4
      fireEvent.keyDown(sourceListbox, { key: "ArrowDown" }); // → wraps to Content 1
      const options = screen.getAllByRole("option").filter((o) =>
        sourceListbox.contains(o),
      );
      const activeId = sourceListbox.getAttribute("aria-activedescendant");
      expect(activeId).toBe(options[0].id);
    });
  });
});

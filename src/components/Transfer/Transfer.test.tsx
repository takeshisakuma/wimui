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
        const checkbox = screen.getAllByRole("checkbox")[1]; // Header is index 0
        fireEvent.click(checkbox);
        // Counting selected items in header
        expect(screen.getByText("1/4")).toBeDefined();
    });

    it("moves items to right", () => {
        const onChange = vi.fn();
        render(<Transfer dataSource={dataSource} onChange={onChange} />);

        // Select "Content 1" (index 1 checkbox, index 0 is header)
        fireEvent.click(screen.getAllByRole("checkbox")[1]);

        // Find Right arrow button and click
        const moveRightBtn = screen.getAllByRole("button")[0];
        fireEvent.click(moveRightBtn);

        expect(onChange).toHaveBeenCalledWith(["1"], "toRight", ["1"]);
    });

    it("moves items to left", () => {
        const onChange = vi.fn();
        render(<Transfer dataSource={dataSource} targetKeys={["1"]} onChange={onChange} />);

        // Select "Content 1" in target list
        // In this case, source list has 2, 3, 4. Target has 1.
        // Checkboxes: 0 (source header), 1 (Content 2), 2 (Content 3), 3 (Content 4), 4 (target header), 5 (Content 1)
        fireEvent.click(screen.getAllByRole("checkbox")[5]);

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
});

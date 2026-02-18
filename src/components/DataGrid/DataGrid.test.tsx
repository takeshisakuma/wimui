import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { DataGrid } from "./DataGrid";

describe("DataGrid", () => {
    const mockColumns = [
        { key: "id", header: "ID", sortable: true },
        { key: "name", header: "Name", sortable: true },
        { key: "age", header: "Age", sortable: false },
    ];

    const mockRows = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 35 },
    ];

    it("renders the DataGrid with columns and rows", () => {
        render(<DataGrid columns={mockColumns} rows={mockRows} />);

        expect(screen.getByText("ID")).toBeInTheDocument();
        expect(screen.getByText("Name")).toBeInTheDocument();
        expect(screen.getByText("Age")).toBeInTheDocument();

        expect(screen.getByText("Alice")).toBeInTheDocument();
        expect(screen.getByText("Bob")).toBeInTheDocument();
        expect(screen.getByText("Charlie")).toBeInTheDocument();
    });

    it("renders empty state when no rows", () => {
        render(<DataGrid columns={mockColumns} rows={[]} emptyMessage="No data found" />);

        expect(screen.getByText("No data found")).toBeInTheDocument();
    });

    it("renders loading state", () => {
        render(<DataGrid columns={mockColumns} rows={mockRows} loading />);

        expect(document.querySelector(".wim-datagrid--loading")).toBeInTheDocument();
    });

    it("handles selection", async () => {
        const user = userEvent.setup();
        const onSelectionChange = vi.fn();

        render(
            <DataGrid
                columns={mockColumns}
                rows={mockRows}
                selection
                selectedRowKeys={[]}
                onSelectionChange={onSelectionChange}
            />
        );

        const checkboxes = screen.getAllByRole("checkbox");
        await user.click(checkboxes[1]); // Click first row checkbox

        expect(onSelectionChange).toHaveBeenCalledWith([1]);
    });

    it("handles select all", async () => {
        const user = userEvent.setup();
        const onSelectionChange = vi.fn();

        render(
            <DataGrid
                columns={mockColumns}
                rows={mockRows}
                selection
                selectedRowKeys={[]}
                onSelectionChange={onSelectionChange}
            />
        );

        const selectAllCheckbox = screen.getAllByRole("checkbox")[0];
        await user.click(selectAllCheckbox);

        expect(onSelectionChange).toHaveBeenCalledWith([1, 2, 3]);
    });

    it("handles sorting", async () => {
        const user = userEvent.setup();
        const onSort = vi.fn();

        render(
            <DataGrid
                columns={mockColumns}
                rows={mockRows}
                sortConfig={{ key: "id", direction: "none" }}
                onSort={onSort}
            />
        );

        const idHeader = screen.getByText("ID").closest("th");
        if (idHeader) {
            await user.click(idHeader);
        }

        expect(onSort).toHaveBeenCalledWith("id", "asc");
    });

    it("renders pagination when provided", () => {
        const pagination = {
            total: 100,
            pageSize: 10,
            current: 1,
            onPageChange: vi.fn(),
        };

        render(<DataGrid columns={mockColumns} rows={mockRows} pagination={pagination} />);

        expect(document.querySelector(".wim-pagination")).toBeInTheDocument();
    });

    it("applies custom render function", () => {
        const columnsWithRender = [
            {
                key: "name",
                header: "Name",
                render: (value: unknown) => <strong>{(value as string).toUpperCase()}</strong>,
            },
        ];

        render(<DataGrid columns={columnsWithRender} rows={mockRows} />);

        expect(screen.getByText("ALICE")).toBeInTheDocument();
        expect(screen.getByText("BOB")).toBeInTheDocument();
    });
});

import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
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
    render(
      <DataGrid columns={mockColumns} rows={[]} emptyMessage="No data found" />,
    );

    expect(screen.getByText("No data found")).toBeInTheDocument();
  });

  it("renders loading state", () => {
    render(<DataGrid columns={mockColumns} rows={mockRows} loading />);

    expect(
      document.querySelector(".wim-datagrid--loading"),
    ).toBeInTheDocument();
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
      />,
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
      />,
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
      />,
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

    render(
      <DataGrid
        columns={mockColumns}
        rows={mockRows}
        pagination={pagination}
      />,
    );

    expect(document.querySelector(".wim-pagination")).toBeInTheDocument();
  });

  it("applies custom render function", () => {
    const columnsWithRender = [
      {
        key: "name",
        header: "Name",
        render: (value: unknown) => (
          <strong>{(value as string).toUpperCase()}</strong>
        ),
      },
    ];

    render(<DataGrid columns={columnsWithRender} rows={mockRows} />);

    expect(screen.getByText("ALICE")).toBeInTheDocument();
    expect(screen.getByText("BOB")).toBeInTheDocument();
  });
  it("handles keyboard navigation", async () => {
    // Add an interactive column to test Enter/Space
    const interactiveCols = [
      ...mockColumns,
      {
        key: "action",
        header: "Action",
        render: (_: unknown, row: { id: number | string }) => <button data-testid={`btn-${row.id}`}>Action</button>
      }
    ];

    const { container } = render(<DataGrid columns={interactiveCols} rows={mockRows} />);
    const grid = screen.getByRole("grid");
    
    // Initial state: -1, 0
    fireEvent.keyDown(grid, { key: "ArrowDown" });
    // Should focus first row, first cell (row 0, col 0)
    
    await waitFor(() => {
      expect(container.querySelector('[data-row="0"][data-col="0"]')).toHaveAttribute("tabindex", "0");
    });
    
    // ArrowRight -> row 0, col 1
    fireEvent.keyDown(grid, { key: "ArrowRight" });
    await waitFor(() => {
      expect(container.querySelector('[data-row="0"][data-col="1"]')).toHaveAttribute("tabindex", "0");
    });

    // ArrowLeft -> row 0, col 0
    fireEvent.keyDown(grid, { key: "ArrowLeft" });
    await waitFor(() => {
      expect(container.querySelector('[data-row="0"][data-col="0"]')).toHaveAttribute("tabindex", "0");
    });

    // ArrowUp -> row -1, col 0 (header)
    fireEvent.keyDown(grid, { key: "ArrowUp" });
    await waitFor(() => {
      expect(container.querySelector('[data-row="-1"][data-col="0"]')).toHaveAttribute("tabindex", "0");
    });

    // End -> row -1, col 3
    fireEvent.keyDown(grid, { key: "End" });
    await waitFor(() => {
      expect(container.querySelector('[data-row="-1"][data-col="3"]')).toHaveAttribute("tabindex", "0");
    });

    // Home -> row -1, col 0
    fireEvent.keyDown(grid, { key: "Home" });
    await waitFor(() => {
      expect(container.querySelector('[data-row="-1"][data-col="0"]')).toHaveAttribute("tabindex", "0");
    });

    // ctrl+End -> maxRow, maxCol (row 2, col 3)
    fireEvent.keyDown(grid, { key: "End", ctrlKey: true });
    await waitFor(() => {
      expect(container.querySelector('[data-row="2"][data-col="3"]')).toHaveAttribute("tabindex", "0");
    });

    // ctrl+Home -> minRow, minCol (row -1, col 0)
    fireEvent.keyDown(grid, { key: "Home", ctrlKey: true });
    await waitFor(() => {
      expect(container.querySelector('[data-row="-1"][data-col="0"]')).toHaveAttribute("tabindex", "0");
    });

    // Test Enter/Space on an interactive element
    // Go to row 0, col 3 (button)
    fireEvent.keyDown(grid, { key: "ArrowDown" });
    fireEvent.keyDown(grid, { key: "End" });
    await waitFor(() => {
      expect(container.querySelector('[data-row="0"][data-col="3"]')).toHaveAttribute("tabindex", "0");
    });
    
    const actionCell = container.querySelector('[data-row="0"][data-col="3"]') as HTMLElement;
    actionCell.focus();

    const onClick = vi.spyOn(HTMLElement.prototype, 'click');
    fireEvent.keyDown(actionCell, { key: "Enter" });
    expect(onClick).toHaveBeenCalled();
    
    fireEvent.keyDown(actionCell, { key: " " });
    expect(onClick).toHaveBeenCalledTimes(2);

    onClick.mockRestore();

    // Ignore other keys
    fireEvent.keyDown(grid, { key: "a" });
  });

  it("handles load more with IntersectionObserver", () => {
    const onLoadMore = vi.fn();
    const mockObserve = vi.fn();
    const mockDisconnect = vi.fn();
    
    let observerCallback: IntersectionObserverCallback = vi.fn();

    class MockObserver {
      observe = mockObserve;
      unobserve = vi.fn();
      disconnect = mockDisconnect;
      takeRecords = vi.fn();
      root = null;
      rootMargin = "";
      thresholds = [];
      constructor(callback: IntersectionObserverCallback) {
        observerCallback = callback;
      }
    }
    vi.stubGlobal("IntersectionObserver", MockObserver as unknown as typeof IntersectionObserver);

    render(
      <DataGrid
        columns={mockColumns}
        rows={mockRows}
        loadMore={{
          onLoadMore,
          hasMore: true,
          loading: false,
        }}
      />
    );

    expect(mockObserve).toHaveBeenCalled();
    
    // Simulate intersection
    observerCallback([{ isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver);
    
    expect(onLoadMore).toHaveBeenCalled();
    vi.unstubAllGlobals();
  });

  it("handles custom rowKey", () => {
    const onSelectionChange = vi.fn();
    const rowsWithUuid = [
      { uuid: "u1", name: "Alice" },
      { uuid: "u2", name: "Bob" },
    ];
    render(
      <DataGrid
        columns={[{ key: "name", header: "Name" }]}
        rows={rowsWithUuid}
        selection
        rowKey="uuid"
        onSelectionChange={onSelectionChange}
      />
    );

    const checkbox = screen.getAllByRole("checkbox")[1];
    fireEvent.click(checkbox);
    expect(onSelectionChange).toHaveBeenCalledWith(["u1"]);
  });
});

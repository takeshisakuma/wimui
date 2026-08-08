import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Table } from "./Table";
import styles from "./table.module.scss";

describe("Table", () => {
  it("renders table with children", () => {
    render(
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>Header</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Data</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>,
    );
    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Data")).toBeInTheDocument();
  });

  it("applies variant classes", () => {
    render(
      <Table striped bordered hoverable fullWidth>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Test</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>,
    );
    const table = screen.getByTestId("table-root");
    expect(table).toHaveClass(styles.root);
    expect(table).toHaveClass(styles.striped);
    expect(table).toHaveClass(styles.bordered);
    expect(table).toHaveClass(styles.hoverable);
    expect(table).toHaveClass(styles.fullWidth);
  });

  it("renders TableFooter", () => {
    render(
      <Table>
        <Table.Footer>
          <Table.Row>
            <Table.Cell>Footer cell</Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table>,
    );
    expect(screen.getByText("Footer cell")).toBeInTheDocument();
  });

  it("applies stickyHeader class", () => {
    render(
      <Table stickyHeader>
        <Table.Body>
          <Table.Row><Table.Cell>X</Table.Cell></Table.Row>
        </Table.Body>
      </Table>,
    );
    const container = screen.getByTestId("table-container");
    expect(container).toHaveClass(styles.container);
    expect(container).toHaveClass(styles.sticky);
  });

  it("applies scrollbar subtle class", () => {
    render(
      <Table scrollbar="subtle">
        <Table.Body>
          <Table.Row><Table.Cell>X</Table.Cell></Table.Row>
        </Table.Body>
      </Table>,
    );
    expect(screen.getByTestId("table-container")).toHaveClass(styles.subtleScrollbar);
  });

  it("applies scrollbar hidden class", () => {
    render(
      <Table scrollbar="hidden">
        <Table.Body>
          <Table.Row><Table.Cell>X</Table.Cell></Table.Row>
        </Table.Body>
      </Table>,
    );
    expect(screen.getByTestId("table-container")).toHaveClass(styles.noScrollbar);
  });

  it("applies height and overflow style", () => {
    render(
      <Table height="400px" maxHeight="600px">
        <Table.Body>
          <Table.Row><Table.Cell>X</Table.Cell></Table.Row>
        </Table.Body>
      </Table>,
    );
    const wrapper = screen.getByTestId("table-container");
    expect(wrapper.style.overflow).toBe("auto");
    expect(wrapper.style.height).toBe("400px");
    expect(wrapper.style.maxHeight).toBe("600px");
  });

  it("renders TableRow with selected class", () => {
    render(
      <Table>
        <Table.Body>
          <Table.Row selected>
            <Table.Cell>Selected</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>,
    );
    expect(screen.getByTestId("table-row")).toHaveClass(styles.selected);
  });

  it("renders sortable TableHead with asc sort", () => {
    const onSort = vi.fn();
    render(
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head sortable sortDirection="asc" onSort={onSort}>Name</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row><Table.Cell>Item</Table.Cell></Table.Row>
        </Table.Body>
      </Table>,
    );
    const head = screen.getByText("Name").closest("th");
    expect(head).toHaveAttribute("aria-sort", "ascending");
    fireEvent.click(head!);
    expect(onSort).toHaveBeenCalled();
  });

  it("renders sortable TableHead with desc sort", () => {
    render(
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head sortable sortDirection="desc">Name</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row><Table.Cell>Item</Table.Cell></Table.Row>
        </Table.Body>
      </Table>,
    );
    const head = screen.getByText("Name").closest("th");
    expect(head).toHaveAttribute("aria-sort", "descending");
  });

  it("handles Enter keydown on sortable TableHead", () => {
    const onSort = vi.fn();
    render(
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head sortable onSort={onSort}>Name</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row><Table.Cell>Item</Table.Cell></Table.Row>
        </Table.Body>
      </Table>,
    );
    const head = screen.getByText("Name").closest("th")!;
    fireEvent.keyDown(head, { key: "Enter" });
    expect(onSort).toHaveBeenCalled();
  });

  it("handles Space keydown on sortable TableHead", () => {
    const onSort = vi.fn();
    render(
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head sortable onSort={onSort}>Name</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row><Table.Cell>Item</Table.Cell></Table.Row>
        </Table.Body>
      </Table>,
    );
    const head = screen.getByText("Name").closest("th")!;
    fireEvent.keyDown(head, { key: " " });
    expect(onSort).toHaveBeenCalled();
  });

  it("ignores non-Enter/Space keydown on sortable TableHead", () => {
    const onSort = vi.fn();
    const onKeyDown = vi.fn();
    render(
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head sortable onSort={onSort} onKeyDown={onKeyDown}>Name</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row><Table.Cell>Item</Table.Cell></Table.Row>
        </Table.Body>
      </Table>,
    );
    const head = screen.getByText("Name").closest("th")!;
    fireEvent.keyDown(head, { key: "Tab" });
    expect(onSort).not.toHaveBeenCalled();
    expect(onKeyDown).toHaveBeenCalled();
  });

  it("renders TableHead with stickyLeft and leftOffset", () => {
    render(
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head stickyLeft leftOffset="50px">Name</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row><Table.Cell>Item</Table.Cell></Table.Row>
        </Table.Body>
      </Table>,
    );
    const th = screen.getByTestId("table-head");
    expect(th).toBeInTheDocument();
    expect(th.style.left).toBe("50px");
  });

  it("renders TableCell with stickyRight and rightOffset", () => {
    render(
      <Table>
        <Table.Body>
          <Table.Row>
            <Table.Cell stickyRight rightOffset="20px">Cell</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>,
    );
    const td = screen.getByTestId("table-cell");
    expect(td).toBeInTheDocument();
    expect(td.style.right).toBe("20px");
  });

  it("renders mobileCard class", () => {
    render(
      <Table mobileCard>
        <Table.Body>
          <Table.Row><Table.Cell>X</Table.Cell></Table.Row>
        </Table.Body>
      </Table>,
    );
    const table = screen.getByTestId("table-root");
    expect(table).toHaveClass(styles.mobileCard);
  });

  it("puts card frame on a child of the container-type host (so mobileCard can drop it)", () => {
    // Regression: container-type と card 枠が同じ要素だと、カード表示で外枠を
    // コンテナクエリで外せない（DataGrid が root/container を分けている理由と同じ）。
    render(
      <Table card mobileCard>
        <Table.Body>
          <Table.Row>
            <Table.Cell label="Col">X</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>,
    );
    const frame = screen.getByTestId("table-container");
    expect(frame).toHaveClass(styles.cardContainer);
    expect(frame.parentElement).toHaveClass(styles.scope);
    expect(frame).not.toHaveClass(styles.scope);
  });

  it("supports asChild on Table", () => {
    // asChild intentionally renders a non-semantic element; suppress expected hydration warnings
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    render(
      <Table asChild>
        <div data-testid="table-slot">
          <Table.Body>
            <Table.Row>
              <Table.Cell>X</Table.Cell>
            </Table.Row>
          </Table.Body>
        </div>
      </Table>
    );
    spy.mockRestore();
    const tableElement = screen.getByTestId("table-slot");
    expect(tableElement.tagName).toBe("DIV");
    expect(tableElement).toHaveClass(styles.root);
  });

  it("supports asChild on TableRow", () => {
    // asChild intentionally renders a non-semantic element; suppress expected hydration warnings
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    render(
      <Table>
        <Table.Body>
          <Table.Row asChild>
            <div data-testid="row-slot">
              <Table.Cell>X</Table.Cell>
            </div>
          </Table.Row>
        </Table.Body>
      </Table>
    );
    spy.mockRestore();
    const rowElement = screen.getByTestId("row-slot");
    expect(rowElement.tagName).toBe("DIV");
    expect(rowElement).toHaveClass(styles.row);
  });

  it("supports asChild on TableCell", () => {
    // asChild intentionally renders a non-semantic element; suppress expected hydration warnings
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    render(
      <Table>
        <Table.Body>
          <Table.Row>
            <Table.Cell asChild>
              <div data-testid="cell-slot">X</div>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
    spy.mockRestore();
    const cellElement = screen.getByTestId("cell-slot");
    expect(cellElement.tagName).toBe("DIV");
    expect(cellElement).toHaveClass(styles.cell);
  });
});

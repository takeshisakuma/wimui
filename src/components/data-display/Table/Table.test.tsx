import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Table } from "./Table";

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
    const { container } = render(
      <Table striped bordered hoverable fullWidth>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Test</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>,
    );
    const table = container.querySelector("table");
    expect(table).toHaveClass("wim-table--striped");
    expect(table).toHaveClass("wim-table--bordered");
    expect(table).toHaveClass("wim-table--hoverable");
    expect(table).toHaveClass("wim-table--full-width");
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
    const { container } = render(
      <Table stickyHeader>
        <Table.Body>
          <Table.Row><Table.Cell>X</Table.Cell></Table.Row>
        </Table.Body>
      </Table>,
    );
    expect(container.querySelector(".wim-table-container--sticky")).toBeInTheDocument();
  });

  it("applies scrollbar subtle class", () => {
    const { container } = render(
      <Table scrollbar="subtle">
        <Table.Body>
          <Table.Row><Table.Cell>X</Table.Cell></Table.Row>
        </Table.Body>
      </Table>,
    );
    expect(container.querySelector(".wim-subtle-scrollbar")).toBeInTheDocument();
  });

  it("applies scrollbar hidden class", () => {
    const { container } = render(
      <Table scrollbar="hidden">
        <Table.Body>
          <Table.Row><Table.Cell>X</Table.Cell></Table.Row>
        </Table.Body>
      </Table>,
    );
    expect(container.querySelector(".wim-no-scrollbar")).toBeInTheDocument();
  });

  it("applies height and overflow style", () => {
    const { container } = render(
      <Table height="400px" maxHeight="600px">
        <Table.Body>
          <Table.Row><Table.Cell>X</Table.Cell></Table.Row>
        </Table.Body>
      </Table>,
    );
    const wrapper = container.querySelector(".wim-table-container") as HTMLElement;
    expect(wrapper.style.overflow).toBe("auto");
  });

  it("renders TableRow with selected class", () => {
    const { container } = render(
      <Table>
        <Table.Body>
          <Table.Row selected>
            <Table.Cell>Selected</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>,
    );
    expect(container.querySelector(".wim-table__row--selected")).toBeInTheDocument();
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
    const { container } = render(
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
    const th = container.querySelector(".wim-table__head--sticky-left") as HTMLElement;
    expect(th).toBeInTheDocument();
    expect(th.style.left).toBe("50px");
  });

  it("renders TableCell with stickyRight and rightOffset", () => {
    const { container } = render(
      <Table>
        <Table.Body>
          <Table.Row>
            <Table.Cell stickyRight rightOffset="20px">Cell</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>,
    );
    const td = container.querySelector(".wim-table__cell--sticky-right") as HTMLElement;
    expect(td).toBeInTheDocument();
    expect(td.style.right).toBe("20px");
  });

  it("renders mobileCard class", () => {
    const { container } = render(
      <Table mobileCard>
        <Table.Body>
          <Table.Row><Table.Cell>X</Table.Cell></Table.Row>
        </Table.Body>
      </Table>,
    );
    expect(container.querySelector(".wim-table--mobile-card")).toBeInTheDocument();
  });
});

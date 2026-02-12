import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
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
            </Table>
        );
        expect(screen.getByText("Header")).toBeInTheDocument();
        expect(screen.getByText("Data")).toBeInTheDocument();
    });

    it("applies variant classes", () => {
        const { container } = render(
            <Table striped bordered hoverable fullWidth>
                <Table.Body>
                    <Table.Row><Table.Cell>Test</Table.Cell></Table.Row>
                </Table.Body>
            </Table>
        );
        const table = container.querySelector("table");
        expect(table).toHaveClass("wim-table--striped");
        expect(table).toHaveClass("wim-table--bordered");
        expect(table).toHaveClass("wim-table--hoverable");
        expect(table).toHaveClass("wim-table--full-width");
    });
});

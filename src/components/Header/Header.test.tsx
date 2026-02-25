import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Header, HeaderSection } from "./Header";

describe("Header", () => {
  it("renders header", () => {
    render(<Header>Header Content</Header>);
    expect(screen.getByRole("banner")).toBeInTheDocument(); // header role
    expect(screen.getByText("Header Content")).toBeInTheDocument();
  });

  it("renders sections", () => {
    render(
      <Header>
        <HeaderSection>Section</HeaderSection>
      </Header>,
    );
    expect(screen.getByText("Section")).toBeInTheDocument();
  });

  it("applies styling classes", () => {
    render(<Header fixed sticky bordered />);
    const header = screen.getByRole("banner");
    expect(header).toHaveClass("wim-header--fixed");
    expect(header).toHaveClass("wim-header--sticky");
    expect(header).toHaveClass("wim-header--bordered");
  });
});

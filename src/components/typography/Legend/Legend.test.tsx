import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Legend } from "./Legend";

describe("Legend", () => {
  it("renders children", () => {
    // label prop is passed to FieldLabelContent
    render(<Legend label="Details" />);
    expect(screen.getByText("Details")).toBeInTheDocument();
  });
  
  it("renders children alongside label", () => {
    render(<Legend label="Title">Subcontent</Legend>);
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Subcontent")).toBeInTheDocument();
  });
});

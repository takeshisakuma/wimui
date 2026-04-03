import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FieldLabelContent } from "./FieldLabelContent";

describe("FieldLabelContent", () => {
  it("renders the label text", () => {
    render(<FieldLabelContent label="Name" />);
    expect(screen.getByText("Name")).toBeInTheDocument();
  });

  it("shows required badge when required is true", () => {
    const { container } = render(<FieldLabelContent label="Name" required />);
    // Badge renders content with parentheses e.g. "(Required)"
    expect(container.querySelector(".wim-field-label-badge")).toBeInTheDocument();
  });

  it("does not show required badge by default", () => {
    const { container } = render(<FieldLabelContent label="Name" />);
    expect(container.querySelector(".wim-field-label-badge")).not.toBeInTheDocument();
  });

  it("shows optional badge when showOptional is true", () => {
    const { container } = render(<FieldLabelContent label="Name" showOptional />);
    expect(container.querySelector(".wim-field-label-badge")).toBeInTheDocument();
  });

  it("does not show optional badge by default", () => {
    const { container } = render(<FieldLabelContent label="Name" />);
    expect(container.querySelector(".wim-field-label-badge")).not.toBeInTheDocument();
  });

  it("required badge has aria-hidden to avoid screen reader duplication", () => {
    const { container } = render(<FieldLabelContent label="Name" required />);
    expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument();
  });

  it("required takes priority over showOptional", () => {
    const { container } = render(<FieldLabelContent label="Name" required showOptional />);
    const badge = container.querySelector(".wim-field-label-badge");
    expect(badge).toBeInTheDocument();
    // required badge uses error color, optional uses neutral
    expect(badge).toHaveClass("wim-badge--error");
  });

  it("applies custom className to the wrapper", () => {
    const { container } = render(<FieldLabelContent label="Name" className="my-label" />);
    expect(container.firstChild).toHaveClass("my-label");
  });
});

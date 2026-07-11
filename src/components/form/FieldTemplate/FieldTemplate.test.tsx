import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FieldTemplate } from "./FieldTemplate";
import styles from "./field-template.module.scss";

describe("FieldTemplate", () => {
  it("renders children", () => {
    render(<FieldTemplate><input data-testid="field" /></FieldTemplate>);
    expect(screen.getByTestId("field")).toBeInTheDocument();
  });

  it("renders label when provided", () => {
    render(<FieldTemplate label="Name"><input /></FieldTemplate>);
    expect(screen.getByText("Name")).toBeInTheDocument();
  });

  it("does not render label wrapper when label is omitted", () => {
    const { container } = render(<FieldTemplate><input /></FieldTemplate>);
    expect(container.querySelector(`.${styles.labelWrapper}`)).not.toBeInTheDocument();
  });

  it("renders error message when provided", () => {
    render(<FieldTemplate error="Required"><input /></FieldTemplate>);
    expect(screen.getByText("Required")).toBeInTheDocument();
  });

  it("does not render error when omitted", () => {
    const { container } = render(<FieldTemplate><input /></FieldTemplate>);
    expect(container.querySelector(`.${styles.danger}`)).not.toBeInTheDocument();
  });

  it("applies vertical layout class by default", () => {
    const { container } = render(<FieldTemplate><input /></FieldTemplate>);
    expect(container.firstChild).toHaveClass(styles.vertical);
  });

  it("applies horizontal layout class when specified", () => {
    const { container } = render(<FieldTemplate layout="horizontal"><input /></FieldTemplate>);
    expect(container.firstChild).toHaveClass(styles.horizontal);
  });

  it("passes labelId to Label as id", () => {
    render(<FieldTemplate label="Email" labelId="lbl-email"><input /></FieldTemplate>);
    expect(document.getElementById("lbl-email")).toBeInTheDocument();
  });

  it("passes errorId to FieldError as id", () => {
    render(<FieldTemplate error="Required" errorId="err-email"><input /></FieldTemplate>);
    expect(document.getElementById("err-email")).toBeInTheDocument();
  });

  it("shows required badge on Label when required is true", () => {
    render(<FieldTemplate label="Name" required><input /></FieldTemplate>);
    // The badge is inside FieldLabelContent which uses Badge component.
    expect(screen.getByText(/Required/i)).toBeInTheDocument();
  });

  it("applies custom className to root element", () => {
    const { container } = render(<FieldTemplate className="my-field"><input /></FieldTemplate>);
    expect(container.firstChild).toHaveClass("my-field");
  });

  it("always renders styles.root on root", () => {
    const { container } = render(<FieldTemplate><input /></FieldTemplate>);
    expect(container.firstChild).toHaveClass(styles.root);
  });

  it("renders label as ReactNode", () => {
    render(<FieldTemplate label={<strong>Bold Label</strong>}><input /></FieldTemplate>);
    expect(screen.getByText("Bold Label")).toBeInTheDocument();
  });
});

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { FieldCharacterCount } from "./FieldCharacterCount";
import styles from "./field-character-count.module.scss";

describe("FieldCharacterCount", () => {
  // ── Visibility rules ──────────────────────────────────────────────────────

  it("renders nothing when count is 0, maxLength is not set, and alwaysShow is false", () => {
    const { container } = render(<FieldCharacterCount count={0} />);
    expect(container.firstChild).toBeNull();
  });

  it("renders when count is 0 and maxLength is set", () => {
    render(<FieldCharacterCount count={0} maxLength={100} />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("renders when count is greater than 0 and no maxLength", () => {
    render(<FieldCharacterCount count={5} />);
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("renders when alwaysShow is true even if count is 0 and no maxLength", () => {
    render(<FieldCharacterCount count={0} alwaysShow />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  // ── Display format ────────────────────────────────────────────────────────

  it("shows only the count when maxLength is not set", () => {
    render(<FieldCharacterCount count={42} />);
    expect(screen.getByText("42")).toBeInTheDocument();
    expect(screen.queryByText("/")).not.toBeInTheDocument();
  });

  it("shows 'count / maxLength' when maxLength is set", () => {
    const { container } = render(<FieldCharacterCount count={30} maxLength={100} />);
    expect(screen.getByText("30")).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();
    expect(container.firstChild).toHaveTextContent("30 / 100");
  });

  // ── Error state ───────────────────────────────────────────────────────────

  it("applies error class when count exceeds maxLength", () => {
    const { container } = render(<FieldCharacterCount count={110} maxLength={100} />);
    expect(container.firstChild).toHaveClass(styles.error);
  });

  it("applies error class when isError prop is true", () => {
    const { container } = render(<FieldCharacterCount count={5} isError />);
    expect(container.firstChild).toHaveClass(styles.error);
  });

  it("does not apply error class when count is within maxLength", () => {
    const { container } = render(<FieldCharacterCount count={50} maxLength={100} />);
    expect(container.firstChild).not.toHaveClass(styles.error);
  });

  // ── Warning state ─────────────────────────────────────────────────────────

  it("applies warning class when count is >= 90% of maxLength and not over", () => {
    const { container } = render(<FieldCharacterCount count={95} maxLength={100} />);
    expect(container.firstChild).toHaveClass(styles.warning);
  });

  it("does not apply warning class when count is below 90% of maxLength", () => {
    const { container } = render(<FieldCharacterCount count={89} maxLength={100} />);
    expect(container.firstChild).not.toHaveClass(styles.warning);
  });

  it("does not apply warning class when count exceeds maxLength (error takes over)", () => {
    const { container } = render(<FieldCharacterCount count={101} maxLength={100} />);
    expect(container.firstChild).not.toHaveClass(styles.warning);
    expect(container.firstChild).toHaveClass(styles.error);
  });

  // ── Accessibility ─────────────────────────────────────────────────────────

  it("has aria-live set to polite", () => {
    const { container } = render(<FieldCharacterCount count={10} maxLength={50} />);
    expect(container.firstChild).toHaveAttribute("aria-live", "polite");
  });
});

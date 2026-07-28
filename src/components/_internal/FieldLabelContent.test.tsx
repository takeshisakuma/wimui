import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FieldLabelContent } from "./FieldLabelContent";
import styles from "./field-label-content.module.scss";

describe("FieldLabelContent", () => {
  it("renders the label text", () => {
    render(<FieldLabelContent label="Name" />);
    expect(screen.getByText("Name")).toBeInTheDocument();
  });

  it("shows required badge when required is true", () => {
    const { container } = render(<FieldLabelContent label="Name" required />);
    expect(container.querySelector(`.${styles.badge}`)).toBeInTheDocument();
    expect(screen.getByText("Required")).toBeInTheDocument();
  });

  it("does not show required badge by default", () => {
    const { container } = render(<FieldLabelContent label="Name" />);
    expect(container.querySelector(`.${styles.badge}`)).not.toBeInTheDocument();
  });

  it("shows optional badge when showOptional is true", () => {
    const { container } = render(<FieldLabelContent label="Name" showOptional />);
    expect(container.querySelector(`.${styles.badge}`)).toBeInTheDocument();
    expect(screen.getByText("Optional")).toBeInTheDocument();
  });

  it("does not show optional badge by default", () => {
    const { container } = render(<FieldLabelContent label="Name" />);
    expect(container.querySelector(`.${styles.badge}`)).not.toBeInTheDocument();
  });

  it("required badge has aria-hidden to avoid screen reader duplication", () => {
    const { container } = render(<FieldLabelContent label="Name" required />);
    expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument();
  });

  it("required takes priority over showOptional", () => {
    render(<FieldLabelContent label="Name" required showOptional />);
    expect(screen.getByText("Required")).toBeInTheDocument();
    expect(screen.queryByText("Optional")).not.toBeInTheDocument();
  });

  it("uses custom requiredLabel when provided", () => {
    render(<FieldLabelContent label="Name" required requiredLabel="必須" />);
    expect(screen.getByText("必須")).toBeInTheDocument();
  });

  // 塗りの danger だと、必須項目の多いフォームでは何も間違えていない状態で
  // ページ中がエラー色になり、実際のエラーと同じ色なので区別が消える。
  // 語は残し、塗りだけをやめる。
  it("marks required with a subtle badge, not a filled one", () => {
    const { container } = render(<FieldLabelContent label="Name" required />);
    const badge = container.querySelector(".wim-badge")!;

    expect(badge.className).toContain("subtle");
    expect(badge.className).not.toContain("solid");
    // 語そのものは残っている（アスタリスクに置き換えたわけではない）
    expect(badge).toHaveTextContent("Required");
  });

  it("still uses the danger intent, so required is not mistaken for optional", () => {
    const { container } = render(<FieldLabelContent label="Name" required />);
    expect(container.querySelector(".wim-badge")!.className).toContain("danger");
  });
});

import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { FeedbackCloseButton } from "./FeedbackCloseButton";

describe("FeedbackCloseButton", () => {
  it("renders nothing when onClose is not provided", () => {
    const { container } = render(<FeedbackCloseButton />);
    expect(container.firstChild).toBeNull();
  });

  it("renders a button when onClose is provided", () => {
    render(<FeedbackCloseButton onClose={() => {}} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("calls onClose with id when clicked", () => {
    const onClose = vi.fn();
    render(<FeedbackCloseButton onClose={onClose} id="toast-1" />);
    fireEvent.click(screen.getByRole("button"));
    expect(onClose).toHaveBeenCalledWith("toast-1");
  });

  it("calls onClose with undefined when id is not provided", () => {
    const onClose = vi.fn();
    render(<FeedbackCloseButton onClose={onClose} />);
    fireEvent.click(screen.getByRole("button"));
    expect(onClose).toHaveBeenCalledWith(undefined);
  });

  it("stops event propagation when clicked", () => {
    const parentClick = vi.fn();
    render(
      <button type="button" onClick={parentClick}>
        <FeedbackCloseButton onClose={() => {}} />
      </button>,
    );
    fireEvent.click(screen.getByRole("button", { name: "Close" }));
    expect(parentClick).not.toHaveBeenCalled();
  });

  it("applies custom className", () => {
    render(<FeedbackCloseButton onClose={() => {}} className="custom-close" />);
    expect(screen.getByRole("button")).toHaveClass("custom-close");
  });

  it("translates the default ariaLabel key for aria-label", () => {
    render(<FeedbackCloseButton onClose={() => {}} />);
    // t("a11y_close") → "Close" from loaded translations
    expect(screen.getByRole("button")).toHaveAttribute("aria-label", "Close");
  });

  it("translates a custom ariaLabel key for aria-label", () => {
    // Pass a key that exists in translations or falls back to the key itself
    render(<FeedbackCloseButton onClose={() => {}} ariaLabel="a11y_close" />);
    expect(screen.getByRole("button")).toHaveAttribute("aria-label", "Close");
  });
});

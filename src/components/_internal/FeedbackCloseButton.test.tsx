import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { FeedbackCloseButton } from "./FeedbackCloseButton";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({
    t: (key: string) => (key === "a11y.close" ? "Close" : key),
  }),
}));

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
      /* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
      <div onClick={parentClick}>
        <FeedbackCloseButton onClose={() => {}} />
      </div>,
    );
    fireEvent.click(screen.getByRole("button", { name: "Close" }));
    expect(parentClick).not.toHaveBeenCalled();
  });

  it("applies custom className", () => {
    render(<FeedbackCloseButton onClose={() => {}} className="custom-close" />);
    expect(screen.getByRole("button")).toHaveClass("custom-close");
  });

  it("uses the default aria-label 'Close'", () => {
    render(<FeedbackCloseButton onClose={() => {}} />);
    expect(screen.getByRole("button")).toHaveAttribute("aria-label", "Close");
  });

  it("uses a custom aria-label value", () => {
    render(<FeedbackCloseButton onClose={() => {}} ariaLabel="Custom Close" />);
    expect(screen.getByRole("button")).toHaveAttribute("aria-label", "Custom Close");
  });
});


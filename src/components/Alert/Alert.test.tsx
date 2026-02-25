import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Alert } from "./Alert";

// Mock Icon
vi.mock("../Icon/Icon", () => ({
  Icon: ({ name }: { name: string }) => <span data-testid="icon">{name}</span>,
}));

// Mock useTranslation
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (str: string) => str,
  }),
}));

describe("Alert", () => {
  it("renders title and description", () => {
    render(<Alert title="Test Title" description="Test Description" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  it("renders children as description", () => {
    render(<Alert>Child content</Alert>);
    expect(screen.getByText("Child content")).toBeInTheDocument();
  });

  it("applies variant class", () => {
    const { container } = render(<Alert variant="error" title="Error" />);
    expect(container.firstChild).toHaveClass("wim-alert--error");
  });

  it("renders close button when onClose provided", () => {
    const handleClose = vi.fn();
    render(<Alert title="Closable" onClose={handleClose} />);

    const closeBtn = screen.getByLabelText("Close");
    expect(closeBtn).toBeInTheDocument();

    fireEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalled();
  });

  it("renders custom icon", () => {
    render(
      <Alert
        title="Custom Icon"
        icon={<span data-testid="custom-icon">Icon</span>}
      />,
    );
    expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
  });
});

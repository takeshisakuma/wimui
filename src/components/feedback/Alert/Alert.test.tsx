import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Alert } from "./Alert";

// Mock Icon
vi.mock("../../media/Icon/Icon", () => ({
  Icon: ({ name }: { name: string }) => <span data-testid="icon">{name}</span>,
}));

// Mock useTranslation
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

  it("applies status class", () => {
    const { container } = render(<Alert intent="danger" title="Error" />);
    expect(container.firstChild).toHaveClass(/danger/);
  });

  it("renders close button when onClose provided", () => {
    const handleClose = vi.fn();
    render(<Alert title="Closable" onClose={handleClose} />);

    const closeBtn = screen.getByLabelText(/Close/i);
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

  it("closes without onClose callback (no error)", () => {
    render(<Alert title="No callback" />);
    // Close button only renders when onClose is provided - if not, alert is not closable
    // This just verifies the component renders without issue
    expect(screen.getByText("No callback")).toBeInTheDocument();
  });

  it("renders title with specified tag", () => {
    render(<Alert title="Heading 2" titleTag="h2" />);
    const heading = screen.getByText("Heading 2");
    expect(heading.tagName).toBe("H2");
  });

  // 見出しにすると h2 の下に置いただけで heading-order（moderate）に落ちる。
  // アラートは文書のセクションではないので、既定では見出しにしない。
  it("does not put its title in the heading outline by default", () => {
    render(<Alert title="Something happened" />);
    const title = screen.getByText("Something happened");

    expect(title.tagName).toBe("DIV");
    expect(screen.queryByRole("heading")).toBeNull();
  });

  it("accepts a non-heading tag other than the default", () => {
    render(<Alert title="Notice" titleTag="p" />);
    expect(screen.getByText("Notice").tagName).toBe("P");
  });

  it("still becomes a heading when one is asked for", () => {
    render(<Alert title="Section" titleTag="h3" />);
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent("Section");
  });
});

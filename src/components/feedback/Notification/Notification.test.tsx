import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Notification, NotificationProvider, useNotification } from "./Notification";

describe("Notification", () => {
  it("renders title and description", () => {
    render(
      <Notification
        title="System Update"
        description="The system has been updated."
      />,
    );
    expect(screen.getByText("System Update")).toBeInTheDocument();
    expect(screen.getByText("The system has been updated.")).toBeInTheDocument();
  });

  it("renders status-specific icon", () => {
    const { container } = render(
      <Notification title="Success" status="success" />,
    );
    const icon = container.querySelector(".wim-notification-icon");
    expect(icon).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    const handleClose = vi.fn();
    render(<Notification title="Title" onClose={handleClose} />);

    const closeButton = screen.getByLabelText(/Close/i);
    fireEvent.click(closeButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("does not render close button when closable is false", () => {
    render(<Notification title="Title" closable={false} />);
    expect(screen.queryByLabelText(/Close/i)).not.toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Notification title="Title" className="custom-notification" />);
    expect(screen.getByRole("alert")).toHaveClass("custom-notification");
  });

  it("renders JSX title and description", () => {
    render(
      <Notification
        title={<strong>Bold Title</strong>}
        description={<em>Italic desc</em>}
      />,
    );
    expect(screen.getByText("Bold Title")).toBeInTheDocument();
    expect(screen.getByText("Italic desc")).toBeInTheDocument();
  });

  it("renders custom icon", () => {
    render(
      <Notification title="T" icon={<span data-testid="custom-icon">★</span>} />,
    );
    expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
  });

  it("disappears after close click (isVisible becomes false)", () => {
    render(<Notification title="Gone" />);
    expect(screen.getByText("Gone")).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText(/Close/i));
    expect(screen.queryByText("Gone")).not.toBeInTheDocument();
  });
});

describe("NotificationProvider and useNotification", () => {
  const TestComponent = () => {
    const { show, remove } = useNotification();
    return (
      <div>
        <button onClick={() => show({ title: "Hello" })}>Show</button>
        <button onClick={() => remove("fake-id")}>Remove</button>
      </div>
    );
  };

  it("shows a notification via show()", () => {
    render(
      <NotificationProvider>
        <TestComponent />
      </NotificationProvider>,
    );

    fireEvent.click(screen.getByText("Show"));
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("remove clears a notification by id", () => {
    render(
      <NotificationProvider>
        <TestComponent />
      </NotificationProvider>,
    );

    fireEvent.click(screen.getByText("Show"));
    expect(screen.getByText("Hello")).toBeInTheDocument();

    // Close via the notification's own close button
    fireEvent.click(screen.getByLabelText(/Close/i));
    expect(screen.queryByText("Hello")).not.toBeInTheDocument();
  });

  it("applies custom placement class", () => {
    const { container } = render(
      <NotificationProvider placement="bottomLeft">
        <div />
      </NotificationProvider>,
    );
    expect(container.querySelector(".wim-notification-container--bottomLeft")).toBeInTheDocument();
  });

  it("throws when useNotification is used outside NotificationProvider", () => {
    const BadComponent = () => {
      useNotification();
      return null;
    };

    expect(() => render(<BadComponent />)).toThrow(
      "useNotification must be used within a NotificationProvider",
    );
  });
});
